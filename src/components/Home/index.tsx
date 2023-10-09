import { ArrowNarrowDownIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { default as PageData, default as portfolioData } from '../../lib/portfolioData';
import Button from '../Shared/Button';

interface LandingPageProps {}

const initial = {
  opacity: 0,
};

const animate = {
  opacity: 1,
  y: 0,
};

const LandingPage: FC<LandingPageProps> = () => {
  const { salutation, passions, passion, full__name, homeDescription } = PageData;

  return (
    <section className="w-[84%] pt-20 md:pt-0 md:px-[100px] m-auto max-w-screen-2xl min-h-[650px] md:min-h-screen flex flex-col">
      <div className="flex-1 text-center flex flex-col justify-center">
        <motion.div
          initial={initial}
          animate={animate}
          className="dark:text-custom_gray text-custom_black font-light  mb-2">
          {salutation}
        </motion.div>
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-8xl font-extrabold  dark:text-custom_white text-custom_black mb-5 tracking-tighter">
          {full__name}
        </motion.div>

        {/* <motion.div
            initial={initial}
            animate={animate}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-2xl lg:text-5xl font-extrabold text-custom_black dark:text-custom_white my-5">
            {passion}
          </motion.div> */}

        <motion.div
          initial={initial}
          animate={animate}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-11/12 lg:w-1/2 mx-auto mb-7 dark:text-custom_gray text-custom_black font-light"
          dangerouslySetInnerHTML={{ __html: homeDescription }}
        />
        <motion.a
          initial={initial}
          animate={animate}
          transition={{ delay: 0.6, duration: 0.5 }}
          href={portfolioData.about.contact[0].data}
          target="_blank"
          rel="noreferrer"
          className="w-max mx-auto">
          <Button className="px-[20px]">Say hello !</Button>
        </motion.a>
      </div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="relative flex-1 h-[300px]">
        <Image
          src="/assets/svgs/hero.svg"
          alt="Home map"
          fill
          className="object-contain absolute opacity-30 dark:opacity-100"
        />
      </motion.div>
    </section>
  );
};

export default LandingPage;
