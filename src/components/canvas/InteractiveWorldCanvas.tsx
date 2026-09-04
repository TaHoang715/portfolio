import React, { useRef, useState, useEffect, Suspense, Component, ErrorInfo, ReactNode, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sparkles, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { initCharacterScroll } from '../../utils/scrollTimeline';

// Error Boundary for external model loading
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

// 3D Cosmic Starfield Particles
function CosmicStars() {
  const pointsRef = useRef<THREE.Points>(null!);
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const count = 3000;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const palette = [
      new THREE.Color('#fbbf24'),
      new THREE.Color('#ffffff'),
      new THREE.Color('#fef08a'),
      new THREE.Color('#38bdf8'),
      new THREE.Color('#e11d48'),
    ];

    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 26 + 2;
      const spinAngle = radius * 0.45;
      const branchAngle = ((i % 3) * (2 * Math.PI)) / 3;

      const randomX = (Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.8) * radius;
      const randomY = (Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.8) * radius;
      const randomZ = (Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.8) * radius;

      pos[i * 3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      pos[i * 3 + 1] = randomY * 1.5;
      pos[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ - 4;

      const chosenColor = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return [pos, col];
  }, [count]);

  useEffect(() => {
    const handlePointerMove = (e: MouseEvent) => {
      mouse.current.targetX = (e.clientX / window.innerWidth - 0.5) * 0.8;
      mouse.current.targetY = (e.clientY / window.innerHeight - 0.5) * 0.8;
    };
    window.addEventListener('mousemove', handlePointerMove);
    return () => window.removeEventListener('mousemove', handlePointerMove);
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.03;
    pointsRef.current.rotation.x += delta * 0.01;

    mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.05;
    mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.05;

    pointsRef.current.position.x = mouse.current.x * 2.2;
    pointsRef.current.position.y = -mouse.current.y * 2.2;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.065} vertexColors transparent opacity={0.85} blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  );
}

// Procedural Arlecchino 3D Avatar
function StylizedArlecchino({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const headRef = useRef<THREE.Group>(null!);
  const haloRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.damp(headRef.current.rotation.y, mouse.current.x * 0.5, 6, delta);
      headRef.current.rotation.x = THREE.MathUtils.damp(headRef.current.rotation.x, -mouse.current.y * 0.35, 6, delta);
    }
    if (haloRef.current) {
      haloRef.current.rotation.z += delta * 0.45;
    }
  });

  return (
    <group>
      {/* Balemoon Crimson Halo Ring */}
      <group ref={haloRef} position={[0, 0.4, -0.6]}>
        <mesh>
          <torusGeometry args={[1.5, 0.045, 16, 100]} />
          <meshStandardMaterial color="#e11d48" emissive="#ff0044" emissiveIntensity={2.0} roughness={0.2} metalness={0.8} />
        </mesh>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.75, 0.018, 16, 100]} />
          <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={1.4} roughness={0.3} />
        </mesh>
      </group>

      {/* Torso & Formal High-Collar Coat */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.42, 0.55, 1.2, 32]} />
        <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.4} />
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

      {/* Shoulders & Wing Coat Tails */}
      <mesh position={[-0.65, -0.15, -0.05]} rotation={[0, 0, -0.25]}>
        <boxGeometry args={[0.26, 0.85, 0.32]} />
        <meshStandardMaterial color="#020617" roughness={0.3} />
      </mesh>
      <mesh position={[0.65, -0.15, -0.05]} rotation={[0, 0, 0.25]}>
        <boxGeometry args={[0.26, 0.85, 0.32]} />
        <meshStandardMaterial color="#020617" roughness={0.3} />
      </mesh>

      {/* Claws Accent */}
      <mesh position={[-0.72, -0.65, 0.1]}>
        <cylinderGeometry args={[0.06, 0.04, 0.3, 16]} />
        <meshStandardMaterial color="#881337" emissive="#e11d48" emissiveIntensity={0.6} />
      </mesh>
      <mesh position={[0.72, -0.65, 0.1]}>
        <cylinderGeometry args={[0.06, 0.04, 0.3, 16]} />
        <meshStandardMaterial color="#881337" emissive="#e11d48" emissiveIntensity={0.6} />
      </mesh>

      <Sparkles count={55} scale={2.6} size={3.5} speed={0.6} color="#e11d48" />
    </group>
  );
}

// External GLB Model (if public/models/arlecchino.glb is provided)
function ExternalGlbModel({ url, mouse }: { url: string; mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (!modelRef.current) return;
    const targetY = mouse.current.x * 0.4;
    const targetX = -mouse.current.y * 0.25;
    modelRef.current.rotation.y = THREE.MathUtils.damp(modelRef.current.rotation.y, targetY, 4, delta);
    modelRef.current.rotation.x = THREE.MathUtils.damp(modelRef.current.rotation.x, targetX, 4, delta);
  });

  return (
    <primitive ref={modelRef} object={scene} scale={1.8} position={[0, -1.8, 0]} />
  );
}

// Master Scene Content with GSAP Scroll Timeline Link
function MasterScene() {
  const { camera } = useThree();
  const charMasterRef = useRef<THREE.Group>(null!);
  const mouse = useRef({ x: 0, y: 0 });
  const [modelAvailable, setModelAvailable] = useState(false);

  useEffect(() => {
    // Check for actual binary model
    fetch('/models/arlecchino.glb')
      .then((res) => {
        const type = res.headers.get('content-type') || '';
        if (res.ok && !type.includes('text/html')) {
          setModelAvailable(true);
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

  useEffect(() => {
    if (charMasterRef.current) {
      const cleanup = initCharacterScroll(charMasterRef.current, camera as THREE.PerspectiveCamera);
      return cleanup;
    }
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 5, 5]} intensity={1.6} color="#fef08a" />
      <spotLight position={[-5, 4, -3]} intensity={3.5} color="#e11d48" angle={0.7} penumbra={0.9} />
      <pointLight position={[0, -3, 3]} intensity={1.2} color="#38bdf8" />

      {/* Ambient Cosmos Stars */}
      <CosmicStars />

      {/* Floating 3D Character Master Group with GSAP Scroll Movement */}
      <group ref={charMasterRef}>
        <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.4}>
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
      </group>
    </>
  );
}

export const InteractiveWorldCanvas: React.FC = () => {
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
        camera={{ position: [0, 0.2, 4.2], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      >
        <MasterScene />
      </Canvas>
    </div>
  );
};
