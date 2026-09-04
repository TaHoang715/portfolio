import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 1. Constellation Star Field
    const particleCount = 200;
    const maxDistance = 14;
    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      velocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.01,
      });
    }

    const particlesGeom = new THREE.BufferGeometry();
    particlesGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Circular glowing star texture
    const starTexCanvas = document.createElement('canvas');
    starTexCanvas.width = 64;
    starTexCanvas.height = 64;
    const ctx = starTexCanvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.2, 'rgba(0, 242, 254, 0.9)');
      grad.addColorStop(0.6, 'rgba(14, 165, 233, 0.4)');
      grad.addColorStop(1, 'rgba(0, 242, 254, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(32, 32, 30, 0, Math.PI * 2);
      ctx.fill();
    }
    const starTexture = new THREE.CanvasTexture(starTexCanvas);

    const particlesMat = new THREE.PointsMaterial({
      color: 0x00f2fe,
      size: 0.7,
      map: starTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particlesGeom, particlesMat);
    scene.add(particleSystem);

    // 2. Background Deep Star Dust (Distant tiny stars)
    const dustCount = 1200;
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i++) {
      dustPositions[i] = (Math.random() - 0.5) * 160;
    }
    const dustGeom = new THREE.BufferGeometry();
    dustGeom.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));

    const dustMat = new THREE.PointsMaterial({
      color: 0xa5f3fc,
      size: 0.25,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
    });
    const dustSystem = new THREE.Points(dustGeom, dustMat);
    scene.add(dustSystem);

    // 3. Dynamic Connection Lines
    const maxLineSegments = particleCount * particleCount;
    const linePositions = new Float32Array(maxLineSegments * 6);
    const lineColors = new Float32Array(maxLineSegments * 6);

    const linesGeom = new THREE.BufferGeometry();
    linesGeom.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    linesGeom.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const linesMat = new THREE.LineSegments(
      linesGeom,
      new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    scene.add(linesMat);

    camera.position.z = 32;

    // Mouse Tracking & Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      targetX = (clientX / window.innerWidth - 0.5) * 4;
      targetY = -(clientY / window.innerHeight - 0.5) * 4;

      // Update spotlight position
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty('--spotlight-x', `${clientX}px`);
        spotlightRef.current.style.setProperty('--spotlight-y', `${clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      // Smooth camera parallax
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;
      camera.position.x = mouseX * 2;
      camera.position.y = mouseY * 2;
      camera.lookAt(scene.position);

      // Rotate dust slowly
      dustSystem.rotation.y += 0.0003;
      dustSystem.rotation.x += 0.0001;

      // Update Constellation particles
      const pos = particlesGeom.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3] += velocities[i].x;
        pos[i * 3 + 1] += velocities[i].y;
        pos[i * 3 + 2] += velocities[i].z;

        // Bounce boundaries
        if (pos[i * 3] < -40 || pos[i * 3] > 40) velocities[i].x *= -1;
        if (pos[i * 3 + 1] < -30 || pos[i * 3 + 1] > 30) velocities[i].y *= -1;
        if (pos[i * 3 + 2] < -20 || pos[i * 3 + 2] > 20) velocities[i].z *= -1;
      }
      particlesGeom.attributes.position.needsUpdate = true;

      // Connect nearby particles with luminous lines
      let lineVertexIndex = 0;
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            const alpha = 1.0 - dist / maxDistance;

            linePositions[lineVertexIndex * 3] = pos[i * 3];
            linePositions[lineVertexIndex * 3 + 1] = pos[i * 3 + 1];
            linePositions[lineVertexIndex * 3 + 2] = pos[i * 3 + 2];

            lineColors[lineVertexIndex * 3] = 0.0;
            lineColors[lineVertexIndex * 3 + 1] = 0.95 * alpha;
            lineColors[lineVertexIndex * 3 + 2] = 1.0 * alpha;

            lineVertexIndex++;

            linePositions[lineVertexIndex * 3] = pos[j * 3];
            linePositions[lineVertexIndex * 3 + 1] = pos[j * 3 + 1];
            linePositions[lineVertexIndex * 3 + 2] = pos[j * 3 + 2];

            lineColors[lineVertexIndex * 3] = 0.0;
            lineColors[lineVertexIndex * 3 + 1] = 0.95 * alpha;
            lineColors[lineVertexIndex * 3 + 2] = 1.0 * alpha;

            lineVertexIndex++;
          }
        }
      }

      linesGeom.setDrawRange(0, lineVertexIndex);
      linesGeom.attributes.position.needsUpdate = true;
      linesGeom.attributes.color.needsUpdate = true;

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
      particlesGeom.dispose();
      particlesMat.dispose();
      dustGeom.dispose();
      dustMat.dispose();
      linesGeom.dispose();
    };
  }, []);

  return (
    <>
      {/* Dynamic Cosmic Aurora Atmosphere Orbs */}
      <div className="aurora-container" aria-hidden="true">
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <div className="aurora-orb aurora-orb-3" />
      </div>

      {/* Interactive Flashlight Spotlight */}
      <div ref={spotlightRef} className="mouse-spotlight" aria-hidden="true" />

      {/* 3D Constellation & Starfield Canvas */}
      <div className="background-container">
        <canvas ref={canvasRef} id="bg-canvas" />
      </div>

      {/* Radial Vignette Masked Coordinate Grid */}
      <div className="grid-overlay" />
    </>
  );
};
