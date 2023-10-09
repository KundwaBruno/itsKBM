import { ArrowNarrowDownIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';
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
    <section className="w-[84%] m-auto max-w-screen-2xl min-h-[650px] md:min-h-screen flex items-center justify-center relative">
      <div className="flex flex-col md:flex-row gap-10 mt-10 md:my-20">
        <div className="flex flex-col justify-center mb-10 md:mb-0">
          <motion.div
            initial={initial}
            animate={animate}
            className="dark:text-custom_white text-custom_black  mb-2 text-center">
            {salutation}
          </motion.div>
          <motion.div
            initial={initial}
            animate={animate}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl lg:text-7xl font-extrabold  dark:text-custom_white text-custom_black text-center mb-5 tracking-tighter">
            {full__name}
          </motion.div>

          {/* <motion.div
            initial={initial}
            animate={animate}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-2xl lg:text-5xl font-extrabold text-center text-custom_black dark:text-custom_white my-5">
            {passion}
          </motion.div> */}

          <motion.div
            initial={initial}
            animate={animate}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="w-full md:w-1/2 m-auto mb-7 dark:text-custom_white text-custom_black text-sm lg:text-base text-center"
            dangerouslySetInnerHTML={{ __html: homeDescription }}
          />
          <motion.a
            initial={initial}
            animate={animate}
            transition={{ delay: 0.6, duration: 0.5 }}
            href={portfolioData.about.contact[0].data}
            target="_blank"
            rel="noreferrer"
            className="w-max m-auto">
            <Button className="py-[15px] px-[50px]">Say hello !</Button>
          </motion.a>
        </div>
      </div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-center absolute bottom-16">
        <Link href="#about">
          <ArrowNarrowDownIcon
            className="text-custom_black dark:text-custom_white inline cursor-pointer animate-bounce duration-200"
            width={40}
          />
        </Link>
      </motion.div>
    </section>
  );
};

export default LandingPage;
