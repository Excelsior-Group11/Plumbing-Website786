"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Cylinder } from '@react-three/drei';

// A simple animated cube representing a code block
const AnimatedCube = () => {
  const meshRef = useRef<any>();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });
  return (
    <Box args={[0.8, 0.8, 0.8]} ref={meshRef}>
      <meshStandardMaterial color="hsl(var(--brand-primary-color))" wireframe />
    </Box>
  );
};

// A simple animated cylinder representing a design element
const AnimatedCylinder = () => {
  const meshRef = useRef<any>();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.008;
      meshRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.2;
    }
  });
  return (
    <Cylinder args={[0.4, 0.4, 0.2, 32]} ref={meshRef} position={[1, 0, 0]}>
      <meshStandardMaterial color="hsl(var(--brand-accent-color))" />
    </Cylinder>
  );
};

const WebsiteDevAnimation = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedCube />
        <AnimatedCylinder />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default WebsiteDevAnimation;