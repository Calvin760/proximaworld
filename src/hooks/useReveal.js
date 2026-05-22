import { useEffect, useRef, useState } from 'react';

/**
 * useReveal
 * Adds an `is-visible` class to the element when it enters the viewport.
 * Pair with the `.reveal` or `.reveal-stagger` classes defined in index.css.
 *
 * @param {Object} options
 * @param {number} options.threshold  How much of the element must be visible (0–1)
 * @param {string} options.rootMargin Intersection observer margin
 * @param {boolean} options.once       Disconnect after first reveal
 */
export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -80px 0px', once = true } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect users who prefer reduced motion: reveal immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          el.classList.add('is-visible');
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
          el.classList.remove('is-visible');
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, visible };
}
