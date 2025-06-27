
import React, { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Clock, CircleDot, BarChart2 } from "lucide-react";
import { Slider } from "../ui/slider";

interface Props {
  length: number;
  gravity: number;
  amplitude: number;
  isRunning: boolean;
  getPeriodText: () => string;
  getOmegaText: () => string;
  setLength: (v: number) => void;
  setGravity: (v: number) => void;
  selectedGravity: number | null;
  setSelectedGravity: (v: number | null) => void;
  start: () => void;
  pause: () => void;
  reset: () => void;
  record: () => void;
}

export const Controls = ({
  length,
  gravity,
  amplitude,
  isRunning,
  getPeriodText,
  getOmegaText,
  setLength,
  setGravity,
  selectedGravity,
  setSelectedGravity,
  start,
  pause,
  reset,
  record,
}: Props) => {
  const [periodText, setPeriodText] = useState<string>("");
  const [omegaText, setOmegaText] = useState<string>("");



  const handleRadioGravity = (val: number) => {
    if (val !== gravity) {
      setGravity(val);
      setSelectedGravity(val);
    } else {
      setSelectedGravity(null);
    }
  };


  const [omegaEditable, setOmegaEditable] = useState<string>("");

  useEffect(() => {
    if (!isRunning) {
      setOmegaEditable("");
    }
  }, [isRunning]);

  const handleOmegaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOmegaEditable(e.target.value);
  };

  const MAX_LENGTH = 1.5;
  const MAX_GRAVITY = 24.79;
  const MAX_OMEGA = 4;

  const applyOmegaChange = () => {
    const omega = parseFloat(omegaEditable);
    if (!isNaN(omega) && omega > 0 && omega <= MAX_OMEGA) {
      const calculatedLength = gravity / (omega * omega);

      if (calculatedLength <= MAX_LENGTH) {
        setLength(calculatedLength);
        setOmegaText(omega.toFixed(4));
      } else {
        const calculatedGravity = length * omega * omega;
        if (calculatedGravity <= MAX_GRAVITY) {
          setGravity(calculatedGravity);
          setOmegaText(omega.toFixed(4));
        } else {
          alert("No es posible alcanzar esa ω sin exceder la longitud o gravedad máximas permitidas.");
        }
      }
    } else {
      alert("Introduce una ω válida (0 < ω ≤ 4)");
    }
  };


  const showPeriod = () => setPeriodText(getPeriodText());
  const showOmega = () => setOmegaText(getOmegaText());

  const planets = [
    { id: "mercury", label: "Mercurio", value: 3.7, icon: "/images/Planets/mercurio.png" },
    { id: "venus", label: "Venus", value: 8.87, icon: "/images/Planets/venus.png" },
    { id: "earth", label: "Tierra", value: 9.86, icon: "/images/Planets/tierra.png" },
    { id: "moon", label: "Luna", value: 1.62, icon: "/images/Planets/luna.png" },
    { id: "mars", label: "Marte", value: 3.71, icon: "/images/Planets/marte.png" },
    { id: "jupiter", label: "Júpiter", value: 24.79, icon: "/images/Planets/jupiter.png" },
    { id: "saturn", label: "Saturno", value: 10.44, icon: "/images/Planets/saturno.png" },
    { id: "uranus", label: "Urano", value: 8.69, icon: "/images/Planets/urano.png" },
    { id: "neptune", label: "Neptuno", value: 11.15, icon: "/images/Planets/neptuno.png" },
  ];

  return (
    <div className="space-y-6 max-w-2xl mx-10 px-2 lg:px-10">

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center">
        {isRunning ? (
          <button
            onClick={pause}
            className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-4 py-2 rounded-xl shadow transition duration-200"
          >
            <Pause size={18} /> Pausar
          </button>
        ) : (
          <button
            onClick={start}
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-xl shadow transition duration-200"
          >
            <Play size={18} /> Iniciar
          </button>
        )}

        <button
          onClick={reset}
          className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-xl shadow transition duration-200"
        >
          <RotateCcw size={18} /> Reiniciar
        </button>

        <button
          onClick={record}
          className="flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-4 py-2 rounded-xl shadow transition duration-200"
        >
          <BarChart2 size={18} /> Graficar
        </button>

        {(
          <>
            <button
              onClick={showPeriod}
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-xl shadow transition duration-200"
            >
              <Clock size={18} /> Periodo
            </button>

            <button
              onClick={showOmega}
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-xl shadow transition duration-200"
            >
              <CircleDot size={18} /> Omega
            </button>
          </>
        )}
      </div>

      <div className="bg-white border shadow-md rounded-2xl p-6 space-y-6">

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Longitud (m):{" "}
            <span className="text-indigo-600">{length.toFixed(2)}</span>
          </label>
          <div className="w-full max-w-md">
            <Slider
              min={0.7}
              max={1.5}
              step={0.01}
              value={[length]}
              onValueChange={([val]) => setLength(val)}
              disabled={isRunning}
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Gravedad (m/s²):{" "}
            <span className="text-indigo-600">{gravity.toFixed(2)}</span>
          </label>
          <div className="w-full max-w-md">
            <Slider
              min={1}
              max={24.79}
              step={0.01}
              value={[gravity]}
              onValueChange={([val]) => {
                setGravity(val);
                setSelectedGravity(null);
              }}
              disabled={isRunning}
            />
          </div>
          <div
            className="mt-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-3 py-2"
            style={{ maxWidth: "90%", maxHeight: "120px" }}
          >
            {planets.map(({ id, label, value, icon }) => (
              <label
                key={id}
                htmlFor={id}
                className={`flex-none snap-center flex flex-col items-center gap-1 py-2 px-3 rounded-lg font-medium border cursor-pointer transition duration-200 text-sm text-center ${selectedGravity === value
                  ? "bg-green-500 text-white border-green-600"
                  : "bg-gray-50 hover:bg-gray-100 border-gray-300 text-gray-700"
                  }`}
                style={{ minWidth: "80px" }}
              >
                <input
                  type="radio"
                  id={id}
                  name="gravity"
                  value={value}
                  checked={selectedGravity === value}
                  onChange={() => handleRadioGravity(value)}
                  disabled={isRunning}
                  className="hidden"
                />
                <img
                  src={icon}
                  alt={`${label} icon`}
                  className="w-8 h-8 object-contain"
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </div>
        {(periodText || omegaText) && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center space-y-2 shadow-inner">
            {periodText && (
              <p className="text-gray-800 text-base">
                <span className="font-semibold text-indigo-600">
                  Periodo (T):
                </span>{" "}
                <span className="font-medium">{periodText} segundos</span>
              </p>
            )}
            {omegaText && (
              <p className="text-gray-800 text-base">
                <span className="font-semibold text-indigo-600">
                  Frecuencia Angular (ω):
                </span>{" "}
                <span className="font-medium">{omegaText} rad/s</span>
              </p>
            )}
          </div>
        )}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Establecer ω deseada (max 4 rad/s):
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              step="0.01"
              value={omegaEditable}
              onChange={handleOmegaChange}
              className="border rounded-lg px-3 py-2 w-28 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="ω (rad/s)"
            />
            <button
              onClick={applyOmegaChange}
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-3 py-2 rounded-xl shadow transition duration-200"
            >
              Aplicar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
