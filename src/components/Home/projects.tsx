import data from '../../lib/constants/data';
import ProjectsCard from '../projectCard';
import SectionHeader from '../sectionHeader';
import SectionWrapper from '../sectionWrapper';

const {
  projects: { title, data: projects },
} = data;

const Projects = () => {
  return (
    <SectionWrapper
      id="projects"
      className="dark:bg-background_dark bg-background_light border-y dark:border-custom_border_dark">
      <SectionHeader title={title} />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 flex-wrap gap-5 mx-auto">
        {projects.map((pr, index) => {
          return <ProjectsCard key={index} {...pr} />;
        })}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
