import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

import Layout from "@/components/Layout";
import PageLoadEffect from "@/components/PageLoadEffect";

import hero from "../../public/your-journey/hero.webp";
import promotion from "../../public/your-journey/promotion.webp";
import training from "../../public/your-journey/training.webp";

const yourJourney = () => {
  return (
    <>
      <Head>
        <title>Your Journey</title>
        <meta name="description" content="any description" />
      </Head>
      <PageLoadEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <div className="relative w-full h-screen">
          <div className="z-[-1]">
            <Image
              priority
              src={hero}
              alt="/"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="relative h-full text-light flex flex-col items-center justify-center">
            <h2 className="font-dancing text-4xl">embark on the</h2>
            <motion.h1
              className="font-playfair font-black text-[8rem] uppercase"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              experience
            </motion.h1>
            <h2 className="font-dancing text-4xl">of a</h2>
            <motion.h1
              className="font-playfair font-black text-[8rem] uppercase"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              lifetime
            </motion.h1>
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
        <Layout>
          <div className="w-full px-8 pb-12 grid grid-cols-2 items-center justify-items-center">
            <div className="p-10">
              <h3 className="font-playfair font-bold text-3xl text-center pb-4">
                Basic Information
              </h3>
              <p>
                At Tourism Beyond, we specialize in providing space travel
                experiences for individuals and groups. Our state-of-the-art
                spacecrafts are designed to give passengers an unforgettable
                experience, whether it’s for scientific research, space
                exploration, or simply the thrill of it all. Our spacecrafts are
                equipped with the latest technology and safety features, and our
                experienced pilots and crew ensure that every flight is safe and
                comfortable. We offer a variety of flight options, from
                suborbital flights that provide a brief taste of space to
                orbital flights that allow passengers to experience
                weightlessness and have a glimpse of the Earth from space.
              </p>
            </div>
            <div className="p-10">
              <h3 className="font-playfair font-bold text-3xl text-center pb-4">
                Cost
              </h3>
              <p>
                At Tourism Beyond, we understand that space travel can be a
                significant investment. However, we believe that the experience
                is worth it and strive to make it accessible to as many people
                as possible. The cost of a space travel experience with us
                varies depending on the type of flight and the duration of the
                trip. Our suborbital flights start at $200,000 per person, while
                our orbital flights start at $20 million per person. These
                prices include all necessary training, pre-flight preparation,
                and post-flight debriefing. We also offer customizable packages
                that allow customers to add extra features such as private
                training sessions, VIP treatment, and exclusive in-flight
                services. To make space travel more affordable, we also offer
                financing options and payment plans for those who need them. We
                are committed to providing an unforgettable space travel
                experience that meets the highest safety and quality standards
                at a reasonable cost.
              </p>
            </div>
          </div>
          <div className="w-full px-8 py-12 grid grid-cols-2 items-center justify-items-center">
            <div className="p-10">
              <h3 className="font-playfair font-bold text-3xl text-center pb-4">
                Promotion
              </h3>
              <p>
                At Tourism Beyond, we believe that everyone should have the
                opportunity to experience the wonder and awe of space travel.
                That’s why we offer a variety of promotions and discounts
                throughout the year to make our services more accessible. From
                special deals for students and military personnel, to seasonal
                promotions and early bird discounts, we are constantly working
                to make space travel more affordable for our customers.
                Additionally, we partner with other companies and organizations
                to offer exclusive deals and packages for our customers. Our
                goal is to make space travel accessible to as many people as
                possible, and our promotions and discounts are a key part of
                that.
              </p>
              <br />
              <p>
                Another way we promote our services is through various marketing
                campaigns, social media and PR activities. We work with
                influencers, celebrities, and other space enthusiasts to help
                spread the word about our company and the unique experiences we
                offer. We also attend trade shows, conferences, and other
                industry events to showcase our spacecrafts and services.
                Additionally, we have a dedicated customer service team that is
                always available to answer any questions and assist potential
                customers with booking their space travel experience. We strive
                to make sure that everyone knows about the exciting
                opportunities we have to offer.”
              </p>
            </div>
            <div className="p-8 w-[90%] rounded-2xl border-2 border-solid border-dark bg-mygray drop-shadow-xl">
              <Image
                src={promotion}
                alt="/"
                className="w-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </Layout>
        <div>
          <div className="relative">
            <div class="custom-shape-divider-top-1681093420">
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
          <Layout className="bg-mygray">
            <div className="w-full px-8 pb-12 grid grid-cols-2 items-center justify-items-center">
              <div className="p-10">
                <h3 className="font-playfair font-bold text-3xl text-center pb-4">
                  Planning
                </h3>
                <p>
                  We understand that planning a space travel experience can be a
                  daunting task, which is why we have dedicated teams in place
                  to help you every step of the way. Once a booking is
                  confirmed, our experienced flight coordinators will work with
                  you to create a personalized flight plan tailored to your
                  needs and preferences. This includes selecting a specific
                  flight date, determining the flight itinerary, and
                  coordinating any additional services such as private training
                  sessions or exclusive in-flight experiences. We will also
                  provide you with all necessary information such as flight
                  schedules, required documentation, and training materials. Our
                  goal is to make the planning process as seamless and
                  stress-free as possible, so you can focus on the excitement of
                  your upcoming space travel experience.
                </p>
              </div>
              <div className="p-10">
                <h3 className="font-playfair font-bold text-3xl text-center pb-4">
                  Safety
                </h3>
                <p>
                  At Tourism Beyond, safety is our top priority. We understand
                  that space travel is a complex and challenging endeavor, which
                  is why we have strict safety procedures in place. Our
                  spacecrafts are designed and built to the highest industry
                  standards and undergo regular maintenance and inspections. Our
                  pilots and crew are highly experienced and trained in all
                  aspects of space travel, including emergency procedures.
                  Additionally, we have a comprehensive emergency response plan
                  in place to ensure the safety of all passengers and crew. We
                  also provide all passengers with pre-flight training and
                  emergency simulations to prepare them for any situation that
                  may arise. We also closely monitor weather conditions and
                  other external factors that may affect the flight. We are
                  committed to providing a safe and comfortable space travel
                  experience and are committed to the safety of our customers
                  and staff.
                </p>
              </div>
            </div>
            <div className="w-full px-8 py-12 grid grid-cols-2 items-center justify-items-center">
              <div className="p-8 w-[90%] rounded-2xl border-2 border-solid border-dark bg-light drop-shadow-xl">
                <Image
                  src={training}
                  alt="/"
                  className="w-full object-cover rounded-2xl"
                />
              </div>
              <div className="p-10">
                <h3 className="font-playfair font-bold text-3xl text-center pb-4">
                  Training
                </h3>
                <p>
                  At Tourism Beyond, we understand that space travel requires a
                  certain level of physical and mental preparation. That’s why
                  we provide all passengers with comprehensive training programs
                  to prepare them for their flight. The training includes both
                  ground-based and flight-based elements, and is designed to
                  ensure the safety and comfort of all passengers.
                </p>
                <br />
                <p>
                  Ground-based training includes both classroom-based
                  instruction and hands-on simulations. Our training program
                  covers important topics such as emergency procedures, space
                  physiology, and the effects of microgravity on the human body.
                  We also provide our customers with specific information about
                  the flight, including flight itinerary, flight dynamics, and
                  the spacecraft’s systems. The training program also includes
                  physical fitness and wellness components, to ensure that our
                  customers are in good health and can handle the physical
                  demands of space travel.
                </p>
                <br />
                <p>
                  Flight-based training includes pre-flight simulations and
                  practice sessions in our flight simulators. This enables our
                  customers to familiarize themselves with the flight, the
                  spacecraft’s systems and procedures, and practice emergency
                  scenarios. This training is designed to ensure that our
                  customers are well prepared and can handle any situation that
                  may arise during the flight.
                </p>
                <br />
                <p>
                  We believe that comprehensive training is essential to
                  ensuring the safety and comfort of our customers, and we are
                  committed to providing the highest quality training program
                  possible.
                </p>
              </div>
            </div>
          </Layout>
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
        <div>
          <Layout>
            <div className="w-full px-8 pb-12 grid grid-cols-2 items-center justify-items-center">
              <div className="p-10">
                <h3 className="font-playfair font-bold text-3xl text-center pb-4">
                  Launch
                </h3>
                <p>
                  The launch of a spacecraft is one of the most exciting and
                  awe-inspiring moments of a space travel experience. At Tourism
                  Beyond, we take great care to ensure that our customers have a
                  safe and comfortable launch experience.
                </p>
                <br />
                <p>
                  Upon arrival at our spaceport, customers will be escorted to
                  the spacecraft and assisted with boarding. Once on board,
                  customers will be given a final safety briefing and will have
                  the opportunity to take their seats and get comfortable. The
                  launch itself is a thrilling experience, with the spacecraft
                  accelerating to high speeds and reaching space in a matter of
                  minutes. Customers will feel the G-forces of the launch and
                  may experience a brief period of weightlessness before the
                  spacecraft reaches orbit. Throughout the launch, our
                  experienced pilots and crew will provide guidance and ensure
                  that everyone is comfortable and safe. After the launch,
                  customers will be able to enjoy the stunning views of the
                  Earth from space, and the spacecraft will begin its journey to
                  the destination.
                </p>
              </div>
              <div className="p-10">
                <h3 className="font-playfair font-bold text-3xl text-center pb-4">
                  Recovery
                </h3>
                <p>
                  We have a comprehensive recovery plan in place to ensure the
                  safe return of our passengers and spacecraft. Our spacecrafts
                  are designed to withstand the rigors of space travel and are
                  equipped with advanced recovery systems. After the flight, the
                  spacecraft will begin its descent back to Earth, and our
                  recovery team will be on standby to retrieve the spacecraft
                  and passengers. We have a dedicated team of engineers and
                  technicians who will inspect the spacecraft, perform necessary
                  maintenance and repairs before it’s ready for the next flight.
                  Passengers will go through a debriefing session where they
                  will have the opportunity to discuss their flight experience
                  with our staff and share their observations. We provide
                  medical assistance, if needed, and our medical team will check
                  on the physical and mental well-being of our customers. We
                  also offer a range of services to help passengers transition
                  back to life on Earth, such as psychological support,
                  decompression chamber therapy and other medical assistance if
                  needed. We are committed to providing a safe and comfortable
                  recovery experience for our customers, and we work closely
                  with our recovery partners to ensure the best possible
                  outcome.
                </p>
              </div>
            </div>
          </Layout>
        </div>
      </main>
    </>
  );
};

export default yourJourney;
