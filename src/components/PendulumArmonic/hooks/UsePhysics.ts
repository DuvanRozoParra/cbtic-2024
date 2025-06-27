
import { useMemo } from "react";

interface PhysicsInputs {
  time: number;       
  amplitude: number;  
  length: number;     
  gravity: number;   
}

interface PhysicsOutputs {
  position: number;     
  velocity: number;     
  acceleration: number; 
}

export function usePhysics({
  time,
  amplitude,
  length,
  gravity,
}: PhysicsInputs): PhysicsOutputs {
  return useMemo(() => {

    const thetaMax = (amplitude * Math.PI) / 180;
    const omega = Math.sqrt(gravity / length);
    const x = length * thetaMax * Math.cos(omega * time);
    const v = -length * thetaMax * omega * Math.sin(omega * time);
    const a = -length * thetaMax * omega * omega * Math.cos(omega * time);

    return {
      position: parseFloat(x.toFixed(5)),
      velocity: parseFloat(v.toFixed(5)),
      acceleration: parseFloat(a.toFixed(5)),
    };
  }, [time, amplitude, length, gravity]);
}
