import { useState } from 'react';
import { ImageMap } from '../../constants/imageMap';
import { KG, workplaces } from '../../constants/misc';
import PageSection from '../PageSection/PageSection';
import styles from './WorkExperience.module.scss';
import cx from 'classnames';
import {
  WorkDescriptionDetails,
  WorkDescriptionJobTitles,
  WorkDescriptionSkills,
  WorkDescriptionSummary,
} from '../../constants/workExperience';
import SkillBlock from '../SkillBlock/SkillBlock';

const WorkExperience = () => {
  const [activeTab, setActiveTab] = useState<string>(KG);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleTabChange = (workName: string) => {
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
    setTimeout(() => {
      setActiveTab(workName);
    }, 300);
  };

  return (
    <PageSection sectionName="Work Experience">
      <div className={styles.workExperience}>
        <div className={styles.clickToLearn}>Click one to learn more!</div>
        <div className={styles.gridWrapper}>
          {/* TODO: Make this horizontally scrollable if I get more jobs lol */}
          <div className={styles.thumbnailGrid}>
            {workplaces.map((workName) => (
              <div
                key={workName}
                className={cx([
                  {
                    [styles.thumbnail]: true,
                    [styles.thumbnailActive]: activeTab == workName,
                  },
                ])}
                onClick={() => {
                  if (workName !== activeTab) handleTabChange(workName);
                }}
              >
                <img
                  className={styles.thumbnailImage}
                  src={ImageMap[workName]}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className={cx({
            [styles.workDetails]: true,
            [styles.workDetailsFade]: !isVisible,
          })}
        >
          <div className={styles.workDetailsTitle}>
            <div className={styles.workDetailsName}>{activeTab}</div>
            <div className={styles.workDetailsJobTitle}>
              {WorkDescriptionJobTitles[activeTab]}
            </div>
          </div>

          <div className={styles.workDetailsSummary}>
            <p className={styles.workDetailsHeaders}>SUMMARY</p>
            {WorkDescriptionSummary[activeTab]}
          </div>
          <div className={styles.workDetailsList}>
            <p className={styles.workDetailsHeaders}>DETAILS</p>
            <ul>
              {WorkDescriptionDetails[activeTab].map((bulletPoint, index) => (
                <li key={index}>{bulletPoint}</li>
              ))}
            </ul>
          </div>
          <div className={styles.workDetailsSkills}>
            <p className={styles.workDetailsHeaders}>SKILLS</p>

            {WorkDescriptionSkills[activeTab].map((skill) => (
              <SkillBlock>{skill}</SkillBlock>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default WorkExperience;
