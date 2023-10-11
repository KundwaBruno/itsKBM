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
      className="py-10 md:py-[100px] dark:bg-background_dark bg-background_light">
      <h1 className="font-extrabold dark:text-custom_white text-custom_black text-3xl md:text-5xl mb-5 text-center">
        {title}
      </h1>
      <p
        className="dark:text-custom_gray text-custom_black text-center w-11/12 md:w-1/4 m-auto mb-20"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap w-11/12 lg:w-9/12 xl:w-7/12 mx-auto gap-8">
        {projects.map((pr, index) => {
          return <ProjectsCard key={index} {...pr} />;
        })}
      </div>
    </motion.section>
  );
};

export default Projects;
