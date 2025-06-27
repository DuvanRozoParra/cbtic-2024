
import { useState, useEffect, useRef } from "react";

interface PhysicsOutputs {
  position: number;
  velocity: number;
  acceleration: number;
}

export function useRecorder(
  time: number,
  physics: PhysicsOutputs,
  isRunning: boolean
) {
  const [shouldRecord, setShouldRecord] = useState<boolean>(false);

  const [positionData, setPositionData] = useState<
    Array<{ time: number; position: number }>
  >([]);
  const [velocityData, setVelocityData] = useState<
    Array<{ time: number; velocity: number }>
  >([]);
  const [accelerationData, setAccelerationData] = useState<
    Array<{ time: number; acceleration: number }>
  >([]);

  const lastUpdateRef = useRef<number>(0);

  useEffect(() => {
    if (!shouldRecord || !isRunning) return;

    if (time - lastUpdateRef.current >= 0.05) {
      setPositionData((prev) => [
        ...prev,
        { time: parseFloat(time.toFixed(3)), position: physics.position },
      ]);
      setVelocityData((prev) => [
        ...prev,
        { time: parseFloat(time.toFixed(3)), velocity: physics.velocity },
      ]);
      setAccelerationData((prev) => [
        ...prev,
        { time: parseFloat(time.toFixed(3)), acceleration: physics.acceleration },
      ]);
      lastUpdateRef.current = time;
    }
  }, [time, physics, shouldRecord, isRunning]);

  const record = () => {
    setPositionData([]);
    setVelocityData([]);
    setAccelerationData([]);
    lastUpdateRef.current = time;
    setShouldRecord(true);
  };
  const clear = () => {
    setPositionData([]);
    setVelocityData([]);
    setAccelerationData([]);
    lastUpdateRef.current = 0;
    setShouldRecord(false);
  };

  useEffect(() => {

    if (!isRunning && shouldRecord) {
      setShouldRecord(false);
    }
  }, [isRunning, shouldRecord]);

  return {
    positionData,
    velocityData,
    accelerationData,
    record,
    clear, 
  };
}
