import React from "react";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@components/ui/navigation-menu";
import Link from "next/link";

export const StandarButton = ({
  path,
  name,
}: Readonly<{ path: string; name: string }>) => {
  return (
    <NavigationMenuItem>
      <Link
        href={path.toLowerCase() === "home" ? "/" : "/" + path.toLowerCase()}
        legacyBehavior
        passHref
      >
        <NavigationMenuLink className={navigationMenuTriggerStyle() + " bg-transparent "}>
          {name}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};
