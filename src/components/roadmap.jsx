import React from "react";
import all from "../assets/images/all.svg";
import all_mobile from "../assets/images/all_mobile.svg";

const Roadmap = () => {
  return (
    <div id="roadmap" className="h-auto w-screen bodyPadding py-[10vh]">
      <section className="z-[20]">
        <h3 className="text-black text-[32px] md:text-[56px] mb-4">Our Roadmap</h3>
        <section className="flex items-center justify-center mx-auto">
          <img src={all} alt="" className="self-center hidden md:block lg:block"/>
          <img src={all_mobile} alt="" className="block md:hidden lg:hidden" />
        </section>
      </section>
    </div>
  );
};

export default Roadmap;
