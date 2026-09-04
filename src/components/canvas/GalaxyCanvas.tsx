import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function CosmicStars() {
  const pointsRef = useRef<THREE.Points>(null!);
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // 3,200 galaxy particles
  const count = 3200;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    // Color palette: Gold, White, Cosmic Blue, and subtle Arlecchino Crimson
    const palette = [
      new THREE.Color('#fbbf24'), // Gold
      new THREE.Color('#ffffff'), // White
      new THREE.Color('#fef08a'), // Warm Gold
      new THREE.Color('#38bdf8'), // Cosmic Cyan/Blue
      new THREE.Color('#e11d48'), // Crimson Dust
    ];

    for (let i = 0; i < count; i++) {
      // Cylindrical/spherical galaxy distribution with spiral arms
      const radius = Math.random() * 25 + 2;
      const spinAngle = radius * 0.45;
      const branchAngle = ((i % 3) * (2 * Math.PI)) / 3;

      const randomX = (Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.8) * radius;
      const randomY = (Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.8) * radius;
      const randomZ = (Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.8) * radius;

      pos[i * 3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      pos[i * 3 + 1] = randomY * 1.5;
      pos[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ - 5;

      const chosenColor = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return [pos, col];
  }, [count]);

  React.useEffect(() => {
    const handlePointerMove = (e: MouseEvent) => {
      mouse.current.targetX = (e.clientX / window.innerWidth - 0.5) * 0.8;
      mouse.current.targetY = (e.clientY / window.innerHeight - 0.5) * 0.8;
    };

    window.addEventListener('mousemove', handlePointerMove);
    return () => window.removeEventListener('mousemove', handlePointerMove);
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;

    // Organic slow rotation
    pointsRef.current.rotation.y += delta * 0.04;
    pointsRef.current.rotation.x += delta * 0.015;

    // Smooth mouse parallax interpolation
    mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.05;
    mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.05;

    pointsRef.current.position.x = mouse.current.x * 2.5;
    pointsRef.current.position.y = -mouse.current.y * 2.5;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.85}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export const GalaxyCanvas: React.FC = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.5} />
        <CosmicStars />
      </Canvas>
    </div>
  );
};
