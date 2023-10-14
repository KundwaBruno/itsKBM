import { motion } from 'framer-motion';
import { FC } from 'react';
import { default as Data, default as portfolioData } from '../../lib/portfolioData';
import Button from '../Shared/Button';

interface ContactProps {}

const Contact: FC<ContactProps> = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.5 }}
    viewport={{ once: true }}
    id="contact"
    className="text-center py-10 md:py-[100px] max-w-screen-lg m-auto">
    <h1 className="leading-[5rem] text-custom_black dark:text-custom_white font-extrabold tracking-tighter gradient-text text-3xl md:text-5xl mb-10">
      Reach Me !
    </h1>
    <p
      className="dark:text-custom_gray text-custom_black w-11/12 md:w-2/3 m-auto mb-16 text-sm md:text-base"
      dangerouslySetInnerHTML={{ __html: Data.about.contactDescription }}
    />
    <div>
      <a href={portfolioData.about.contact[0].data} target="_blank" rel="noreferrer">
        <Button>Say hello!</Button>
      </a>
    </div>
  </motion.section>
);

export default Contact;
