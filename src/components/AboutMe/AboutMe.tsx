import { FC } from 'react';
import PageSection from '../PageSection/PageSection';

const AboutMe: FC = () => {
  return (
    <PageSection sectionName="About Me">
      <>
        <p>
          Hey, welcome and thanks for checking out my website! I'm Ray, and I'm
          in my final year of computer science at UBC. I'll be returning to
          Konrad Group in September 2025 as a full time Associate Software
          Developer!
        </p>
        <p>
          Outside of work and school, I spend most of my free time either
          learning about or working on cars. I've also been really getting into
          hockey.
        </p>
        <p>
          I'll try to keep this site up to date, but feel free to explore this
          site to learn more about me, and some of the stuff I've been up to!
        </p>
      </>
    </PageSection>
  );
};
export default AboutMe;
