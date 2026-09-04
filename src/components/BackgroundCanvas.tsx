import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 1. Three.js Scene Setup
    const scene = new THREE.Scene();
    // Very gentle atmospheric fog that does NOT crush particle visibility
    scene.fog = new THREE.FogExp2(0x07090e, 0.006);

    const camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 10, 42);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 2. High-Res Circular Glowing Particle Texture
    const createParticleTexture = () => {
      const texCanvas = document.createElement('canvas');
      texCanvas.width = 64;
      texCanvas.height = 64;
      const ctx = texCanvas.getContext('2d');
      if (ctx) {
        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(0.25, 'rgba(0, 242, 254, 0.95)');
        grad.addColorStop(0.6, 'rgba(14, 165, 233, 0.45)');
        grad.addColorStop(1, 'rgba(0, 242, 254, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(32, 32, 30, 0, Math.PI * 2);
        ctx.fill();
      }
      return new THREE.CanvasTexture(texCanvas);
    };

    const particleTexture = createParticleTexture();

    // 3. FULL-SCREEN 3D SPACE STARFIELD (3,200 Stars enveloping entire viewport)
    const starsCount = 3200;
    const starsPositions = new Float32Array(starsCount * 3);
    const starsColors = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount; i++) {
      const i3 = i * 3;
      starsPositions[i3] = (Math.random() - 0.5) * 160;
      starsPositions[i3 + 1] = (Math.random() - 0.5) * 140;
      starsPositions[i3 + 2] = (Math.random() - 0.5) * 120;

      // Color variation: 70% Electric Cyan, 30% Pure White
      const isWhite = Math.random() > 0.7;
      if (isWhite) {
        starsColors[i3] = 1.0;
        starsColors[i3 + 1] = 1.0;
        starsColors[i3 + 2] = 1.0;
      } else {
        starsColors[i3] = 0.0;
        starsColors[i3 + 1] = 0.9 + Math.random() * 0.1;
        starsColors[i3 + 2] = 1.0;
      }
    }

    const starsGeom = new THREE.BufferGeometry();
    starsGeom.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
    starsGeom.setAttribute('color', new THREE.BufferAttribute(starsColors, 3));

    const starsMat = new THREE.PointsMaterial({
      size: 0.75,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const starsMesh = new THREE.Points(starsGeom, starsMat);
    scene.add(starsMesh);

    // 4. VIVID 3D CYBER UNDULATING WAVE MESH (70 x 70 = 4,900 points)
    const GRID_X = 70;
    const GRID_Z = 70;
    const SPACING_X = 2.4;
    const SPACING_Z = 2.4;
    const waveCount = GRID_X * GRID_Z;

    const wavePositions = new Float32Array(waveCount * 3);
    const waveColors = new Float32Array(waveCount * 3);

    let wIdx = 0;
    for (let ix = 0; ix < GRID_X; ix++) {
      for (let iz = 0; iz < GRID_Z; iz++) {
        wavePositions[wIdx] = (ix - GRID_X / 2) * SPACING_X;
        wavePositions[wIdx + 1] = 0;
        wavePositions[wIdx + 2] = (iz - GRID_Z / 2) * SPACING_Z;

        waveColors[wIdx] = 0.0;
        waveColors[wIdx + 1] = 0.9;
        waveColors[wIdx + 2] = 1.0;

        wIdx += 3;
      }
    }

    const waveGeom = new THREE.BufferGeometry();
    waveGeom.setAttribute('position', new THREE.BufferAttribute(wavePositions, 3));
    waveGeom.setAttribute('color', new THREE.BufferAttribute(waveColors, 3));

    const waveMat = new THREE.PointsMaterial({
      size: 1.05,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const waveMesh = new THREE.Points(waveGeom, waveMat);
    waveMesh.position.set(0, -10, -5);
    waveMesh.rotation.x = 0.35; // Perspective slope
    scene.add(waveMesh);

    // 5. FLOATING 3D CYBER GEOMETRIC WIREFRAMES (Subtle futuristic depth accents)
    const wireGeom1 = new THREE.IcosahedronGeometry(12, 1);
    const wireMat1 = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const wireMesh1 = new THREE.Mesh(wireGeom1, wireMat1);
    wireMesh1.position.set(-35, 12, -25);
    scene.add(wireMesh1);

    const wireGeom2 = new THREE.OctahedronGeometry(9, 0);
    const wireMat2 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const wireMesh2 = new THREE.Mesh(wireGeom2, wireMat2);
    wireMesh2.position.set(38, -6, -20);
    scene.add(wireMesh2);

    // 6. Mouse Tracking & Smooth Damped Coordinates
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const normX = e.clientX / window.innerWidth - 0.5;
      const normY = -(e.clientY / window.innerHeight - 0.5);

      targetMouseX = normX * 10;
      targetMouseY = normY * 6;

      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty('--spotlight-x', `${e.clientX}px`);
        spotlightRef.current.style.setProperty('--spotlight-y', `${e.clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 7. Scroll Tracking for 3D Camera Depth Progression
    let scrollProgress = 0;
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        scrollProgress = window.scrollY / totalScroll;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 8. High-Performance Render Loop
    let count = 0;
    let animationFrameId: number;

    const animate = () => {
      count += 0.026;

      // Smooth camera interpolation (parallax + scroll glide)
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      camera.position.x = currentMouseX;
      camera.position.y = 10 + currentMouseY + scrollProgress * -4;
      camera.position.z = 42 - scrollProgress * 12; // Gently flies closer in 3D as user scrolls
      camera.lookAt(0, -2 + scrollProgress * -3, 0);

      // Rotate star universe
      starsMesh.rotation.y += 0.0003;
      starsMesh.rotation.x += 0.00015;

      // Rotate geometric wireframes
      wireMesh1.rotation.x += 0.003;
      wireMesh1.rotation.y += 0.004;
      wireMesh2.rotation.x -= 0.004;
      wireMesh2.rotation.z += 0.003;

      // Dynamic 3D Wave Calculation
      const pos = waveGeom.attributes.position.array as Float32Array;
      const col = waveGeom.attributes.color.array as Float32Array;

      let pIdx = 0;
      for (let ix = 0; ix < GRID_X; ix++) {
        for (let iz = 0; iz < GRID_Z; iz++) {
          // Trigonometric wave formula with cross-harmonic ripples
          const waveHeight =
            Math.sin(ix * 0.28 + count) * 3.4 +
            Math.sin(iz * 0.32 + count * 0.85) * 3.0 +
            Math.cos((ix * 0.16 + iz * 0.16 + count * 0.5)) * 2.2;

          pos[pIdx + 1] = waveHeight;

          // Normalize height for luminous color gradation
          const normalized = (waveHeight + 8.6) / 17.2;
          const clamped = Math.max(0, Math.min(1, normalized));

          // Crests: pure white-hot cyan glow; Valleys: deep azure
          col[pIdx] = clamped > 0.55 ? (clamped - 0.55) * 2.2 : 0.0; // Red highlight
          col[pIdx + 1] = 0.6 + clamped * 0.4;                       // Vibrant cyan green
          col[pIdx + 2] = 0.9 + clamped * 0.1;                       // Blue base

          pIdx += 3;
        }
      }

      waveGeom.attributes.position.needsUpdate = true;
      waveGeom.attributes.color.needsUpdate = true;

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
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      renderer.dispose();
      starsGeom.dispose();
      starsMat.dispose();
      waveGeom.dispose();
      waveMat.dispose();
      wireGeom1.dispose();
      wireMat1.dispose();
      wireGeom2.dispose();
      wireMat2.dispose();
      particleTexture.dispose();
    };
  }, []);

  return (
    <>
      {/* Dynamic Ambient Glow Behind 3D Mesh */}
      <div className="cyber-ambient-aura" aria-hidden="true" />
      <div ref={spotlightRef} className="mouse-spotlight" aria-hidden="true" />

      {/* 3D WebGL Space Canvas */}
      <div className="background-container">
        <canvas ref={canvasRef} id="bg-canvas" />
      </div>

      {/* Subtle Coordinate Grid Overlay */}
      <div className="grid-overlay" aria-hidden="true" />
    </>
  );
};
