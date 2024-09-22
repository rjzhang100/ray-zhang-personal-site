import { FC, useEffect, useState } from 'react';
import styles from './IntroSection.module.scss';
import me from '../../assets/portrait.png';
import { Text, THINGS_I_AM } from '../../constants/text';
import Lottie from 'lottie-react';
import lottieDownArrow from '../../assets/lotties/down-arrow.json';

const TEXT_CYCLE_INTERVAL = 3000;

const IntroSection: FC = () => {
  const [currTextIndex, setCurrTextIndex] = useState<number>(0);
  const [animationPhase, setAnimationPhase] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase('rotateOut');

      setTimeout(() => {
        setCurrTextIndex((prevIndex) => (prevIndex + 1) % THINGS_I_AM.length);

        setAnimationPhase('rotateIn');
      }, 500);
    }, TEXT_CYCLE_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.introSection}>
          <div className={styles.textColumn}>
            <div className={styles.textColumnSubtext}>Hey! I'm </div>
            <div className={styles.textColumnTitle}>{Text.NAME}</div>
            <div className={styles.textColumnSubtext}>
              I'm a{' '}
              <span
                className={`${styles.textColumnSubtextAnimated} ${styles[animationPhase]}`}
              >
                {THINGS_I_AM[currTextIndex]}
              </span>
            </div>
          </div>
          <div>
            <img className={styles.selfPortrait} src={me} />
          </div>
        </div>
        <div className={styles.downArrow}>
          <Lottie animationData={lottieDownArrow} />
        </div>
      </div>
    </>
  );
};

export default IntroSection;
