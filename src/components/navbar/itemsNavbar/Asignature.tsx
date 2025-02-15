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
      <NavigationMenuContent className="md:w-[200px]">
        <ul className="flex flex-col">
          <li>
            <Link
              href="/asignatures/faraday/info"
              className="group text-black hover:text-white hover:bg-black bg-transparent p-2 flex flex-col items-start"
            >
              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight transition-colors first:mt-0">
                Ley de Faraday
              </h2>
              <p className="text-wrap text-start text-zinc-600 group-hover:text-white">
                Interaccion de la ley de faraday
              </p>
            </Link>
          </li>
          <li>
            <Link
              href="/asignatures/pendulum/info"
              className="group text-black hover:text-white hover:bg-black bg-transparent p-2 flex flex-col items-start"
            >
              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight transition-colors first:mt-0">
                Pendulo
              </h2>
              <p className="text-wrap text-start text-zinc-600 group-hover:text-white">
                Interaccion del pendulum
              </p>
            </Link>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
