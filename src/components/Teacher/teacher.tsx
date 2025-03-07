import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";

type Teacher = {
  name: string;
  image: string;
  work: string;
}

const ArrayEquipo: Teacher[] = [
  {
    name: "MARÍA ALEJANDRA CRUZ DOMÍNGUEZ",
    image: "/images/Profesores/Maria_Alejandra_Cruz_Dominguez.png",
    work: "Jefe de Departamento Ciencias Básicas (E)",
  },
  {
    name: "ELIANA MARÍTZA TULCÁN MEJÍA",
    image: "/images/Profesores/Eliana_Maritza_Tulcan_Mejia.png",
    work: "Docente",
  },
  {
    name: "JOHAN RICARDO MORALES ORTÍZ",
    image: "/images/Profesores/Johan_Ricardo_Morales_Ortiz.png",
    work: "Jefe de Laboratorios",
  },
  {
    name: "HAZLITT ENERIETH NIÑO MENDIVELSO",
    image: "/images/Profesores/Hazlitt_Enerieth_Nino_Mendivelso.png",
    work: "Consejera de Ciencias Básicas",
  },
  {
    name: "MARIBEL DUQUE LÓPEZ",
    image: "/images/Profesores/Maribel_Duque_Lopez.png",
    work: "Docente",
  },
  {
    name: "JAVIER GUILLERMO BERNAL AGUILAR",
    image: "/images/Profesores/Javier_Guillermo_Bernal_Aguilar.png",
    work: "Docente",
  },
  {
    name: "DIEGO ANDRÉS PALTA PRADO",
    image: "/images/Profesores/Diego_Andres_Palta_Prado.png",
    work: "Docente",
  },
  {
    name: "DAVID FELIPE CASTAÑEDA ANGARITA",
    image: "/images/Profesores/David_Felipe_Castaneda_Angarita.png",
    work: "Docente",
  },
  {
    name: "SANTIAGO ALEJANDRO ZÚÑIGA MELO",
    image: "/images/Profesores/Santiago_Alejandro_Zuniga_Melo.png",
    work: "Docente",
  },
  {
    name: "FIDEL BAUTISTA RODRIGUEZ PUERTAS",
    image: "/images/Profesores/Fidel_Bautista_Rodríguez_Puertas.png",
    work: "Docente",
  },
  {
    name: "ESNEIDER LEANDRO GARAVITO PÉREZ",
    image: "/images/Profesores/Esneider_Leandro_Garavito_Perez.png",
    work: "Docente",
  },
  {
    name: "ALEJANDRO CALDERON VASQUEZ",
    image: "/images/Profesores/Alejandro_Calderon_Vasquez.png",
    work: "Docente",
  },
  {
    name: "JESUS ALEJANDRO GONZALEZ ROJAS",
    image: "/images/Profesores/Jesus_Alejando_Gonzalez_Rojas.png",
    work: "Docente",
  },
];

const Subdivide = (array: Teacher[]): Teacher[][] => {
  const grupos: Teacher[][] = [];
  for (let i = 0; i < array.length; i += 3) {
    grupos.push(array.slice(i, i + 3));
  }
  return grupos;
};

export function TeacherAbout() {
  const GroupCards = Subdivide(ArrayEquipo);

  return (
    <main className="relative flex flex-col p-8 gap-5 bg-[#090910] text-white justify-center items-center pt-16 min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient-teacher z-0"></div>
      <div className="w-4/5 h-40 md:h-40 flex justify-center items-center z-10">
        <div className="relative w-full h-full rounded-md overflow-hidden">
          <h1 className="absolute inset-0 flex items-center justify-center text-xl sm:text-3xl md:text-5xl font-bold">
            Nuestros Docentes
          </h1>
        </div>
      </div>

      <section className="w-full flex flex-col items-center justify-center gap-5 z-10">
        <div className="w-4/5 text-center mb-2">
          <p className="text-lg text-center">
            El equipo de docentes en Ciencias Básicas es el pilar fundamental de nuestra
            institución, comprometido con la formación integral de nuestros estudiantes.
            Con años de experiencia en sus respectivas áreas y un profundo amor por la
            enseñanza, nuestros docentes no solo transmiten conocimientos, sino que
            también inspiran el desarrollo de habilidades críticas y analíticas en cada
            uno de sus alumnos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-4/5 z-10">
          {GroupCards.map((grupo, groupIndex) => (
            <div key={groupIndex} className="space-y-8 relative">

              <div className="absolute -left-5 -translate-x-1/2 top-24  h-3/4 w-[2px] opacity-50 bg-white"></div>

              {grupo.map((elemento, index) => (
                <Card
                  backgroundImage="/images/ContainerTeacher.png"
                  key={index}
                  className="border-gray-300 relative transform transition-transform duration-200 ease-in-out hover:scale-105 active:scale-100 w-full object-contain"
                >
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2/3 h-[2px] w-8 bg-white"></div>


                  <CardContent className="flex items-center w-full">
                    <div className="relative w-2/4 sm:w-2/3 md:w-2/3 h-24 aspect-square overflow-hidden rounded-full mr-10">
                      <Image
                        src={elemento.image}
                        alt={`Foto de perfil de ${elemento.name}`}
                        className="object-contain"
                        fill
                        sizes="100%"
                      />
                    </div>

                    <div className="text-white text-left w-full ">
                      <h3 className="md:font-semibold sm:font-normal font-light text-xs sm:text-sm md:text-sm">{elemento.name}</h3>
                      <p className="text-xs sm:text-xs md:text-sm pb-2">{elemento.work}</p>
                      <Button className="w-2/3 sm:w-2/3 md:w-2/3 lg:w-1/2 pb-2 border-[#FC4442] bg-transparent border-2 hover:bg-[#FC4442] transform hover:scale-105 transition-transform duration-300 ease-in-out py-1 sm:py-2">
                        <p className="font-poppins text-[0.65rem] sm:text-xs md:text-sm">Descargar CV</p>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
