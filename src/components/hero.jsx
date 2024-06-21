import React from "react";
import hero_image from "../assets/images/hero_pix.svg";
import hero_monkey_nft from "../assets/images/hero_monkey_nft.svg";

const Hero = () => {
  return (
    <div id="home" className="flex relative flex-col-reverse py-[10vh] pt-[20vh] h-auto max-h-fit items-center justify-between w-screen gap-20 md:flex-row md:py-0 md:pt-0 md:h-screen px-[5vw]">
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
        <a href="#" className="text-black bg-blue px-5 py-2 rounded-full text-[16px]">Get Started</a>
      </section>

      <img src={hero_image} alt="hero image" className="w-full md:w-[30vw] select-none z-20" />

      <div className="absolute w-[40vw] h-screen bg-[#e58ce2] rounded-full top-0 bottom-0 left-[-250px] blur-[200px]" />
      <div className="absolute  w-[40vw] h-screen bg-[#e58ce2] rounded-full top-0 bottom-0 right-[-250px] blur-[200px]" />
    </div>
  );
};

export default Hero;
