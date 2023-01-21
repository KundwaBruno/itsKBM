import { FC } from "react";
import Image from "next/image";
import PageData from "../../lib/portfolioData";
import Button from "../Shared/Button";
import { ArrowNarrowDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import portfolioData from "../../lib/portfolioData";
import { motion } from "framer-motion";

interface LandingPageProps {}

const initial = {
  opacity: 0,
  y: -10,
};

const animate = {
  opacity: 1,
  y: 0,
};

const LandingPage: FC<LandingPageProps> = () => (
  <section className="w-[84%] m-auto max-w-screen-2xl min-h-[650px] md:min-h-[800px] flex items-center justify-center relative">
    <div className="flex flex-col md:flex-row gap-10 mt-10 md:my-20">
      <div className="flex flex-col justify-center mb-10 md:mb-0">
        <motion.div
          initial={initial}
          animate={animate}
          className="text-[#B0B0B0] mb-2 text-sm text-center"
        >
          {PageData.salutation}
        </motion.div>
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl lg:text-7xl font-extrabold tracking-tighter text-gray-300 text-center"
        >
          {PageData.full__name}
        </motion.div>
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-[2.3rem] lg:text-[5rem] leading-[1.2] text-transparent bg-clip-text  custom-text-gradient font-extrabold tracking-tighter mb-5 text-center"
        >
          {PageData.passion}
        </motion.div>
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-full md:w-4/6 m-auto mb-7 text-gray-400 text-sm lg:text-base text-center"
        >
          {PageData.homeDescription}
        </motion.div>
        <motion.a
          initial={initial}
          animate={animate}
          transition={{ delay: 0.6, duration: 0.5 }}
          href={portfolioData.about.contact[0].data}
          target="_blank"
          rel="noreferrer"
          className="w-max m-auto"
        >
          <Button className="py-[15px] px-[50px]">Say hello !</Button>
        </motion.a>
      </div>
    </div>
    <motion.div
      initial={initial}
      animate={animate}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="text-center absolute bottom-16"
    >
      <Link href="#about">
        <ArrowNarrowDownIcon
          className="text-[#797979] inline cursor-pointer animate-bounce duration-200"
          width={40}
        />
      </Link>
    </motion.div>
  </section>
);

export default LandingPage;
