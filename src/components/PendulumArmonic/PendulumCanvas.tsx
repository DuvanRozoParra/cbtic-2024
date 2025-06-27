import React, { useEffect, useRef, useState, MouseEvent } from "react";

type Props = {
  amplitude: number;       // en grados
  length: number;          // longitud relativa (0–1) al viewBox
  gravity: number;         // gravedad
  isRunning: boolean;
  setAmplitude: (a: number) => void;
  start: () => void;
  time: number;            // tiempo en segundos
};

interface Point {
  x: number;
  t: number;               // timestamp en ms
}

export const PendulumCanvas = ({
  amplitude,
  length,
  gravity,
  isRunning,
  setAmplitude,
  start,
  time,
}: Props) => {
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const displayGravityRef = useRef(gravity);
  const prevRunningRef = useRef(false);

  // Trayectoria con timestamp
  const [trajectory, setTrajectory] = useState<Point[]>([]);
  // Duración del tail en ms
  const tailDuration = 2000;

  // Mantener la gravedad cuando corre
  useEffect(() => {
    if (isRunning) displayGravityRef.current = gravity;
  }, [gravity, isRunning]);

  // Limpiar al inicio de corrida
  useEffect(() => {
    if (isRunning && !prevRunningRef.current) {
      setTrajectory([]);
    }
    prevRunningRef.current = isRunning;
  }, [isRunning]);

  // Cálculo de posición y actualización de trayectoria
  useEffect(() => {
    const pend = document.getElementById("pendulum") as SVGLineElement | null;
    const ball = document.getElementById("ball") as SVGCircleElement | null;
    const shadow = document.getElementById("shadow") as SVGCircleElement | null;
    if (!pend || !ball || !shadow) return;

    // Física
    const g = displayGravityRef.current;
    const thetaMax = (amplitude * Math.PI) / 180;
    const freq = (1 / (2 * Math.PI)) * Math.sqrt(g / length);
    const omega = 2 * Math.PI * freq;
    const theta = thetaMax * Math.cos(omega * time);

    // Coordenadas viewBox (400×1000)
    const x = length * Math.sin(theta);
    const y = length * Math.cos(theta);
    const pivotX = 200;
    const pivotY = 50;
    const xp = pivotX + x * 500;
    const yp = pivotY + y * 500;
    const xPct = `${(xp / 400) * 100}%`;
    const yPct = `${(yp / 1000) * 100}%`;

    // Actualizar SVG
    ball.setAttribute("cx", xPct);
    ball.setAttribute("cy", yPct);
    shadow.setAttribute("cx", xPct);
    pend.setAttribute("x1", "50%");
    pend.setAttribute("y1", "5%");
    pend.setAttribute("x2", xPct);
    pend.setAttribute("y2", yPct);

    // Registrar punto si corre, y filtrar los viejos
    if (isRunning) {
      const now = Date.now();
      setTrajectory((prev) =>
        [
          ...prev,
          { x: xp, t: now }
        ].filter(pt => now - pt.t <= tailDuration)
      );
    }
  }, [amplitude, length, time, isRunning]);

  // Drag handlers
  const handleMouseDown = (e: MouseEvent<SVGCircleElement>) => {
    e.preventDefault();
    draggingRef.current = true;
    dragStartXRef.current = e.clientX;
  };
  const handleMouseMove = (e: MouseEvent<Window> | MouseEvent) => {
    if (!draggingRef.current) return;
    const deltaX = e.clientX - dragStartXRef.current;
    const deltaAmp = deltaX * 0.2;
    const nuevo = amplitude + deltaAmp;
    const clamped = Math.max(Math.min(nuevo, 10), -10);
    setAmplitude(clamped);
    dragStartXRef.current = e.clientX;
  };
  const handleMouseUp = () => {
    if (draggingRef.current) {
      draggingRef.current = false;
      start();
    }
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove as any);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove as any);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [amplitude, start]);

  const trajectoryPoints = trajectory.map(pt => `${pt.x},820`).join(" ");

  return (
    <div className="relative w-full max-w-2xl h-full mx-auto">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 1000"
        preserveAspectRatio="xMidYMid meet"
      >
        <rect width="100%" height="100%" fill="#fefefe" />


        <polyline
          points={trajectoryPoints}
          fill="none"
          stroke="#1976d2"
          strokeWidth={8}
          strokeDasharray="4,4"
        />


        <defs>
          <linearGradient id="supportBarGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#555", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#333", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect x="30%" y="3%" width="40%" height="2%" fill="url(#supportBarGradient)" rx="8" ry="8" />
        <circle cx="50%" cy="5%" r="15" fill="#666" stroke="#444" strokeWidth="2" />

        <defs>
          <linearGradient id="rodGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#ffa726", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#fb8c00", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <line
          x1="50%" y1="5%" x2="50%" y2="60%"
          stroke="url(#rodGradient)" strokeWidth="6"
          id="pendulum" strokeLinecap="round"
        />

        <defs>
          <radialGradient id="ballGradient" cx="50%" cy="30%" r="50%">
            <stop offset="0%" style={{ stopColor: "#e53935", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#b71c1c", stopOpacity: 1 }} />
          </radialGradient>
          <filter id="ballShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.3" />
          </filter>
        </defs>
        <circle
          cx="50%" cy="60%" r="16"
          fill="url(#ballGradient)" stroke="#b71c1c" strokeWidth="2"
          id="ball" onMouseDown={handleMouseDown}
          style={{ cursor: "grab", filter: "url(#ballShadow)" }}
        />
        <ellipse cx="50%" cy="95%" rx="20" ry="8" fill="rgba(0,0,0,0.2)" id="shadow" />

   
        <line x1="0%" y1="98%" x2="100%" y2="98%" stroke="#ddd" strokeWidth="2" />

  
        <rect x="75%" y="2%" width="22%" height="8%" rx="10" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" className="shadow-md" />
        <text x="86%" y="6%" fontSize="20" fontWeight="600" fill="#1f2937" textAnchor="middle" dominantBaseline="middle" className="font-mono">
          {time.toFixed(2)} s
        </text>
      </svg>
    </div>
  );
};
