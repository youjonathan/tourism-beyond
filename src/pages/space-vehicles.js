import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Gallery } from "react-grid-gallery";
import { Tab } from "@mui/material";

import Layout from "@/components/Layout";
import PageLoadEffect from "@/components/PageLoadEffect";

import workers from "../../public/about-us/workers.webp";
import story from "../../public/about-us/story.webp";
import mission from "../../public/about-us/mission.webp";

const spaceVehicles = () => {
  return (
    <>
      <Head>
        <title>Space Vehicles</title>
        <meta name="description" content="any description" />
      </Head>
      <PageLoadEffect />
      <main className="bg-mygray w-full flex flex-col items-center justify-center">
        <div className="text-center py-16">
          <h1 className="font-playfair font-black text-6xl pb-8">
            Our Rockets and Rovers
          </h1>
          <p>
            Click on any of the images in the gallery below to see its name!
            Scroll down to see more information about each specific one.
          </p>
        </div>
      </main>
    </>
  );
};

export default spaceVehicles;
