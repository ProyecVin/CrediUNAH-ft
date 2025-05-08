
    
import Header from "@/components/header/Header";
import Carousel from "@/components/carousel/Carousel";
import HeroText from "@/components/herotext/HeroText";    
import React from "react";

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
    </section>

    </>
    
    
  );
}
