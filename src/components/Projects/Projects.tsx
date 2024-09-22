import { projects } from '../../constants/projects';
import { NavbarLinks } from '../../constants/text';
import { Project } from '../../constants/types';
import PageSection from '../PageSection/PageSection';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <PageSection sectionName={NavbarLinks.PROJECTS}>
      <div className={styles.projectsGrid}>
        {projects.map((project: Project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </PageSection>
  );
};

export default Projects;
