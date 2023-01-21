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
      <div className="flex flex-col-reverse md:flex-row w-[80%] md:w-[70%] lg:w-[55%] m-auto gap-8 max-w-screen-lg">
        <div className="relative w-[150px] h-[210px] mx-auto mb-16 md:mb-0">
          <Image
            src={Data.profile__image}
            alt="Profile image"
            fill
            style={{ objectFit: "cover" }}
            blurDataURL="URL"
            placeholder="blur"
            priority={true}
            className="rounded-2xl"
          />
        </div>
        <div
          className="text-gray-400 lg:w-1/2 m-auto md:mb-16 text-sm md:text-base flex-1 text-center md:text-left"
          dangerouslySetInnerHTML={{ __html: Data.about.bio }}
        />
      </div>

      <p className="normal-text text-gray-400 mb-10 mx-10 md:mx-0">
        Drag left or right through technologies that i am currently working
        with:
      </p>

      <div
        ref={emblaRef}
        className="overflow-hidden py-4 bg-transparent stacks-gradient cursor-grab active:cursor-grabbing mb-28"
      >
        <div className="flex items-center 2xl:justify-center">
          {portfolioData.tech_stacks.map((stack) => {
            return (
              <div key={stack.title} className="embla__slide relative h-[50px]">
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
