"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CarrouselImages } from "../carrouselImage";
import { Card, CardContent } from "../ui/card";

export function CarouselAbout() {
  const ArrayEquipo = [
    {
      name: "DUVAN ALBERTO ROZO PARRA",
      image: "/images/Duvan.png",
      estudios: [
        "Ingenieria de sistemas",
      ],
      work: "Estudiante",
      facebook: "",
      instagram: "",
      twitter: "",
      cv: ""
    },
    {
      name: " SEBASTIAN CALCHON SANCHEZ",
      image: "/images/Sebastian.png",
      estudios: [
        "Ingenieria de sistemas",
      ],
      work: "Estudiante",
      facebook: "",
      instagram: "",
      twitter: ""
    },
    {
      name: " JUAN DIEGO GUZMAN MASSO",
      image: "/images/Guzman.png",
      estudios: [
        "Ingenieria de sistemas",
      ],
      work: "Estudiante",
      facebook: "",
      instagram: "",
      twitter: ""
    },


  ];

  const [activeTab, setActiveTab] = useState("mision");
  return (
    <main className="z-10 flex flex-col items-center  p-8 gap-5 bg-[#090910]">

      <div className="top-0 left-0 bg-radial-gradient-about -z-10"></div>

      <div className="w-full flex justify-center items-center  flex-col gap-4 z-10 ">
        <div className="w-full relative text-white mt-10">
          <div className="absolute inset-0 w-full h-full sm:h-full z-0">
            <Image
              src={"/images/FondoAbout.webp"}
              alt="fondo unimeta"
              fill
              className="md:object-top object-contain filter backdrop-blur-sm opacity-85 rounded-lg"
            />
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start justify-center">
            <div className="w-full sm:w-1/2 h-[400px] sm:h-[500px] xl:h-[600px] relative order-1 sm:order-none px-4 sm:pl-12 flex justify-center items-center">
              <div className="relative w-full h-full mb-10 mt-8 sm:mt-10 flex justify-center items-center">
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
              <h1 className="text-3xl sm:text-4xl font-bold md-10 md:mb-28 text-center sm:text-left">
                Sobre Nosotros
              </h1>
              <p className="text-sm sm:text-base leading-relaxed sm:leading-loose text-justify sm:bg-transparent p-4 sm:p-0 rounded-lg">
                El Departamento de Ciencias Básicas de la Corporación Universitaria del Meta (UNIMETA) hace parte de la Escuela de Ingeniería y se dedica a la docencia, investigación y proyección social en áreas como las ciencias naturales, matemáticas, química y biología. Su misión es brindar una formación integral a futuros ingenieros, economistas y administradores de empresa, dotándolos de herramientas para enfrentar los desafíos del mundo actual.

                Como pilar fundamental de la academia en UNIMETA, el departamento impulsa un enfoque cuantitativo, cualitativo y ambientalmente responsable.
              </p>
            </div>
          </div>
        </div>
        <section className="flex flex-col items-center gap-10 w-full md:4/5 h-[600px] mt-8 mb-10">
          <h1 className=" text-center text-4xl text-white md:mb-10  md:mt-8 mt-0 font-semibold">
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
      <div className="relative flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2 relative ">
          <Image
            src="/images/Mision_vision.webp"
            alt="Fondo Misión y Visión"
            width={500}
            height={500}
            className="object-contain rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col  bg-opacity-50 p-0 sm:p-2 ">
            <div className="flex justify-center gap-4 space-x-5 sm:space-x-20 md:space-x-20 mr-20 mb-10 md:mb-4 ">
              <button
                onClick={() => setActiveTab("mision")}
                className={`text-xl font-bold ${activeTab === "mision"
                  ? "text-white"
                  : "text-[#696969] hover:text-[#FC4442]"
                  }`}
              >
                Misión
              </button>
              <button
                onClick={() => setActiveTab("vision")}
                className={`text-xl font-bold ${activeTab === "vision"
                  ? "text-white"
                  : "text-[#696969] hover:text-[#FC4442]"
                  }`}
              >
                Visión
              </button>
            </div>
            <div className="flex-grow flex items-center justify-center">
              <div className="text-sm text-white text-center lg:text-base md:text-base sm:text-sm  px-2 mb-20">
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
        <div className="w-full sm:w-1/2 mt-10">
          <Image
            src="/images/AboutImage.png"
            alt="Imagen adicional"
            width={480}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <section className="body-font flex justify-center items-center flex-col gap-2 w-full z-10 mb-10">
        <h1 className="text-center text-4xl text-white font-semibold mb-10 ">
          Equipo de trabajo
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-4">
          {ArrayEquipo.map((elemento, index) => (
            <Card
              key={index}
              backgroundImage="/images/Card_Background.png"
              className="min-w-2/3 w-full h-full transform transition-transform overflow-hidden duration-200 ease-in-out hover:scale-105 active:scale-100"
            >
              <CardContent className="relative text-white flex flex-col  ml-2 p-10 lg:p-7 md:p-10 sm:p-10 h-full">
                <div className="flex flex-col lg:flex-row lg:items-center items-center md:items-start h-full">
                  <div className="sm:w-1/4 md:w-2/4 lg:w-3/5 w-3/4 mr-28 text-start sm:mr-32 md:pl-15 lg:text-left lg:pl-5 lg:mr-5 z-10">
                    <h3 className="text-base sm:text-base md:text-lg font-semibold mb-4">{elemento.name}</h3>
                    <div className="space-y-2 text-sm">
                      <p className="font-semibold">Formación: {elemento.work}</p>
                      {elemento.estudios.map((estudio, i) => (
                        <p key={i} className="break-words">Carrera: {estudio}</p>
                      ))}
                    </div>
                    <div className="flex justify-start sm:justify-center md:justify-center gap-2 mt-6 mr-16">
                      <a href={elemento.facebook} target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/images/Facebook.png"
                          alt="Facebook"
                          width={30}
                          height={30}
                          className="cursor-pointer"
                        />
                      </a>
                      <a href={elemento.twitter} target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/images/Twitter.png"
                          alt="Twitter"
                          width={30}
                          height={30}
                          className="cursor-pointer"
                        />
                      </a>
                      <a href={elemento.instagram} target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/images/instagram.png"
                          alt="Instagram"
                          width={30}
                          height={30}
                          className="cursor-pointer"
                        />
                      </a>
                    </div>

                    <a href={elemento.cv} className="inline-block mt-4">
                      <button className="py-2 px-6 rounded-full bg-transparent border-[#F0E19E] border-2 text-white hover:bg-[#F0E19E] hover:text-black transition-colors duration-200">
                        Ver CV
                      </button>
                    </a>
                  </div>
                  <div className="w-2/3 h-2/3 sm:h-full md:h-full lg-h-full absolute ml-36  lg:mt-0 z-0">
                    <Image
                      src={elemento.image}
                      alt={`Foto de perfil de ${elemento.name}`}
                      className="object-contain"
                      fill
                      sizes=" 100% 100%"
                    />
                  </div>

                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="w-full relative text-white flex flex-col sm:flex-row justify-start items-stretch overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/FondoAbout.webp"
            alt="fondo unimeta"
            fill
            className="w-full object-cover filter backdrop-blur-sm opacity-85"
          />
        </div>

        <div className="relative z-10 w-full sm:w-1/2 p-10 pr-2 text-justify md:pl-16 sm:pl-8 md:mb-10 bg-opacity-50 object-contain">
          <div className="relative w-24 sm:w-1/4 h-24 sm:h-32 mb-0">
            <Image
              src="/images/Techlogo.png"
              alt="logo"
              fill
              className="object-contain"
            />
          </div>

          <p className="w-full text-sm sm:text-base break-words">
            Lorem ipsum dolor sit amet consectetur. Erat donec eleifend vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu tempus hendrerit. Non donec ut aenean placerat pulvinar quis.
          </p>

          <div className="flex gap-4 mt-6">
            <a href="" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/Facebook.png"
                alt="Facebook"
                width={25}
                height={25}
                className="cursor-pointer"
              />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/Twitter.png"
                alt="Twitter"
                width={25}
                height={25}
                className="cursor-pointer"
              />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/instagram.png"
                alt="Instagram"
                width={25}
                height={25}
                className="cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="relative z-10 w-full sm:w-2/3 p-6 sm:p-10 bg-opacity-50">
          <div className="block sm:hidden pb-60">
            <details className="mb-4">
              <summary className="cursor-pointer text-lg font-bold">Navegacion</summary>
              <div className="mt-2">
                <p className="text-sm">Sobre Nosotros</p>
                <p className="text-sm">Preguntas</p>
                <p className="text-sm">Noticias</p>
                <p className="text-sm">Proyectos</p>
              </div>
            </details>
            <details className="mb-4">
              <summary className="cursor-pointer text-lg font-bold">Recursos</summary>
              <div className="mt-2">
                <p className="text-sm">Sobre Nosotros</p>
                <p className="text-sm">Preguntas</p>
                <p className="text-sm">Noticias</p>
                <p className="text-sm">Proyectos</p>
              </div>
            </details>
            <details className="mb-4">
              <summary className="cursor-pointer text-lg font-bold">Contactos</summary>
              <div className="mt-2">
                <p className="text-sm">Dirección: Calle 123 #45-67, Barrio Centro, Ciudad</p>
                <p className="text-sm">Teléfono: +57 312 345 6789</p>
                <p className="text-sm">Correo Electrónico: contacto@ejemplo.com</p>
              </div>
            </details>
          </div>
          <div className="hidden sm:flex flex-row flex-wrap md:gap-8 md:mt-4 md:mb-32 sm:mb-28">
            <div className="flex flex-col flex-1">
              <h3 className="text-lg font-bold mb-2">Navegacion</h3>
              <p className="text-sm break-words">Sobre Nosotros</p>
              <p className="text-sm break-words">Preguntas</p>
              <p className="text-sm break-words">Noticias</p>
              <p className="text-sm break-words">Proyectos</p>
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-lg font-bold mb-2">Recursos</h3>
              <p className="text-sm break-words">Sobre Nosotros</p>
              <p className="text-sm break-words">Preguntas</p>
              <p className="text-sm break-words">Noticias</p>
              <p className="text-sm break-words">Proyectos</p>
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-lg font-bold mb-2">Contactos</h3>
              <p className="text-sm break-words">Dirección: Calle 123 #45-67, Barrio Centro, Ciudad</p>
              <p className="text-sm break-words">Teléfono: +57 312 345 6789</p>
              <p className="text-sm break-words">Correo Electrónico: contacto@ejemplo.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
