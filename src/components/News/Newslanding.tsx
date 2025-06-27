"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import noticias from "./News.json";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export const NewsLanding = () => {
  const noticiasAltas = noticias.filter(noticia => noticia.importancia === "alta");
  const [noticiaActual, setNoticiaActual] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (noticiasAltas.length === 0) return;

    let timeoutId: NodeJS.Timeout;
    const intervalo = setInterval(() => {
      setFade(false);
      timeoutId = setTimeout(() => {
        setNoticiaActual((prevIndex) =>
          prevIndex === noticiasAltas.length - 1 ? 0 : prevIndex + 1
        );
      }, 200);
    }, 5000);

    return () => {
      clearInterval(intervalo);
      clearTimeout(timeoutId);
    };
  }, [noticiasAltas.length]);
  useEffect(() => {
    setFade(true);
  }, [noticiaActual]);

  const primeraNoticia = noticiasAltas[noticiaActual];

  return (
    <main className="w-full min-h-screen text-white bg-[#090910] overflow-x-hidden relative p-5 sm:p-20 md:p-20 items-center justify-center">
      <div className="absolute inset-0 bg-radial-gradient -z-10"></div>
      {noticiasAltas.length > 0 && (
        <section className="mb-32 md:mb-28 text-start relative mt-16">
          <h1 className="text-5xl font-bold mb-16 md:mb-28 ml-5 ">
            Últimas Noticias
          </h1>
          <div className={`transition-opacity duration-500 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}>
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

              <Link href={`/news/${primeraNoticia.id}`}>
                <Card
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 38px), calc(120% - 38px) 100%, 0 100%, 0 40px, 40px 0)",
                  }}
                  className="h-full mt-44 md:mt-20 relative transform transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-gradient-to-b from-[#46282d] to-[#451c21] active:scale-100 w-full 
                            md:w-5/6 max-w-3xl z-20 mx-auto md:ml-12 bg-opacity-90 cursor-pointer bg-[#150c13] border-2 border-[#FC4442]"          
                >
                  <div className="absolute -top-4 -left-8 w-20 h-10 border-b-4 border-[#FC4442] transform -rotate-45" />
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
              </Link>
            </div>
          </div>
        </section>
      )}
      <section>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full "
        >
          <CarouselContent>
            {noticias.map((noticia) => (
              <CarouselItem key={noticia.id} className=" basis-4/5 md:basis-2/3 lg:basis-1/3">
                <Link href={`/news/${noticia.id}`}>
                  <Card
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 100% calc(100% - 38px), calc(120% - 38px) 100%, 0 100%, 0 40px, 40px 0)",
                    }}
                    className="h-full relative transform transition-transform duration-200 ease-in-out hover:scale-95 active:scale-100 w-full max-w-xl object-contain opacity-80 z-20 cursor-pointer bg-[#150c13] border-2 border-[#FC4442]
                    hover:bg-gradient-to-b from-[#46282d] to-[#451c21]"
                  >
                    <div className="absolute -top-4 -left-8 w-20 h-10 border-b-4 border-[#FC4442] transform -rotate-45" />
                    <CardContent className="flex flex-col w-full">
                      <div className="w-full">
                        <Image
                          src={noticia.ImagenNoticia}
                          alt={noticia.TituloNoticia}
                          width={600}
                          height={600}
                          className="object-contain w-full"
                        />
                      </div>
                      <div className="text-white text-left px-5 py-2 w-full ">
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
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </main>
  );
};