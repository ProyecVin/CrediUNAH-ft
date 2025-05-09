
    
import Header from "@/components/header/Header";
import Carousel from "@/components/carousel/Carousel";
import HeroText from "@/components/herotext/HeroText";    
import React from "react";
import Card from "@/components/cards/Card";
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
      <div className="col-span-12 xl:col-span-18">
        <Card title="curso c#" description="A continuación se presenta una selección de cursos diseñados para fortalecer tus habilidades técnicas y profesionales en distintas áreas de la informática y tecnología." image="images/product/product-05.jpg"/>
      </div> 
    </section>


    </>
    
    
  );
}
