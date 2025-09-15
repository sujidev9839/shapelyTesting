import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Safari scroll restoration fix
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Defer scroll to next frame after layout
    requestAnimationFrame(() => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100); // You can reduce this if not needed
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;