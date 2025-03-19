"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "@/models/Rau/owl";

export const CanvasModel = () => {
  return (
    <div className="w-full h-full  ">
      <Canvas
        camera={{ position: [0, 0, -8], fov: 60, near: 0.1, far: 1000 }}
        gl={{ alpha: true }}
      >
        <Model scale={5} position={[0, -2.5, 0]} rotation={[0, -3.14, 0]} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
        <Environment preset="apartment" environmentRotation={[10, -5, 0]} environmentIntensity={0.6} />
      </Canvas>
    </div>
  );
};
