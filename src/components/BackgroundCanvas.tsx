import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { usePortfolio } from '../context/PortfolioContext';

export const BackgroundCanvas: React.FC = () => {
  const { bgMode } = usePortfolio();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

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

    // Circular glowing star texture helper
    const createCircleTexture = (colorStop: string) => {
      const texCanvas = document.createElement('canvas');
      texCanvas.width = 64;
      texCanvas.height = 64;
      const ctx = texCanvas.getContext('2d');
      if (ctx) {
        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(0.3, colorStop);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(32, 32, 30, 0, Math.PI * 2);
        ctx.fill();
      }
      return new THREE.CanvasTexture(texCanvas);
    };

    let cleanup = () => {};

    // ──────────────────────────────────────────────
    // MODE 1 & 2: CONSTELLATION & AURORA
    // ──────────────────────────────────────────────
    if (bgMode === 'constellation' || bgMode === 'aurora') {
      const particleCount = bgMode === 'constellation' ? 180 : 120;
      const maxDistance = bgMode === 'constellation' ? 14 : 11;
      const positions = new Float32Array(particleCount * 3);
      const velocities: { x: number; y: number; z: number }[] = [];

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 80;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

        velocities.push({
          x: (Math.random() - 0.5) * 0.025,
          y: (Math.random() - 0.5) * 0.025,
          z: (Math.random() - 0.5) * 0.015,
        });
      }

      const particlesGeom = new THREE.BufferGeometry();
      particlesGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const particlesMat = new THREE.PointsMaterial({
        color: 0x00f2fe,
        size: bgMode === 'constellation' ? 0.75 : 0.6,
        map: createCircleTexture('rgba(0, 242, 254, 0.8)'),
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const particleSystem = new THREE.Points(particlesGeom, particlesMat);
      scene.add(particleSystem);

      // Deep celestial dust
      const dustCount = 800;
      const dustPositions = new Float32Array(dustCount * 3);
      for (let i = 0; i < dustCount * 3; i++) {
        dustPositions[i] = (Math.random() - 0.5) * 160;
      }
      const dustGeom = new THREE.BufferGeometry();
      dustGeom.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
      const dustMat = new THREE.PointsMaterial({
        color: 0x93c5fd,
        size: 0.25,
        transparent: true,
        opacity: 0.5,
        depthWrite: false,
      });
      const dustSystem = new THREE.Points(dustGeom, dustMat);
      scene.add(dustSystem);

      // Lines
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

      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const onMouseMove = (e: MouseEvent) => {
        targetX = (e.clientX / window.innerWidth - 0.5) * 3.5;
        targetY = -(e.clientY / window.innerHeight - 0.5) * 3.5;
        if (spotlightRef.current) {
          spotlightRef.current.style.setProperty('--spotlight-x', `${e.clientX}px`);
          spotlightRef.current.style.setProperty('--spotlight-y', `${e.clientY}px`);
        }
      };
      window.addEventListener('mousemove', onMouseMove);

      let animId: number;
      const animate = () => {
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;
        camera.position.x = mouseX * 2;
        camera.position.y = mouseY * 2;
        camera.lookAt(scene.position);

        dustSystem.rotation.y += 0.0002;

        const pos = particlesGeom.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          pos[i * 3] += velocities[i].x;
          pos[i * 3 + 1] += velocities[i].y;
          pos[i * 3 + 2] += velocities[i].z;

          if (pos[i * 3] < -40 || pos[i * 3] > 40) velocities[i].x *= -1;
          if (pos[i * 3 + 1] < -30 || pos[i * 3 + 1] > 30) velocities[i].y *= -1;
          if (pos[i * 3 + 2] < -20 || pos[i * 3 + 2] > 20) velocities[i].z *= -1;
        }
        particlesGeom.attributes.position.needsUpdate = true;

        let lineIdx = 0;
        for (let i = 0; i < particleCount; i++) {
          for (let j = i + 1; j < particleCount; j++) {
            const dx = pos[i * 3] - pos[j * 3];
            const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
            const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < maxDistance) {
              const alpha = 1.0 - dist / maxDistance;
              linePositions[lineIdx * 3] = pos[i * 3];
              linePositions[lineIdx * 3 + 1] = pos[i * 3 + 1];
              linePositions[lineIdx * 3 + 2] = pos[i * 3 + 2];
              lineColors[lineIdx * 3] = 0.0;
              lineColors[lineIdx * 3 + 1] = 0.95 * alpha;
              lineColors[lineIdx * 3 + 2] = 1.0 * alpha;
              lineIdx++;

              linePositions[lineIdx * 3] = pos[j * 3];
              linePositions[lineIdx * 3 + 1] = pos[j * 3 + 1];
              linePositions[lineIdx * 3 + 2] = pos[j * 3 + 2];
              lineColors[lineIdx * 3] = 0.0;
              lineColors[lineIdx * 3 + 1] = 0.95 * alpha;
              lineColors[lineIdx * 3 + 2] = 1.0 * alpha;
              lineIdx++;
            }
          }
        }
        linesGeom.setDrawRange(0, lineIdx);
        linesGeom.attributes.position.needsUpdate = true;
        linesGeom.attributes.color.needsUpdate = true;

        renderer.render(scene, camera);
        animId = requestAnimationFrame(animate);
      };
      animate();

      cleanup = () => {
        window.removeEventListener('mousemove', onMouseMove);
        cancelAnimationFrame(animId);
        particlesGeom.dispose();
        particlesMat.dispose();
        dustGeom.dispose();
        dustMat.dispose();
        linesGeom.dispose();
        (linesMat.material as THREE.Material).dispose();
      };
    }
    // ──────────────────────────────────────────────
    // MODE 3: CYBER MATRIX WAVE
    // ──────────────────────────────────────────────
    else if (bgMode === 'matrix') {
      const SEPARATION = 3;
      const AMOUNTX = 45;
      const AMOUNTY = 45;
      const numParticles = AMOUNTX * AMOUNTY;

      const positions = new Float32Array(numParticles * 3);
      const scales = new Float32Array(numParticles);

      let i = 0, j = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
          positions[i + 1] = 0;
          positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
          scales[j] = 1;
          i += 3;
          j++;
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({
        color: 0x00f2fe,
        size: 0.45,
        map: createCircleTexture('rgba(0, 242, 254, 0.9)'),
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const waveParticles = new THREE.Points(geometry, material);
      waveParticles.position.y = -8;
      waveParticles.rotation.x = 0.35;
      scene.add(waveParticles);

      camera.position.set(0, 15, 38);
      camera.lookAt(0, -4, 0);

      let count = 0;
      let animId: number;
      const animate = () => {
        const pos = geometry.attributes.position.array as Float32Array;
        let idx = 0;
        for (let ix = 0; ix < AMOUNTX; ix++) {
          for (let iy = 0; iy < AMOUNTY; iy++) {
            pos[idx + 1] =
              Math.sin((ix + count) * 0.3) * 2.5 + Math.sin((iy + count) * 0.4) * 2.5;
            idx += 3;
          }
        }
        geometry.attributes.position.needsUpdate = true;
        count += 0.04;

        renderer.render(scene, camera);
        animId = requestAnimationFrame(animate);
      };
      animate();

      cleanup = () => {
        cancelAnimationFrame(animId);
        geometry.dispose();
        material.dispose();
      };
    }
    // ──────────────────────────────────────────────
    // MODE 4: MINIMAL OBSIDIAN
    // ──────────────────────────────────────────────
    else if (bgMode === 'minimal') {
      const starCount = 400;
      const positions = new Float32Array(starCount * 3);
      for (let i = 0; i < starCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 120;
      }
      const geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const mat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.15,
        transparent: true,
        opacity: 0.35,
      });
      const points = new THREE.Points(geom, mat);
      scene.add(points);

      camera.position.z = 25;

      let animId: number;
      const animate = () => {
        points.rotation.y += 0.0001;
        renderer.render(scene, camera);
        animId = requestAnimationFrame(animate);
      };
      animate();

      cleanup = () => {
        cancelAnimationFrame(animId);
        geom.dispose();
        mat.dispose();
      };
    }

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cleanup();
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, [bgMode]);

  return (
    <>
      {/* Aurora Orbs (Rendered during 'aurora' mode for maximum rich atmosphere) */}
      {bgMode === 'aurora' && (
        <div className="aurora-container" aria-hidden="true">
          <div className="aurora-orb aurora-orb-1" />
          <div className="aurora-orb aurora-orb-2" />
          <div className="aurora-orb aurora-orb-3" />
        </div>
      )}

      {/* Interactive Mouse Spotlight */}
      <div ref={spotlightRef} className="mouse-spotlight" aria-hidden="true" />

      {/* Three.js Canvas */}
      <div className="background-container">
        <canvas ref={canvasRef} id="bg-canvas" />
      </div>

      {/* Subtle Coordinate Grid */}
      <div className={`grid-overlay ${bgMode === 'minimal' ? 'grid-minimal' : ''}`} />
    </>
  );
};
