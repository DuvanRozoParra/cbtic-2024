import React from "react";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@components/ui/navigation-menu";
import Link from "next/link";

export interface StandarButtonProps {
  path: string;
  name: string;
  className?: string;    // <-- añadimos esta prop
}

export const StandarButton = ({
  path,
  name,
  className = "",       // <-- clase por defecto vacía
}: Readonly<StandarButtonProps>) => {
  const href = path.toLowerCase() === "home" ? "/" : `/${path.toLowerCase()}`;

  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          className={
            navigationMenuTriggerStyle() +
            " bg-transparent " +
            className    
          }
        >
          {name}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};
