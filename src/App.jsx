import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Model } from "./components/Model";
import "./styles.css";

const rows = 5;
const cols = 5;
const spacing = 1.8;

export default function App() {
  const initialY = 0;

  const models = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      models.push({
        position: [
          col * spacing - (cols * spacing) / 2 + spacing / 2,
          initialY,
          row * spacing - (rows * spacing) / 2 + spacing / 2,
        ],
      });
    }
  }

  return (
    <Canvas camera={{ fov: 50, position: [1, 1, 10], near: 1, far: 100 }}>
      {models.map((model, i) => (
        <Model key={i} initialPosition={model.position} index={i % 5} />
      ))}
      <Environment preset="warehouse" />
      <OrbitControls
        minDistance={4}
        maxDistance={20} //
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
