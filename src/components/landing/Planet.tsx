"use client";

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 planet.glb -t --shadows -i -E -T 
Files: planet.glb [73.28KB] > C:\Users\FIDEL RP\Documents\DuvanRozo\cbtic-2024\public\planet-transformed.glb [25.29KB] (65%)
*/

import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_0: THREE.Mesh;
    Object_0_1: THREE.Mesh;
  };
  materials: {
    PaletteMaterial002: THREE.MeshStandardMaterial;
    PaletteMaterial001: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/planet-transformed.glb") as GLTFResult;
  return (
    <group rotation={[-0.3, 0, 0]} {...props} dispose={null}>
      <group position={[-0.069, 1.271, 0.012]} scale={0.276}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.PaletteMaterial002}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.PaletteMaterial001}
        />
      </group>
    </group>
  );
}
