import Image from "next/image";
import React from "react";
import galaxy from "../../public/galaxy.webp";

const HeroBanner = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="overflow-hidden z-[-1]">
          <Image src="/../public/galaxy.webp" alt="/" fill className="object-cover mt-[100px]"/>
        </div>
        <div className="">
          <p className="lowercase text-4xl tracking-widest text-light pb-8">
            become an
          </p>
          <h1 className="uppercase text-8xl text-light">astronaut</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
