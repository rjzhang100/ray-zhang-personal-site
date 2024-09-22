import { FC, useRef } from 'react';
import styles from './Accordion.module.scss';
import { Hobby } from '../../constants/types';
import arrow from '../../assets/down-arrow.svg';
import cx from 'classnames';
import Lottie from 'lottie-react';
import RichText from '../RichText/RichText';

interface IAccordion extends Hobby {
  isActive: boolean;
}

const Accordion: FC<IAccordion> = ({
  title,
  icon,
  description,
  isActive,
  image,
  imageCaption,
  isVideo,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = (e: any) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <>
      <div className={styles.accordion}>
        <div className={styles.preview}>
          <div className={styles.title}>
            <div className={styles.icon}>
              <Lottie animationData={icon} />
            </div>
            <p>{title}</p>
          </div>
          <img
            className={cx({
              [styles.downArrow]: true,
              [styles.downArrowActive]: isActive,
            })}
            src={arrow}
            alt="arrow toggle"
          />
        </div>
        {isActive && (
          <div className={`${styles.body} ${isActive ? styles.active : ''}`}>
            <div>
              <RichText>{description}</RichText>
            </div>
            <div className={styles.imageColumn}>
              {isVideo ? (
                <video
                  className={styles.image}
                  ref={videoRef}
                  controls
                  onClick={(e) => handleClick(e)}
                >
                  <source src={image} type="video/mp4" />
                  Your browser doesn't support this video type.
                </video>
              ) : (
                <img className={styles.image} src={image} />
              )}
              <div className={styles.imageCaption}>{imageCaption}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Accordion;
