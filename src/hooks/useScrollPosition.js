import { useEffect, useState } from 'react';

/**
 * useScrollPosition
 * Returns the current vertical scroll position (throttled via rAF).
 * Useful for triggering sticky-navbar styles, parallax, etc.
 */
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollY;
}
