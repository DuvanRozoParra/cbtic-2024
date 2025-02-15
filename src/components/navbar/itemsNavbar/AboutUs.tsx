import React from "react";
import Image from "next/image";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@components/ui/navigation-menu";
import { Button } from "@components/ui/button";

export const AboutUs = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent">About us</NavigationMenuTrigger>
      <NavigationMenuContent className="md:w-[450px]">
        <section className="flex flex-row">
          <section className="w-1/2 relative">
            <section className="absolute w-full bottom-0 left-0 z-10 text-white p-3 bg-titlec">
              <h2 className="mt-10 scroll-m-20 pb-1 text-lg font-semibold tracking-tight transition-colors first:mt-0">
                We&apos;re CBTIC
              </h2>
              <p>Latin america can also!!!</p>
            </section>
            <Image src="/navbar/wllp.jpg" alt="about us" width={300} height={450} />
          </section>
          <section className="w-1/2 flex flex-col p-2 gap-2">
            <Button className="group text-black hover:text-white bg-transparent p-2 h-1/3 flex flex-col items-start">
              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight transition-colors first:mt-0">
                Why?
              </h2>
              <p className="text-wrap text-start text-zinc-600 group-hover:text-white">
                Find out why Cbtic Home.
              </p>
            </Button>

            <Button className="group text-black hover:text-white bg-transparent p-2 h-1/3 flex flex-col items-start">
              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight transition-colors first:mt-0">
                Who&apos;re they?
              </h2>
              <p className="text-wrap text-start text-zinc-600 group-hover:text-white">
                Find out who the creators are.
              </p>
            </Button>

            <Button className="group text-black hover:text-white bg-transparent p-2 h-1/3 flex flex-col items-start">
              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight transition-colors first:mt-0">
                Contact us
              </h2>
              <p className="text-wrap text-start text-zinc-600 group-hover:text-white">
                We have many ideas to create.
              </p>
            </Button>
          </section>
        </section>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
