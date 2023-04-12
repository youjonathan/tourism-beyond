import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import Layout from "@/components/Layout";
import PageLoadEffect from "@/components/PageLoadEffect";

import galaxy from "../../public/index/galaxy.webp";
import engineer from "../../public/index/engineering.webp";
import astronaut from "../../public/index/astronaut.webp";
import rocket from "../../public/index/rocket.webp";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tourism Beyond</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <PageLoadEffect />
      <main>
        <div className="relative w-full h-screen">
          <div className="z-[-1]">
            <Image
              priority
              src={galaxy}
              alt="/"
              fill
              placeholder="blur"
              className="object-cover object-center"
            />
          </div>
          <div className="relative h-full flex flex-col items-center justify-center">
            <h3 className="font-dancing lowercase text-xl md:text-5xl tracking-widest text-light md:pb-2">
              become a[n]
            </h3>
            <TypeAnimation
              sequence={[
                "",
                1400,
                "PIONEER",
                1500,
                "EXPLORER",
                1500,
                "TRAILBLAZER",
                1500,
                "ASTRONAUT",
              ]}
              wrapper="h1"
              speed={{ type: "keyStrokeDelayInMs", value: 200 }}
              deletionSpeed={{ type: "keyStrokeDelayInMs", value: 100 }}
              className="font-playfair font-black uppercase text-4xl sm:text-7xl md:text-[7rem] text-light pb-8 sm:pb-16 md:pb-20 "
            />
            <motion.div
              whileHover={{
                scale: 1.15,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
            >
              <Link
                href="/your-journey"
                className="text-light text-xs sm:text-sm px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 border sm:border-2 rounded-lg"
              >
                See more
              </Link>
            </motion.div>
          </div>
          <div className="relative">
            <div class="custom-shape-divider-bottom-1681077828">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                  opacity=".25"
                  class="shape-fill"
                ></path>
                <path
                  d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                  opacity=".5"
                  class="shape-fill"
                ></path>
                <path
                  d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
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
                Who are we?
              </h3>
              <p>
                Tourism Beyond is a space tourism company that is dedicated to
                providing an out-of-this-world experience for private
                individuals. We are a team of passionate and dedicated experts
                who are committed to making space travel accessible to all. Our
                team includes experienced pilots, aerospace engineers, and
                dedicated support staff who are dedicated to ensuring that our
                customers have an unforgettable experience.
              </p>
            </div>
            <div className="pt-6">
              <h3 className="font-playfair font-bold text-3xl text-center pb-4">
                What do we offer?​
              </h3>
              <p>
                Tourism Beyond offers a range of space travel options to suit
                all preferences and budgets, from suborbital flights that
                provide a glimpse of the earth from space, to orbital flights
                that offer a chance to experience weightlessness and see the
                curvature of our planet, and even lunar excursions that allow
                you to set foot on the moon. We provide comprehensive training
                and preparation, as well as post-flight recovery and debriefing
                services, ensuring that our customers have a safe and reliable
                journey. With cutting-edge technology and unparalleled customer
                service, we make space travel accessible to everyone, and take
                them beyond the typical tourism experience.
              </p>
            </div>
            <div className="sm:hidden flex flex-col items-center">
              <div className="w-3/4 py-8">
                <Image
                  src={engineer}
                  alt="/"
                  className="w-full object-cover rounded-2xl"
                  placeholder="blur"
                />
              </div>
              <div className="w-3/4">
                <Image
                  src={astronaut}
                  alt="/"
                  className="w-full object-cover rounded-2xl"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="hidden sm:flex flex-row md:hidden pt-10 items-center">
              <div className="w-1/2 px-4">
                <Image
                  src={engineer}
                  alt="/"
                  className="w-full object-cover rounded-2xl"
                  placeholder="blur"
                />
              </div>
              <div className="w-1/2 px-4">
                <Image
                  src={astronaut}
                  alt="/"
                  className="w-full object-cover rounded-2xl"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:px-8 md:pb-8 lg:pb-12 hidden md:grid grid-cols-2 items-center justify-items-center">
            <div className="p-10">
              <h3 className="font-playfair font-bold text-3xl text-center pb-4">
                Who are we?
              </h3>
              <p>
                Tourism Beyond is a space tourism company that is dedicated to
                providing an out-of-this-world experience for private
                individuals. We are a team of passionate and dedicated experts
                who are committed to making space travel accessible to all. Our
                team includes experienced pilots, aerospace engineers, and
                dedicated support staff who are dedicated to ensuring that our
                customers have an unforgettable experience.
              </p>
            </div>
            <div className="p-8 w-[75%] rounded-2xl border-2 border-solid border-dark bg-mygray drop-shadow-xl">
              <Image
                src={engineer}
                alt="/"
                className="w-full object-cover rounded-2xl"
                placeholder="blur"
              />
            </div>
          </div>
          <div className="w-full lg:px-8 md:pt-8 lg:pt-12 hidden md:grid grid-cols-2 items-center justify-items-center">
            <div className="p-8 w-[80%] rounded-2xl border-2 border-solid border-dark bg-mygray drop-shadow-xl">
              <Image
                src={astronaut}
                alt="/"
                className="w-full object-cover rounded-2xl"
                placeholder="blur"
              />
            </div>
            <div className="p-10">
              <h3 className="font-playfair font-bold text-3xl text-center pb-4">
                What do we offer?​
              </h3>
              <p>
                Tourism Beyond offers a range of space travel options to suit
                all preferences and budgets, from suborbital flights that
                provide a glimpse of the earth from space, to orbital flights
                that offer a chance to experience weightlessness and see the
                curvature of our planet, and even lunar excursions that allow
                you to set foot on the moon. We provide comprehensive training
                and preparation, as well as post-flight recovery and debriefing
                services, ensuring that our customers have a safe and reliable
                journey. With cutting-edge technology and unparalleled customer
                service, we make space travel accessible to everyone, and take
                them beyond the typical tourism experience.
              </p>
            </div>
          </div>
        </Layout>
        <div className="relative w-full h-[60vh] sm:h-[80vh]">
          <div className="z-[-1]">
            <Image
              src={rocket}
              alt="/"
              fill
              placeholder="blur"
              className="object-cover object-top"
            />
          </div>
          <div className="relative h-full flex flex-col items-center justify-center">
            <div className="flex font-playfair font-black text-xl md:text-3xl lg:text-5xl text-light pb-6 md:pb-8 lg:pb-16">
              <h1 className="pr-1 sm:pr-1.5 md:pr-2.5">See our</h1>
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border-b md:pb-2"
              >
                rockets
              </motion.h1>
              <h1 className="px-1 sm:px-1.5 md:px-2.5">and</h1>
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="border-b md:pb-2"
              >
                rovers
              </motion.h1>
            </div>
            <motion.div
              whileHover={{
                scale: 1.15,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
            >
              <Link
                href="/space-vehicles"
                className="text-light text-xs sm:text-sm lg:text-base px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 border-2 rounded-lg"
              >
                Go now
              </Link>
            </motion.div>
          </div>
          <div class="custom-shape-divider-top-1681079711">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </main>
    </>
  );
}
