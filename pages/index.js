import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Rosalina from "../public/Rosalina.jpeg";
import Shyguy from "../public/Shyguy2.png";
import Toad from "../public/Toad.jpeg";
import Star from "../public/Star.jpg";
import BlueShellBomb from "../public/BlueShellBomb.png";
import Bowser from "../public/Bowser.png";
import PurlpeGuy from "../public/Purpleguy.png";
import Luigi from "../public/Luigi.jpg";
import Peach from "../public/Peach.png";
import Image from "next/image";
function App() {
  const slides = [
    {
      title: "Blue Shell Bomb",
      description: "1st Place will look a lot different after this drink!",
      url: BlueShellBomb,
      plumber: false,
      alcohol: "151 Rum",
      strength: "Strong",
      color: "cyan",
    },
    {
      title: "The Shy Guy",
      description: "This drink will have you stripping that shyness!",
      url: Shyguy,
      plumber: false,
      alcohol: "Tequila",
      strength: "Medium",
      color: "blue",
    },
    {
      title: "Peach's Palace",
      description: "As sweet as the peachiest peach can be!",
      url: Peach,
      plumber: false,
      alcohol: "Soju",
      strength: "Light",
      color: "rose",
    },

    {
      title: "Toad's Cream",
      description: "???",
      url: Toad,
      plumber: false,
      alcohol: "???",
      strength: "???",
      color: "green",
    },
    {
      title: "Rosalina's Cosmic Cooler",
      description: "A Prismatic Display",
      url: Rosalina,
      plumber: true,
      alcohol: "Vodka",
      strength: "Medium",
      color: "cyan",
    },
  ];

  const plumberSlides = [
    {
      title: "Bowswers Special",
      description: "It'll make you wanna marry bowser!",
      url: Bowser,
      plumber: true,
      alcohol: "Vodka Rum",
      strength: "Medium",
      color: "amber",
    },
    {
      title: "The Purple Guy",
      description: "What Happened?! Cra-",
      alcohol: "Maybe Vodka?",
      strength: "Maybe Strong?",
      url: PurlpeGuy,
      plumber: true,
    },
  ];
  const mocktailSlides = [
    {
      title: "Luigi's Garden",
      description: "Come into the garden!",
      url: Luigi,
      plumber: false,
      alcohol: "Non-Alcoholic",
      strength: "Low",
      color: "rose",
    },

    {
      title: "Toad's Cream Mocktail",
      description: "???",
      url: Toad,
      plumber: false,
      alcohol: "???",
      strength: "???",
      color: "green",
    },
  ];

  const [alcohol, setAlcohol] = useState(true);
  const [plumber, setPlumber] = useState(false);
  const [mocktail, setMocktail] = useState(false);

  const [currentIndexAlcohol, setCurrentIndexAlcohol] = useState(0);
  const [currentIndexPlumber, setCurrentIndexPlumber] = useState(0);
  const [currentIndexMocktail, setCurrentIndexMocktail] = useState(0);

  const prevSlide = (index, state, slides) => {
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : index - 1;
    state(newIndex);
  };

  const nextSlide = (index, state, slides) => {
    const isLastSlide = index === slides.length - 1;
    const newIndex = isLastSlide ? 0 : index + 1;
    state(newIndex);
  };

  const goToSlide = (slideIndex, state) => {
    state(slideIndex);
  };

  return (
    <>
      <div className="container px-8 max-w-4xl pb-6 lg:py-10 md:max-w-none md:w-full md:flex md:flex-row md:gap-2 md:justify-center md:items-start flex flex-col h-[calc(100vh-76px)]">
        {/* <hr className="mb-4 border-gray-400" />
         */}
        <div className="flex justify-start items-center h-12 md:flex-col mb-2">
          <span
            className={`ring-1 ring-red-600 bg-red-400/40 inline-block rounded py-2 px-4 mr-2 mb-2 text-xs font-normal text-red-400 cursor-pointer`}
            onClick={() => {
              setAlcohol(true);
              setPlumber(false);
              setMocktail(false);
            }}
          >
            Alcohol
          </span>
          <span
            className={`ring-1 ring-violet-600 bg-violet-400/40 inline-block rounded py-2 px-4 mr-2 mb-2 text-xs font-normal text-violet-400 cursor-pointer`}
            onClick={() => {
              setAlcohol(false);
              setPlumber(true);
              setMocktail(false);
            }}
          >
            Plumber
          </span>
          <span
            className={`ring-1 ring-amber-600 bg-amber-400/40 inline-block rounded py-2 px-4 mr-2 mb-2 text-xs font-normal text-amber-400 cursor-pointer`}
            onClick={() => {
              setAlcohol(false);
              setPlumber(false);
              setMocktail(true);
            }}
          >
            Mocktails
          </span>
        </div>
        {/*  */}
        {alcohol && (
          <>
            <div className="">
              <div className="group relative flex flex-col w-full md:w-4xl  h-full">
                <div className="md:w-[790px] md:h-[500px] w-full h-[390px] relative mb-2">
                  <Image
                    src={slides[currentIndexAlcohol].url}
                    fill
                    alt="Pictures"
                    className="rounded-md border border-neutral-700 bg-muted transition-colors w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-gray-200 text-2xl font-bold">
                  {slides[currentIndexAlcohol].title}
                </h3>
                <p className="text-gray-400 text-xs italic">
                  {slides[currentIndexAlcohol].description}
                </p>
                <div className="mt-2">
                  <span className="ring-1 ring-rose-600 bg-rose-400/20 inline-block rounded py-1 px-4 mr-2 mb-2 text-xs font-normal text-rose-400 ">
                    {slides[currentIndexAlcohol].strength}
                  </span>
                  <span
                    className={`ring-1 ring-cyan-600 bg-cyan-400/20 inline-block rounded py-1 px-4 mr-2 mb-2 text-xs font-normal text-cyan-400`}
                  >
                    {slides[currentIndexAlcohol].alcohol}
                  </span>
                </div>
                {/* Left Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactLeft
                    onClick={() =>
                      prevSlide(
                        currentIndexAlcohol,
                        setCurrentIndexAlcohol,
                        slides
                      )
                    }
                    size={30}
                  />
                </div>
                {/* Right Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactRight
                    onClick={() =>
                      nextSlide(
                        currentIndexAlcohol,
                        setCurrentIndexAlcohol,
                        slides
                      )
                    }
                    size={30}
                  />
                </div>
              </div>
            </div>
            <div className="flex px-2 h-full py-2 flex-col gap-4 mt-6  w-full md:mt-0">
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex, setCurrentIndexAlcohol)}
                  className="text-2xl cursor-pointer"
                >
                  <div className="w-full h-16 ">
                    <Image
                      className="w-full h-full rounded-md object-cover ring-1 ring-neutral-200"
                      src={slide.url}
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        {/*  */}
        {plumber && (
          <>
            <div className="">
              <div className="group relative flex flex-col w-full md:w-4xl  h-full">
                <div className="md:w-[790px] md:h-[500px] w-full h-[390px] relative mb-2">
                  <Image
                    src={plumberSlides[currentIndexPlumber].url}
                    fill
                    alt="Pictures"
                    className="rounded-md border border-neutral-700 bg-muted transition-colors w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-gray-200 text-2xl font-bold">
                  {plumberSlides[currentIndexPlumber].title}
                </h3>
                <p className="text-gray-400 text-xs italic">
                  {plumberSlides[currentIndexPlumber].description}
                </p>
                <div className="mt-2">
                  <span className="ring-1 ring-rose-600 bg-rose-400/20 inline-block rounded py-1 px-4 mr-2 mb-2 text-xs font-normal text-rose-400 ">
                    {plumberSlides[currentIndexPlumber].strength}
                  </span>
                  <span
                    className={`ring-1 ring-cyan-600 bg-cyan-400/20 inline-block rounded py-1 px-4 mr-2 mb-2 text-xs font-normal text-cyan-400`}
                  >
                    {plumberSlides[currentIndexPlumber].alcohol}
                  </span>
                </div>
                {/* Left Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactLeft
                    onClick={() => {
                      prevSlide(
                        currentIndexPlumber,
                        setCurrentIndexPlumber,
                        plumberSlides
                      );
                    }}
                    size={30}
                  />
                </div>
                {/* Right Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactRight
                    onClick={() => {
                      nextSlide(
                        currentIndexPlumber,
                        setCurrentIndexPlumber,
                        plumberSlides
                      );
                    }}
                    size={30}
                  />
                </div>
              </div>
            </div>
            <div className="flex px-2 h-full py-2 flex-col gap-4 mt-6  w-full">
              {plumberSlides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex, setCurrentIndexPlumber)}
                  className="text-2xl cursor-pointer"
                >
                  <div className="w-full h-16 ">
                    <Image
                      className="w-full h-full rounded-md object-cover ring-1 ring-neutral-200"
                      src={slide.url}
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        {/*  */}
        {mocktail && (
          <>
            <div className="">
              <div className="group relative flex flex-col w-full md:w-4xl  h-full">
                <div className="md:w-[790px] md:h-[500px] w-full h-[390px] relative mb-2">
                  <Image
                    src={mocktailSlides[currentIndexMocktail].url}
                    fill
                    alt="Pictures"
                    className="rounded-md border border-neutral-700 bg-muted transition-colors w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-gray-200 text-2xl font-bold">
                  {mocktailSlides[currentIndexMocktail].title}
                </h3>
                <p className="text-gray-400 text-xs italic">
                  {mocktailSlides[currentIndexMocktail].description}
                </p>
                <div className="mt-2">
                  <span className="ring-1 ring-rose-600 bg-rose-400/20 inline-block rounded py-1 px-4 mr-2 mb-2 text-xs font-normal text-rose-400 ">
                    {mocktailSlides[currentIndexMocktail].strength}
                  </span>
                  <span
                    className={`ring-1 ring-cyan-600 bg-cyan-400/20 inline-block rounded py-1 px-4 mr-2 mb-2 text-xs font-normal text-cyan-400`}
                  >
                    {mocktailSlides[currentIndexMocktail].alcohol}
                  </span>
                </div>
                {/* Left Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactLeft
                    onClick={() => {
                      prevSlide(
                        currentIndexMocktail,
                        setCurrentIndexMocktail,
                        mocktailSlides
                      );
                    }}
                    size={30}
                  />
                </div>
                {/* Right Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactRight
                    onClick={() => {
                      nextSlide(
                        currentIndexMocktail,
                        setCurrentIndexMocktail,
                        mocktailSlides
                      );
                    }}
                    size={30}
                  />
                </div>
              </div>
            </div>
            <div className="flex px-2 h-full py-2 flex-col gap-4 mt-6  w-full  ">
              {mocktailSlides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex, setCurrentIndexMocktail)}
                  className="text-2xl cursor-pointer"
                >
                  <div className="w-full h-16 ">
                    <Image
                      className="w-full h-full rounded-md object-cover ring-1 ring-neutral-200"
                      src={slide.url}
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
