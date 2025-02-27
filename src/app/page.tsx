import { CanvasModel } from "@/components/LandingPageOwl/CanvasModel/CanvasModel";
import { Button } from "@/components/ui/button";
import { Atom } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing Page",
};

export default function Home() {
  return (
    <section className="w-full min-h-screen md:h-screen flex flex-col items-center justify-center text-white relative bg-[#1B1B2A] overflow-auto">
      <div className="absolute inset-0 bg-radial-gradient"></div>

      <div className="w-full sm:w-auto order-first sm:absolute sm:top-8 sm:left-5 lg:top-10 lg:left-20 z-20 px-4 py-4 sm:px-0 sm:py-0">
        <p className="font-roboto font-semibold text-cyan-50 flex items-center gap-2 ">
          <Atom />
          CBTIC
        </p>
      </div>

      <div className="flex-1 w-full flex flex-col md:flex-row items-center justify-center">
        <div className="w-full h-full flex justify-center items-center md:order-2 sm:order-1 z-10">
          <CanvasModel />
        </div>

        <div className="w-full h-full z-20 flex flex-col items-center xl:items-start lg:items-start md:items-start sm:items-center justify-center md:order-1 sm:order-2 md:ml-48 sm:ml-12 lg:ml-56 px-4 sm:p-8">
          <div className=" text-center lg:text-start xl:text-start md:text-left sm:text-center font-poppins">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide">
              Descubre los secretos del universo con la física
            </h1>
            <p className="mt-4 text-base sm:text-lg lg:text-xl tracking-wide">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
              "arregle la landing page calchon"
            </p>
          </div>
          <div className="mt-6">
            <Button className="p-7 border-[#FC4442] bg-transparent border-2 hover:bg-[#FC4442] transform hover:scale-95 transition-transform duration-300 ease-in-out">
              <p className="font-poppins text-lg">¡Comienza ahora!</p>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
