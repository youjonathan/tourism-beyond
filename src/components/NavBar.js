import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { motion } from "framer-motion";

import logo from "../../public/logoBlack.png";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`
    ${className} relative group
    ${router.asPath === href ? "text-primary" : "text-dark"}`}
    >
      {title}

      <span
        className={`
          h-[1px] inline-block
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full bg-primary" : "w-0 bg-dark"}
          `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`
    ${className} relative group my-2
    ${router.asPath === href ? "text-primary" : "text-dark"}`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`
          h-[1px] inline-block
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full bg-primary" : "w-0 bg-dark"}
          `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-fill px-32 py-3 font-medium flex items-center justify-between bg-light">
      <div className="w-[100px] h-auto">
        <motion.div
          whileHover={{
            scale: 1.15,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
        >
          <Link href="/">
            <Image src={logo} alt="/" priority />
          </Link>
        </motion.div>
      </div>
      <nav className="hidden md:flex">
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about-us" title="About Us" className="mx-4" />
        <CustomLink
          href="/your-journey"
          title="Your Journey"
          className="mx-4"
        />
        <CustomLink
          href="/space-vehicles"
          title="Space Vehicles"
          className="mx-4"
        />
        <CustomLink href="/references" title="References" className="ml-4" />
      </nav>
      <nav className="items-center justify-center flex-wrap hidden md:flex">
        <motion.div
          whileHover={{
            scale: 1.15,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
        >
          <Link
            href="/your-journey"
            className="text-light bg-primary px-5 py-3 text-sm rounded-lg"
          >
            Learn more
          </Link>
        </motion.div>
      </nav>
      <button
        className="flex flex-col justify-center items-center md:hidden"
        onClick={handleClick}
      >
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opactiy-100"
          }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[60vw] z-30 bg-light/90 rounded-lg backdrop-blur-md py-32
        flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about-us"
              title="About Us"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/your-journey"
              title="Your Journey"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/space-vehicles"
              title="Space Vehicles"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/references"
              title="References"
              className=""
              toggle={handleClick}
            />
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
};

export default NavBar;
