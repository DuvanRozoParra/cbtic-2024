"use client";
import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "@/models/Rau/owl";

export const CanvasModel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ 
          position: [0, 0, isMobile ? -5 : -6], 
          fov: isMobile ? 75 : 70,
          near: 0.1, 
          far: 1000 
        }}
        gl={{ alpha: true }}
      >
        <Model 
          scale={isMobile ? 3: 4}
          position={[0, isMobile ? -1 : -1.5, 0]}
          rotation={[0, -3.14, 0]} 
        />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={true} 
        />
        <Environment 
          preset="apartment" 
          environmentRotation={[10, -5, 0]} 
          environmentIntensity={0.6} 
        />
      </Canvas>
    </div>
  );
};