import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";

const colorPalette = ["#ff0000", "#ff648b", "#F0A04B", "#00BDFE", "#7BB662"];

export function Model({ initialPosition, index }) {
  const ref = useRef();
  const { scene } = useGLTF("retro-phone.glb");
  const model = scene.clone();

  useEffect(() => {
    const targetIndices = [0, 6, 7];
    const randomColor = colorPalette[index];

    targetIndices.forEach((index) => {
      const targetMesh = model.children[index];

      targetMesh.material = targetMesh.material.clone();
      targetMesh.material.color.set(randomColor);
    });
  }, [model]);

  return (
    <primitive
      ref={ref}
      scale={0.7}
      object={model}
      position={initialPosition}
    />
  );
}
