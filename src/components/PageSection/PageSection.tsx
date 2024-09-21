import { FC, ReactNode, useEffect, useState } from 'react';
import styles from './PageSection.module.scss';
import { useInView } from 'react-intersection-observer';
import cx from 'classnames';
import Lottie from 'lottie-react';

interface IPageSection {
  sectionName: string;
  children: ReactNode;
  lottieJson?: any;
}

const PageSection: FC<IPageSection> = ({
  sectionName,
  children,
  lottieJson,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.04,
  });

  const [showIcon, setShowIcon] = useState<boolean>(false);

  useEffect(() => {
    if (inView) {
      setShowIcon(true);
    }
  }, [inView]);

  const hideIcon = () => {
    if (!inView) {
      setShowIcon(false);
    }
  };

  return (
    <>
      <div className={styles.section}>
        <div className={styles.title}>
          {sectionName}
          {showIcon && !!lottieJson && (
            <div
              className={cx({
                [styles.titleIcon]: true,
                [styles.titleIconFade]: !inView,
              })}
              onAnimationEnd={hideIcon}
            >
              <Lottie animationData={lottieJson} />
            </div>
          )}
        </div>
        <div
          ref={ref}
          className={cx({ [styles.body]: true, [styles.bodyFade]: inView })}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default PageSection;
