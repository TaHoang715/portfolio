import React, { useRef, useState, useEffect, Suspense, Component, ErrorInfo, ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Error boundary to catch any GLTF/WebGL loading errors gracefully
interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ModelErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('GLTF Model not found or failed to load. Falling back to Procedural 3D Avatar.', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Procedural Stylized 3D Avatar for Arlecchino (The Knave / 'Father' - Genshin Impact)
function StylizedArlecchino({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null!);
  const headRef = useRef<THREE.Group>(null!);
  const haloRef = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    // Smooth body orientation towards cursor
    const targetRotY = mouse.current.x * 0.45;
    const targetRotX = -mouse.current.y * 0.25;

    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      targetRotY,
      4,
      delta
    );
    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      targetRotX,
      4,
      delta
    );

    // Head tracks cursor with higher precision
    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.damp(
        headRef.current.rotation.y,
        mouse.current.x * 0.65,
        6,
        delta
      );
      headRef.current.rotation.x = THREE.MathUtils.damp(
        headRef.current.rotation.x,
        -mouse.current.y * 0.4,
        6,
        delta
      );
    }

    // Balemoon Halo rotation
    if (haloRef.current) {
      haloRef.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.05 : 1}
    >
      {/* Balemoon Crimson Halo Ring (Arlecchino's Signature Blood Moon Crest) */}
      <group ref={haloRef} position={[0, 0.4, -0.6]}>
        <mesh>
          <torusGeometry args={[1.5, 0.045, 16, 100]} />
          <meshStandardMaterial
            color="#e11d48"
            emissive="#ff0044"
            emissiveIntensity={2.0}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        {/* Secondary Gold Orbital Ring */}
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.75, 0.018, 16, 100]} />
          <meshStandardMaterial
            color="#fbbf24"
            emissive="#f59e0b"
            emissiveIntensity={1.4}
            roughness={0.3}
          />
        </mesh>
      </group>

      {/* Torso & Formal High-Collar Coat */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.42, 0.55, 1.2, 32]} />
        <meshStandardMaterial
          color="#0f172a"
          roughness={0.3}
          metalness={0.4}
        />
      </mesh>

      {/* White/Silver Coat Lapels & Vest Inlay */}
      <mesh position={[0, -0.2, 0.15]}>
        <boxGeometry args={[0.4, 0.9, 0.25]} />
        <meshStandardMaterial
          color="#f8fafc"
          roughness={0.2}
          metalness={0.2}
        />
      </mesh>

      {/* Crimson Core Gem / Harbinger Brooch */}
      <mesh position={[0, 0.05, 0.32]}>
        <octahedronGeometry args={[0.12, 0]} />
        <meshStandardMaterial
          color="#ef4444"
          emissive="#ff1e56"
          emissiveIntensity={2.5}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Head Group */}
      <group ref={headRef} position={[0, 0.65, 0]}>
        {/* Face */}
        <mesh position={[0, 0, 0.05]}>
          <sphereGeometry args={[0.34, 32, 32]} />
          <meshStandardMaterial
            color="#ffe4e6"
            roughness={0.5}
            metalness={0.05}
          />
        </mesh>

        {/* Silver & Black Hair Volume */}
        <mesh position={[0, 0.12, -0.05]}>
          <sphereGeometry args={[0.39, 32, 32]} />
          <meshStandardMaterial
            color="#e2e8f0"
            roughness={0.4}
            metalness={0.1}
          />
        </mesh>

        {/* Hair Fringe */}
        <mesh position={[0, 0.22, 0.22]} rotation={[0.4, 0, 0]}>
          <coneGeometry args={[0.36, 0.45, 16]} />
          <meshStandardMaterial
            color="#cbd5e1"
            roughness={0.3}
          />
        </mesh>

        {/* Glowing Crimson Eyes ('X' Glint) */}
        <mesh position={[-0.11, 0.02, 0.34]}>
          <planeGeometry args={[0.08, 0.08]} />
          <meshBasicMaterial color="#ef4444" />
        </mesh>
        <mesh position={[0.11, 0.02, 0.34]}>
          <planeGeometry args={[0.08, 0.08]} />
          <meshBasicMaterial color="#ef4444" />
        </mesh>
      </group>

      {/* Shoulders & Wing-like Coat Tails */}
      <mesh position={[-0.65, -0.15, -0.05]} rotation={[0, 0, -0.25]}>
        <boxGeometry args={[0.26, 0.85, 0.32]} />
        <meshStandardMaterial color="#020617" roughness={0.3} />
      </mesh>
      <mesh position={[0.65, -0.15, -0.05]} rotation={[0, 0, 0.25]}>
        <boxGeometry args={[0.26, 0.85, 0.32]} />
        <meshStandardMaterial color="#020617" roughness={0.3} />
      </mesh>

      {/* Black and Red Claws Accent */}
      <mesh position={[-0.72, -0.65, 0.1]}>
        <cylinderGeometry args={[0.06, 0.04, 0.3, 16]} />
        <meshStandardMaterial color="#881337" emissive="#e11d48" emissiveIntensity={0.6} />
      </mesh>
      <mesh position={[0.72, -0.65, 0.1]}>
        <cylinderGeometry args={[0.06, 0.04, 0.3, 16]} />
        <meshStandardMaterial color="#881337" emissive="#e11d48" emissiveIntensity={0.6} />
      </mesh>

      {/* Subtle Crimson Embers / Pyro Sparkles */}
      <Sparkles
        count={50}
        scale={2.6}
        size={3.5}
        speed={0.6}
        color="#e11d48"
      />
    </group>
  );
}

// GLTF Model Component
function ExternalGlbModel({ url, mouse }: { url: string; mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (!modelRef.current) return;
    const targetY = mouse.current.x * 0.5;
    const targetX = -mouse.current.y * 0.3;
    modelRef.current.rotation.y = THREE.MathUtils.damp(modelRef.current.rotation.y, targetY, 4, delta);
    modelRef.current.rotation.x = THREE.MathUtils.damp(modelRef.current.rotation.x, targetX, 4, delta);
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={1.8}
      position={[0, -1.8, 0]}
    />
  );
}

function SceneContent() {
  const mouse = useRef({ x: 0, y: 0 });
  const [modelAvailable, setModelAvailable] = useState(false);

  useEffect(() => {
    // Only set modelAvailable if the file actually exists as a binary model, not Vite HTML fallback
    fetch('/models/arlecchino.glb')
      .then((res) => {
        const contentType = res.headers.get('content-type') || '';
        if (res.ok && !contentType.includes('text/html')) {
          setModelAvailable(true);
        } else {
          setModelAvailable(false);
        }
      })
      .catch(() => setModelAvailable(false));

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      <ambientLight intensity={0.9} />
      {/* Key Starlight (Warm Gold) */}
      <directionalLight position={[4, 5, 5]} intensity={1.5} color="#fef08a" />
      {/* Crimson Rim Light (Arlecchino Accent) */}
      <spotLight
        position={[-5, 4, -3]}
        intensity={3.5}
        color="#e11d48"
        angle={0.7}
        penumbra={0.9}
      />
      {/* Blue Cosmic Fill Light */}
      <pointLight position={[0, -3, 3]} intensity={1.2} color="#38bdf8" />

      <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.6}>
        <ModelErrorBoundary fallback={<StylizedArlecchino mouse={mouse} />}>
          <Suspense fallback={<StylizedArlecchino mouse={mouse} />}>
            {modelAvailable ? (
              <ExternalGlbModel url="/models/arlecchino.glb" mouse={mouse} />
            ) : (
              <StylizedArlecchino mouse={mouse} />
            )}
          </Suspense>
        </ModelErrorBoundary>
      </Float>
    </>
  );
}

export const CharacterScene: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '440px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Canvas
        camera={{ position: [0, 0.2, 4.2], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
};
