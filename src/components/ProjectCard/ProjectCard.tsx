import { FC } from 'react';
import { Project } from '../../constants/types';

import styles from './ProjectCard.module.scss';

const ProjectCard: FC<Project> = ({ title, description, gitLink, icon }) => {
  return (
    <>
      <div
        className={styles.card}
        onClick={() => {
          window.open(gitLink, '_blank');
        }}
      >
        <div className={styles.title}>{title}</div>
        <ul className={styles.description}>
          {description.map((bullet) => (
            <li>{bullet}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProjectCard;
