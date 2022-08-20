import { FC, useEffect, useState } from "react";
import Image from "next/image";
import PageWrapper from "../Shared/PageWrapper";
import PageData from "../../lib/portfolioData";
import TextTransition, { presets } from "react-text-transition";
import Button from "../Shared/Button";
import Modal from "../Shared/Modal";
import Stacks from "../Stacks";
import { motion } from "framer-motion";
import Link from "next/link";

interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = () => {
  const [index, setIndex] = useState(0);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isStacksOpen, setIsStacksOpen] = useState<boolean>(false);

  const toggleShowProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const closeShowProfile = () => {
    setIsProfileOpen(false);
  };

  const toggleShowStacks = () => {
    setIsStacksOpen(!isStacksOpen);
  };

  const closeShowStacks = () => {
    setIsStacksOpen(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <PageWrapper>
      <Modal isOpen={isProfileOpen} handleClose={closeShowProfile}>
        <Image
          src='https://res.cloudinary.com/dxyu6elli/image/upload/v1656864299/profileLg-min_y3jtkr.jpg'
          width={300}
          height={400}
          alt='bruno_profile'
          className='rounded-lg'
          priority
        />
      </Modal>
      <Modal isOpen={isStacksOpen} handleClose={closeShowStacks}>
        <Stacks />
      </Modal>
      <div className='flex justify-center items-center '>
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
          className='flex flex-col gap-3'
        >
          <div className='text-gray-400 text-xs md:text-md'>
            <span className='text-xs md:text-2xl mr-2'>&#128075;&#127998;</span>
            {PageData.salutation}
          </div>
          <div className='text-[43px] md:text-[60px] leading-[50px] font-extrabold text-white'>
            {PageData.full__name}.
          </div>
          <div className='text-[43px] md:text-[60px] leading-[40px] font-extrabold text-gray-500'>
            {PageData.passion}.
          </div>

          <div className='flex items-center gap-4 my-5'>
            <div className='w-[40px] h-[40px] relative'>
              <Image
                src={PageData.profile__image}
                alt='Portfolio image'
                objectFit='cover'
                layout='fill'
                className='rounded-full cursor-pointer'
                onClick={toggleShowProfile}
              />
            </div>
            <div className='cursor-pointer' onClick={toggleShowStacks}>
              <TextTransition springConfig={presets.gentle}>
                <span className='text-gray-400'>
                  {
                    PageData.tech_stacks[index % PageData.tech_stacks.length]
                      .title
                  }
                </span>
              </TextTransition>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <Link href='mailto:kundwabruno@gmail.com' target='_blank'>
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={`text-gray-400 border disabled:bg-gray-800 disabled:border-gray-800 disabled:cursor-not-allowed text-center p-4 text-sm min-w-[120px] rounded-lg cursor-pointer`}
              >
                Say hello!
              </motion.div>
            </Link>
            <Link href='MY_RESUME.pdf' target='_blank'>
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={`text-gray-400 border disabled:bg-gray-800 disabled:border-gray-800 disabled:cursor-not-allowed p-4 text-center text-sm min-w-[120px] rounded-lg cursor-pointer`}
              >
                My Resume
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default LandingPage;
