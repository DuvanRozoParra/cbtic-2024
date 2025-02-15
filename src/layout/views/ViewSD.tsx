"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Preload,
  Stars,
  // Stats,
} from "@react-three/drei";
import { EffectComposer, Noise, SMAA } from "@react-three/postprocessing";

export const ViewSD = ({
  children,
}: Readonly<{
  children: React.ReactNode;
  childrenEffectComposer?: React.ReactNode;
}>) => {
  return (
    <Canvas shadows dpr={[1.5, 2]} linear>
      {/* <Stats /> */}
      <Stars radius={500} depth={50} count={1000} factor={10} />
      <fog attach="fog" args={["#272730", 16, 30]} />
      <ambientLight intensity={0.75} />
      <PerspectiveCamera makeDefault position={[0, 0, 2.5]} fov={75}>
        <pointLight intensity={10} position={[0, -1, 0]} />
        <spotLight
          castShadow
          intensity={5000}
          angle={0.2}
          penumbra={1}
          position={[0, 20, 0]}
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
        />
      </PerspectiveCamera>
      <group>{children ?? <></>}</group>
      <Preload all />
      <OrbitControls
        autoRotate
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Environment preset="night" backgroundBlurriness={1} />
      <EffectComposer multisampling={0}>
        <Noise opacity={0.03} />
        <SMAA />
      </EffectComposer>
    </Canvas>
  );
};
