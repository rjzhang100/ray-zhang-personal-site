import { Text } from '../../constants/text';
import styles from './Navbar.module.scss';
import lottieBurger from '../../assets/lotties/burger-menu-animation.json';
import { FC, useEffect, useRef, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import animations from '../../styles/animations.module.scss';
import cx from 'classnames';
import useScroll from '../../hooks/useScroll';

const ANIMATION_LENGTH = parseFloat(animations.animationDuration) * 1000;
const STICKY_POINT = 50;

const Navbar: FC = () => {
  const isMobile = useWindowSize();
  const scrollPosition = useScroll();
  const burgerLottieRef = useRef<LottieRefCurrentProps>(null);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [dropdownLeaving, setDropdownLeaving] = useState<boolean>(false);
  const [navbarSticky, setNavbarSticky] = useState<boolean>(false);

  useEffect(() => {
    setNavbarSticky(scrollPosition > STICKY_POINT);
  }, [scrollPosition]);

  console.log(navbarSticky);
  useEffect(() => {
    if (!isMobile) {
      setShowDropdown(false);
    }
  }, []);

  const handleClick = () => {
    if (showDropdown) {
      burgerLottieRef.current?.playSegments([8, 0], true);
      setDropdownLeaving(true);

      setTimeout(() => {
        setDropdownLeaving(false);
        setShowDropdown(false);
      }, ANIMATION_LENGTH);
    } else {
      burgerLottieRef.current?.playSegments([0, 8], true);
      setShowDropdown(true);
    }
  };

  return (
    <>
      <div
        className={cx({
          [styles.navbar]: true,
          [styles.navbarSticky]: navbarSticky,
          [styles.navbarToggled]: showDropdown && !isMobile,
        })}
      >
        <div className={styles.navbarConstant}>
          <div className={styles.name}>{Text.NAME}</div>
          {isMobile && (
            <div className={styles.burgerIcon} onClick={handleClick}>
              <Lottie
                lottieRef={burgerLottieRef}
                animationData={lottieBurger}
                loop={false}
                autoplay={false}
              />
            </div>
          )}
        </div>

        {((isMobile && showDropdown) || !isMobile) && (
          <div
            className={cx(styles.links, {
              [styles.linksToggled]: showDropdown && isMobile,
              [styles.linksLeaving]: dropdownLeaving,
            })}
          >
            <p className={styles.navbarLink}>{Text.WORK_EXPERIENCE}</p>
            <p className={styles.navbarLink}>{Text.PROJECTS}</p>
            <p className={styles.navbarLink}>{Text.HOBBIES}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
