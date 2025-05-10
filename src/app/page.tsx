import Header from "@/components/header/Header";
import Carousel from "@/components/carousel/Carousel";
import HeroText from "@/components/herotext/HeroText";    
import React from "react";
import Card from "@/components/cards/Card";
import Footer from "@/components/footer/LandingFooter";
import Insigne from "@/components/herotext/Insigne";
import Texttwo from "@/components/herotext/Texttwo";

const cursos = [
  {
    id: 1,
    title: "Curso de Programación ",
    description:
      "Aprende HTML, CSS y JavaScript desde cero. Este curso completo te llevará desde los conceptos básicos hasta técnicas avanzadas.",
    image: "images/product/product-05.jpg",
  },
  {
    id: 2,
    title: "Curso de React",
    description:
      "Domina el framework más popular para crear aplicaciones web modernas y dinámicas con React y Next.js.",
    image: "images/product/product-05.jpg",
  },
  {
    id: 3,
    title: "Curso de Diseño UX/UI",
    description:
      "Crea interfaces atractivas y funcionales. Descubre los principios del diseño de experiencia de usuario.",
    image: "images/product/product-05.jpg",
  },
  {
    id: 4,
    title: "Curso de Python",
    description:
      "Desde análisis de datos hasta inteligencia artificial, Python es la herramienta que necesitas para el futuro.",
    image: "images/product/product-05.jpg",
  },
  {
    id: 5,
    title: "Curso de Marketing Digital",
    description: "Aprende a posicionar tu marca y aumentar tus ventas con técnicas de marketing digital efectivas.",
    image: "images/product/product-05.jpg",
  },
  {
    id: 6,
    title: "Curso de Desarrollo Móvil",
    description: "Desarrolla aplicaciones móviles multiplataforma con las tecnologías más demandadas del mercado.",
    image: "images/product/product-05.jpg",
  },
  {
    id: 7,
    title: "Curso de Desarrollo Móvil",
    description: "Desarrolla aplicaciones móviles multiplataforma con las tecnologías más demandadas del mercado.",
    image: "images/product/product-05.jpg",
  },
  {
    id: 8,
    title: "Curso de Desarrollo Móvil",
    description: "Desarrolla aplicaciones móviles multiplataforma con las tecnologías más demandadas del mercado.",
    image: "images/product/product-05.jpg",
  },
]


export default function LandingPage() {
  return (
    <> 
        <Header />
        <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Texto a la izquierda */}
        <div className="w-full md:w-1/2">
          <HeroText />
        </div>

        {/* Carrusel a la derecha */}
        <div className="w-full md:w-1/2">
          <Carousel />
        </div>
      </div>

       {/* Imagen decorativa justo debajo del contenedor */}
      <div className="w-full">
        <img
        src="/images/graficos_landing/1.svg"
        alt="Decoración"
        className="w-full h-auto" />
      </div>

      {/*aqui se muestra lo de ver tus certificados con la identidad*/}

      <div className="container mx-auto py-12 px-4">
        <Texttwo />
      </div>

      {/*Aqui se muestra la medalla*/}

      <div className="container mx-auto py-12 px-4">
        <Insigne />
      </div>



      <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Nuestros Cursos</h1>

      <div className="flex flex-wrap -mx-2">
        {cursos.map((curso) => (
          <Card key={curso.id} title={curso.title} description={curso.description} image={curso.image} />
        ))}
      </div>
    </main>
    </section>
    <Footer/>

    </>
  );
}