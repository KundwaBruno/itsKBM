import { FC } from "react";
import PageWrapper from "../Shared/PageWrapper";
import Data from "../../lib/portfolioData";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <PageWrapper>
      <div className='flex flex-col gap-10 '>
        <div className='text-white font-bold text-4xl'>1. Biography</div>
        <div
          className='text-gray-500 md:w-[600px]'
          dangerouslySetInnerHTML={{ __html: Data.about.bio }}
        />
      </div>
    </PageWrapper>
  );
};

export default About;
