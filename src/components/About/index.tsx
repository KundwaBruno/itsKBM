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
      className="text-center mt-[10%] "
    >
      <h1 className="leading-[5rem] font-extrabold tracking-tighter gradient-text text-3xl md:text-5xl mb-10">
        About Me
      </h1>
      <div
        className="text-gray-400 w-[87%] lg:w-1/2 m-auto mb-16 text-sm md:text-base"
        dangerouslySetInnerHTML={{ __html: Data.about.bio }}
      />
      <p className="normal-text text-gray-400 mb-10 mx-10 md:mx-0">
        Drag left or right through technologies that i am currently working
        with:
      </p>

      <div
        ref={emblaRef}
        className="overflow-hidden py-4 bg-transparent stacks-gradient cursor-grab active:cursor-grabbing mb-28"
      >
        <div className="embla__container flex items-center 2xl:justify-center">
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
      <div className="text-center">
        <Link href="#experience">
          <ArrowNarrowDownIcon
            className="text-[#797979] inline cursor-pointer animate-bounce duration-200"
            width={40}
          />
        </Link>
      </div>
    </motion.section>
  );
};

export default About;
