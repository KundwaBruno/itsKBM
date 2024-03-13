import { FC } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Data from '../../lib/constants/data';
import ExperienceBox from '../ExperienceDescription';
import SectionHeader from '../sectionHeader';
import SectionWrapper from '../sectionWrapper';

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = () => {
  return (
    <SectionWrapper id="experience">
      <SectionHeader title="Experience" />
      <div className="divide-y-2 dark:divide-custom_border_dark mx-auto">
        {Data.experience.slice(0, 3).map((ex, index) => {
          return (
            <ExperienceBox
              key={index}
              company={ex.company}
              companyLink={ex.companyLink}
              role={ex.position}
              timeFrame={ex.timeFrame}
              description={ex.description}
              position={index + 1}
            />
          );
        })}
      </div>
      <a
        href="/resume.pdf"
        target="_blank"
        className="underline font-bold underline-offset-4 flex items-center justify-center mx-auto md:m-0 gap-3 hover:text-primary w-max">
        View Full resume <FaArrowRight />
      </a>
    </SectionWrapper>
  );
};

export default Experience;
