import { ViewSD } from "@layout";
import { Metadata } from "next";
import { View3d } from "@components/landing";
import { Button } from "@/components/ui/button";
import { Atom } from "lucide-react";

export const metadata: Metadata = {
  title: "Home",
  description: "Unlock the Secrets of the Universe with Physics!",
};

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-8 row-start-2 items-center w-screen h-screen backgroundCosmo">
        <section className="w-screen h-screen relative">
          <section className="w-full h-full absolute flex flex-col gap-8 row-start-2 p-10 md:justify-center">
            <section className="w-full h-full flex flex-col justify-center gap-2">
              <h1 className="text-cyan-50 font-roboto font-extrabold text-6xl sm:w-1/2 md:w-1/3">
                Unlock the Secrets of the Universe with Physics!
              </h1>
              <Button className="sm:w-1/3 md:w-1/4 hover:scale-110 inset-full z-50 bg-amber-400 transition-transform hover:transition-transform">
                <p className="font-roboto text-gray-900 font-semibold text-lg hover:text-cyan-50">
                  Get Started!
                </p>
              </Button>
            </section>
            <section className="w-full flex flex-row items-end justify-end">
              <p className="font-roboto font-semibold text-cyan-50 flex flex-row gap-2">
                <Atom />
                CBTIC
              </p>
            </section>
          </section>
          <ViewSD>
            <View3d />
          </ViewSD>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </>
  );
}
