import React, { useState, useEffect } from "react";
import GenericLineChart from "./GenericLineChart";

interface ChartsProps {
  positionData: Array<{ time: number; position: number }>;
  velocityData: Array<{ time: number; velocity: number }>;
  accelerationData: Array<{ time: number; acceleration: number }>;
}

export const Charts = ({
  positionData,
  velocityData,
  accelerationData,
}: ChartsProps) => {

  const [showLines, setShowLines] = useState({
    position: true,
    velocity: true,
    acceleration: true,
  });

  const combinedData = positionData.map((pos, i) => ({
    time: pos.time,
    position: pos.position,
    velocity: velocityData[i]?.velocity ?? null,
    acceleration: accelerationData[i]?.acceleration ?? null,
  }));

  const [timeOffset, setTimeOffset] = useState<number | null>(null);

  useEffect(() => {
    if (combinedData.length > 0 && timeOffset === null) {
      setTimeOffset(combinedData[0].time);
    }

    if (combinedData.length === 0 && timeOffset !== null) {
      setTimeOffset(null);
    }
  }, [combinedData, timeOffset]);

  const chartData = combinedData.map(item => ({
    ...item,
    time: timeOffset !== null ? item.time - timeOffset : item.time,
  }));

  const toggleLine = (key: "position" | "velocity" | "acceleration") => {
    setShowLines(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <GenericLineChart
        data={chartData}
        showLines={showLines}
        canvasId="multi-line-chart"
      />
      <div className="flex gap-4">
        <button
          onClick={() => toggleLine("position")}
          className={`px-4 py-2 rounded-lg shadow ${
            showLines.position ? "bg-red-500" : "bg-gray-300"
          } text-white font-medium`}
        >
          Posición
        </button>
        <button
          onClick={() => toggleLine("velocity")}
          className={`px-4 py-2 rounded-lg shadow ${
            showLines.velocity ? "bg-blue-500" : "bg-gray-300"
          } text-white font-medium`}
        >
          Velocidad
        </button>
        <button
          onClick={() => toggleLine("acceleration")}
          className={`px-4 py-2 rounded-lg shadow ${
            showLines.acceleration ? "bg-green-500" : "bg-gray-300"
          } text-white font-medium`}
        >
          Aceleración
        </button>
      </div>
    </div>
  );
};
