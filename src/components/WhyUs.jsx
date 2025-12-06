import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function WhyUs() {
  const ref = useRef();
  useIntersectionObserver(ref);

  return (
    <section className="why-us section" id="why-us" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Why Wedigma</span>
          <h2 className="section-title">Built for Scale, Not Just Launch</h2>
        </div>
        <div className="reasons-grid">
          <div className="reason-card fade-up">
            <div className="reason-number">01</div>
            <h3 className="reason-title">Product-First, Not Project-Based</h3>
            <p className="reason-description">We don&apos;t build one-off projects. We architect products designed to evolve, scale, and integrate seamlessly with your business operations.</p>
          </div>
          <div className="reason-card fade-up">
            <div className="reason-number">02</div>
            <h3 className="reason-title">Technical Depth + Design Excellence</h3>
            <p className="reason-description">Full-stack engineering team paired with product designers. Enterprise cloud infrastructure with pixel-perfect interfaces.</p>
          </div>
          <div className="reason-card fade-up">
            <div className="reason-number">03</div>
            <h3 className="reason-title">Launch to Growth in One Partner</h3>
            <p className="reason-description">From strategic planning to cloud deployment to performance marketing. No handoffs, no gaps, no agency hopping.</p>
          </div>
          <div className="reason-card fade-up">
            <div className="reason-number">04</div>
            <h3 className="reason-title">Enterprise SLA, Startup Speed</h3>
            <p className="reason-description">99.9% uptime commitments with agile sprint velocity. Security-first architecture without compromising time to market.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
