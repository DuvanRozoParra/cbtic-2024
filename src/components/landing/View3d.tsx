"use client";

import React from "react";

import { Planet, RocksRing } from "./";
import { useGLTF } from "@react-three/drei";

useGLTF.preload("/planet-transformed.glb");
useGLTF.preload("/rocksRing-transformed.glb");

export const View3d = () => {
  return (
    <group rotation={[0.4, 0, 0]} position={[0, -1, 0]}>
      <Planet />
      <RocksRing />
    </group>
  );
};
