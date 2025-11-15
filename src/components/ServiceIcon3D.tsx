"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";

interface ServiceIcon3DProps {
  type: "leak" | "drain" | "pipe" | "tap" | "geyser" | "emergency";
  size?: number;
}

// Helper component for the 3D model itself
const ThreeDModel = ({ type }: { type: ServiceIcon3DProps["type"] }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Subtle rotation
      meshRef.current.rotation.y += 0.2 * delta;
      meshRef.current.rotation.x += 0.1 * delta;

      // Floating effect
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;

      // Hover effect
      meshRef.current.scale.setScalar(hovered ? 1.1 : 1);
    }
  });

  const materialProps = {
    color: new THREE.Color("hsl(210 79% 50%)"), // blue-primary
    roughness: 0.6,
    metalness: 0.3,
  };

  const renderShape = () => {
    switch (type) {
      case "leak":
        return <sphereGeometry args={[0.5, 32, 32]} />; // Water droplet
      case "drain":
        return <torusGeometry args={[0.4, 0.15, 16, 32]} />; // Drain opening
      case "pipe":
        return <cylinderGeometry args={[0.3, 0.3, 1.2, 32]} />; // Pipe segment
      case "tap":
        return (
          <group>
            <boxGeometry args={[0.2, 0.8, 0.2]} /> {/* Vertical part */}
            <mesh position={[0.4, 0.3, 0]}>
              <boxGeometry args={[0.8, 0.2, 0.2]} /> {/* Horizontal spout */}
            </mesh>
            <mesh position={[-0.1, 0.6, 0.15]}>
              <sphereGeometry args={[0.15, 16, 16]} /> {/* Knob */}
            </mesh>
          </group>
        );
      case "geyser":
        return <cylinderGeometry args={[0.4, 0.4, 1.5, 32]} />; // Geyser tank
      case "emergency":
        return (
          <group>
            <boxGeometry args={[0.8, 0.8, 0.2]} /> {/* Clock face */}
            <mesh position={[0, 0, 0.15]}>
              <cylinderGeometry args={[0.05, 0.05, 0.3, 16]} /> {/* Hour hand */}
            </mesh>
            <mesh position={[0.1, 0, 0.15]} rotation={[0, 0, -Math.PI / 2]}>
              <cylinderGeometry args={[0.05, 0.05, 0.5, 16]} /> {/* Minute hand */}
            </mesh>
          </group>
        );
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
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
      <Canvas camera={{ position: [0, 0, 2.5], fov: 75 }}>
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