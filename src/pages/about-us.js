import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

import Layout from "@/components/Layout";
import PageLoadEffect from "@/components/PageLoadEffect";
import { IconContext } from "react-icons";
import { RiPlantFill } from "react-icons/ri";

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
      <main>
        <div className="relative w-full h-[80vh] sm:h-screen">
          <div className="z-[-1]">
            <Image
              priority
              src={workers}
              alt="/"
              fill
              placeholder="blur"
              className="object-cover object-center"
            />
          </div>
          <div className="relative h-full flex flex-col sm:hidden items-center justify-center text-light">
            <motion.h2
              className="font-dancing text-3xl sm:pr-4 md:pr-8 lg:pr-16"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              we are
            </motion.h2>
            <motion.h1
              className="font-playfair font-black text-7xl uppercase"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              here
            </motion.h1>
            <motion.h2
              className="font-dancing text-3xl sm:pl-4 md:pl-8 lg:pl-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.5 }}
            >
              for you
            </motion.h2>
          </div>
          <div className="relative h-full hidden sm:flex items-center justify-center text-light">
            <motion.h2
              className="font-dancing sm:text-3xl md:text-4xl lg:text-6xl sm:pr-4 md:pr-8 lg:pr-16"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              we are
            </motion.h2>
            <motion.h1
              className="font-playfair font-black sm:text-[9rem] md:text-[10rem] lg:text-[12rem] uppercase"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              here
            </motion.h1>
            <motion.h2
              className="font-dancing sm:text-3xl md:text-4xl lg:text-6xl sm:pl-4 md:pl-8 lg:pl-16"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.1, duration: 0.5 }}
            >
              for you
            </motion.h2>
          </div>
          <div className="hidden relative">
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
        <Layout className="px-8 xl:px-32 py-14 md:py-20 xl:py-32">
          <div className="w-full md:hidden flex flex-col items-center justify-items-center">
            <div className="pb-6">
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
            <div className="pt-6">
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
            <div className="sm:hidden flex flex-col items-center">
              <div className="w-3/4 py-8">
                <Image
                  src={story}
                  alt="/"
                  className="w-full object-cover rounded-2xl"
                  placeholder="blur"
                />
              </div>
              <div className="w-3/4">
                <Image
                  src={mission}
                  alt="/"
                  className="w-full object-cover rounded-2xl"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="hidden sm:flex flex-row md:hidden pt-10 items-center">
              <div className="w-1/2 px-4">
                <Image
                  src={story}
                  alt="/"
                  className="w-full object-cover rounded-2xl"
                  placeholder="blur"
                />
              </div>
              <div className="w-1/2 px-4">
                <Image
                  src={mission}
                  alt="/"
                  className="w-full object-cover rounded-2xl"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:px-8 md:pb-8 lg:pb-12 hidden md:grid grid-cols-2 items-center justify-items-center">
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
          <div className="w-full lg:px-8 md:pt-8 lg:pt-12 hidden md:grid grid-cols-2 items-center justify-items-center">
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
        <div>
          <div className="relative">
            <div class="custom-shape-divider-bottom-1681281558">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
                  class="shape-fill"
                ></path>
              </svg>
            </div>
          </div>
          <Layout className="bg-mygray px-4 sm:px-8 py-12 lg:p-32 lg:py-16">
            <div className="w-full px-2 lg:px-8 items-center justify-center">
              <div>
                <div className="flex flex-row items-center justify-center pb-8 sm:pb-4">
                  <h3 className="font-playfair font-bold text-3xl text-center sm:pr-2">
                    The Environment and Us
                  </h3>
                  <div className="hidden sm:flex">
                    <IconContext.Provider
                      value={{
                        color: "green",
                        size: "2em",
                      }}
                    >
                      <RiPlantFill value={{ className: "plant-icon" }} />
                    </IconContext.Provider>
                  </div>
                </div>
                <p>
                  As we embark on the exciting journey of space tourism, it is
                  essential to consider the impact of our actions on the
                  environment. At Tourism Beyond, we believe that we have a
                  responsibility to not only provide our customers with an
                  unforgettable experience but also to protect the planet we
                  call home. We strive to minimize our environmental impact by
                  implementing sustainable practices in all aspects of our
                  operations.
                </p>
                <br />
                <p>
                  Our commitment to the environment starts with our spacecraft
                  design and fuel choices, which prioritize efficiency and low
                  emissions. We also work with local communities and
                  conservation organizations to ensure that our tourism
                  activities do not harm natural habitats or wildlife. At
                  Tourism Beyond, we believe that responsible space tourism can
                  be a catalyst for positive change on Earth, inspiring a
                  greater appreciation for our planet and motivating people to
                  protect it for generations to come.
                </p>
              </div>
            </div>
          </Layout>
        </div>
      </main>
    </>
  );
};

export default aboutUs;
