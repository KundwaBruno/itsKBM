import { ArrowNarrowDownIcon } from '@heroicons/react/outline';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { default as Data, default as portfolioData } from '../../lib/portfolioData';

interface AboutProps {}

const carouselOptions: EmblaOptionsType = {
  dragFree: true,
  containScroll: 'trimSnaps',
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
      className="text-center pt-[80px] dark:bg-background_dark bg-background_light">
      <h1 className="leading-[5rem] dark:text-custom_white text-custom_black font-extrabold tracking-tighter gradient-text text-3xl md:text-5xl mb-20">
        Bio
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
            className="rounded-full object-cover transition-all duration-300"
          />
        </div>
        <div
          className="dark:text-custom_gray font-light text-lg text-custom_black  m-auto md:mb-16  flex-1 text-center"
          dangerouslySetInnerHTML={{ __html: Data.about.bio }}
        />
      </div>

      <div className="flex flex-wrap gap-10 mt-10 md:mt-0 md:divide-x divide-custom_border_dark items-center justify-center mb-28 py-5 border-y border-custom_border_dark bg-white dark:bg-custom_black">
        {portfolioData.tech_stacks.map((stack) => {
          return (
            <div key={stack.title} className="relative h-[50px] flex-grow-0 w-60">
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
    </motion.section>
  );
};

export default About;
