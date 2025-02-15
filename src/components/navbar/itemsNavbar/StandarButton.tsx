import React from "react";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@components/ui/navigation-menu";
import Link from "next/link";

export const StandarButton = ({ path }: Readonly<{ path: string }>) => {
  return (
    <NavigationMenuItem>
      <Link
        href={path.toLowerCase() === "home" ? "/" : "/" + path.toLowerCase()}
        legacyBehavior
        passHref
      >
        <NavigationMenuLink className={navigationMenuTriggerStyle() + " bg-transparent "}>
          {path}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};
