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
          <Link
            href="https://github.com/youjonathan/tourism-beyond"
            className="text-primary"
          >
            <p className="pt-2 pb-6">
              https://github.com/youjonathan/tourism-beyond
            </p>
          </Link>
          <h2 className="font-playfair font-bold text-2xl">Image Citations</h2>
          <div className="pt-2 pb-6">
            <p>
              All of these images are covered under the Unsplash License.
              According to Unsplash:
            </p>
            <br />
            <p>
              “Unsplash grants you an irrevocable, nonexclusive, worldwide
              copyright license to download, copy, modify, distribute, perform,
              and use photos from Unsplash for free, including for commercial
              purposes, without permission from or attributing the photographer
              or Unsplash. This license does not include the right to compile
              photos from Unsplash to replicate a similar or competing service.”
            </p>
            <br />
            <ul className="list-disc">
              <li>Ivana Cajina, https://unsplash.com/photos/asuyh-_ZX54</li>
              <li>
                ThisisEngineering RAEng, https://unsplash.com/photos/-RFVw0jMyM4
              </li>
              <li>Niketh Vellanki, https://unsplash.com/photos/QkSN_8XcXwQ</li>
              <li>NASA, https://unsplash.com/photos/dCgbRAQmTQA</li>
              <li>Scott Blake, https://unsplash.com/photos/x-ghf9LjrVg</li>
              <li>
                The New York Public Library,
                https://unsplash.com/photos/kvHhSroTNPY
              </li>
              <li>NASA, https://unsplash.com/photos/5e9CmF-Ge9Y</li>
              <li>NASA, https://unsplash.com/photos/OLlj17tUZnU</li>
              <li>SpaceX, https://unsplash.com/photos/uj3hvdfQujI</li>
              <li>SpaceX, https://unsplash.com/photos/Ptd-iTdrCJM</li>
              <li>NASA, https://unsplash.com/photos/Ed2AELHKYBw</li>
              <li>
                ThisisEngineering RAEng, https://unsplash.com/photos/ZPeXrWxOjRQ
              </li>
              <li>
                ThisisEngineering RAEng, https://unsplash.com/photos/xYCBw1uIP_M
              </li>
              <li>Edgar, https://unsplash.com/photos/LboRnt38jpA</li>
              <li>Margaux Olverd, https://unsplash.com/photos/5MSDShQyYSg</li>
              <li>Bill Jelen, https://unsplash.com/photos/lt6gE86VyaA</li>
            </ul>
          </div>
          <h2 className="font-playfair font-bold text-2xl">
            Research Documentation (APA)
          </h2>
          <div className="pt-4 pb-6">
            <p>
              Aerospace Technology. (n.d.). Bangabandhu Satellite 1 (BD-1
              Communication Satellite). Retrieved January 23, 2023, from
              https://www.aerospace-technology.com/projects/bangabandhu-1-bd-1-communication-satellite/
            </p>
            <br />
            <p>
              Becker, J. (n.d.). Spaceflight mission report: Soyuz TMA-16.
              http://www.spacefacts.de/mission/english/soyuz-tma-16.htm
            </p>
            <br />
            <p>Delta IV. (n.d.). https://www.ulalaunch.com/rockets/delta-iv</p>
            <br />
            <p>
              Howell, E., & Dobrijevic, D. (2021, October 26). Columbia
              Disaster: What happened and what NASA learned. Space.com.
              https://www.space.com/19436-columbia-disaster.html
            </p>
            <br />
            <p>
              Lea, R., & Dobrijevic, D. (2022, April 29). Saturn V: The mighty
              U.S. moon rocket. Space.com.
              https://www.space.com/saturn-v-rocket-guide-apollo
            </p>
            <br />
            <p>
              Lunar Roving Vehicle, Qualification Test Unit. (n.d.).
              https://airandspace.si.edu/collection-objects/lunar-roving-vehicle-qualification-test-unit/nasm_A19760746000
            </p>
            <br />
            <p>
              NASA. (n.d.). Apollo 11 Lunar Module / EASEP. Retrieved January
              23, 2023, from
              https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C
            </p>
            <br />
            <p>
              NASA – Space Shuttle Columbia. (n.d.).
              https://www.nasa.gov/centers/kennedy/shuttleoperations/orbiters/orbiterscol.html
            </p>
            <br />
            <p>
              Space Foundation Discovery Center. (n.d.). Lunar Module. Retrieved
              January 23, 2023, from
              https://discoverspace.org/exhibit/lunar-module/
            </p>
            <br />
            <p>
              Spaceflight Now | Falcon Launch Report | SpaceX Falcon 9 rocket
              facts. (n.d.). https://spaceflightnow.com/falcon9/004/falcon9.html
            </p>
            <br />
            <p>
              SpaceX. (n.d.-a). Falcon 9. Retrieved January 23, 2023, from
              https://www.spacex.com/vehicles/falcon-9/
            </p>
            <br />
            <p>
              SpaceX. (n.d.-b). Falcon Heavy. Retrieved January 23, 2023, from
              https://www.spacex.com/vehicles/falcon-heavy/
            </p>
            <br />
            <p>
              The Apollo Lunar Roving Vehicle. (n.d.).
              https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html
            </p>
            <br />
            <p>
              Vandenberg Space Force Base. (2022, September 24). VANDENBERG’S
              FINAL DELTA IV HEAVY LAUNCHED TODAY.
              https://www.vandenberg.spaceforce.mil/News/Article-Display/Article/3169643/vandenbergs-final-delta-iv-heavy-launched-today/
            </p>
            <br />
            <p>
              What Was the Saturn V? (n.d.). NASA.
              https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-was-the-saturn-v-58.html
            </p>
          </div>
          <h2 className="font-playfair font-bold text-2xl">Plan of Work Log</h2>
          <Link href="/planOfWork.pdf" target="_blank" className="text-primary">
            <p className="pt-2 pb-6">Download here</p>
          </Link>
          <h2 className="font-playfair font-bold text-2xl">
            Student Copyright Checklist
          </h2>
          <Link href="/planOfWork.pdf" target="_blank" className="text-primary">
            <p className="pt-2 pb-6">Download here</p>
          </Link>
        </div>
      </main>
    </>
  );
};

export default references;
