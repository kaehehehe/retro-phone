import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import "./styles.css";

export default function App() {
  const { scene } = useGLTF("retro-phone.glb");

  return (
    <Canvas camera={{ fov: 40, position: [0, 1, 5], near: 1, far: 100 }}>
      <ambientLight intensity={0.5} />
      <Environment preset="warehouse" />

      <mesh position={[0, -0.5, 0]} rotation={[0, -Math.PI / 8, 0]}>
        <primitive object={scene} scale={[1, 1, 1]} />
      </mesh>

      <OrbitControls minDistance={2} maxDistance={10} />
    </Canvas>
  );
}
