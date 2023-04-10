import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

import Layout from "@/components/Layout";
import PageLoadEffect from "@/components/PageLoadEffect";

import workers from "../../public/about-us/workers.webp";
import story from "../../public/about-us/story.webp";
import mission from "../../public/about-us/mission.webp";

const references = () => {
  return (
    <>
      <Head>
        <title>References</title>
        <meta name="description" content="any description" />
      </Head>
      <PageLoadEffect />
      <main className="bg-mygray w-full flex flex-col">
        <div className="items-start py-16 px-24">
          <h1 className="font-playfair font-black text-6xl">References</h1>
        </div>
      </main>
    </>
  );
};

export default references;
