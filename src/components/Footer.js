import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/logoWhite.png";

const Footer = () => {
  return (
    <footer className="w-full min-h-[300px] px-16 bg-dark text-light text-sm">
      <div className="py-8 flex flex-col">
        <div className="py-8 grid grid-cols-3">
          <div className="text-center">
            <motion.div
              whileHover={{
                scale: 1.15,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
              className="pb-2 hover:text-primary"
            >
              <Link href="/">Home</Link>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.15,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
              className="py-2 hover:text-primary"
            >
              <Link href="/about-us">About Us</Link>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.15,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
              className="py-2 hover:text-primary"
            >
              <Link href="/your-journey">Your Journey</Link>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.15,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
              className="py-2 hover:text-primary"
            >
              <Link href="/space-vehicles">Space Vehicles</Link>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.15,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
              className="pt-2 hover:text-primary"
            >
              <Link href="/references">References</Link>
            </motion.div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
              className="w-[150px] h-auto pb-5"
            >
              <Link href="/">
                <Image src={logo} alt="/" priority />
              </Link>
            </motion.div>
            <div>
              <motion.div
                whileHover={{
                  scale: 1.15,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
                className="font-playfair font-semibold text-lg hover:text-primary"
              >
                <Link href="/your-journey">BECOME AN ASTRONAUT</Link>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col text-center justify-center">
            <p>Webmaster Team 2111_901</p>
            <p>Individual #1: 2111-010</p>
            <p>Individual #2: 2111-009</p>
            <p>Individual #3: 2111-005</p>
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
