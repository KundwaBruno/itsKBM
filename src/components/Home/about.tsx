import data from '@/lib/constants/data';
import Image from 'next/image';
import { FC } from 'react';
import SectionHeader from '../sectionHeader';
import SectionWrapper from '../sectionWrapper';

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <SectionWrapper className="dark:bg-background_dark bg-background_light border-y dark:border-custom_border_dark">
      <SectionHeader title="About" description={data.about.bio} />
      <div className="flex flex-wrap gap-10 m divide-custom_border_dark items-center justify-center">
        {data.tech_stacks.map((stack) => {
          return (
            <Image
              key={stack.title}
              width={130}
              height={40}
              src={stack.icon}
              alt={stack.title}
              className="object-contain"
              blurDataURL="URL"
              placeholder="blur"
              priority={true}
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default About;
