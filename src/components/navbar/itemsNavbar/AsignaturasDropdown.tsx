"use client";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { ASIGNATURAS } from "./Constants";
;

interface Props {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const AsignaturasDropdown = ({ isOpen, onMouseEnter, onMouseLeave }: Props) => (
  <div
    className="relative"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <button className="text-white text-sm flex items-center gap-2">
      Asignaturas
      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
    </button>
    {isOpen && (
      <div className="absolute left-0 top-full mt-1 flex flex-col bg-[#0a0a0e]/90 shadow-lg rounded-md border border-gray-700 w-52 overflow-hidden">
        {ASIGNATURAS.map((asignatura, i) => (
          <Link
            key={i}
            href=""
            className="px-4 py-2 text-white text-sm hover:bg-[#1a1a1a] hover:pl-5 hover:border-l-2 hover:border-[#FC4442] no-underline"
          >
            {asignatura}
          </Link>
        ))}
      </div>
    )}
  </div>
);
