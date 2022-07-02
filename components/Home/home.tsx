import { FC, useEffect, useState } from "react";
import Image from "next/image";
import PageWrapper from "../Shared/PageWrapper";
import PageData from "../../lib/portfolioData";
import TextTransition, { presets } from "react-text-transition";
import Button from "../Shared/Button";
import Modal from "../Modal";

interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = () => {
  const [index, setIndex] = useState(0);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

  const toggleShowProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const closeShowProfile = () => {
    setIsProfileOpen(false);
  };

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <PageWrapper>
      <Modal isOpen={isProfileOpen} handleClose={closeShowProfile}>
        <Image
          src='/assets/images/profileLg.jpg'
          width={300}
          height={400}
          alt='bruno_profile'
          className='filter grayscale rounded-lg'
          priority
        />
      </Modal>
      <div className='flex flex-col gap-3'>
        <div className='text-gray-400 text-md'>
          <span className='text-2xl mr-2'>&#128075;&#127998;</span>
          {PageData.salutation}
        </div>
        <div className='text-[45px] md:text-[60px] leading-[50px] font-extrabold text-white'>
          {PageData.full__name}.
        </div>
        <div className='text-[45px] md:text-[60px] leading-[50px] font-extrabold text-gray-500'>
          {PageData.passion}
        </div>

        <div className='flex items-center gap-4 my-5'>
          <div className='w-[40px] h-[40px] relative'>
            <Image
              src={PageData.profile__image}
              alt='Portfolio image'
              objectFit='cover'
              layout='fill'
              className='rounded-lg cursor-pointer'
              onClick={toggleShowProfile}
            />
          </div>
          <div>
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
          <Button>Say hello!</Button>
          <Button>My Resume</Button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default LandingPage;
