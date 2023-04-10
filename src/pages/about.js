import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import workers from "../../public/workers.webp";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import PageLoadEffect from "@/components/PageLoadEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="any description" />
      </Head>
      <PageLoadEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" />
          <div className="grid w-full grid-cols-8 gap-16 py-8">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                ac mauris a magna vehicula ornare. Ut faucibus lorem vel
                venenatis ultrices. Pellentesque a ligula ac nisi condimentum
                tristique. Vestibulum pretium ex eros, ut consectetur nulla
                dignissim rutrum. Vestibulum cursus mauris vitae ligula viverra,
                quis malesuada purus vestibulum. Nulla viverra risus lorem, sed
                venenatis metus accumsan sit amet. Nam porttitor augue et ex
                hendrerit tristique. Integer lobortis metus turpis, ut interdum
                nisi lacinia nec. Ut vel dictum sem, id pretium nunc. Proin
                velit ex, blandit ultrices fringilla quis, interdum nec urna.
                Maecenas eu risus sodales, sodales erat non, auctor felis.
                Suspendisse gravida magna sit amet nisi vulputate, rutrum
                sagittis augue sagittis. Nullam vel porta nisl. Mauris augue
                risus, venenatis nec rutrum id, consectetur ac urna. Quisque
                eleifend purus in est pretium, posuere efficitur diam commodo.
                Suspendisse vulputate nibh nisl.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-2 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark" />
              <Image
                src={workers}
                alt="/"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75%">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75%">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  {" "}
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75%">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
