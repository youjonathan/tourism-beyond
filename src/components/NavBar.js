import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
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

const NavBar = () => {
  return (
    <header className="w-fill px-32 py-3 font-medium flex items-center justify-between bg-light">
      <div className="w-[100px] h-auto">
        <Link href="/">
          <Image src={logo} alt="/" priority />
        </Link>
      </div>
      <nav>
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
      <nav className="flex items-center justify-center flex-wrap">
        <Link
          href="/your-journey"
          className="text-light bg-primary px-5 py-3 text-sm rounded-lg"
        >
          Learn more
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
