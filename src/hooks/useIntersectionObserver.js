import { useEffect } from 'react';

export const useIntersectionObserver = (ref) => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fadeUpElements = entry.target.querySelectorAll('.fade-up');
          fadeUpElements.forEach(el => {
            el.classList.add('visible');
          });
        }
      });
    }, observerOptions);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);
};
