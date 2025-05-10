// components/Carousel.tsx

import React from "react";
import Image from "next/image";

const ImageSlider: React.FC = () => {
  const images: string[] = [
  "/images/carousel/carousel-01.png",
  "/images/carousel/carousel-02.png",
  "/images/carousel/carousel-03.png",
  ];

  return (
    <div className="bg-gray-100 flex items-center justify-center py-10">
      <div className="w-full max-w-2xl">
        <div
          id="slider"
          className="flex overflow-x-scroll space-x-4 no-scrollbar px-4"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full scroll-ml-6 snap-center"
            >
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                width={800}
                height={500}
                className="rounded-2xl shadow-md object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className="w-3 h-3 bg-green-300 rounded-full inline-block"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;