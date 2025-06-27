import { useState } from "react";
import Image from "next/image";

export const AboutMisionVision = () => {
  const [activeTab, setActiveTab] = useState("mision");

  return (
    <div className="flex flex-col sm:flex-row w-full">

      <div className="w-full sm:w-1/2 sm:h-full relative">
        <Image
          src="/images/Mision_vision.webp"
          alt="Fondo Misión y Visión"
          width={500}
          height={600}
          className="object-contain rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col bg-opacity-50 p-0 sm:px-2">

          <div className="flex justify-center gap-5 space-x-10 sm:space-x-20 md:space-x-28 mr-20  mb-1 ">
            <button
              onClick={() => setActiveTab("mision")}
              className={`text-base sm:text-xl md:text-xl font-bold ${activeTab === "mision"
                ? "text-white"
                : "text-[#696969] hover:text-[#FC4442]"
                }`}
            >
              Misión
            </button>
            <button
              onClick={() => setActiveTab("vision")}
              className={`text-base sm:text-xl md:text-xl font-bold ${activeTab === "vision"
                ? "text-white"
                : "text-[#696969] hover:text-[#FC4442]"
                }`}
            >
              Visión
            </button>
          </div>
          <div className="flex-grow flex items-center justify-center">
            <div className="text-sm text-white text-center lg:text-base md:text-base sm:text-sm px-2 mb-20">
              {activeTab === "mision" && (
                <p>
                  Coadyuvar al desarrollo de planes, programas y proyectos de formación, investigación, extensión,
                  proyección social e internacionalización en el campo de las ciencias básicas con criterios de pertinencia,
                  calidad y excelencia con el fin de promover el avance científico y tecnológico de nuestra universidad,
                  nuestra región y el país.
                </p>
              )}
              {activeTab === "vision" && (
                <p>
                  El departamento será líder en formación e investigación en el campo de Ciencias Básicas en la UNIMETA,
                  promoviendo el interés y el acceso a las mismas, como base del desarrollo tecnológico y científico de
                  nuestra universidad, nuestra región y el país.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2  ml-10">
        <Image
          src="/images/AboutImage.png"
          alt="Imagen adicional"
          width={500}
          height={500}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

