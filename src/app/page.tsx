import { CanvasModel } from "@/components/LandingPageOwl/CanvasModel/CanvasModel";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing Page",
};

export default function Home() {
  return (
    <section className="w-full min-h-screen text-white bg-[#090910] overflow-x-hidden relative">
      <div className="absolute inset-0 bg-radial-gradient"></div>


      <div className="absolute w-full h-[40%] md:top-0 md:left-0 md:w-2/5 md:h-full md:ml-24 z-20 flex flex-col items-center md:items-start justify-center px-4 ">
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-4xl mt-16 sm:mt-0 lg:text-5xl font-semibold leading-tight font-outfit">
            Descubre los secretos del universo con la física
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl tracking-wide font-poppins">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>
        </div>
        <div className="mt-6">
          <Button className="p-7 border-[#FC4442] bg-transparent border-2 hover:bg-[#FC4442] transform hover:scale-95 transition-transform duration-300 ease-in-out">
            <p className="font-poppins text-lg">¡Comienza ahora!</p>
          </Button>
        </div>
      </div>
      <div className="w-full h-[100vh] top-20 md:h-screen md:ml-56 z-10 flex items-center pointer-events-none">
        <CanvasModel />
      </div>
    </section>
  );
}
