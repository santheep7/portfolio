'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

interface Project3DCardProps {
  position: [number, number, number];
  title: string;
  color: string;
  onClick: () => void;
}

function Project3DCard({ position, title, color, onClick }: Project3DCardProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.scale.setScalar(hovered ? 1.05 : 1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position}>
        <RoundedBox
          ref={meshRef}
          args={[2, 2.5, 0.2]}
          radius={0.1}
          smoothness={4}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={onClick}
        >
          <meshStandardMaterial
            color={hovered ? '#FF6B6B' : color}
            metalness={0.3}
            roughness={0.4}
            transparent
            opacity={0.9}
          />
        </RoundedBox>
        
        <Text
          position={[0, 0, 0.11]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.8}
        >
          {title}
        </Text>
        
        {/* Decorative elements */}
        <mesh position={[0.8, 0.8, 0.11]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshBasicMaterial color="#FFD700" />
        </mesh>
        <mesh position={[-0.8, -0.8, 0.11]}>
          <boxGeometry args={[0.15, 0.15, 0.05]} />
          <meshBasicMaterial color="#00FF88" />
        </mesh>
      </group>
    </Float>
  );
}

function BackgroundGrid() {
  const gridRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={gridRef} position={[0, 0, -5]}>
      {Array.from({ length: 10 }, (_, i) => (
        <group key={i}>
          <mesh position={[i - 4.5, 0, 0]}>
            <boxGeometry args={[0.02, 10, 0.02]} />
            <meshBasicMaterial color="#667eea" transparent opacity={0.3} />
          </mesh>
          <mesh position={[0, i - 4.5, 0]}>
            <boxGeometry args={[10, 0.02, 0.02]} />
            <meshBasicMaterial color="#667eea" transparent opacity={0.3} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

interface Project3DShowcaseProps {
  projects: Array<{ title: string; color: string; onClick: () => void }>;
}

export default function Project3DShowcase({ projects }: Project3DShowcaseProps) {
  const positions: [number, number, number][] = [
    [-3, 1, 0],
    [0, 0, 0.5],
    [3, -1, 0]
  ];

  return (
    <div style={{ 
      width: '100%', 
      height: '400px',
      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
      borderRadius: '20px',
      overflow: 'hidden'
    }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#FF6B6B" intensity={0.5} />
        
        <BackgroundGrid />
        
        {projects.slice(0, 3).map((project, index) => (
          <Project3DCard
            key={index}
            position={positions[index]}
            title={project.title}
            color={project.color}
            onClick={project.onClick}
          />
        ))}
      </Canvas>
    </div>
  );
}