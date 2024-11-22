"use client";

import { ViewSD } from "@layout";
import { Atom, Swarm } from "@components";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-8 row-start-2 items-center w-screen h-screen">
        <section className="w-screen h-screen relative">
          <section className="w-full h-full absolute flex flex-col gap-8 row-start-2 items-center">
            <h1 className="">Crea tu mundo</h1>
          </section>
          <ViewSD>
            <Atom scale={0.5} />
            <Swarm count={2000} />
          </ViewSD>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </>
  );
}
