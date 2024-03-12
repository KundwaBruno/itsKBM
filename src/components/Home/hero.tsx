import PageData from '@/lib/constants/data';
import Link from 'next/link';
import Button from '../button';
import SectionWrapper from '../sectionWrapper';

const HeroSection = () => {
  const { salutation, full__name, homeDescription, about } = PageData;

  return (
    <SectionWrapper className="lg:h-[550px] flex flex-col">
      <div className="flex-1 text-center flex flex-col justify-center">
        <div className="dark:text-custom_gray text-custom_black  mb-2 md:text-lg">{salutation}</div>
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold  dark:text-custom_white text-custom_black mb-2 tracking-tighter">
          {full__name}
        </h1>
        <p
          className="w-11/12 lg:w-1/2 mx-auto mb-7 dark:text-custom_gray text-custom_black  md:text-lg"
          dangerouslySetInnerHTML={{ __html: homeDescription }}
        />
        <div className="w-max mx-auto">
          <Link href={about.contact[0].data} target="_blank" rel="noreferrer">
            <Button className="px-[20px]">Say hello !</Button>
          </Link>
        </div>
      </div>
      {/* <motion.div
        initial={initial}
        animate={animate}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="relative flex-1 mt-0 md:mt-20 h-[300px]">
        <Image
          priority
          src={`/assets/svgs/${resolvedTheme === 'light' ? 'heroLight.svg' : 'hero.svg'}`}
          alt="Home map"
          fill
          className="object-contain absolute"
        />
      </motion.div> */}
    </SectionWrapper>
  );
};

export default HeroSection;
