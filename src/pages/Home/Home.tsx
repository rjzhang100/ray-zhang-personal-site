import { useRef } from 'react';
import AboutMe from '../../components/AboutMe/AboutMe';
import IntroSection from '../../components/IntroSection/IntroSection';
import Navbar from '../../components/Navbar/Navbar';
import ResumeFloater from '../../components/ResumeFloater/ResumeFloater';
import WorkExperience from '../../components/WorkExperience/WorkExperience';
import styles from './Home.module.scss';
import { NavbarLinks } from '../../constants/text';
import { LinkRef } from '../../constants/types';
import Projects from '../../components/Projects/Projects';
import Hobbies from '../../components/Hobbies/Hobbies';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const refs: LinkRef[] = Array.from(Object.values(NavbarLinks)).map(
    (linkName) => ({
      link: linkName,
      ref: useRef<HTMLDivElement>(null),
    })
  );

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className={styles.home}>
        <Navbar refs={refs} scrollToSection={scrollToSection} />
        <IntroSection />
        <AboutMe />
        <div
          ref={
            refs.find((linkRef) => linkRef.link === NavbarLinks.WORK_EXPERIENCE)
              ?.ref
          }
        >
          <WorkExperience />
        </div>
        <div
          ref={
            refs.find((linkRef) => linkRef.link === NavbarLinks.PROJECTS)?.ref
          }
        >
          <Projects />
        </div>
        <div
          ref={
            refs.find((linkRef) => linkRef.link === NavbarLinks.HOBBIES)?.ref
          }
        >
          <Hobbies />
        </div>
        <Footer />
        <div className={styles.resume}>
          <ResumeFloater />
        </div>
      </div>
    </>
  );
};

export default Home;
