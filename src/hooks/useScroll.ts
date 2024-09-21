import { useEffect, useRef, useState } from 'react';

const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false);
  const threshold = 0;
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currScroll = window.scrollY;
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (Math.abs(currScroll - scrollPosition) > threshold) {
            if (currScroll > scrollPosition) {
              setIsScrollingDown(true);
            } else if (currScroll < scrollPosition) {
              setIsScrollingDown(false);
            }
            setScrollPosition(currScroll);
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition, threshold]);

  return { scrollPosition, isScrollingDown };
};

export default useScroll;
