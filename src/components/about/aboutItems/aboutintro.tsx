import { CarrouselImages } from "@/components/carrouselImage";
import Image from "next/image";


export const AboutIntro = () => {
  return (
    <div className="w-full relative text-white mt-10">
      <div className="absolute inset-0 w-full h-2/4 sm:h-full  z-0">
        <Image
          src={"/images/FondoAbout.webp"}
          alt="fondo unimeta"
          fill
          className=" md:object-top object-contain opacity-85 rounded-lg"
        />
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start justify-center">

        <div className="w-full sm:w-1/2 h-[400px] sm:h-[500px] xl:h-[600px] relative order-1 sm:order-none px-4 sm:pl-12 flex justify-center items-center">
          <div className="relative w-full h-full mb-10 mt-14 sm:mt-10 flex justify-center items-center">
            <Image
              src={"/images/META-SILUETA-1.webp"}
              alt="meta silueta"
              fill
              sizes="(max-width: 840px) 100vw, 100vw"
              className="object-cover object-center max-w-[90%] sm:max-w-full"
              priority
            />
          </div>
        </div>

        <div className="w-full sm:w-1/2 px-8 sm:px-8 lg:pr-28 py-6 sm:py-10 order-2 sm:order-none">
          <h1 className="text-3xl sm:text-4xl font-bold  md:mb-32 text-center">
            Sobre Nosotros
          </h1>
          <p className="text-sm sm:text-base leading-relaxed sm:leading-loose text-justify sm:bg-transparent p-4 sm:p-0 rounded-lg">
            El Departamento de Ciencias Básicas de la Corporación Universitaria del Meta (UNIMETA) hace parte de la Escuela de Ingeniería y se dedica a la docencia, investigación y proyección social en áreas como las ciencias naturales, matemáticas, química y biología. Su misión es brindar una formación integral a futuros ingenieros, economistas y administradores de empresa, dotándolos de herramientas para enfrentar los desafíos del mundo actual.
            <br /><br />
            Como pilar fundamental de la academia en UNIMETA, el departamento impulsa un enfoque cuantitativo, cualitativo y ambientalmente responsable.
          </p>
        </div>
      </div>

      <section className="flex flex-col items-center gap-10 w-full  h-[600px] mt-8 mb-10">
        <h1 className="text-center text-4xl text-white md:mb-10 md:mt-8 mt-20 font-semibold">
          Descubre Nuestra Comunidad Académica
        </h1>
        <CarrouselImages
          images={[
            "/images/testimages/Imagentest1.png",
            "/images/testimages/imagentest2.png",
            "/images/testimages/imagentest3.png",
          ]}
        />
      </section>
    </div>
  );
};


