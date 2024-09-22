import { FC } from 'react';
import PageSection from '../PageSection/PageSection';

const AboutMe: FC = () => {
  return (
    <PageSection sectionName="About Me">
      <>
        <p>
          Hey, welcome and thanks for checking out my website! I'm Ray, and I'm
          in my final year of computer science at UBC. I'm currently also at
          Konrad Group as a software developer intern!
        </p>
        <p>
          Outside of work and school, I'm a huge car nerd, spending most of my
          free time either learning about or working on cars. I'm also a huge
          music fan, and pretty much always am listening to something throughout
          my day.
        </p>
        <p>
          Feel free to explore this site to learn more about me, and some of the
          cool stuff I've been up to! I'm always open to connect and meet new
          people, so shoot me a message!
        </p>
      </>
    </PageSection>
  );
};
export default AboutMe;
