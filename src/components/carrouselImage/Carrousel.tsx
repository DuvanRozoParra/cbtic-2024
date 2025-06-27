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
      return "translate-y-[10%] scale-90 opacity-80 z-5";
    }
    if (offset === images.length - 1) {
      return "translate-y-[-10%] scale-90 opacity-80 z-5";
    }

    return "translate-y-full opacity-0 z-0";
  };

  const getImageStyle = (index: number) => {
    const offset = (index - currentIndex + images.length) % images.length;
    if (offset === 0) return "";
    return;
  };

  return (
    <div
      className="w-full h-full overflow-hidden relative lg:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[60%] mx-auto"
      style={{
        perspective: "150px",
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
                    width={900}
                    height={900}
                    className="w-full h-full object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-20 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer transition-colors duration-300 ${index === currentIndex
                ? "bg-gradient-to-b from-[#F1D597] to-[#FC4442]" 
                : "bg-transparent" 
              }`}
            style={
              index !== currentIndex
                ? {
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%", 
                  border: "2px solid transparent", 
                  background: "linear-gradient(black, black) padding-box, linear-gradient(45deg, #FC4442, #F0E19E) border-box",
                  WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
                  maskImage: "radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
                }
                : {}
            }
          />
        ))}
      </div>
    </div>
  );
};
