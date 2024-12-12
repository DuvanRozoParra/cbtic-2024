"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Preload, Stats } from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  Noise,
  SMAA,
  Vignette,
} from "@react-three/postprocessing";
import * as THREE from "three";

export const ViewSD = ({
  children,
}: Readonly<{
  children: React.ReactNode;
  childrenEffectComposer?: React.ReactNode;
}>) => {
  return (
    <Canvas shadows camera={{ fov: 100, position: [0, 0, 5] }}>
      {/* <Stats /> */}
      <ambientLight intensity={1} />
      <pointLight
        intensity={10000}
        position={[20, 0, 0]}
        color={new THREE.Color("#000cff")}
      />
      <pointLight
        intensity={10000}
        position={[-20, 0, 0]}
        color={new THREE.Color("#ff0000")}
      />

      <color attach="background" args={["black"]} />
      <group>{children ?? <></>}</group>
      <Preload all />
      <OrbitControls />
      <Environment preset="night" backgroundBlurriness={1} />
      <EffectComposer multisampling={0}>
        <Vignette eskil={false} offset={0.1} darkness={1.2} />
        <Noise opacity={0.03} />
        <SMAA />
        <Bloom mipmapBlur luminanceThreshold={1} radius={0.6} />
      </EffectComposer>
    </Canvas>
  );
};
