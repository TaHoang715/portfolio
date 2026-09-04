import React, { useRef, useState, useEffect, Suspense, Component, ErrorInfo, ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

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
    console.warn('Fallback to procedural Arlecchino avatar:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function StylizedArlecchino({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const headRef = useRef<THREE.Group>(null!);
  const haloRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.damp(headRef.current.rotation.y, mouse.current.x * 0.7, 6, delta);
      headRef.current.rotation.x = THREE.MathUtils.damp(headRef.current.rotation.x, -mouse.current.y * 0.4, 6, delta);
    }
    if (haloRef.current) {
      haloRef.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <group position={[0, -0.3, 0]}>
      {/* Balemoon Crimson Halo */}
      <group ref={haloRef} position={[0, 0.4, -0.6]}>
        <mesh>
          <torusGeometry args={[1.5, 0.045, 16, 100]} />
          <meshStandardMaterial color="#e11d48" emissive="#ff0044" emissiveIntensity={2.0} roughness={0.2} metalness={0.8} />
        </mesh>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.75, 0.018, 16, 100]} />
          <meshStandardMaterial color="#cbacf9" emissive="#8e75ff" emissiveIntensity={1.4} roughness={0.3} />
        </mesh>
      </group>

      {/* Torso & Formal High-Collar Coat */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.42, 0.55, 1.2, 32]} />
        <meshStandardMaterial color="#0b0f24" roughness={0.3} metalness={0.4} />
      </mesh>

      {/* White/Silver Coat Lapels */}
      <mesh position={[0, -0.2, 0.15]}>
        <boxGeometry args={[0.4, 0.9, 0.25]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.2} metalness={0.2} />
      </mesh>

      {/* Crimson Core Gem / Harbinger Brooch */}
      <mesh position={[0, 0.05, 0.32]}>
        <octahedronGeometry args={[0.12, 0]} />
        <meshStandardMaterial color="#ef4444" emissive="#ff1e56" emissiveIntensity={2.5} roughness={0.1} metalness={0.9} />
      </mesh>

      {/* Head Group */}
      <group ref={headRef} position={[0, 0.65, 0]}>
        {/* Face */}
        <mesh position={[0, 0, 0.05]}>
          <sphereGeometry args={[0.34, 32, 32]} />
          <meshStandardMaterial color="#ffe4e6" roughness={0.5} metalness={0.05} />
        </mesh>

        {/* Silver & Black Hair */}
        <mesh position={[0, 0.12, -0.05]}>
          <sphereGeometry args={[0.39, 32, 32]} />
          <meshStandardMaterial color="#e2e8f0" roughness={0.4} metalness={0.1} />
        </mesh>

        <mesh position={[0, 0.22, 0.22]} rotation={[0.4, 0, 0]}>
          <coneGeometry args={[0.36, 0.45, 16]} />
          <meshStandardMaterial color="#cbd5e1" roughness={0.3} />
        </mesh>

        {/* Glowing Crimson Eyes */}
        <mesh position={[-0.11, 0.02, 0.34]}>
          <planeGeometry args={[0.08, 0.08]} />
          <meshBasicMaterial color="#ef4444" />
        </mesh>
        <mesh position={[0.11, 0.02, 0.34]}>
          <planeGeometry args={[0.08, 0.08]} />
          <meshBasicMaterial color="#ef4444" />
        </mesh>
      </group>

      {/* Coat Tails / Claws */}
      <mesh position={[-0.65, -0.15, -0.05]} rotation={[0, 0, -0.25]}>
        <boxGeometry args={[0.26, 0.85, 0.32]} />
        <meshStandardMaterial color="#020617" roughness={0.3} />
      </mesh>
      <mesh position={[0.65, -0.15, -0.05]} rotation={[0, 0, 0.25]}>
        <boxGeometry args={[0.26, 0.85, 0.32]} />
        <meshStandardMaterial color="#020617" roughness={0.3} />
      </mesh>

      <Sparkles count={45} scale={2.5} size={3.5} speed={0.6} color="#e11d48" />
    </group>
  );
}

function ExternalModel({ url, mouse }: { url: string; mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (!modelRef.current) return;
    modelRef.current.rotation.y = THREE.MathUtils.damp(modelRef.current.rotation.y, mouse.current.x * 0.5, 4, delta);
    modelRef.current.rotation.x = THREE.MathUtils.damp(modelRef.current.rotation.x, -mouse.current.y * 0.3, 4, delta);
  });

  return <primitive ref={modelRef} object={scene} scale={1.8} position={[0, -1.8, 0]} />;
}

function SceneInner() {
  const mouse = useRef({ x: 0, y: 0 });
  const [modelAvailable, setModelAvailable] = useState(false);

  useEffect(() => {
    fetch('/models/arlecchino.glb')
      .then((res) => {
        const type = res.headers.get('content-type') || '';
        if (res.ok && !type.includes('text/html')) {
          setModelAvailable(true);
        }
      })
      .catch(() => setModelAvailable(false));

    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 5, 5]} intensity={1.5} color="#fef08a" />
      <spotLight position={[-5, 4, -3]} intensity={3.5} color="#e11d48" angle={0.7} penumbra={0.9} />
      <pointLight position={[0, -3, 3]} intensity={1.2} color="#cbacf9" />

      <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <ModelErrorBoundary fallback={<StylizedArlecchino mouse={mouse} />}>
          <Suspense fallback={<StylizedArlecchino mouse={mouse} />}>
            {modelAvailable ? (
              <ExternalModel url="/models/arlecchino.glb" mouse={mouse} />
            ) : (
              <StylizedArlecchino mouse={mouse} />
            )}
          </Suspense>
        </ModelErrorBoundary>
      </Float>
    </>
  );
}

export const ArlecchinoCanvas: React.FC<{ height?: string }> = ({ height = '360px' }) => {
  return (
    <div style={{ width: '100%', height, position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0.2, 4.2], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <SceneInner />
      </Canvas>
    </div>
  );
};
