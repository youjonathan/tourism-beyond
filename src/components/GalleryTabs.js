import React from "react";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";

const GalleryTabs = () => {
  return (
    <div className="flex flex-row">
      <Tab.Group vertical>
        <Tab.List className="font-playfair font-black text-xl flex flex-col">
          <Tab as={Fragment}>
            {({ selected }) => (
              <h2
                className={
                  selected
                    ? "border border-r-0 border-light text-primary min-w-[24rem] pl-4 pr-16 py-3"
                    : "min-w-[24rem] pl-4 pr-16 py-3"
                }
              >
                Apollo Lunar Module
              </h2>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <h2
                className={
                  selected
                    ? "border border-r-0 border-light text-primary min-w-[24rem] pl-4 pr-16 py-3"
                    : "min-w-[24rem] pl-4 pr-16 py-3"
                }
              >
                Falcon 9
              </h2>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <h2
                className={
                  selected
                    ? "border border-r-0 border-light text-primary min-w-[24rem] pl-4 pr-16 py-3"
                    : "min-w-[24rem] pl-4 pr-16 py-3"
                }
              >
                Dragon Vertical
              </h2>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <h2
                className={
                  selected
                    ? "border border-r-0 border-light text-primary min-w-[24rem] pl-4 pr-16 py-3"
                    : "min-w-[24rem] pl-4 pr-16 py-3"
                }
              >
                Falcon Heavy
              </h2>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <h2
                className={
                  selected
                    ? "border border-r-0 border-light text-primary min-w-[24rem] pl-4 pr-16 py-3"
                    : "min-w-[24rem] pl-4 pr-16 py-3"
                }
              >
                Delta-IV Heavy
              </h2>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <h2
                className={
                  selected
                    ? "border border-r-0 border-light text-primary min-w-[24rem] pl-4 pr-16 py-3"
                    : "min-w-[24rem] pl-4 pr-16 py-3"
                }
              >
                Soyuz TMA-16
              </h2>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <h2
                className={
                  selected
                    ? "border border-r-0 border-light text-primary min-w-[24rem] pl-4 pr-16 py-3"
                    : "min-w-[24rem] pl-4 pr-16 py-3"
                }
              >
                Bangabandhu Satellite-1
              </h2>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <h2
                className={
                  selected
                    ? "border border-r-0 border-light text-primary min-w-[24rem] pl-4 pr-16 py-3"
                    : "min-w-[24rem] pl-4 pr-16 py-3"
                }
              >
                Lunar Roving Vehicle
              </h2>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <h2
                className={
                  selected
                    ? "border border-r-0 border-light text-primary min-w-[24rem] pl-4 pr-16 py-3"
                    : "min-w-[24rem] pl-4 pr-16 py-3"
                }
              >
                Space Shuttle Columbia
              </h2>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <h2
                className={
                  selected
                    ? "border border-r-0 border-light text-primary min-w-[24rem] pl-4 pr-16 py-3"
                    : "min-w-[24rem] pl-4 pr-16 py-3"
                }
              >
                Saturn V
              </h2>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className="w-full border p-8">
          <Tab.Panel>
            <p>
              The Apollo Lunar Module (LM) was a spacecraft developed by NASA as
              part of the Apollo program. The LM was designed to carry two
              astronauts from the Command Module (CM) in lunar orbit to the
              surface of the moon and back. It was a two-stage spacecraft,
              consisting of a descent stage and an ascent stage. The descent
              stage contained the propulsion system and landing gear, while the
              ascent stage contained the crew cabin and the ascent propulsion
              system. The LM had a height of 7.23 meters, a width of 9.4 meters,
              and a mass of 15,235 kilograms.
            </p>
            <br />
            <p>
              The LM was a crucial component of the Apollo program, as it
              allowed astronauts to land on the moon and explore its surface.
              The first successful moon landing was achieved on July 20, 1969,
              when astronauts Neil Armstrong and Edwin &#34;Buzz&#34; Aldrin
              landed the LM on the surface of the moon. The LM was also used for
              five additional successful moon landings during the Apollo
              program, with the last landing taking place in 1972. The LM was
              instrumental in allowing astronauts to conduct scientific
              experiments, collect samples, and explore the moon&#39;s surface.
            </p>
            <br />
            <p>
              The LM was designed to be launched into space on top of a Saturn V
              rocket, which was the largest and most powerful rocket ever built.
              The LM was stored in the Lunar Module Adapter (LMA) during the
              launch phase, and then separated from the CM in lunar orbit. Once
              on the surface of the moon, the LM&#39;s landing gear was
              deployed, and the descent stage used its rocket engines to slow
              the spacecraft&#39;s descent to the surface. After landing, the
              ascent stage was used to launch the spacecraft back into lunar
              orbit, where it docked with the CM for the return journey to
              Earth.
            </p>
            <br />
            <p>
              The development of the LM was a remarkable achievement in
              engineering and technology, requiring innovative solutions to
              overcome the challenges of landing on the moon. The LM&#39;s
              design was a result of intense research, development, and testing,
              with numerous setbacks and challenges along the way. The success
              of the LM and the Apollo program as a whole demonstrated the power
              of human ingenuity and the determination to push the boundaries of
              what was possible in space exploration.
            </p>
          </Tab.Panel>
          <Tab.Panel>
            <p>
              The Falcon 9 is a reusable, two-stage-to-orbit medium-lift launch
              vehicle designed and manufactured by SpaceX. It is used to launch
              payloads into orbit and has been used for a wide range of missions
              including satellite launches, cargo resupply to the International
              Space Station (ISS) and crewed missions to the ISS.
            </p>
            <br />
            <p>
              The first stage of the Falcon 9 is powered by nine Merlin engines,
              and is designed to land back on Earth after launch so that it can
              be reused. The second stage, or upper stage, is powered by a
              single Merlin engine. The rocket is also equipped with grid fins
              and landing legs that assist with the first stage&#39;s landing
              back to Earth.
            </p>
            <br />
            <p>
              The Falcon 9 has had several notable launches, including the first
              commercial cargo resupply mission to the ISS, the launch of the
              first privately-funded spacecraft to reach orbit, and the first
              privately-funded spacecraft to dock at the ISS. Additionally,
              Falcon 9 has been used to launch several Starlink satellites to
              low Earth orbit, as part of SpaceX&#39;s satellite internet
              project.
            </p>
            <br />
            <p>
              Overall, the Falcon 9 is considered a cost-effective and reliable
              launch vehicle, with a track record of successful launches and
              landings. Its reusability and relatively low cost have also made
              it a popular choice among satellite operators and other customers.
            </p>
          </Tab.Panel>
          <Tab.Panel>
            <p>
              The Dragon spacecraft is a pressurized capsule designed and built
              by SpaceX to transport cargo and crew members to and from low
              Earth orbit. The spacecraft has a height of 7.2 meters and a
              diameter of 3.7 meters. It has a docking mechanism that allows it
              to dock with the International Space Station (ISS) and other space
              stations. The Dragon spacecraft can carry up to seven crew members
              or a combination of crew and cargo. It is also designed to be
              reusable, allowing it to be refurbished for future flights.
            </p>
            <br />
            <p>
              The Dragon spacecraft is often launched into orbit by the Falcon 9
              rocket, another creation of SpaceX. The Falcon 9 is a two-stage
              rocket that stands 70 meters tall and has a diameter of 3.7
              meters. It is powered by nine Merlin engines in its first stage
              and a single Merlin engine in its second stage. The Falcon 9 has
              the ability to deliver payloads of up to 22,800 kilograms to low
              Earth orbit (LEO) and up to 8,300 kilograms to geostationary
              transfer orbit (GTO). The Falcon 9 is equipped with landing legs
              and can perform a vertical landing after delivering its payload.
            </p>
            <br />
            <p>
              The Falcon 9 and Dragon spacecraft are frequently used together
              for missions to the ISS. The Falcon 9 launches the Dragon
              spacecraft into orbit, where it then docks with the ISS. The
              Dragon spacecraft is used to transport supplies, experiments, and
              crew members to and from the ISS. The Falcon 9 is also used to
              launch other payloads, such as satellites and space probes, into
              orbit. The combination of the Falcon 9 and Dragon spacecraft has
              significantly reduced the cost of space missions and has made
              access to space more accessible to private companies and
              governments around the world.
            </p>
            <br />
            <p>
              The Dragon spacecraft has been used for numerous missions to the
              ISS, carrying crew members and supplies to the station. In 2012,
              the Dragon became the first commercial spacecraft to deliver cargo
              to the ISS. The Dragon spacecraft has also been used for
              scientific research and exploration. In 2018, SpaceX announced
              that it had signed an agreement with a private citizen to send
              them on a trip around the moon using a modified version of the
              Dragon spacecraft and the Falcon Heavy rocket. This mission is
              scheduled to take place in 2023 and would be the first time humans
              have traveled beyond low Earth orbit since the Apollo 17 mission
              in 1972. The Dragon spacecraft, along with the Falcon 9 rocket,
              has revolutionized space exploration and has opened up new
              possibilities for scientific research and exploration in space.
            </p>
          </Tab.Panel>
          <Tab.Panel>
            <p>
              The SpaceX Falcon Heavy is a reusable heavy-lift launch vehicle
              developed and manufactured by SpaceX. The rocket is designed to
              carry payloads of up to 64 tons to Low Earth Orbit (LEO), and up
              to 16 tons to geostationary transfer orbit (GTO) . It is currently
              the most powerful operational rocket in the world, with the
              ability to lift more than twice the payload of its closest
              competitor.
            </p>
            <br />
            <p>
              The Falcon Heavy is composed of three Falcon 9 first-stage cores,
              which are strapped together to form the rocket&#39;s first stage.
              The second stage is a single Falcon 9 upper stage. The rocket also
              has reusable landing legs which allow the first stage cores to
              land back on Earth after launch, so that they can be used again.
            </p>
            <br />
            <p>
              The Falcon Heavy has successfully launched several missions,
              including the launch of the Arabsat-6A communications satellite,
              and the launch of the Tesla Roadster, a car owned by SpaceX CEO
              Elon Musk, into orbit around the Sun. In addition, Falcon Heavy
              has been used for several NASA missions, such as the launch of the
              STP-2 payload for the US Department of Defense.
            </p>
            <br />
            <p>
              Overall, the Falcon Heavy is considered a significant step forward
              in SpaceX&#39;s goal of making space travel more affordable and
              accessible.
            </p>
          </Tab.Panel>
          <Tab.Panel>
            <p>
              The Delta IV Heavy is a heavy-lift launch vehicle developed by
              United Launch Alliance (ULA), a joint venture between Lockheed
              Martin and Boeing. It is one of the largest and most powerful
              rockets in operation today and is primarily used for launching
              large payloads into high orbits and deep space.
            </p>
            <br />
            <p>
              The Delta IV Heavy is composed of three Common Booster Cores
              (CBCs) strapped together, each of which is powered by a Rocketdyne
              RS-68A liquid hydrogen and liquid oxygen engine. The rocket also
              has an upper stage, the Delta Cryogenic Second Stage (DCSS), which
              is powered by a RL10B-2 liquid hydrogen and liquid oxygen engine.
            </p>
            <br />
            <p>
              The Delta IV Heavy has been used to launch a variety of payloads,
              including government and military satellites, deep space probes,
              and commercial payloads. Some of the notable missions include the
              launch of NASA&#39;s Parker Solar Probe to study the Sun&#39;s
              corona, the launch of the NROL-37 reconnaissance satellite for the
              National Reconnaissance Office, and the launch of the WGS-9
              military communications satellite for the US Air Force.
            </p>
            <br />
            <p>
              The Delta IV Heavy is considered a reliable and versatile launch
              vehicle, with a successful track record of launches. However,
              it&#39;s considered less cost-effective than competitors like
              SpaceX&#39;s Falcon Heavy, and ULA has announced plans to retire
              the vehicle in the future.
            </p>
          </Tab.Panel>
          <Tab.Panel>
            <p>
              The Soyuz TMA-16 was a spacecraft of the Soyuz TMA series, which
              is used to transport crew to and from the International Space
              Station (ISS). It was launched on March 26, 2010, and carried
              three astronauts, two Russian cosmonauts and one NASA astronaut,
              to the ISS.
            </p>
            <br />
            <p>
              The Soyuz TMA-16 spacecraft consisted of three parts: the Orbital
              Module, the Descent Module, and the Instrumentation/Propulsion
              Module. The Orbital Module was located at the front of the
              spacecraft and served as living quarters for the crew during their
              stay on the ISS. The Descent Module was located at the bottom of
              the spacecraft and was used for re-entry and landing. The
              Instrumentation/Propulsion Module was located at the rear of the
              spacecraft and provided propulsion for the spacecraft, as well as
              housing the spacecraft&#39;s systems.
            </p>
            <br />
            <p>
              The Soyuz TMA-16 spacecraft was launched on top of a Soyuz-FG
              rocket from the Baikonur Cosmodrome in Kazakhstan. The launch and
              docking with the ISS was successful, and the crew spent 164 days
              on the station before returning to Earth. The spacecraft undocked
              from the ISS on September 25, 2010, and landed safely in
              Kazakhstan on September 25, 2010.
            </p>
            <br />
            <p>
              The Soyuz spacecraft has been used for more than 50 years to
              transport crew to and from low Earth orbit, including the ISS. It
              is considered a reliable and proven spacecraft, and continues to
              be a mainstay of crewed spaceflight today
            </p>
          </Tab.Panel>
          <Tab.Panel>
            <p>
              Bangabandhu Satellite-1 is Bangladesh&#39;s first-ever
              geostationary communications satellite. The satellite was launched
              on May 11, 2018, aboard a SpaceX Falcon 9 rocket from the Kennedy
              Space Center in Florida, USA.
            </p>
            <br />
            <p>
              The satellite is named after Bangabandhu Sheikh Mujibur Rahman,
              the founding father of Bangladesh, and was built by the French
              company Thales Alenia Space. It is designed to provide a range of
              communications and broadcasting services, including television and
              radio distribution, broadband, and data communications to
              Bangladesh and the surrounding region.
            </p>
            <br />
            <p>
              The Bangabandhu Satellite-1 has a design life of 15 years and is
              equipped with 40 transponders, including 26 in C-band, 12 in
              Ku-band and 2 in the Ka-band. It has a coverage area of
              Bangladesh, India, Indonesia, Maldives, Nepal, Bhutan, Sri Lanka,
              and some parts of Pakistan, Philippines and Myanmar. The satellite
              is placed in the 119.1° East longitude geostationary orbit,
              providing services to the region.
            </p>
            <br />
            <p>
              The successful launch and deployment of Bangabandhu Satellite-1 is
              considered a major milestone for Bangladesh, as it greatly
              enhances the country&#39;s ability to access communication and
              broadcasting services, and has the potential to spur economic
              growth and development. It also marks a significant step forward
              in the country&#39;s space program, which has been rapidly
              expanding in recent years.
            </p>
          </Tab.Panel>
          <Tab.Panel>
            <p>
              The Apollo 17 Lunar Roving Vehicle (LRV) was a battery-powered
              four-wheeled rover used on the Moon during the Apollo 17 mission,
              the last manned mission to the lunar surface. The LRV was designed
              and built by Boeing and was used to transport astronauts Gene
              Cernan and Harrison Schmitt on the lunar surface.
            </p>
            <br />
            <p>
              The LRV was designed to operate in the harsh environment of the
              Moon and had to withstand the extreme temperatures, radiation, and
              dust. It was approximately 10 feet long, 7 feet wide, and 4 feet
              tall and had a weight of approximately 460 pounds. The vehicle was
              powered by a battery and had a maximum speed of 8 mph. It was
              equipped with a number of scientific instruments and equipment,
              including a television camera, a stereo camera, a soil mechanics
              surface sampler, a rake, a scoop, and a magnet for collecting
              samples of the lunar surface.
            </p>
            <br />
            <p>
              The LRV was deployed from the Lunar Module and was driven by the
              astronauts during the three EVAs (extra-vehicular activities) on
              the lunar surface. It provided the astronauts with a means of
              transportation over the rough terrain of the Moon, allowing them
              to explore a much larger area than they would have been able to on
              foot. The LRV covered a total distance of about 35.9 km (22.3
              miles) during the mission, traveling as far as 3.6 km (2.2 miles)
              from the Lunar Module.
            </p>
            <br />
            <p>
              The Apollo 17 LRV was a significant achievement in engineering and
              technology, and its use greatly expanded the range and scope of
              the scientific exploration of the lunar surface during the Apollo
              program. It remains the only vehicle driven on another celestial
              body.
            </p>
          </Tab.Panel>
          <Tab.Panel>
            <p>
              The Space Shuttle Columbia (STS-1) was the first orbiter of
              NASA&#39;s Space Shuttle program. It was built by Rockwell
              International (now Boeing) and was first launched on April 12,
              1981. Columbia was the first reusable manned spacecraft, and it
              was used for 28 missions between 1981 and 2003.
            </p>
            <br />
            <p>
              Columbia was a reusable spacecraft that consisted of a winged
              orbiter, a large external fuel tank, and two solid rocket
              boosters. The orbiter was the crew compartment, and it was
              equipped with a cockpit for the pilots, a mid-deck for the crew,
              and a cargo bay for payloads. The orbiter was also equipped with
              three main engines, which were used for propulsion and landing,
              and two OMS (Orbital Maneuvering System) engines, which were used
              for orbit changes and course corrections.
            </p>
            <br />
            <p>
              Columbia completed several successful missions during its
              operational lifetime, including the first Space Shuttle mission
              (STS-1), the first spacewalk from a Space Shuttle (STS-6), and the
              first American woman astronaut to fly in space (STS-35). Columbia
              also flew several scientific missions, including the deployment of
              the Hubble Space Telescope (STS-31) and the study of the
              Earth&#39;s atmosphere (STS-107).
            </p>
            <br />
            <p>
              Unfortunately, Columbia&#39;s final mission (STS-107) ended in
              tragedy when the orbiter broke apart during re-entry on February
              1, 2003, due to a damaged wing leading edge caused by a piece of
              foam insulation that broke off during launch. All seven crew
              members were lost in the accident. The Columbia accident was a
              significant setback for NASA&#39;s Space Shuttle program, and it
              led to the grounding of the Shuttle fleet for over two years while
              the accident was investigated and safety measures were
              implemented.
            </p>
          </Tab.Panel>
          <Tab.Panel>
            <p>
              The Saturn V was a heavy-lift launch vehicle used by NASA&#39;s
              Apollo program during the 1960s and 1970s. It was developed by the
              Marshall Space Flight Center and built by the Boeing-led team of
              companies, which included North American Aviation, Douglas
              Aircraft Company, and IBM. The Saturn V was the most powerful
              rocket ever built at the time of its launch and it remains the
              tallest, heaviest and most powerful rocket ever flown
              successfully.
            </p>
            <br />
            <p>
              The Saturn V was a three-stage rocket, with each stage being
              powered by its own set of engines. The first stage, or S-IC, was
              powered by five F-1 engines and provided the initial thrust to
              lift the rocket off the launch pad. The second stage, or S-II, was
              powered by five J-2 engines and provided the thrust to lift the
              rocket into orbit. The third stage, or S-IVB, was powered by a
              single J-2 engine and provided the thrust to propel the spacecraft
              towards the Moon.
            </p>
            <br />
            <p>
              The Saturn V rocket was used in thirteen NASA missions, including
              the Apollo 11 mission, which successfully landed the first humans
              on the Moon in 1969. The Saturn V also carried the Skylab space
              station into orbit in 1973 and the Apollo-Soyuz Test Project in
              1975.
            </p>
            <br />
            <p>
              The Saturn V rocket was considered an engineering marvel, and its
              success in launching the Apollo spacecraft to the Moon was a
              significant achievement in human history. The Saturn V&#39;s
              powerful engines and large fuel capacity allowed it to lift large
              payloads into orbit, and its reliability and success rate made it
              one of the most successful rockets in history.
            </p>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default GalleryTabs;
