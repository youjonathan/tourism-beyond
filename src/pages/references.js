import Head from "next/head";
import { BsGithub } from "react-icons/bs";

import PageLoadEffect from "@/components/PageLoadEffect";
import Link from "next/link";

const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

const references = () => {
  return (
    <>
      <Head>
        <title>References</title>
        <meta name="description" content="any description" />
      </Head>
      <PageLoadEffect />
      <main className="bg-mygray w-full flex flex-col items-start py-16 px-24">
        <h1 className="font-playfair font-black text-6xl pb-16">References</h1>
        <div>
          <h2 className="flex flex-row font-playfair font-bold text-2xl items-center">
            Source Code <BsGithub className="ml-2" />
          </h2>
          <Link href="https://github.com/youjonathan/tourism-beyond">
            <p className="pt-2 pb-6">
              https://github.com/youjonathan/tourism-beyond
            </p>
          </Link>
          <h2 className="font-playfair font-bold text-2xl">Image Citations</h2>
          <p className="pt-2 pb-6">Filler text</p>
          <h2 className="font-playfair font-bold text-2xl">
            Research Documentation (APA)
          </h2>
          <p className="pt-2 pb-6">Filler text</p>
          <h2 className="font-playfair font-bold text-2xl">Plan of Work Log</h2>
          <p className="pt-2 pb-6">Download here</p>
          <h2 className="font-playfair font-bold text-2xl">
            Student Copyright Checklist
          </h2>
          <p className="pt-2 pb-6">Download here</p>
        </div>
      </main>
    </>
  );
};

export default references;
