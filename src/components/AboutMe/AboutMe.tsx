import { FC, useEffect, useState } from 'react';
import styles from './AboutMe.module.scss';
import { Text } from '../../constants/text';
import { useInView } from 'react-intersection-observer';
import cx from 'classnames';
import Lottie from 'lottie-react';
import waveLottie from '../../assets/lotties/wave.json';

const AboutMe: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.04,
  });

  const [showWave, setShowWave] = useState<boolean>(false);

  useEffect(() => {
    if (inView) {
      setShowWave(true);
    }
  }, [inView]);

  const hideWave = () => {
    if (!inView) {
      setShowWave(false);
    }
  };

  return (
    <>
      <div className={styles.aboutMe}>
        <div className={styles.title}>
          {Text.ABOUT_ME}
          {showWave && (
            <div
              className={cx({
                [styles.titleWave]: true,
                [styles.titleWaveFade]: !inView,
              })}
              onAnimationEnd={hideWave}
            >
              <Lottie animationData={waveLottie} />
            </div>
          )}
        </div>
        <div
          ref={ref}
          className={cx({ [styles.body]: true, [styles.bodyFade]: inView })}
        >
          <p>
            Hey, welcome and thanks for checking out my website! I'm Ray, and
            I'm in my final year of computer science at UBC. I'm currently also
            at Konrad Group as a software developer intern!
          </p>
          <p>
            Outside of work and school, I'm a huge car nerd, spending most of my
            free time either learning about or working on cars. I'm also a huge
            music fan, and pretty much always am listening to something
            throughout my day.
          </p>
          <p>
            Feel free to explore this site to learn more about me, and some of
            the cool stuff I've been up to! I'm always open to connect and meet
            new people, so shoot me a message!
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
