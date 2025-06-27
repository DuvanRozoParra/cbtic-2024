import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

interface ChartDataProps {
  data: Array<{
    time: number;
    position?: number;
    velocity?: number;
    acceleration?: number;
  }>;
  showLines: {
    position: boolean;
    velocity: boolean;
    acceleration: boolean;
  };
  canvasId: string;
}

const colors = {
  position: "#ef4444",   
  velocity: "#3b82f6",   
  acceleration: "#10b981", 
};

const GenericLineChart = ({ data, showLines, canvasId }: ChartDataProps) => {
  const chartRef = useRef<Chart | null>(null);
  const windowSize = 15;

  const initialize = () => {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = 500 * dpr;
    canvas.height = 400 * dpr;
    canvas.style.width = "500px";
    canvas.style.height = "400px";

    chartRef.current = new Chart(canvas, {
      type: "line",
      data: {
        labels: [],
        datasets: ["position", "velocity", "acceleration"].map((key) => ({
          label:
            key === "position"
              ? "Posición (m)"
              : key === "velocity"
              ? "Velocidad (m/s)"
              : "Aceleración (m/s²)",
          data: [],
          borderColor: colors[key as keyof typeof colors],
          backgroundColor: "transparent",
          hidden: !showLines[key as keyof typeof showLines],
          borderWidth: 2,
          pointRadius: 2,
          tension: 0.3,
        })),
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            labels: {
              font: { size: 16, weight: "bold" },
            },
          },
          tooltip: {
            mode: "index",
            intersect: false,
          },
        },
        scales: {
          x: {
            type: "linear",
            title: {
              display: true,
              text: "Tiempo (s)",
              font: { size: 14, weight: "bold" },
            },
            min: 0,
            max: windowSize,
            ticks: { font: { size: 12 } },
          },
          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: "Magnitud",
              font: { size: 14, weight: "bold" },
            },
            ticks: { font: { size: 12 } },
          },
        },
      },
    });
  };

  const updateChart = () => {
    if (!chartRef.current) return;
    const chart = chartRef.current;

    const times = data.map((pt) => pt.time);
    chart.data.labels = times.map((t) => t.toFixed(3));

    ["position", "velocity", "acceleration"].forEach((key, idx) => {
      const values = data.map((pt) => pt[key as keyof typeof pt] ?? null);
      chart.data.datasets[idx].data = values;
      chart.data.datasets[idx].hidden = !showLines[key as keyof typeof showLines];
    });

    if (times.length > 0) {
      const latest = times[times.length - 1];
      const windowStart = Math.max(0, latest - windowSize);
      chart.options.scales!.x!.min = windowStart;
      chart.options.scales!.x!.max = windowStart + windowSize;
    }

    chart.update("none");
  };

  useEffect(() => {
    initialize();
    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, []);

  useEffect(() => {
    updateChart();
  }, [data, showLines]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-4" style={{ width: "500px", height: "400px" }}>
      <canvas id={canvasId}></canvas>
    </div>
  );
};

export default GenericLineChart;
