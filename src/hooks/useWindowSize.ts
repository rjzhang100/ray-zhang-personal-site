import { useEffect, useState } from 'react';
import breakpoints from '../styles/breakpoints.module.scss';

const useWindowSize = () => {
  const getIsMobile = () => {
    return window.innerWidth <= parseInt(breakpoints.mobileBreakpoint);
  };

  const [isMobile, setIsMobile] = useState<boolean>(getIsMobile());

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return isMobile;
};

export default useWindowSize;
