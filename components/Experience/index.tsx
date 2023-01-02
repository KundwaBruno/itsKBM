import { FC, useState } from "react";
import ExperienceBox from "../Shared/ExperienceDescription";
import { motion } from "framer-motion";
import Data from "../../lib/portfolioData";
import { BriefcaseIcon } from "@heroicons/react/solid";
import { ArrowNarrowDownIcon } from "@heroicons/react/outline";
import Link from "next/link";

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="experience" className="text-center mt-[10%] ">
      <h1 className="leading-[5rem] font-extrabold tracking-tighter gradient-text text-3xl md:text-5xl">
        Experience
      </h1>
      <div className="min-h-[450px] flex items-center justify-center">
        <ExperienceBox
          company={Data.experience[activeIndex].company}
          companyLink={Data.experience[activeIndex].companyLink}
          role={Data.experience[activeIndex].position}
          timeFrame={Data.experience[activeIndex].timeFrame}
          description={Data.experience[activeIndex].description}
        />
      </div>

      <div className="text-white flex items-center justify-center w-full overflow-x-auto md:px-0 md:no-scrollbar mb-28 py-5">
        {Data.experience.map((exp, index) => {
          const isActive = activeIndex === index;
          return (
            <motion.div
              key={index}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveIndex(index)}
              className="cursor-pointer text-xs transition-all duration-100 flex items-center justify-center gap-2 min-w-max"
            >
              <BriefcaseIcon
                className={`${
                  isActive ? "text-secondary" : "text-gray-300"
                } inline cursor-pointer`}
                width={30}
              />
              <span
                className={`${
                  isActive
                    ? "text-secondary border-b pb-1 border-secondary font-bold"
                    : "text-gray-300"
                } inline cursor-pointer`}
              >
                {exp.timeFrame}
              </span>
              {index !== Data.experience.length - 1 && (
                <div className="h-[0.5px] w-[40px] bg-red-50 mx-10" />
              )}
            </motion.div>
          );
        })}
      </div>
      <div className="text-center">
        <Link href="#contact">
          <ArrowNarrowDownIcon
            className="text-[#797979] inline cursor-pointer animate-bounce duration-200"
            width={40}
          />
        </Link>
      </div>
    </section>
  );
};

export default Experience;
