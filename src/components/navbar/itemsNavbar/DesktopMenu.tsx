"use client";
import { NavigationMenu, NavigationMenuList } from "@components/ui/navigation-menu";
import { StandarButton } from "..";
import { AsignaturasDropdown } from "./AsignaturasDropdown";
import { useState, useRef } from "react";

export const DesktopMenu = () => {
  const [asignaturasOpen, setAsignaturasOpen] = useState(false);
  const asignaturasTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (asignaturasTimeout.current) clearTimeout(asignaturasTimeout.current);
    setAsignaturasOpen(true);
  };

  const handleLeave = () => {
    asignaturasTimeout.current = setTimeout(() => setAsignaturasOpen(false), 50);
  };

  return (
    <div className="hidden sm:flex items-center justify-start w-full ml-28">
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-6 items-center w-full">
          <StandarButton path="Home" name="Home" />
          <AsignaturasDropdown
            isOpen={asignaturasOpen}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          />
          <StandarButton path="Teacher" name="Profesores" />
          <StandarButton path="about" name="Acerca de Nosotros" />
          <StandarButton path="News" name="Noticias" />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
