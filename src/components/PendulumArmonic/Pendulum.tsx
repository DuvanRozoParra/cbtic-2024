"use client";
import React, { useState } from "react";
import { PendulumCanvas } from "./PendulumCanvas";
import { Controls } from "./Controls";
import { Charts } from "./Charts";
import { usePendulum } from "./hooks/UsePendulum";

export const PendulumSimulator = () => {
  const {
    amplitude,
    length,
    gravity,
    time,
    isRunning,
    positionData,
    velocityData,
    accelerationData,
    setAmplitude,
    setLength,
    setGravity,
    start,
    pause,
    reset,
    record,
    getPeriodText,
    getOmegaText,
  } = usePendulum();

  const [selectedGravity, setSelectedGravity] = useState<number | null>(null);

  return (
    <div className="min-h-screen p-4 bg-white pt-16">
      <h1 className="text-5xl font-bold mb-2 text-center">Péndulo Simple</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 relative">

        <div className="lg:col-start-1 flex flex-col gap-4 items-center">

          <div className="bg-gray-100 rounded-lg p-6 w-full sm:w-2/3 h-auto mx-auto flex flex-col items-center">
            <h1 className="bg-red-500 w-3/4 font-bold text-2xl text-white p-2 mb-4 rounded text-center">
              Condiciones
            </h1>
            <div className="w-full max-w-md space-y-4 px-4 mb-6">
              <p className="text-black text-base font-bold">
                1. Oscilaciones pequeñas: Entre 0° y 5° – A = 0,06 m
              </p>
              <p className="text-black text-base font-bold">
                2. Sin Fricción: ΣF = mg
              </p>
              <p className="text-black text-base font-bold">
                3. Hilo inextensible.
              </p>
              <p className="text-black text-base font-bold">
                4. Masa Puntual.
              </p>
            </div>
          </div>

          <div className=" rounded-lg p-6 w-full sm:w-2/3 mx-auto">
            <Charts
              positionData={positionData}
              velocityData={velocityData}
              accelerationData={accelerationData}
            />
          </div>
        </div>

        <div className="lg:col-start-2 lg:row-span-2 flex justify-center h-3/6 w-full lg:order-none">
          <PendulumCanvas
            amplitude={amplitude}
            length={length}
            gravity={gravity}
            isRunning={isRunning}
            setAmplitude={setAmplitude}
            start={start}
            time={time}
          />
        </div>

        <Controls
          length={length}
          gravity={gravity}
          amplitude={amplitude}
          isRunning={isRunning}
          getPeriodText={getPeriodText}
          getOmegaText={getOmegaText}
          setLength={setLength}
          setGravity={setGravity}
          selectedGravity={selectedGravity}
          setSelectedGravity={setSelectedGravity}
          start={start}
          pause={pause}
          reset={reset}
          record={record}
        />
      </div>
    </div>
  );
};
