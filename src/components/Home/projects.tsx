import data from '../../lib/constants/data';
import ProjectsCard from '../projectCard';
import SectionHeader from '../sectionHeader';
import SectionWrapper from '../sectionWrapper';

const {
  projects: { title, description, data: projects },
} = data;

const Projects = () => {
  return (
    <SectionWrapper
      id="projects"
      className="dark:bg-background_dark bg-background_light border dark:border-custom_border_dark">
      <SectionHeader title={title} description={description} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap gap-5 md:w-10/12 mx-auto">
        {projects.map((pr, index) => {
          return <ProjectsCard key={index} {...pr} />;
        })}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
