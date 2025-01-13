import React from "react";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@components/ui/navigation-menu";
import Link from "next/link";

export const Asignature = () => {
  return (
    <NavigationMenuItem>
      <Link href="/asignature" legacyBehavior passHref>
        <NavigationMenuLink
          className={
            navigationMenuTriggerStyle() + " bg-transparent text-white"
          }
        >
          Asignature
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};
