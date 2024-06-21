import { useRef } from "react";
import hug_1 from "../assets/hug_images/image/hug-1.svg";
import hug_2 from "../assets/hug_images/image/hug-2.svg";
import hug_3 from "../assets/hug_images/image/hug-3.svg";
import hug_4 from "../assets/hug_images/image/hug-4.svg";
import hug_5 from "../assets/hug_images/image/hug-5.svg";
import hug_6 from "../assets/hug_images/image/hug-6.svg";

const imageList = [hug_1, hug_2, hug_3, hug_4, hug_5, hug_6];

const Hug = () => {
  const hug_ref = useRef(null);

  const duplicateList = () => {
    const item = [...imageList]; // Create a copy of the imageList
    imageList.push(...item);
    // Append the copied items to the original list\
    console.log(imageList);
  };
  duplicateList();

  return (
    <>
      <div id="about" className="overflow-hidden py-15 whitespace-nowrap ">
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

      <section className="w-[90%] md:w-4/5 mx-auto bg-opacity-50 bg-[#e7db9c] z-[20] border border-gray rounded-xl px-4 py-4 md:px-8 md:py-8">
        <h3 className="text-black text-[24px] md:text-[32px]">
          What is <span className="text-blue font-bold ">AIrony Coin?</span>
        </h3>
        <p className=" text-[12px] md:text-[20px] font-light text-black">
          AIrony Coin (IRONY) is a memecoin that celebrates the humor and irony
          of the AI and tech revolution. Join our community to enjoy
          AI-generated memes, collect tech-themed NFTs, and participate in
          exciting virtual events.
        </p>
      </section>
    </>
  );
};

export default Hug;
