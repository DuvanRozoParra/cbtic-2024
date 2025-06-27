"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AboutMisionVision } from "./aboutItems/aboutMision";
import { AboutIntro } from "./aboutItems/aboutintro";
import { TeamSection } from "./aboutItems/aboutMembers";

export function CarouselAbout() {
  
  return (
    <main className="z-10 flex flex-col items-center p-8 gap-5 bg-[#090910] overflow-x-hidden">

      <div className="top-0 left-0 bg-radial-gradient-about -z-10"></div>

      <div className="w-full flex justify-center items-center  flex-col gap-4 z-10 ">
          <AboutIntro/>
      </div>
      <div className="relative flex flex-col sm:flex-row gap-4">
          <AboutMisionVision/>
      </div>
      <section className="body-font flex justify-center items-center flex-col gap-2 w-full z-10 mb-10">
        <TeamSection />
      </section>
      <section className="w-full relative text-white flex flex-col sm:flex-row justify-start items-stretch overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/FondoAbout.webp"
            alt="fondo unimeta"
            fill
            className="w-full object-cover filter opacity-85"
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

          <p className="w-full text-sm sm:text-base break-words pr-10">
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
        <div className="relative z-10 w-full sm:w-2/3 p-10  bg-opacity-50">
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
            <details className="pb-20">
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
