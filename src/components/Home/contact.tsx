import { motion } from 'framer-motion';
import { FC } from 'react';
import { default as Data, default as portfolioData } from '../../lib/constants/data';
import Button from '../button';
import SectionHeader from '../sectionHeader';
import SectionWrapper from '../sectionWrapper';

interface ContactProps {}

const Contact: FC<ContactProps> = () => (
  <SectionWrapper id="contact" className="text-center py-10 md:py-[100px] max-w-screen-lg m-auto">
    <SectionHeader title="Reach Me!" description={Data.about.contactDescription} />
    <a href={portfolioData.about.contact[0].data} target="_blank" rel="noreferrer">
      <Button>Say hello!</Button>
    </a>
  </SectionWrapper>
);

export default Contact;
