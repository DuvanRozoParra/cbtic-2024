"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type CarrouselProps = {
  images: string[];
};

export const CarrouselImages: React.FC<CarrouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToImage = (index: number): void => {
    setCurrentIndex(index);
  };

  const getTransform = (index: number) => {
    const offset = (index - currentIndex + images.length) % images.length;

    if (offset === 0) {
      return "translate-y-0 scale-100 opacity-100 z-10";
    }
    if (offset === 1) {
      return "translate-y-[10%] scale-90 opacity-80 z-5";  // Mejora la visibilidad de la imagen detrás
    }
    if (offset === images.length - 1) {
      return "translate-y-[-10%] scale-90 opacity-80 z-5"; // Ajuste para la imagen anterior
    }

    return "translate-y-full opacity-0 z-0"; // Asegura que las imágenes no visibles queden al fondo
  };

  const getImageStyle = (index: number) => {
    const offset = (index - currentIndex + images.length) % images.length;
    if (offset === 0) return "";
    return "filter blur-sm";  // Puedes ajustar el nivel de desenfoque si es necesario
  };

  return (
    <div
      className="w-full h-full overflow-hidden relative lg:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[60%] mx-auto"  // Ajuste de ancho para pantallas xl y 2xl
      style={{
        perspective: "150px", // Incrementa el valor para dar más efecto 3D en pantallas grandes
      }}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {images.map((image, index) => {
          const transformClass = getTransform(index);
          const imageStyle = getImageStyle(index);

          return (
            <div
              key={index}
              className={`absolute w-full h-full transition-all duration-500 ease-in-out ${transformClass} ${imageStyle} flex justify-center items-center`}
            >
              <Card className="w-full h-full border-none">
                <CardContent className="p-0 h-full">
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    width={800}
                    height={800}
                    className="w-full h-full object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer  ${
              index === currentIndex
                ? "bg-[#FC4442]"
                : "border-2 border-[#FC4442] bg-transparent hover:bg-[#FC4442]"
            } transition-colors duration-300`}
          />
        ))}
      </div>
    </div>
  );
};
