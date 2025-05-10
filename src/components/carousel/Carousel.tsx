// components/Carousel.tsx
"use client";

import { useState } from "react";

const slides = [
  {
    id: 1,
    image: "/images/carousel/carousel-01.png",
    title: "Slide 1",
    description: "Descripción del primer slide.",
  },
  {
    id: 2,
    image: "/images/carousel/carousel-02.png",
    title: "Slide 2",
    description: "Descripción del segundo slide.",
  },
  {
    id: 3,
    image: "/images/carousel/carousel-03.png",
    title: "Slide 3",
    description: "Descripción del tercer slide.",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-64 md:h-96 relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 bg-black bg-opacity-40 text-white w-full p-4">
              
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-r-lg hover:bg-opacity-60"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-l-lg hover:bg-opacity-60"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}