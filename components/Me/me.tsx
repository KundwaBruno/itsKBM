import { FC } from "react";
import PageWrapper from "../Shared/PageWrapper";
import Data from "../../lib/portfolioData";
import { motion } from "framer-motion";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <PageWrapper>
      <motion.div
        variants={{
          show: {
            opacity: 1,
            y: 0,
            transition: {
              ease: "easeInOut",
              duration: 0.3,
            },
          },
          hide: {
            y: 10,
            opacity: 0.5,
          },
        }}
        animate='show'
        initial='hide'
        className='flex flex-col gap-10 '
      >
        <div className='text-white font-bold text-4xl'>1. Biography</div>
        <div
          className='text-gray-500 md:w-[600px]'
          dangerouslySetInnerHTML={{ __html: Data.about.bio }}
        />
      </motion.div>
    </PageWrapper>
  );
};

export default About;
