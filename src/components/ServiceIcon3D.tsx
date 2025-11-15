"use client";

import React, { useRef } from "react"; // Removed useState
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

interface ServiceIcon3DProps {
  type: "leak" | "drain" | "pipe" | "tap" | "geyser" | "emergency";
  size?: number;
}

// Helper component for the 3D model itself
const ThreeDModel = ({ type }: { type: ServiceIcon3DProps["type"] }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  // Removed useState for hovered

  // Removed useFrame hook for animation

  const materialProps = {
    color: new THREE.Color("hsl(210 79% 50%)"), // blue-primary
    roughness: 0.6,
    metalness: 0.3,
  };

  // Temporarily simplify to a single box to debug
  const renderShape = () => {
    return <boxGeometry args={[0.8, 0.8, 0.8]} />;
  };

  return (
    <mesh
      ref={meshRef}
      // Removed onPointerOver and onPointerOut
    >
      {renderShape()}
      <meshStandardMaterial {...materialProps} />
    </mesh>
  );
};

const ServiceIcon3D: React.FC<ServiceIcon3DProps> = ({ type, size = 100 }) => {
  return (
    <div
      className="relative"
      style={{ width: size, height: size }}
    >
      <Canvas camera={{ position: [0, 0, 2.5], fov: 75 }} dpr={[1, 2]}> {/* Added dpr */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <ThreeDModel type={type} />
        {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
        <Environment preset="city" /> {/* Soft, diffused lighting */}
      </Canvas>
    </div>
  );
};

export default ServiceIcon3D;