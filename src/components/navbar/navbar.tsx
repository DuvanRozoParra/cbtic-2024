"use client";
import React, { useState } from "react";
import { NavigationMenu, NavigationMenuList } from "@components/ui/navigation-menu";
import { StandarButton } from "./";
import { Atom, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileAsignaturasOpen, setMobileAsignaturasOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <section className="w-screen h-14 fixed top-0 z-50 flex items-center justify-between p-5 bg-[#090910] bg-opacity-0 backdrop-blur-sm text-white ">
      <div className="flex items-center justify-between w-full">
        <div className="text-xl flex flex-row gap-2 font-bold">
          <Atom className="h-6 w-6" /> CBTIC
        </div>

        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div className="hidden sm:flex justify-center w-full">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6 items-center">
              <StandarButton path="Home" name="Home" />
              <div className="relative group/asignaturas">
                <button className="text-white flex items-center gap-1 focus:outline-none">
                  Asignaturas
                  <ChevronDown
                    stroke="currentColor"
                    className="h-4 w-4 transition-transform duration-300 group-hover/asignaturas:rotate-180"
                  />
                </button>
                <div className="absolute left-0 top-full mt-2 hidden group-hover/asignaturas:flex flex-col bg-[#090910] bg-opacity-60 backdrop-blur-md shadow-lg rounded-lg overflow-hidden divide-y divide-gray-700">
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
              </div>
              <StandarButton path="Teacher" name="Profesores" />
              <StandarButton path="about" name="Acerca de Nosotros" />
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden absolute top-14 left-0 w-full bg-[#090910] bg-opacity-90 backdrop-blur-sm z-10 ">
          <NavigationMenu>
            <NavigationMenuList className="w-full flex flex-col items-center text-center px-4 py-3 space-y-2">
              <StandarButton path="Home" name="Home" />

              {/* Botón Asignaturas con submenú integrado */}
              <div className="w-full flex flex-col items-center">
                <button
                  onClick={() => setMobileAsignaturasOpen(!mobileAsignaturasOpen)}
                  className="text-white flex items-center gap-1 w-full py-2 justify-center"
                >
                  Asignaturas
                  <ChevronDown
                    stroke="currentColor"
                    className={`h-4 w-4 transition-transform duration-300 ${mobileAsignaturasOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                <div className={`${mobileAsignaturasOpen ? 'flex' : 'hidden'} flex-col items-center space-y-2 w-full`}>
                  <Link
                    href="/asignatures/faraday/info"
                    className="px-4 py-2 text-white text-sm hover:bg-[#f15858] transition-colors w-full text-center"
                  >
                    Ley de Faraday
                  </Link>
                  <Link
                    href="/asignatures/pendulum/info"
                    className="px-4 py-2 text-white text-sm   hover:bg-[#f15858] transition-colors w-full text-center"
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
