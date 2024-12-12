"use client";

import { ViewSD } from "@layout";
import { Atom, Swarm } from "@components";
import{NavigationMenu} from "@components/shadcn";
export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-8 row-start-2 items-center w-screen h-screen relative">
        {/* section superpuesta para la presentacion */}
        {/* <section className="w-screen h-section absolute top-0 left-0 z-10">
          <h1 className="text-red-600">hola mundo</h1>
        </section> */}
        {/* presentacion en primera instancia */}
        <section className="w-screen h-screen relative">
          <ViewSD>
            <Atom scale={0.5} />
            <Swarm count={2000} />
          </ViewSD>
        </section>
        {/* informacion relevenate respecto a esto */}
        <section className="w-screen h-screen relative">
          segunda section
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </>
  );
}
