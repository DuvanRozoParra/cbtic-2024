"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import noticias from "@/components/News/News.json";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function NewsInfo() {
  const { id } = useParams();
  const noticia = noticias.find((n) => n.id === Number(id));

  if (!noticia) {
    return <div>Noticia no encontrada</div>;
  }
  const otrasNoticias = noticias.filter((n) => n.id !== Number(id));

  return (
    <main className="w-full min-h-screen text-white bg-[#090910] relative">
      <div className="absolute inset-0 bg-radial-gradient -z-10"></div>
      <div className="max-w-screen-2xl mx-auto px-14 py-5 flex gap-8 pt-20">
        <article className="flex-1 max-w-6xl w-full relative space-y-2 md:space-y-8">
          <div className="relative w-full aspect-[1.5/1] md:aspect-[1.8/1] rounded-xl overflow-hidden">
            <Image
              src={noticia.ImagenNoticia}
              alt={noticia.TituloNoticia}
              fill
              className="object-cover md:object-contain"
              sizes="(max-width: 868px) 100vw, 100vw"
              priority
            />
          </div>

          <div className="flex items-center gap-4 p-4 border-y-4">
            <div className="relative w-20 h-20 sm:w-16 sm:h-16 shrink-0">
              <Image
                src={noticia.ImagenAutor}
                alt={noticia.Autor}
                fill
                className="object-cover rounded-full border-2  "
                sizes="(max-width: 768px) 100vw, 100vw"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-semibold">{noticia.Autor}</p>
              <p className="text-sm text-gray-400">
                {new Date(noticia.fecha).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}
              </p>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold !mb-8 px-4 md:px-0">
            {noticia.TituloNoticia}
          </h1>

          <div className="  mx-auto px-4 md:px-0 text-gray-300 text-lg leading-relaxed">
            {noticia.Noticia}
          </div>
        </article>

        <aside className="hidden md:flex md:w-1/3 pl-8 rounded-lg relative flex-col items-center justify-start">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-10 ">
            Otras Noticias
          </h2>
          <Carousel
            opts={{
              align: "start",
            }}
            orientation="vertical"
            className="w-full"
          >
            <CarouselContent className="-mt-1 h-[100vh]">
              {otrasNoticias.map((item) => (
                <CarouselItem key={item.id} className="pt-1 basis-1/4 md:basis-1/4">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col gap-2 p-4 text-white">
                        <div className="relative w-full h-40">
                          <Image
                            src={item.ImagenNoticia}
                            alt={item.TituloNoticia}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <Link href={`/news/${item.id}`}>
                          <div className="text-center">
                            <p className="font-bold text-base sm:text-lg md:text-2xl">
                              {item.TituloNoticia}
                            </p>
                            <p className="text-base text-gray-400">
                              {new Date(item.fecha).toLocaleDateString("es-ES", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </p>
                          </div>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </aside>
      </div>
    </main>
  );
}
