import { Metadata } from "next";
import { NewsLanding } from "@/components/news";

export const metadata: Metadata = {
  title: "Noticias",
  description:"",
};

export default function Home() {
  return (
    <section>
      <NewsLanding/>
    </section>
  );
}