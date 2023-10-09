import { motion } from 'framer-motion';
import data from '../../lib/portfolioData';
import ProjectsCard from '../Shared/ProjectsCard';

const {
  projects: { title, description, data: projects },
} = data;

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      viewport={{ once: true }}
      id="projects"
      className="md:py-[100px] bg-background_light  ">
      <h1 className="leading-[5rem] font-extrabold text-3xl md:text-5xl mb-10 text-center">
        {title}
      </h1>
      <p
        className="dark:text-custom_white text-custom_black text-center w-11/12 md:w-1/2 m-auto mb-16"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className="flex flex-col divide-y w-11/12 md:w-1/2 mx-auto">
        {projects.map((pr, index) => {
          return <ProjectsCard key={index} {...pr} />;
        })}
      </div>
    </motion.section>
  );
};

export default Projects;
