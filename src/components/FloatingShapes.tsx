'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingGeometry({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function CodeSymbols() {
  const symbols = useMemo(() => {
    const codeChars = ['<', '>', '{', '}', '(', ')', '[', ']', '/', '*'];
    return Array.from({ length: 15 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ] as [number, number, number],
      char: codeChars[Math.floor(Math.random() * codeChars.length)],
      color: `hsl(${200 + Math.random() * 60}, 70%, ${60 + Math.random() * 20}%)`,
      scale: 0.5 + Math.random() * 0.5
    }));
  }, []);

  return (
    <>
      {symbols.map((symbol, index) => (
        <Float key={index} speed={1 + Math.random()} rotationIntensity={0.5} floatIntensity={1}>
          <mesh position={symbol.position} scale={symbol.scale}>
            <planeGeometry args={[0.5, 0.5]} />
            <meshBasicMaterial color={symbol.color} transparent opacity={0.6} />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export default function FloatingShapes() {
  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      pointerEvents: 'none',
      zIndex: 0
    }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#667eea" intensity={0.5} />
        
        {/* Floating geometric shapes */}
        <FloatingGeometry position={[-4, 2, -2]} color="#667eea" scale={0.8} />
        <FloatingGeometry position={[4, -1, -3]} color="#764ba2" scale={0.6} />
        <FloatingGeometry position={[-2, -3, -1]} color="#FFD700" scale={0.4} />
        <FloatingGeometry position={[3, 3, -4]} color="#FF6B6B" scale={0.5} />
        
        {/* Code symbols */}
        <CodeSymbols />
      </Canvas>
    </div>
  );
}