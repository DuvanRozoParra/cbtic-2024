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
    <section className="flex flex-col gap-8 row-start-2 items-center w-screen h-screen snap-y snap-mandatory backgroundCosmo">
      {/* Sección 1 */}
      <section className="h-screen w-full snap-start flex items-center justify-center relative">
        <section className="absolute w-full h-full flex flex-col gap-8 p-10 md:justify-center">
          <section className="w-full h-3/4 flex flex-col justify-between items-center gap-2">
            <h1 className="text-cyan-50 font-roboto scroll-m-20 text-4xl font-extrabold tracking-tight text-center lg:text-8xl sm:w-1/2 md:w-1/2 md:max-w-[800px]">
              Descubre los secretos del universo con la fisica!
            </h1>
            <Button className="sm:w-60 md:w-60 h-12 hover:scale-110 inset-full z-50 bg-amber-400 transition-transform hover:transition-transform">
              <p className="font-roboto text-gray-900 font-semibold text-lg hover:text-cyan-50">
                comienza ahora!
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

      {/* Sección 2 
      <section className="w-full h-screen flex items-center justify-center relative">
        <p className="text-cyan-50 font-roboto font-semibold text-xl">
          Segunda sección de contenido relevante.
        </p>
      </section>
          */}
    </section>
  );
}
