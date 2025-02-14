"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { NavigationMenu, NavigationMenuList } from "@components/ui/navigation-menu";
import { Asignature, StandarButton } from "./";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <section
      className={`w-screen h-14 fixed top-0 z-50 flex items-center justify-center p-5 bg-black/5 backdrop-blur-sm ${
        pathname !== "/" ? "text-black" : "text-white"
      }`}
    >
      <NavigationMenu>
        <NavigationMenuList>
          <StandarButton path="Home" />
          <Asignature />
          <StandarButton path="About" />
          {/* <AboutUs /> */}
        </NavigationMenuList>
      </NavigationMenu>
    </section>
  );
};
