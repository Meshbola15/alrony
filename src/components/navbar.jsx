import React, { useState } from "react";
import logo from "../assets/images/brand_logo.svg";

const navlinks = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Features", path: "#features" },
  { name: "Roadmap", path: "#roadmap" },
  { name: "Tokenomics", path: "#tokenomics" },
  { name: "Community", path: "#community" },
  { name: "Contact", path: "#contact" },
];

const MobileNavLinks = ({ setIsOpen }) => (
  <div className="h-[100vh] w-full bg-black flex flex-col items-center justify-center">
    <ul className="flex flex-col items-center">
      <NavMenu setIsOpen={setIsOpen} />
    </ul>
    <button className="px-7 py-3 bg-blue rounded-3xl mt-4 text-[18px]">
      Join the revolution
    </button>
  </div>
);

const NavMenu = ({ setIsOpen }) => (
  <>
    {navlinks.map((link, index) => (
      <li key={index} className="flex cursor-pointer" onClick={() => setIsOpen(false)}>
        <a className="cursor-pointer text-[20px] md:text-[12px] lg:text-[16px]" href={link.path}>
          {link.name}
        </a>
      </li>
    ))}
  </>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-[1000]">
      <div className="px-[5vw] w-full fixed top-3">
        <div className="flex items-center justify-between rounded-full bg-[#847878] px-[15px] py-[10px]">
          <img src={logo} alt="logo" className="z-[60]" />
          <div className="flex flex-col items-center justify-end md:justify-normal md:flex-row">
            <div className="flex flex-col md:hidden lg:hidden z-[60] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              <div className={`bar1 menuIcon transition-transform duration-300 ${isOpen ? "translate-x-0 translate-y-[11px] -rotate-45" : ""}`} />
              <div className={`bar2 menuIcon transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <div className={`bar3 menuIcon transition-transform duration-300 ${isOpen ? "translate-x-0 -translate-y-[11px] rotate-45" : ""}`} />
            </div>
            {/* Mobile */}
            <div className={`bg-lightBlue items-center rounded-md md:hidden lg:hidden fixed top-0 left-0 right-0 bottom-0 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"} z-50`}>
              <MobileNavLinks setIsOpen={setIsOpen} />
            </div>

            {/* Desktop */}
            <div className="hidden md:flex lg:flex items-center">
              <ul className="bg-lightBlue px-5 py-3 rounded-3xl flex gap-2 lg:gap-6">
                <NavMenu setIsOpen={setIsOpen} />
              </ul>
              <button className="ml-3 lg:ml-5 px-4 py-2 lg:px-7 md:py-3 bg-blue rounded-3xl text-[14px]">
                Join the revolution
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
