import Head from "next/head";

import PageLoadEffect from "@/components/PageLoadEffect";
import AnimatedText from "@/components/AnimatedText";
import Gallery from "@/components/Gallery";
import GalleryTabs from "@/components/GalleryTabs";

const spaceVehicles = () => {
  return (
    <>
      <Head>
        <title>Space Vehicles</title>
        <meta name="description" content="any description" />
      </Head>
      <PageLoadEffect />
      <main className="bg-mygray w-full flex flex-col items-center justify-center">
        <div className="text-center pt-12 pb-6">
          <AnimatedText
            text="Our Rockets and Rovers"
            className="font-playfair font-black text-5xl pb-4"
          />
          <p>
            Check out our rockets and space vehicles in the gallery below!
            Scroll down to read more about each specific one.
          </p>
          <p className="italic px-64 pt-4">
            Disclaimer: these rockets are borrowed from other sources and serve
            as a demonstration of the service we would provide. We do not
            guarantee nor claim that your experience will include any of these
            space vehicles.
          </p>
        </div>
        <div className="w-3/4 pb-20">
          <Gallery />
        </div>
        <div className="w-5/6 pb-20">
          <GalleryTabs />
        </div>
      </main>
    </>
  );
};

export default spaceVehicles;
