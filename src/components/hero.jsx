import hero_image from "../assets/images/hero_pix.svg";
import { useRef } from "react";
import hug_1 from "../assets/hug_images/image/hug-1.svg";
import hug_2 from "../assets/hug_images/image/hug-2.svg";
import hug_3 from "../assets/hug_images/image/hug-3.svg";
import hug_4 from "../assets/hug_images/image/hug-4.svg";
import hug_5 from "../assets/hug_images/image/hug-5.svg";
import hug_6 from "../assets/hug_images/image/hug-6.svg";

const imageList = [hug_1, hug_2, hug_3, hug_4, hug_5, hug_6];

const Hero = () => {
  const hug_ref = useRef(null);

  const duplicateList = () => {
    const item = [...imageList]; // Create a copy of the imageList
    imageList.push(...item);
  };
  duplicateList();

  return (
    <section className="flex items-center justify-between  h-auto max-h-fit flex-col relative md:pt-[20vh] w-screen md:h-screen">
      <div
        id="home"
        className="flex flex-col-reverse items-center justify-between gap-20 md:flex-row md:py-0 md:pt-0 py-[10vh] px-[5vw]"
      >
        <section className="z-[20] text-center md:text-left">
          <h3 className="text-[30px] md:text-[40px] lg:text-[53px] text-white leading-none">
            Welcome to
          </h3>
          <h2 className="text-[30px] md:text-[40px] lg:text-[90px] font-bold leading-none text-blue">
            AIrony Coin
          </h2>
          <p className="text-white text-[16px] my-[20px]">
            Laugh your way to the future with AI-generated memes and tech-themed
            NFTs.
          </p>
          <a
            href="#"
            className="text-black bg-blue px-7 py-3 rounded-full text-[16px] hover:bg-white hover:text-blue"
          >
            Get Started
          </a>
        </section>

        <img
          src={hero_image}
          alt="hero image"
          className="w-full md:w-[30vw] select-none z-20"
        />

        <div className="absolute w-[40vw] h-screen bg-[#e58ce2] rounded-full top-0 bottom-0 left-[-250px] blur-[200px]" />
        <div className="absolute  w-[40vw] h-screen bg-[#e58ce2] rounded-full top-0 bottom-0 right-[-250px] blur-[200px]" />
      </div>

      <div className="overflow-hidden py-15 whitespace-nowrap ">
        <section
          ref={hug_ref}
          className="whitespace-nowrap animate-slide inline-flex"
        >
          {imageList.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`hug-${index}`}
              className="h-24 mx-4 md:h-32 lg:h-38 md:mx-10"
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Hero;
