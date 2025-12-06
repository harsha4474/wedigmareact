import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function CtaBand() {
  const ref = useRef();
  useIntersectionObserver(ref);

  const handleSmoothScroll = (e, href) => {
    if (href === '#' || href === '') return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="cta-band section" id="cta" ref={ref}>
      <div className="cta-bg"></div>
      <div className="container">
        <div className="cta-content fade-up">
          <h2 className="cta-title">Ready to Build Your Next Product?</h2>
          <p className="cta-subtitle">From zero to launch in weeks, not months. Book a build session to discuss your product roadmap.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary btn-glow" onClick={(e) => handleSmoothScroll(e, '#contact')}>Book a Build Session</a>
            <a href="#capabilities" className="btn btn-secondary-alt" onClick={(e) => handleSmoothScroll(e, '#capabilities')}>View Capabilities</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBand;
