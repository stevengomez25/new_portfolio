import { useState, useEffect } from "react";
import Images from "../images/Images";

const ExperienceCard = () => {
  // Example slides (each one is a full card)
  const slides = [
    {
      title: "FrontEnd",
      image: Images.img6,
      icons: "Icons for FrontEnd",
    },
    {
      title: "BackEnd",
      image: Images.img6,
      icons: "Icons for BackEnd",
    },
    {
      title: "FullStack",
      image: Images.img6,
      icons: "Icons for FullStack",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Auto play every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(timer);
  }, [length]);

  const goToSlide = (index) => {
    setCurrent((index + length) % length);
  };

  return (
    <div id="experience" className="h-dvh w-full flex justify-evenly items-center">
      {/* Carousel container */}
      <div className="relative w-3/4 md:w-1/4 h-4/5 overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="min-w-full h-full flex flex-col justify-evenly items-center bg-amber-600"
            >
              <h1 className="text-3xl">{slide.title}</h1>
              <img
                className="w-9/10 border-4 border-black"
                src={slide.image}
                alt={slide.title}
              />
              <div className="w-9/10 bg-white text-center">{slide.icons}</div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={() => goToSlide(current - 1)}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white px-2 rounded-full hover:bg-black/70"
        >
          ‹
        </button>
        <button
          onClick={() => goToSlide(current + 1)}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white px-2 rounded-full hover:bg-black/70"
        >
          ›
        </button>

        {/* Indicators */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full ${
                i === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
