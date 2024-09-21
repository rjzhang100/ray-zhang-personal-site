import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import styles from './ResumeFloater.module.scss';
import documentLottie from '../../assets/lotties/documentIcon.json';
import { useRef, useState } from 'react';
import cx from 'classnames';
import { Text } from '../../constants/text';

const ResumeFloater = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [shouldShowTooltip, setShouldShowTooltip] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setShouldShowTooltip(true);
    setShowTooltip(true);
    lottieRef.current?.setSpeed(2);
    lottieRef.current?.playSegments([0, 40], true);
  };

  const handleMouseLeave = () => {
    lottieRef.current?.setSpeed(-2);
    lottieRef.current?.playSegments([40, 0], true);
    setShouldShowTooltip(false);
  };

  const handleAnimationEnd = () => {
    if (!shouldShowTooltip) {
      setShowTooltip(false);
    }
  };

  return (
    <>
      <div
        className={cx({
          [styles.resumeFloater]: true,
        })}
        onClick={() => {
          window.open(`/resume.pdf`, '_blank');
        }}
      >
        <div className={styles.lottieWrapper}>
          <Lottie
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            lottieRef={lottieRef}
            animationData={documentLottie}
            autoplay={false}
            loop={false}
            rendererSettings={{
              preserveAspectRatio: 'xMidYMid slice',
            }}
          />
        </div>
        {showTooltip && (
          <div
            className={cx({
              [styles.toolTip]: true,
              [styles.toolTipLeaving]: !shouldShowTooltip,
            })}
            onAnimationEnd={handleAnimationEnd}
          >
            {Text.RESUME_TOOLTIP_TEXT}
          </div>
        )}
      </div>
    </>
  );
};

export default ResumeFloater;
