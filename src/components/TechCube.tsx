'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Box } from '@react-three/drei';
import * as THREE from 'three';

function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.scale.setScalar(hovered ? 1.1 : 1);
    }
  });

  const techStack = ['React', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'GSAP'];

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color={hovered ? '#FF6B6B' : '#667eea'}
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0.8}
      />
      
      {/* Tech labels on each face */}
      {techStack.map((tech, index) => {
        const positions: [number, number, number][] = [
          [0, 0, 1.01], [0, 0, -1.01], [1.01, 0, 0], 
          [-1.01, 0, 0], [0, 1.01, 0], [0, -1.01, 0]
        ];
        const rotations: [number, number, number][] = [
          [0, 0, 0], [0, Math.PI, 0], [0, Math.PI/2, 0],
          [0, -Math.PI/2, 0], [-Math.PI/2, 0, 0], [Math.PI/2, 0, 0]
        ];
        
        return (
          <Text
            key={index}
            position={positions[index]}
            rotation={rotations[index]}
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
            font="/fonts/inter-bold.woff"
          >
            {tech}
          </Text>
        );
      })}
    </mesh>
  );
}

function OrbitingParticles() {
  const particlesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group ref={particlesRef}>
      {Array.from({ length: 20 }, (_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const radius = 4 + Math.sin(i) * 0.5;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(i * 0.5) * 2,
              Math.sin(angle) * radius
            ]}
          >
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial color="#FFD700" />
          </mesh>
        );
      })}
    </group>
  );
}

export default function TechCube() {
  return (
    <div style={{ 
      width: '300px', 
      height: '300px', 
      margin: '0 auto'
    }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#667eea" intensity={0.5} />
        
        <RotatingCube />
        <OrbitingParticles />
      </Canvas>
    </div>
  );
}