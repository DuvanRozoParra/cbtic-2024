"use client";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { StandarButton } from "..";
import { NavigationMenu, NavigationMenuList } from "@components/ui/navigation-menu";
import { useState } from "react";

export const MobileMenu = ({ show, animation }: { show: boolean; animation: string }) => {
  const [open, setOpen] = useState(false);

  if (!show) return null;

  return (
    <div className={`sm:hidden absolute top-[3.2rem] left-0 w-full bg-[#150c13] backdrop-blur-sm z-10 flex flex-col items-center justify-center ${animation}`}>
      <NavigationMenu>
        <NavigationMenuList className="flex flex-col items-center justify-center px-4 py-3 space-y-2">
          <StandarButton path="Home" name="Home" />
          <div className="w-full flex flex-col items-center">
            <button onClick={() => setOpen(!open)} className="text-white text-lg flex items-center gap-1 w-full py-2 justify-center">
              Asignaturas
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
              <div className="flex flex-col items-center space-y-2 w-full">
                <Link href="/asignatures/faraday/info" className="px-4 py-2 text-white text-base hover:bg-[#f15858] w-full text-center">Ley de Faraday</Link>
                <Link href="/asignatures/pendulum/info" className="px-4 py-2 text-white text-base hover:bg-[#f15858] w-full text-center">Péndulo</Link>
              </div>
            )}
          </div>
          <StandarButton path="Teacher" name="Profesores" />
          <StandarButton path="about" name="Acerca de Nosotros" />
          <StandarButton path="News" name="Noticias" />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
