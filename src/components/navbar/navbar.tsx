"use client";
import React, { useState, useRef } from "react";
import { NavigationMenu, NavigationMenuList } from "@components/ui/navigation-menu";
import { StandarButton } from "./";
import { Atom, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileAsignaturasOpen, setMobileAsignaturasOpen] = useState(false);
  const [desktopAsignaturasOpen, setDesktopAsignaturasOpen] = useState(false);
  const asignaturasTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDesktopAsignaturasEnter = () => {
    if (asignaturasTimeout.current) {
      clearTimeout(asignaturasTimeout.current);
      asignaturasTimeout.current = null;
    }
    setDesktopAsignaturasOpen(true);
  };

  const handleDesktopAsignaturasLeave = () => {
    asignaturasTimeout.current = setTimeout(() => {
      setDesktopAsignaturasOpen(false);
    }, 50); 
  };

  return (
    <section className="w-screen h-14 fixed top-0 z-50 flex items-center justify-center p-5 bg-[#090910] bg-opacity-0 backdrop-blur-sm text-white">
      <div className="flex items-center justify-between w-full">
        <div className="text-xl flex flex-row gap-2 font-bold">
          <Atom className="h-6 w-6" /> CBTIC
        </div>

        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X className="h-full w-full" /> : <Menu className="h-full w-full" />}
          </button>
        </div>
        <div className="hidden sm:flex justify-center items-center w-full">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6 items-center justify-center w-full">
              <StandarButton path="Home" name="Home" />
              <div
                className="relative"
                onMouseEnter={handleDesktopAsignaturasEnter}
                onMouseLeave={handleDesktopAsignaturasLeave}
              >
                <button className="text-white flex items-center gap-1 focus:outline-none">
                  Asignaturas
                  <ChevronDown
                    stroke="currentColor"
                    className={`h-4 w-4 transition-transform duration-300 ${desktopAsignaturasOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {desktopAsignaturasOpen && (
                  <div className="absolute left-0 top-full mt-2 flex flex-col bg-[#090910] bg-opacity-60 backdrop-blur-md shadow-lg rounded-lg overflow-hidden divide-y divide-gray-700">
                    <Link
                      href="/asignatures/faraday/info"
                      className="px-4 py-3 text-white transition-colors duration-300 hover:bg-[#07070f]"
                    >
                      Ley de Faraday
                    </Link>
                    <Link
                      href="/asignatures/pendulum/info"
                      className="px-4 py-3 text-white transition-colors duration-300 hover:bg-[#07070f]"
                    >
                      Péndulo
                    </Link>
                  </div>
                )}
              </div>
              <StandarButton path="Teacher" name="Profesores" />
              <StandarButton path="about" name="Acerca de Nosotros" />
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="sm:hidden absolute top-14 left-0 w-full bg-[#090910] bg-opacity-20 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col items-center justify-center text-center px-4 py-3 space-y-2">
              <StandarButton path="Home" name="Home" />
              <div className="w-full flex flex-col items-center">
                <button
                  onClick={() => setMobileAsignaturasOpen(!mobileAsignaturasOpen)}
                  className="text-white flex items-center gap-1 w-full py-2 justify-center"
                >
                  Asignaturas
                  <ChevronDown
                    stroke="currentColor"
                    className={`h-4 w-4 transition-transform duration-300 ${mobileAsignaturasOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`${mobileAsignaturasOpen ? "flex" : "hidden"} flex-col items-center space-y-2 w-full`}>
                  <Link
                    href="/asignatures/faraday/info"
                    className="px-4 py-2 text-white text-sm hover:bg-[#f15858] transition-colors w-full text-center"
                  >
                    Ley de Faraday
                  </Link>
                  <Link
                    href="/asignatures/pendulum/info"
                    className="px-4 py-2 text-white text-sm hover:bg-[#f15858] transition-colors w-full text-center"
                  >
                    Péndulo
                  </Link>
                </div>
              </div>
              <StandarButton path="Teacher" name="Profesores" />
              <StandarButton path="about" name="Acerca de Nosotros" />
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </section>
  );
};
