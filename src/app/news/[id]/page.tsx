"use client"; 
import { useParams } from "next/navigation";
import noticias from "@/components/News/News.json";
import Image from "next/image";

export default function NewsInfo() {
  const { id } = useParams();
  const noticia = noticias.find(n => n.id === Number(id));


  if (!noticia) {
    return <div>Noticia no encontrada</div>;
  }

  return (
    <main >
      <article >
        <h1 >{noticia.TituloNoticia}</h1>
        
        <div >
          <Image
            src={noticia.ImagenNoticia}
            alt={noticia.TituloNoticia}
            fill
            
          />
        </div>

        <div >
          <div >
            <p>{noticia.Autor}</p>
            <span>•</span>
            <p>
              {new Date(noticia.fecha).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </p>
          </div>

          <div>
            {noticia.Noticia|| noticia.Resumen}
          </div>
        </div>
      </article>
    </main>
  );
}