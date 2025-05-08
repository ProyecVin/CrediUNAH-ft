// components/Carousel.tsx

import React from "react";

const ImageSlider: React.FC = () => {
  const images: string[] = [
    "Abhirajk.webp",
    "Abhirajk%20mykare.webp",
    "Abhirajk2.webp",
    "Abhirajk3.webp",
    "Abhirajk4.webp",
  ];

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl mx-auto">
        <div
          id="slider"
          className="flex overflow-x-scroll space-x-4 rounded-lg shadow-lg no-scrollbar"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-3/4 lg:w-2/3 scroll-ml-6"
              style={{ scrollSnapAlign: "center" }}
            >
              <img
                src={`https://res.cloudinary.com/djv4xa6wu/image/upload/v173572216${
                  5 - index
                }/AbhirajK/${img}`}
                alt={`Slider Image ${index + 1}`}
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <a
              key={index}
              href="#slider"
              className="w-3 h-3 bg-gray-300 rounded-full"
            ></a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
