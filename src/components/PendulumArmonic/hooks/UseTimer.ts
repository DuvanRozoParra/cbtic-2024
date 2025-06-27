import { useState, useEffect, useRef, useCallback } from "react";

export function useTimer() {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [pausedTime, setPausedTime] = useState<number>(0);
  const [initialTime, setInitialTime] = useState<number>(0);

  const animationRef = useRef<number | null>(null);

  const step = useCallback(() => {
    const now = performance.now() / 1000;
    const elapsed = now - initialTime;
    setTime(elapsed);

    if (isRunning) {
      animationRef.current = requestAnimationFrame(step);
    }
  }, [initialTime, isRunning]);

  useEffect(() => {
    if (isRunning) {
      animationRef.current = requestAnimationFrame(step);
    }
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isRunning, step]);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      const now = performance.now() / 1000;
      if (pausedTime > 0) {
        setInitialTime(now - pausedTime);
        setPausedTime(0);
      } else {
        setInitialTime(now - time);
      }
    }
  };

  const pause = () => {
    if (isRunning) {
      setIsRunning(false);
      const now = performance.now() / 1000;
      setPausedTime(now - initialTime);
    }
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
    setInitialTime(0);
    setPausedTime(0);
  };

  return {
    time,
    isRunning,
    start,
    pause,
    reset,
    setInitialTime,
    pausedTime,
  };
}

