import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type SwarmProps = {
  count: number;
  dummy?: THREE.Object3D<THREE.Object3DEventMap>;
};

export function Swarm({ count, dummy = new THREE.Object3D() }: SwarmProps) {
  // const light = useRef<THREE.PointLight>(null!);
  const mesh = useRef<THREE.InstancedMesh>(null!);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.001 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);
  useFrame((state) => {
    // light.current.position.set(
    //   (-state.mouse.x * state.viewport.width) / 5,
    //   (-state.mouse.y * state.viewport.height) / 5,
    //   0
    // );
    particles.forEach((particle, i) => {
      let { t } = particle;
      const { factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      particle.mx += (state.mouse.x * 1000 - particle.mx) * 0.01;
      particle.my += (state.mouse.y * 1000 - 1 - particle.my) * 0.01;
      dummy.position.set(
        (particle.mx / 10) * a +
          xFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b +
          yFactor +
          Math.sin((t / 10) * factor) +
          (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b +
          zFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.setScalar(s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });
  return (
    <>
      {/* <pointLight ref={light} distance={40} intensity={10} color="red">
        <mesh scale={[1, 1, 6]}>
          <dodecahedronGeometry args={[1, 0]} />
        </mesh>
      </pointLight> */}
      <instancedMesh
        ref={mesh}
        args={[
          new THREE.DodecahedronGeometry(1, 0),
          new THREE.MeshBasicMaterial({ color: "#020000" }),
          count,
        ]}
      >
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#020000" roughness={0.5} metalness={0.3} />
      </instancedMesh>
    </>
  );
}
