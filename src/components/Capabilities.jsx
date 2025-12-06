import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function Capabilities() {
  const ref = useRef();
  useIntersectionObserver(ref);

  return (
    <section className="capabilities section" id="capabilities" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Product Modules</span>
          <h2 className="section-title">Complete Launch Operating System</h2>
          <p className="section-description">Six integrated capabilities that take you from concept to scale.</p>
        </div>
        <div className="capabilities-grid">
          <div className="capability-card fade-up">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M9 3v18"/>
              </svg>
            </div>
            <h3 className="card-title">Experience Layer</h3>
            <p className="card-description">Premium web design and development. Responsive, accessible, conversion-optimized interfaces.</p>
            <ul className="card-list">
              <li>Product design systems</li>
              <li>React/Next.js builds</li>
              <li>Mobile-first responsive</li>
            </ul>
          </div>
          <div className="capability-card fade-up">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
            <h3 className="card-title">Cloud Core</h3>
            <p className="card-description">Enterprise cloud deployment and infrastructure on AWS, GCP, DigitalOcean.</p>
            <ul className="card-list">
              <li>Auto-scaling infrastructure</li>
              <li>CI/CD pipelines</li>
              <li>Security & compliance</li>
            </ul>
          </div>
          <div className="capability-card fade-up">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v6m0 6v6m5.2-14.2l-4.2 4.2m-2 2l-4.2 4.2m12.4 0l-4.2-4.2m-2-2l-4.2-4.2"/>
              </svg>
            </div>
            <h3 className="card-title">Integration Mesh</h3>
            <p className="card-description">API integrations, third-party systems, and custom middleware architecture.</p>
            <ul className="card-list">
              <li>REST & GraphQL APIs</li>
              <li>Payment gateways</li>
              <li>CRM & automation tools</li>
            </ul>
          </div>
          <div className="capability-card fade-up">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <h3 className="card-title">Brand System</h3>
            <p className="card-description">Strategic branding and visual identity. Logos, guidelines, and design assets.</p>
            <ul className="card-list">
              <li>Brand strategy & positioning</li>
              <li>Visual identity systems</li>
              <li>Marketing collateral</li>
            </ul>
          </div>
          <div className="capability-card fade-up">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <h3 className="card-title">Growth Engine</h3>
            <p className="card-description">Performance marketing, SEO, and paid acquisition. Meta ads optimization.</p>
            <ul className="card-list">
              <li>Technical SEO & content</li>
              <li>Meta ads management</li>
              <li>Conversion optimization</li>
            </ul>
          </div>
          <div className="capability-card fade-up">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h3 className="card-title">Launch OS</h3>
            <p className="card-description">End-to-end product rollout. From research to retention in integrated sprints.</p>
            <ul className="card-list">
              <li>Product strategy & roadmap</li>
              <li>Agile sprint delivery</li>
              <li>Post-launch optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
