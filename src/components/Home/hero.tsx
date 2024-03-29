import PageData from '@/lib/constants/data';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Button from '../button';
import SectionWrapper from '../sectionWrapper';

interface LandingPageProps {}

const initial = {
  opacity: 0,
};

const animate = {
  opacity: 1,
  y: 0,
};

const HeroSection: FC<LandingPageProps> = () => {
  const { salutation, full__name, homeDescription, about } = PageData;

  const { resolvedTheme } = useTheme();

  return (
    <SectionWrapper className="min-h-[650px] lg:min-h-screen flex flex-col">
      <div className="flex-1 text-center flex flex-col justify-center">
        <motion.div
          initial={initial}
          animate={animate}
          className="dark:text-custom_gray text-custom_black  mb-2">
          {salutation}
        </motion.div>
        <motion.h1
          initial={initial}
          animate={animate}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-6xl xl:text-7xl font-extrabold  dark:text-custom_white text-custom_black mb-5 tracking-tighter">
          {full__name}
        </motion.h1>
        <motion.p
          initial={initial}
          animate={animate}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-11/12 lg:w-1/2 mx-auto mb-7 dark:text-custom_gray text-custom_black "
          dangerouslySetInnerHTML={{ __html: homeDescription }}
        />
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="w-max mx-auto">
          <Link href={about.contact[0].data} target="_blank" rel="noreferrer">
            <Button className="px-[20px]">Say hello !</Button>
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="relative flex-1 mt-0 md:mt-20 h-[300px]">
        <Image
          priority
          src={`/assets/svgs/${resolvedTheme === 'light' ? 'heroLight.svg' : 'hero.svg'}`}
          alt="Home map"
          fill
          className="object-contain absolute"
        />
      </motion.div>
    </SectionWrapper>
  );
};

export default HeroSection;
