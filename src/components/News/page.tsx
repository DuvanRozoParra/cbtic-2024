"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import noticias from "./News.json";

export const NewsLanding = () => {
  const [noticiaActual, setNoticiaActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setNoticiaActual((prevIndex) =>
        prevIndex === noticias.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(intervalo); 
  }, []);

  const primeraNoticia = noticias[noticiaActual]; 
  return (
    <main className="w-full min-h-screen text-white bg-[#090910] overflow-x-hidden relative p-5 sm:p-20 md:p-20 items-center justify-center">
      <div className="absolute inset-0 bg-radial-gradient -z-10"></div>

      <section className="mb-32 md:mb-28 text-start relative mt-16">
        <h1 className="text-5xl  font-bold mb-20 ml-5 md:ml-10">
          Últimas Noticias
        </h1>
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="absolute w-full h-[300px] md:w-3/4 md:h-[120%] left-10 md:left-1/4 md:-top-10 z-10 overflow-hidden">
            <Image
              src={primeraNoticia.ImagenNoticia}
              alt={primeraNoticia.TituloNoticia}
              fill
              className="object-cover md:object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090910] via-transparent to-transparent md:hidden" />
          </div>

          <Card
            backgroundImage="/images/ContainerTeacher.png"
            className=" h-full mt-44 md:mt-20 relative transform transition-transform 
                      duration-200 ease-in-out hover:scale-105 active:scale-100 w-full 
                      md:w-5/6 max-w-3xl  z-20 
                      mx-auto md:ml-12 opacity-85"
          >
            <CardContent className="flex items-center h-2/3 w-full">
              <div className="text-white text-left w-full p-6">
                <h3 className="font-light text-sm md:text-base mb-2">
                  {new Date(primeraNoticia.fecha).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </h3>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {primeraNoticia.TituloNoticia}
                </h2>
                <p className="text-gray-300 text-base md:text-lg">
                  {primeraNoticia.Resumen}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-5 sm:gap-5 md:grid-cols-3">
        {noticias
          .filter((_, index) => index !== noticiaActual)
          .map((noticia, index) => (
            <Card
              key={index}
              backgroundImage="/images/ContainerTeacher.png"
              className=" h-full relative transform transition-transform duration-200 ease-in-out hover:scale-105 active:scale-100 w-full max-w-xl object-contain opacity-80 z-20"
            >
              <CardContent className="flex flex-col items-center w-full">
                <div className="w-full">
                  <Image
                    src={noticia.ImagenNoticia}
                    alt={noticia.TituloNoticia}
                    width={400}
                    height={400}
                    className="object-cover w-full p-4"
                    
                  /> 
                </div>
                <div className="text-white text-left w-full p-6">
                  <h2 className="text-2xl mb-2 font-semibold">
                    {noticia.TituloNoticia}
                  </h2>
                  <p className="text-gray-300">{noticia.Autor}</p>
                  <p className="text-gray-400 text-sm mt-2">
                    {new Date(noticia.fecha).toLocaleDateString("es-ES")}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
      </section>
    </main>
  );
};