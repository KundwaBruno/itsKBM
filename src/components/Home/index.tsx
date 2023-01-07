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
  <section className="w-[84%] m-auto max-w-screen-2xl">
    <div className="flex flex-col md:flex-row gap-10 mt-10 md:my-20 overflow-x-hidden">
      <div className="w-full lg:w-[65%] 2xl:w-[70%] flex flex-col justify-center mb-10 md:mb-0">
        <motion.div
          initial={initial}
          animate={animate}
          className="text-[#B0B0B0] mb-2 text-sm"
        >
          {PageData.salutation}
        </motion.div>
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl lg:text-7xl font-extrabold tracking-tighter text-gray-300"
        >
          {PageData.full__name}
        </motion.div>
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-[2.3rem] lg:text-[5rem] leading-[1.2] text-transparent bg-clip-text  custom-text-gradient font-extrabold tracking-tighter mb-5"
        >
          {PageData.passion}
        </motion.div>
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-full lg:w-4/6 mb-7 text-gray-400 text-sm lg:text-base"
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
          className="w-max"
        >
          <Button className="py-[15px] px-[50px]">Say hello !</Button>
        </motion.a>
      </div>
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1, ease: "easeInOut" }}
        className="w-full rounded-2xl md:w-[400px] m-auto lg:flex-1  bg-gradient-to-b from-[#1E1E1E] to-transparent  p-10"
      >
        <Image
          src={PageData.profile__image}
          className="mix-blend-overlay hover:mix-blend-normal transition-all duration-500 rounded-2xl m-auto"
          alt="Profile image"
          width={300}
          height={300}
          blurDataURL="URL"
          placeholder="blur"
          priority={true}
        />
      </motion.div>
    </div>
    <div className="text-center mt-20">
      <Link href="#about">
        <ArrowNarrowDownIcon
          className="text-[#797979] inline cursor-pointer animate-bounce duration-200"
          width={40}
        />
      </Link>
    </div>
  </section>
);

export default LandingPage;
