import * as THREE from "three";
import React, { useRef, useEffect, useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { PATH_RAU } from "@/config";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.Material;
  };
  animations: THREE.AnimationClip[];
};

type ModelProps = JSX.IntrinsicElements["group"];

export function Model(props: ModelProps) {
  const [state, setState] = useState({ clock: new THREE.Clock() });
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(PATH_RAU + '/Buho.glb') as GLTFResult;
  const { actions } = useAnimations(animations, group);

  const eyeLeftRef = useRef<THREE.Group>(null);
  const eyeRightRef = useRef<THREE.Group>(null);
  const leftWingRef = useRef<THREE.Group>(null);
  const rightWingRef = useRef<THREE.Group>(null);

  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      mouseRef.current = { x, y };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [wingFlapSpeed] = useState(2);
  const [wingFlapAmplitude] = useState(Math.PI / 8);

  useFrame(() => {
    if (eyeLeftRef.current && eyeRightRef.current) {

      const lerpFactor = 0.6;

      const targetRotationY = mouseRef.current.x * Math.PI * -0.15;
      const targetRotationX = mouseRef.current.y * Math.PI * 0.15;
      const targetRotationZ = mouseRef.current.x * Math.PI * -0.15;

      eyeLeftRef.current.rotation.y = THREE.MathUtils.lerp(eyeLeftRef.current.rotation.y, targetRotationY, lerpFactor);
      eyeRightRef.current.rotation.y = THREE.MathUtils.lerp(eyeRightRef.current.rotation.y, targetRotationY, lerpFactor);

      eyeLeftRef.current.rotation.x = THREE.MathUtils.lerp(eyeLeftRef.current.rotation.x, targetRotationX, lerpFactor);
      eyeRightRef.current.rotation.x = THREE.MathUtils.lerp(eyeRightRef.current.rotation.x, targetRotationX, lerpFactor);


      eyeLeftRef.current.rotation.z = THREE.MathUtils.lerp(eyeLeftRef.current.rotation.z, targetRotationZ, lerpFactor);
      eyeRightRef.current.rotation.z = THREE.MathUtils.lerp(eyeRightRef.current.rotation.z, targetRotationZ, lerpFactor);
    }
    if (leftWingRef.current && rightWingRef.current) {
      const offset = -15;  
      const flap = Math.sin(state.clock.getElapsedTime() * wingFlapSpeed) * wingFlapAmplitude + offset;

      leftWingRef.current.rotation.z = flap;
      rightWingRef.current.rotation.z = -flap;
    }
  });

  const handleClick = () => {
    const animationName = "saltar";
    if (actions[animationName]) {
      const action = actions[animationName];
      action.reset();
      action.setLoop(THREE.LoopOnce, 1);
      action.clampWhenFinished = true;
      action.play();
    }
  };
  return (
    <group ref={group} {...props} dispose={null} onClick={handleClick}>
      <group name="Scene">
        <group name="Armature" position={[0, 0.257, 0]}>
          <group name="Bone" position={[0, 0, 0.098]}>
            <group name="asdasdl" position={[0.086, -0.106, 0]} rotation={[0, 0, -3.134]}>
              <mesh name="cuerpo006" geometry={nodes.cuerpo006.geometry} material={materials.patas} position={[0.082, -0.268, -0.189]} rotation={[-Math.PI / 2, 0.008, -Math.PI]} scale={0.01} />
            </group>
            <group ref={leftWingRef} name="asdasdl001" position={[0.272, 0.14, 0]} rotation={[0, 0, -1.529]}>
              <mesh name="cuerpo008" geometry={nodes.cuerpo008.geometry} material={materials.alas} position={[-0.033, -0.269, -0.189]} rotation={[1.571, 1.529, 0]} scale={0.01} />
            </group>
            <group name="Bone001" position={[0, 0.26, 0.215]} rotation={[1.955, 0, 0]}>
              <mesh name="cuerpo010" geometry={nodes.cuerpo010.geometry} material={materials['pico arriba']} position={[0.002, -0.337, 0.243]} rotation={[-0.384, 0, 0]} scale={0.01} />
            </group>
            <group name="Bone002" position={[0, 0.229, 0.214]} rotation={[1.889, 0, 0]}>
              <mesh name="cuerpo011" geometry={nodes.cuerpo011.geometry} material={materials['pico abajo']} position={[0.002, -0.361, 0.19]} rotation={[-0.319, 0, 0]} scale={0.01} />
            </group>
            <group name="asdasddsl" position={[0.13, 0.334, 0.137]} rotation={[Math.PI / 2, 0, 0]}>
              <group name="asdasddsl003" position={[0.008, 0.044, -0.14]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh name="cuerpo001" geometry={nodes.cuerpo001.geometry} material={materials.parpados} position={[0.37, -0.136, 0.313]} rotation={[0, 0, Math.PI / 2]} scale={0.01} />
              </group>
              <group name="OJOL" ref={eyeLeftRef} position={[0, 0.043, 0.006]} rotation={[-0.008, 0, 0]}>
                <mesh name="cuerpo016" geometry={nodes.cuerpo016.geometry} material={materials.ojos_360} position={[-0.131, -0.376, 0.164]} rotation={[0.008, 0, 0]} scale={0.01} />
              </group>
              <group name="asdasddsl005" position={[0, 0.063, 0.007]} rotation={[-0.952, 0, 0]}>
                <group name="asdasddsl002" position={[0, 0.104, 0]} rotation={[0.448, 0, 0]}>
                  <mesh name="cuerpo015" geometry={nodes.cuerpo015.geometry} material={materials.parpados} position={[-0.129, -0.529, 0.033]} rotation={[0.355, 0, 0]} scale={0.01} />
                </group>
              </group>
              <group name="asdasddsl006" position={[0, 0.042, 0.012]} rotation={[0.976, 0, 0]}>
                <group name="asdasddsl001" position={[0, 0.106, -0.027]} rotation={[-0.487, 0, 0]} />
              </group>
            </group>
            <group name="Bone003" position={[0, 0.47, -0.032]} rotation={[-0.447, 0, 0]}>
              <mesh name="cuerpo005" geometry={nodes.cuerpo005.geometry} material={materials.sombrero} position={[0.002, -0.21, -0.275]} rotation={[2.018, 0, 0]} scale={0.01} />
            </group>
            <group name="asdasdr" position={[-0.086, -0.106, 0]} rotation={[0, 0, 3.134]}>
              <mesh name="cuerpo007" geometry={nodes.cuerpo007.geometry} material={materials.patas} position={[-0.085, -0.268, -0.189]} rotation={[-Math.PI / 2, -0.008, Math.PI]} scale={0.01} />
            </group>
            <group ref={rightWingRef} name="asdasdr001" position={[-0.272, 0.14, 0]} rotation={[0, 0, 1.529]}>
              <mesh name="cuerpo009" geometry={nodes.cuerpo009.geometry} material={materials.alas} position={[0.033, -0.272, -0.189]} rotation={[1.571, -1.529, 0]} scale={0.01} />
            </group>
            <group name="asdasddsr" position={[-0.13, 0.334, 0.137]} rotation={[Math.PI / 2, 0, 0]}>
              <group name="asdasddsr003" position={[-0.008, 0.044, -0.14]} rotation={[0, 0, Math.PI / 2]}>
                <mesh name="cuerpo002" geometry={nodes.cuerpo002.geometry} material={materials.parpados} position={[-0.37, -0.14, 0.313]} rotation={[0, 0, -Math.PI / 2]} scale={0.01} />
              </group>
              <group name="OJOR " ref={eyeRightRef} position={[0, 0.043, 0.006]} rotation={[-0.008, 0, 0]}>
                <mesh name="cuerpo017" geometry={nodes.cuerpo017.geometry} material={materials.ojos_360} position={[0.132, -0.376, 0.164]} rotation={[0.008, 0, 0]} scale={0.01} />
              </group>
              <group name="asdasddsr005" position={[0, 0.063, 0.007]} rotation={[-0.952, 0, 0]}>
                <group name="asdasddsr002" position={[0, 0.104, 0]} rotation={[0.448, 0, 0]}>
                  <mesh name="cuerpo012" geometry={nodes.cuerpo012.geometry} material={materials.parpados} position={[0.132, -0.529, 0.033]} rotation={[0.355, 0, 0]} scale={0.01} />
                </group>
              </group>
              <group name="asdasddsr006" position={[0, 0.058, 0.004]} rotation={[0.976, 0, 0]}>
                <group name="asdasddsr001" position={[0, 0.103, -0.01]} rotation={[-0.487, 0, 0]}>
                  <mesh name="cuerpo013" geometry={nodes.cuerpo013.geometry} material={materials.parpados} position={[0.132, -0.46, 0.028]} rotation={[0.172, 0, 0]} scale={0.01} />
                </group>
              </group>
            </group>
            <group name="Bone004" position={[0, 0.328, 0.288]} rotation={[Math.PI / 2, 0, 0]}>
              <mesh name="cuerpo018" geometry={nodes.cuerpo018.geometry} material={materials.gafas} position={[0.002, -0.477, 0.167]} scale={0.01} />
            </group>
            <mesh name="cuerpo" geometry={nodes.cuerpo.geometry} material={materials.cuerpo} position={[0.002, 0.161, -0.189]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          </group>
          <group name="asdasdl002" position={[0.568, 0.152, 0.098]} rotation={[0, 0, -Math.PI / 2]} />
          <group name="asdasdl003" position={[0.087, -0.231, 0.098]} rotation={[0, 0, -Math.PI / 2]} />
          <group name="asdasdr002" position={[-0.568, 0.152, 0.098]} rotation={[0, 0, Math.PI / 2]} />
          <group name="asdasdr003" position={[-0.087, -0.231, 0.098]} rotation={[0, 0, Math.PI / 2]} />
        </group>
        <mesh name="Icosphere001" geometry={nodes.Icosphere001.geometry} material={materials.asteroide} position={[0.01, -0.27, 0.132]} scale={0.345} />
      </group>
    </group>
  );
}

useGLTF.preload('/Buho.glb');