import { CarrouselImages } from "@/components/carrouselImage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test",
};

const ArrayImages = [
  "/images/testimages/imagetest1.jpg",
  "/images/testimages/imagetest2.jpg",
  "/images/testimages/imagetest3.jpg",
];

export default function Home() {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="w-3/4 h-2/3 "> 
        <CarrouselImages images={ArrayImages} />
      </div>
    </section>
  );
}