import { FC } from "react";
import { TbExternalLink } from "react-icons/tb";
import { motion } from "framer-motion";

interface ExperienceProps {
  company: string;
  role: string;
  timeFrame: string;
  companyLink: string;
  description: string[];
}

const Experience: FC<ExperienceProps> = ({
  company,
  role,
  timeFrame,
  companyLink,
  description,
}) => {
  return (
    <motion.div
      key={company}
      variants={{
        show: {
          opacity: 1,
          transition: {
            ease: "easeInOut",
            duration: 0.3,
          },
        },
        hide: {
          opacity: 0.5,
        },
      }}
      animate="show"
      initial="hide"
      className="flex gap-3 text-center md:text-justify w-[90%] m-auto md:w-auto"
    >
      <div className="hidden md:block">
        <TbExternalLink className="text-2xl  mt-1 text-secondary" />
      </div>
      <div className="text-white ">
        <div className="flex flex-col gap-2">
          <h2 className="text-gray-300 flex items-center justify-center md:justify-start gap-2">
            <a
              href={companyLink}
              target="_blank"
              rel="noreferrer"
              className=" text-lg  font-semibold flex items-center gap-5"
            >
              {company}
              <TbExternalLink className="text-2xl text-secondary md:hidden" />
            </a>
          </h2>
          <span className="text-gray-300 text-sm">{role}</span>
          <span className="text-xs text-gray-500">{timeFrame}</span>
        </div>
        <div className="md:w-[650px] mt-9 flex flex-col gap-2 text-gray-400">
          {description.map((dsc, index) => {
            return (
              <div key={index} className="text-sm">
                - {dsc}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
