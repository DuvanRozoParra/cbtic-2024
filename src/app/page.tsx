
import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import { CanvasModel } from "@/components/LandingPageOwl/CanvasModel/CanvasModel";


export const metadata: Metadata = {
  title: "Landing Page",
};

export default function Home() {
  return (
    <section className="w-full min-h-screen text-white bg-[#090910] overflow-x-hidden relative">
      <div className="absolute inset-0 bg-radial-gradient"></div>

      <div className="absolute w-full h-[75vh] top-40 sm:w-20 md:top-0 md:left-0 md:w-2/5 md:h-full md:ml-24 z-0 flex flex-col items-center md:items-start justify-end md:justify-center px-4">
        <div className="text-center md:text-left">
          <h1 className="text-2xl sm:text-4xl md:text-4xl mt-16 sm:mt-0 lg:text-5xl font-semibold leading-tight font-outfit">
            Descubre los secretos del universo con la física
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl tracking-wide font-poppins">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>
        </div>
        <div className="mt-6">
          <Button 
            className="p-7  bg-transparent border-2 hover:bg-[#FC4442] transform hover:scale-95 transition-transform duration-300 ease-in-out"
            style={{
              borderImage: "linear-gradient(45deg, #FC4442, #F0E19E) 1",
              borderImageSlice: 1, 
            }}
            >
            <p className="font-poppins text-lg">¡Comienza ahora!</p>
          </Button>
        </div>
      </div>

      <div className="absolute w-full top-10 h-[50vh] md:hidden z-0">
        <Image 
          src={"/images/Fondo_Buho.png"} 
          alt="Landing Page Background" 
          width={800}
          height={800}
        />
      </div>
      <div className="w-full h-[65vh]  top-10 md:h-screen md:ml-56 z-20 flex items-center pointer-events-none">
        <Suspense fallback={null}>
          <CanvasModel />
        </Suspense>
      </div>
    </section>
  );
}
