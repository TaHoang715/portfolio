import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 1. Three.js Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07090e, 0.018);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 16, 42);
    camera.lookAt(0, -2, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 2. High-res Glowing Point Sprite Texture
    const createParticleTexture = () => {
      const texCanvas = document.createElement('canvas');
      texCanvas.width = 64;
      texCanvas.height = 64;
      const ctx = texCanvas.getContext('2d');
      if (ctx) {
        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(0.2, 'rgba(0, 242, 254, 0.95)');
        grad.addColorStop(0.55, 'rgba(14, 165, 233, 0.4)');
        grad.addColorStop(1, 'rgba(0, 242, 254, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(32, 32, 30, 0, Math.PI * 2);
        ctx.fill();
      }
      return new THREE.CanvasTexture(texCanvas);
    };

    const particleTexture = createParticleTexture();

    // 3. Cyber Wave Particle Mesh (65 x 65 Grid)
    const AMOUNTX = 65;
    const AMOUNTY = 65;
    const SEPARATION = 2.4;
    const numParticles = AMOUNTX * AMOUNTY;

    const positions = new Float32Array(numParticles * 3);
    const colors = new Float32Array(numParticles * 3);

    let idx = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        // Initial Grid Layout centered at origin
        positions[idx] = (ix - AMOUNTX / 2) * SEPARATION;
        positions[idx + 1] = 0;
        positions[idx + 2] = (iy - AMOUNTY / 2) * SEPARATION;

        // Base color (electric cyan / deep azure)
        colors[idx] = 0.0;
        colors[idx + 1] = 0.85;
        colors[idx + 2] = 1.0;

        idx += 3;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.65,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.92,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const waveMesh = new THREE.Points(geometry, material);
    waveMesh.position.y = -6;
    waveMesh.rotation.x = 0.25; // Tilt forward for perspective depth
    scene.add(waveMesh);

    // 4. Subtle Distant Floating Dust for Spatial Atmosphere
    const dustCount = 450;
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i++) {
      dustPositions[i] = (Math.random() - 0.5) * 120;
    }
    const dustGeom = new THREE.BufferGeometry();
    dustGeom.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.22,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
    });
    const dustParticles = new THREE.Points(dustGeom, dustMat);
    scene.add(dustParticles);

    // 5. Mouse Interactivity & Smooth Camera Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const normX = e.clientX / window.innerWidth - 0.5;
      const normY = -(e.clientY / window.innerHeight - 0.5);

      targetX = normX * 8;
      targetY = normY * 4;

      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty('--spotlight-x', `${e.clientX}px`);
        spotlightRef.current.style.setProperty('--spotlight-y', `${e.clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 6. Animation Loop (Sine waves + Ripple equations)
    let count = 0;
    let animationFrameId: number;

    const animate = () => {
      // Damped camera parallax
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;
      camera.position.x = mouseX;
      camera.position.y = 16 + mouseY * 0.8;
      camera.lookAt(0, -3, 0);

      dustParticles.rotation.y += 0.0003;

      // Update Wave Grid Vertices & Dynamic Height-based Colors
      const pos = geometry.attributes.position.array as Float32Array;
      const col = geometry.attributes.color.array as Float32Array;

      let pIdx = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          // Complex multi-frequency wave equation
          const waveHeight =
            Math.sin((ix + count) * 0.28) * 3.2 +
            Math.sin((iy + count * 0.75) * 0.42) * 3.0 +
            Math.cos((ix * 0.18 + iy * 0.18 + count * 0.6)) * 1.6;

          pos[pIdx + 1] = waveHeight;

          // Normalize height for luminous color ramp
          const normalized = (waveHeight + 7.8) / 15.6; // ~0.0 to 1.0
          const clamped = Math.max(0, Math.min(1, normalized));

          // Crests (high): Glowing white-cyan; Valleys (low): Deep sapphire
          col[pIdx] = clamped > 0.6 ? (clamped - 0.6) * 2.0 : 0.0; // Red (pure bright highlights)
          col[pIdx + 1] = 0.5 + clamped * 0.5;                     // Green (cyan shine)
          col[pIdx + 2] = 0.8 + clamped * 0.2;                     // Blue (deep electric base)

          pIdx += 3;
        }
      }

      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.color.needsUpdate = true;

      count += 0.032; // Smooth, cinematic wave speed

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      dustGeom.dispose();
      dustMat.dispose();
      particleTexture.dispose();
    };
  }, []);

  return (
    <>
      {/* Ambient Top Glow & Spotlight */}
      <div className="cyber-ambient-aura" aria-hidden="true" />
      <div ref={spotlightRef} className="mouse-spotlight" aria-hidden="true" />

      {/* 3D Cyber Wave Mesh Canvas */}
      <div className="background-container">
        <canvas ref={canvasRef} id="bg-canvas" />
      </div>

      {/* Sleek coordinate grid overlay */}
      <div className="grid-overlay" />
    </>
  );
};
