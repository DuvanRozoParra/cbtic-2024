import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  //NavigationMenuIndicator,
  //NavigationMenuLink,
  //NavigationMenuViewport,
} from "@components/ui/navigation-menu";
import { AboutUs, Asignature } from "./";

export const Navbar = () => {
  return (
    <section className="w-screen h-16 fixed top-0 z-50 flex items-center justify-center p-5">
      <NavigationMenu>
        <NavigationMenuList>
          <AboutUs />
          <Asignature />
        </NavigationMenuList>
      </NavigationMenu>
    </section>
  );
};
