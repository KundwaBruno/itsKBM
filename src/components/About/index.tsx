import { FC } from "react";
import Data from "../../lib/portfolioData";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import portfolioData from "../../lib/portfolioData";
import Image from "next/image";
import { ArrowNarrowDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { motion } from "framer-motion";

interface AboutProps {}

const carouselOptions: EmblaOptionsType = {
  dragFree: true,
  containScroll: "trimSnaps",
};

const About: FC<AboutProps> = () => {
  const [emblaRef] = useEmblaCarousel(carouselOptions);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      viewport={{ once: true }}
      id="about"
      className="text-center pt-[80px] "
    >
      <h1 className="leading-[5rem] font-extrabold tracking-tighter gradient-text text-3xl md:text-5xl mb-20">
        About Me
      </h1>
      <div className="w-[80%] md:w-[70%] lg:w-[55%] m-auto gap-8 max-w-screen-lg">
        <div className="relative w-[180px] h-[180px] mx-auto my-16 ">
          <Image
            src={Data.profile__image}
            alt="Profile image"
            fill
            blurDataURL="URL"
            placeholder="blur"
            priority={true}
            className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <div
          className="text-gray-400  m-auto md:mb-16 text-sm md:text-base flex-1 text-center"
          dangerouslySetInnerHTML={{ __html: Data.about.bio }}
        />
      </div>

      <p className="normal-text text-gray-400 mb-10 mx-10 md:mx-0">
        Drag left or right through technologies that i am currently working
        with:
      </p>

      <div
        ref={emblaRef}
        className="overflow-hidden w-full py-4 bg-transparent stacks-gradient cursor-grab active:cursor-grabbing mb-28"
      >
        <div className="flex">
          {portfolioData.tech_stacks.map((stack) => {
            return (
              <div
                key={stack.title}
                className=" relative h-[50px] flex-0 flex-shrink-0 flex-grow-0 w-1/2 md:w-[14%]"
              >
                <Image
                  src={stack.icon}
                  alt={stack.title}
                  fill
                  className="object-contain"
                  blurDataURL="URL"
                  placeholder="blur"
                  priority={true}
                />
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
