import { FC, useState } from "react";
import PageWrapper from "../Shared/PageWrapper";
import ExperienceBox from "../Shared/Experience";
import { motion } from "framer-motion";
import Data from "../../lib/portfolioData";

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <PageWrapper>
      <div className='flex flex-col'>
        <div className='text-white font-bold text-4xl my-6'>
          3. Experience 👨🏾‍💻
        </div>
        <div className='min-h-[350px] flex items-center justify-center'>
          <ExperienceBox
            company={Data.experience[activeIndex].company}
            companyLink={Data.experience[activeIndex].companyLink}
            role={Data.experience[activeIndex].position}
            timeFrame={Data.experience[activeIndex].timeFrame}
            description={Data.experience[activeIndex].description}
          />
        </div>

        <div className='text-white  h-[90px] mt-10 flex items-center justify-center gap-4'>
          {Data.experience.map((num, index) => {
            return (
              <motion.div
                key={index}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer font-bold text-xs transition-all duration-100 border ${
                  activeIndex === index
                    ? " border-secondary w-10 h-10"
                    : "border-gray-600  w-8 h-8"
                }  rounded-full flex items-center justify-center`}
              >
                {index + 1}
              </motion.div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Experience;
