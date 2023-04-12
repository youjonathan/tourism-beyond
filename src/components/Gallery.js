import Image from "next/image";
import Masonry from "react-masonry-css";

import apollo from "../../public/space-vehicles/apollo.webp";
import nine from "../../public/space-vehicles/falconNine.webp";
import dragon from "../../public/space-vehicles/dragon.webp";
import heavy from "../../public/space-vehicles/falconHeavy.webp";
import delta from "../../public/space-vehicles/delta.webp";
import soyuz from "../../public/space-vehicles/soyuz.webp";
import banga from "../../public/space-vehicles/bangabandhu.webp";
import rover from "../../public/space-vehicles/rover.webp";
import columbia from "../../public/space-vehicles/columbia.webp";
import saturn from "../../public/space-vehicles/saturn.webp";

const Gallery = () => {
  return (
    <Masonry breakpointCols={4} className="flex gap-2">
      <div>
        <Image
          src={apollo}
          alt="Apollo Lunar Module"
          className="my-2"
          placeholder="blur"
        />
        <p className="text-center">Apollo Lunar Module</p>
      </div>
      <div>
        <Image src={nine} alt="Falcon 9" className="my-2" placeholder="blur" />
        <p className="text-center">Falcon 9</p>
      </div>
      <div>
        <Image
          src={dragon}
          alt="Falcon 9 and Dragon Vertical"
          className="my-2"
          placeholder="blur"
        />{" "}
        <p className="text-center">Falcon 9 and Dragon Vertical</p>
      </div>
      <div>
        <Image
          src={heavy}
          alt="Falcon Heavy"
          className="my-2"
          placeholder="blur"
        />
        <p className="text-center">Falcon Heavy</p>
      </div>
      <div>
        <Image
          src={delta}
          alt="Delta-IV Heavy"
          className="my-2"
          placeholder="blur"
        />
        <p className="text-center">Delta-IV Heavy</p>
      </div>
      <div>
        <Image
          src={columbia}
          alt="Space Shuttle Columbia"
          className="my-2"
          placeholder="blur"
        />
        <p className="text-center">Space Shuttle Columbia</p>
      </div>
      <div>
        <Image
          src={saturn}
          alt="Saturn V"
          className="my-2"
          placeholder="blur"
        />{" "}
        <p className="text-center">Saturn V</p>
      </div>
      <div>
        <Image
          src={soyuz}
          alt="Soyuz TMA-16"
          className="my-2"
          placeholder="blur"
        />
        <p className="text-center">Soyuz TMA-16</p>
      </div>
      <div>
        <Image
          src={banga}
          alt="Bangabandhu Satellite-1"
          className="my-2"
          placeholder="blur"
        />
        <p className="text-center">Bangabandhu Satellite-1</p>
      </div>
      <div>
        <Image
          src={rover}
          alt="Lunar Roving Vehicle"
          className="my-2"
          placeholder="blur"
        />
        <p className="text-center">Lunar Roving Vehicle</p>
      </div>
    </Masonry>
  );
};

export default Gallery;
