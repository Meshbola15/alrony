import React from "react";
import communityBg from "../assets/images/community_bg.jpg";
import { FaXTwitter, FaDiscord, FaRedditAlien } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import logo from "../assets/images/brand_logo.svg";

const footerLink = [
  { icon: <FaXTwitter />, link: "#" },
  { icon: <FaDiscord />, link: "#" },
  { icon: <FaRedditAlien />, link: "#" },
  { icon: <BiLogoTelegram />, link: "#" },
];

const footerHrefLink = [
  { name: "Home", path: "/" },
  { name: "About", path: "/" },
  { name: "Exchange Rate", path: "/" },
];

const footerPrivacyLink = [
  { name: "Privacy", path: "/" },
  { name: "Legal", path: "/" },
];

const Communities = () => {
  return (
    <div id="community">
      <section
        className="relative bg-center bg-no-repeat bg-cover w-full"
        style={{ backgroundImage: `url(${communityBg})` }}
      >
        <div className="absolute w-full h-full bg-[#95aee8] opacity-50 top-0 left-0 right-0 bottom-0"></div>
        <section className="relative bg-cover bodyPadding py-[10vh] text-black text-center">
          <h3 className="text-[32px] md:text-[56px] text-black">Join Our Community</h3>
          <p className="text-[14px] md:text-[16px]">
            Be a part of the AIrony Coin revolution! Connect with fellow tech
            enthusiasts, share memes, and participate in exciting events.
          </p>
          <div className="flex items-center justify-center gap-5 md:gap-10 mt-6 z-10">
            {footerLink.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-[25px] text-blue w-[50px] h-[50px] border border-blue rounded-full flex items-center justify-center"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </section>
      </section>

      {/* Footer Section */}
      <section className="bg-blue pt-[10vh] bodyPadding pb-12">
        <div className="flex gap-4 flex-col md:flex-row md:gap-0 items-center justify-between mb-4">
          <img src={logo} alt="Logo" className="w-[60px] md:w-[100px] self-start" />
          <form
            onSubmit={() => null}
            className="flex flex-col w-full md:w-auto md:flex-row md:inline-flex gap-1 md:gap-4"
          >
            <input
              type="email"
              placeholder="Email"
              className="text-[18px] placeholder:text-blue lg:text-[16px] w-full md:w-[200px] lg:w-[300px] bg-[#080F327A] text-blue px-5 py-3 md:px-4 md:py-2 rounded-xl font-light hover:outline-none border-none focus:outline-none"
            />
            <button className="px-5 py-3 md:px-7 md:py-2 rounded-xl bg-blackBackground font-light text-blue text-[16px] w-full md:w-auto">
              Subscribe
            </button>
          </form>
        </div>
        <hr className="border-none bg-blackBackground h-[2px] my-8" />
        <div
          id="contact"
          className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0 my-5 text-blackBackground"
        >
          <ul className="flex text-[14px] capitalize gap-2 md:gap-5 flex-wrap">
            {footerHrefLink.map((item, index) => (
              <li key={`footerHref-${index}`}>
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
            <hr className="w-[1px] border-none h-[12px] md:h-[14px] bg-blackBackground self-center" />
            {footerPrivacyLink.map((item, index) => (
              <li key={`footerPrivacy-${index}`}>
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            {footerLink.map((item, index) => (
              <div
                key={`footerIcon-${index}`}
                className="text-blackBackground h-8 w-8 flex items-center justify-center border border-black rounded-full cursor-pointer"
              >
                <a href={item.link} className="text-[20px]">
                  {item.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Communities;
