import React from "react";
import {
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@components/ui/navigation-menu";
import Link from "next/link";

export const Asignature = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent">
        Asignaturas
      </NavigationMenuTrigger>
      <NavigationMenuContent className="md:w-[200px] rounded-md bg-[#0f0f1b] bg-opacity-90 backdrop-blur-sm p-2">
        <ul className="flex flex-col gap-3">
          <li>
            <Link
              href="/asignatures/faraday/info"
              className="group flex flex-col items-start p-2 rounded-md transition-colors duration-300 text-white hover:bg-[#090910a2]"
            >
              <h2 className="text-lg font-semibold tracking-tight border-b pb-1">
                Ley de Faraday
              </h2>
              <p className="text-sm">
                Interacción de la ley de Faraday
              </p>
            </Link>
          </li>
          <li>
            <Link
              href="/asignatures/pendulum/info"
              className="group flex flex-col items-start p-2 rounded-md transition-colors duration-300 text-white hover:bg-[#090910a2]"
            >
              <h2 className="text-lg font-semibold tracking-tight border-b pb-1">
                Péndulo
              </h2>
              <p className="text-sm">
                Interacción del péndulo
              </p>
            </Link>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
