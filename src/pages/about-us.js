import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

import Layout from "@/components/Layout";
import PageLoadEffect from "@/components/PageLoadEffect";

import workers from "../../public/about-us/workers.webp";
import story from "../../public/about-us/story.webp";
import mission from "../../public/about-us/mission.webp";

const aboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="any description" />
      </Head>
      <PageLoadEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <div className="relative w-full h-screen">
          <div className="z-[-1]">
            <Image
              priority
              src={workers}
              alt="/"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="relative h-full flex items-center justify-center text-light">
            <motion.h2
              className="font-dancing text-6xl pr-16"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              we are
            </motion.h2>
            <motion.h1
              className="font-playfair font-black text-[12rem] uppercase"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              here
            </motion.h1>
            <motion.h2
              className="font-dancing text-6xl pl-16"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.1, duration: 0.5 }}
            >
              for you
            </motion.h2>
          </div>
          <div className="relative">
            <div class="custom-shape-divider-bottom-1681093033">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z"
                  class="shape-fill"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <Layout className="pt-28">
          <div className="w-full px-8 pb-12 grid grid-cols-2 items-center justify-items-center">
            <div className="p-8 w-[75%] rounded-2xl border-2 border-solid border-dark bg-mygray drop-shadow-xl">
              <Image
                src={story}
                alt="/"
                className="w-full object-cover rounded-2xl"
                placeholder="blur"
              />
            </div>
            <div className="p-10">
              <h3 className="font-playfair font-bold text-3xl text-center pb-4">
                Our Story
              </h3>
              <p>
                Tourism Beyond was born out of a passion for space exploration
                and a desire to make it accessible to everyone. Our founders, a
                group of experienced engineers and space enthusiasts, began the
                company with the goal of making space travel a reality for
                people from all walks of life. We’ve worked tirelessly to design
                and develop state-of-the-art spacecrafts, and have implemented
                rigorous safety procedures to ensure a comfortable and safe
                journey for our passengers. We are proud to offer a space
                tourism experience that is truly out of this world.
              </p>
            </div>
          </div>
          <div className="w-full px-8 py-12 grid grid-cols-2 items-center justify-items-center">
            <div className="p-10">
              <h3 className="font-playfair font-bold text-3xl text-center pb-4">
                Our Mission​
              </h3>
              <p>
                Our mission is to democratize access to space and to inspire the
                next generation of explorers. We strive to provide opportunities
                for scientific research, technology development and space
                exploration through our space tourism services. We believe that
                space travel is not just a privilege for the few, but a
                necessary step in the advancement of humanity. We are committed
                to making space travel accessible, safe and memorable for all,
                and to inspire people to look beyond the limits of Earth and to
                dream of the possibilities of space.
              </p>
            </div>
            <div className="p-8 w-[80%] rounded-2xl border-2 border-solid border-dark bg-mygray drop-shadow-xl">
              <Image
                src={mission}
                alt="/"
                className="w-full object-cover rounded-2xl"
                placeholder="blur"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default aboutUs;
