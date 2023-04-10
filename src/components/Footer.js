import React from "react";

import Link from "next/link";
import Image from "next/image";

import logo from "../../public/logoWhite.png";

const Footer = () => {
  return (
    <footer className="w-full min-h-[300px] px-16 bg-dark text-light text-sm">
      <div className="py-8 flex flex-col">
        <div className="py-8 grid grid-cols-3">
          <div className="flex flex-col text-center">
            <Link href="/" className="pb-2">Home</Link>
            <Link href="/about-us" className="py-2">About Us</Link>
            <Link href="/your-journey" className="py-2">Your Journey</Link>
            <Link href="/space-vehicles" className="py-2">Space Vehicles</Link>
            <Link href="/references" className="pt-2">References</Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-[150px] h-auto pb-5">
              <Link href="/"><Image src={logo} alt="/" /></Link>
            </div>
            <div>
              <Link href="/your-journey" className="font-playfair text-lg">BECOME AN ASTRONAUT</Link>
            </div>
          </div>
          <div className="text-center mt-[4.5rem]">
            <p>Webmaster Team 2111_901</p>
          </div>
        </div>
        <div className="pt-8 text-center">
          <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
