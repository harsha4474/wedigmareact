import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function Lifecycle() {
  const ref = useRef();
  useIntersectionObserver(ref);

  return (
    <section className="lifecycle section" id="lifecycle" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Process</span>
          <h2 className="section-title">From Zero to Market in Integrated Phases</h2>
        </div>
        <div className="lifecycle-layout">
          <div className="lifecycle-timeline">
            <div className="timeline-item fade-up">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Discovery & Strategy</h3>
                <p className="timeline-description">Market research, competitive analysis, product positioning, and technical architecture planning.</p>
              </div>
            </div>
            <div className="timeline-item fade-up">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Design & Prototyping</h3>
                <p className="timeline-description">User flows, wireframes, high-fidelity designs, and interactive prototypes. Design system creation.</p>
              </div>
            </div>
            <div className="timeline-item fade-up">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Development & Integration</h3>
                <p className="timeline-description">Frontend and backend development. API integrations, cloud setup, and CI/CD pipeline configuration.</p>
              </div>
            </div>
            <div className="timeline-item fade-up">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Testing & Quality Assurance</h3>
                <p className="timeline-description">Cross-browser testing, performance optimization, security audits, and load testing.</p>
              </div>
            </div>
            <div className="timeline-item fade-up">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Launch & Deployment</h3>
                <p className="timeline-description">Production deployment, DNS configuration, SSL setup, monitoring dashboards, and incident response.</p>
              </div>
            </div>
            <div className="timeline-item fade-up">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Growth & Optimization</h3>
                <p className="timeline-description">Performance marketing, SEO campaigns, A/B testing, analytics implementation, and continuous iteration.</p>
              </div>
            </div>
          </div>
          <div className="lifecycle-panel">
            <div className="panel-content fade-up">
              <h3 className="panel-title">Integrated Sprint Model</h3>
              <p className="panel-text">
                We operate in 2-week sprints with continuous delivery. Each phase overlaps strategically—design begins while strategy finalizes, development starts as designs are approved, and growth planning happens pre-launch.
              </p>
              <div className="panel-metrics">
                <div className="panel-metric">
                  <span className="panel-metric-value">2 weeks</span>
                  <span className="panel-metric-label">Sprint cycles</span>
                </div>
                <div className="panel-metric">
                  <span className="panel-metric-value">Daily</span>
                  <span className="panel-metric-label">Standups</span>
                </div>
                <div className="panel-metric">
                  <span className="panel-metric-value">Real-time</span>
                  <span className="panel-metric-label">Collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lifecycle;
