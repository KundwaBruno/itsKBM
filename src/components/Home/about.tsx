import data from '@/lib/constants/data';
import Image from 'next/image';
import { FC } from 'react';
import SectionHeader from '../sectionHeader';
import SectionWrapper from '../sectionWrapper';

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <SectionWrapper className="dark:bg-background_dark bg-background_light border dark:border-custom_border_dark">
      <SectionHeader title="About" description={data.about.bio} />
      <div className="flex flex-wrap gap-10 md:divide-x divide-custom_border_dark items-center justify-center">
        {data.tech_stacks.map((stack) => {
          return (
            <div key={stack.title} className="relative h-[50px] flex-grow-0 w-32 md:w-60">
              <Image
                src={stack.icon}
                alt={stack.title}
                fill
                className="object-contain"
                blurDataURL="URL"
                placeholder="blur"
                priority={true}
              />
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default About;
