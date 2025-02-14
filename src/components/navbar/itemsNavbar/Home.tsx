import React from "react";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@components/ui/navigation-menu";
import Link from "next/link";

export const Home = () => {
  return (
    <NavigationMenuItem>
      <Link href="/" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle() + " bg-transparent "}>
          Home
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};
