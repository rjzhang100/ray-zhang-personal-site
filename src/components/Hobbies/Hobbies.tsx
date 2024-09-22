import { NavbarLinks } from '../../constants/text';
import PageSection from '../PageSection/PageSection';
import styles from './Hobbies.module.scss';
import { hobbies } from '../../constants/hobbies';
import { Hobby } from '../../constants/types';
import Accordion from '../Accordion/Accordion';
import { useState } from 'react';

const Hobbies = () => {
  const [activeTabs, setActiveTabs] = useState<string[]>([]);

  return (
    <PageSection sectionName={NavbarLinks.HOBBIES}>
      <div className={styles.accordionSection}>
        {hobbies.map((hobby: Hobby) => (
          <div
            className={styles.accordion}
            key={hobby.title}
            onClick={() => {
              // append if not in list, else remove it
              if (!activeTabs.find((tabName) => hobby.title === tabName)) {
                setActiveTabs((activeTabs) => [...activeTabs, hobby.title]);
              } else {
                setActiveTabs((activeTabs) =>
                  activeTabs.filter((tabName) => tabName !== hobby.title)
                );
              }
            }}
          >
            <Accordion
              {...hobby}
              isActive={!!activeTabs.find((tabName) => tabName === hobby.title)}
            />
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default Hobbies;
