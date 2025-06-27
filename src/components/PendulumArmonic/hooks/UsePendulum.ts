// hooks/usePendulum.ts
import { useRef, useState, useEffect } from "react";
import { useTimer } from "./UseTimer";
import { usePhysics } from "./UsePhysics";
import { useRecorder } from "./UseRecorder";

export function usePendulum() {
  const [amplitude, setAmplitude] = useState<number>(0.1);
  const originalAmplitudeRef = useRef<number>(amplitude);
  const effectiveAmplitude = useRef<number>(amplitude);

  useEffect(() => {
    effectiveAmplitude.current = amplitude;
  }, [amplitude]);

  const [length, setLength] = useState<number>(1.5);
  const [gravity, setGravity] = useState<number>(9.86);

  const { time, isRunning, start, pause, reset: resetTimer } = useTimer();

  const { position, velocity, acceleration } = usePhysics({
    time,
    amplitude: effectiveAmplitude.current,
    length,
    gravity,
  });

  // Extraemos también la función `clear()` del recorder
  const {
    positionData,
    velocityData,
    accelerationData,
    record,
    clear: clearRecorderData,
  } = useRecorder(time, { position, velocity, acceleration }, isRunning);

  const getPeriodText = () => {
    if (amplitude > 0.1) {
      const T = 2 * Math.PI * Math.sqrt(length / gravity);
      return `T ≈ ${T.toFixed(2)}`;
    }
    return "";
  };

  const getOmegaText = () => {
    if (amplitude > 0.1) {
      const freq = (1 / (2 * Math.PI)) * Math.sqrt(gravity / length);
      const ω = 2 * Math.PI * freq;
      return `ω ≈ ${ω.toFixed(2)}`;
    }
    return "";
  };

  const reset = () => {
    // 1) Reiniciamos el timer
    resetTimer();

    // 2) Detenemos momentáneamente la amplitud (para “colocar” el péndulo en vertical)
    effectiveAmplitude.current = 0;
    setTimeout(() => {
      effectiveAmplitude.current = originalAmplitudeRef.current;
      setAmplitude(originalAmplitudeRef.current);
    }, 0);

    // 3) Limpiamos también todos los datos de las gráficas
    clearRecorderData();
  };

  return {
    amplitude,
    setAmplitude,
    length,
    setLength,
    gravity,
    setGravity,
    time,
    isRunning,
    start,
    pause,
    reset,               
    position,
    velocity,
    acceleration,
    positionData,
    velocityData,
    accelerationData,
    record,
    getPeriodText,
    getOmegaText,
  };
}
