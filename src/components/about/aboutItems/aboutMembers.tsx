import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";


const teamData = [
    {
        name: "DUVAN ALBERTO ROZO PARRA",
        image: "/images/Duvan.png",
        estudios: ["Ingeniería de Sistemas"],
        work: "Estudiante",
        facebook: "",
        instagram: "",
        twitter: "",
        cv: ""
    },
    {
        name: "SEBASTIAN CALCHON SANCHEZ",
        image: "/images/Sebastian.png",
        estudios: ["Ingeniería de Sistemas"],
        work: "Estudiante",
        facebook: "",
        instagram: "",
        twitter: ""
    },
    {
        name: "JUAN DIEGO GUZMAN MASSO",
        image: "/images/Guzman2.png",
        estudios: ["Ingeniería de Sistemas"],
        work: "Estudiante",
        facebook: "",
        instagram: "",
        twitter: ""
    }
];

export const TeamSection = () => {
    return (
        <section className="w-full text-white text-center ">
            <h1 className="text-4xl font-semibold mb-10">Equipo de trabajo</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full  max-w-7xl mx-auto">
                {teamData.map((member, index) => (
                    <Card
                        key={index}
                        style={{
                            clipPath:
                                "polygon(38px 0, calc(100% - 38px) 0, 100% 38px, 100% calc(100% - 38px), calc(100% - 38px) 100%, 38px 100%, 0 calc(100% - 38px), 0 38px)",
                        }}
                        className="relative transform transition-transform duration-200 ease-in-out hover:scale-105 active:scale-100 w-full h-full overflow-hidden bg-[#150c13] border-2 border-[#FC4442] 
                        hover:bg-gradient-to-b from-[#46282d] to-[#451c21] pt-5"
                        
                    >
                        <div className="absolute -top-4 -left-9 w-20 h-10 border-b-4 border-[#FC4442] transform -rotate-45" />
                        <div className="absolute -top-4 -right-9 w-20 h-10 border-b-4 border-[#FC4442] transform rotate-45" />
                        <div className="absolute -bottom-[22px] -right-7 w-20 h-10 border-t-4 border-[#FC4442] transform -rotate-45" />
                        <div className="absolute -bottom-[22px] -left-7 w-20 h-10 border-t-4 border-[#FC4442] transform rotate-45" />

                        <CardContent className="relative text-white flex flex-col  py-10 lg:py-16 md:py-14 sm:py-10 h-full">
                            <div className="flex flex-col lg:flex-row lg:items-center items-center md:items-start h-full">
                                <div className="sm:w-2/3 md:w-3/5 w-3/4 text-start mr-14 lg:text-left lg:pl-5  z-10">
                                    <h3 className="text-lg font-semibold mb-4">{member.name}</h3>
                                    <div className="space-y-2 text-sm ">
                                        <p className="font-semibold">Formación: {member.work}</p>
                                        {member.estudios.map((estudio, i) => (
                                            <p key={i} className="break-words pr-8">Carrera: {estudio}</p>
                                        ))}
                                    </div>
                                    <div className="flex justify-start sm:justify-center md:justify-center gap-2 mt-6">
                                        {member.facebook && (
                                            <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                                                <Image src="/images/Facebook.png" alt="Facebook" width={30} height={30} className="cursor-pointer" />
                                            </a>
                                        )}
                                        {member.twitter && (
                                            <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                                                <Image src="/images/Twitter.png" alt="Twitter" width={30} height={30} className="cursor-pointer" />
                                            </a>
                                        )}
                                        {member.instagram && (
                                            <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                                                <Image src="/images/instagram.png" alt="Instagram" width={30} height={30} className="cursor-pointer" />
                                            </a>
                                        )}
                                    </div>


                                    {member.cv && (
                                        <a href={member.cv} className="inline-block mt-4">
                                            <button className="py-2 px-6 rounded-full bg-transparent border-[#F0E19E] border-2 text-white hover:bg-[#F0E19E] hover:text-black transition-colors duration-200">
                                                Ver CV
                                            </button>
                                        </a>
                                    )}
                                </div>

                                <div className="w-full h-full absolute left-1/3  z-0">
                                    <Image
                                        src={member.image}
                                        alt={`Foto de perfil de ${member.name}`}
                                        className="object-contain "
                                        fill
                                        sizes="100% 120%"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};


