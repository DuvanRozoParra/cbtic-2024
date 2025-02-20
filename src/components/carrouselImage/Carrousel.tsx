"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

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
      return "translate-y-[15%] scale-75 opacity-100 z-0";
    }
    if (offset === images.length - 1) {
      return "translate-y-[-15%] scale-75 opacity-100 z-0";
    }

    return "translate-y-full opacity-0";
  };

  const getImageStyle = (index: number) => {
    const offset = (index - currentIndex + images.length) % images.length;

    if (offset === 0) return "";
    return "filter blur-sm";
  };

  return (
    <div
      className="w-full h-full overflow-hidden relative "
      style={{
        perspective: "40px",
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
              <Card className="w-full h-2/3 border-none">
                <CardContent className="p-0 h-full">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
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
            className={`w-4 h-4 rounded-full cursor-pointer ${
                index === currentIndex
                ? "bg-red-500"  
                : "border-2 border-red-500 bg-transparent hover:bg-red-500"  
            } transition-colors duration-300`}
          />
        ))}
      </div>
    </div>
  );
};
