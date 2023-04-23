import { motion } from "framer-motion";
import data from "../../lib/portfolioData";
import ProjectsCard from "../Shared/ProjectsCard";

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
      className="text-center md:py-[100px] max-w-screen-xl m-auto"
    >
      <h1 className="leading-[5rem] font-extrabold tracking-tighter gradient-text text-3xl md:text-5xl mb-10">
        {title}
      </h1>
      <p
        className="text-gray-400 w-11/12 md:w-1/2 m-auto mb-16 text-sm md:text-base"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className="flex flex-wrap gap-8 justify-center mx-5">
        {projects.map((pr, index) => {
          return <ProjectsCard key={index} {...pr} />;
        })}
      </div>
    </motion.section>
  );
};

export default Projects;
