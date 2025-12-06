import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function Growth() {
  const ref = useRef();
  useIntersectionObserver(ref);

  return (
    <section className="growth section" id="growth" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Performance Marketing</span>
          <h2 className="section-title">Growth Engine Built for Acquisition & Retention</h2>
        </div>
        <div className="growth-layout">
          <div className="growth-narrative fade-up">
            <h3 className="narrative-title">From Launch to Scale</h3>
            <p className="narrative-text">
              Product launches require more than great engineering. We deploy integrated growth strategies that drive qualified traffic, optimize conversions, and improve user retention.
            </p>
            <ul className="narrative-list">
              <li><strong>Technical SEO:</strong> Schema markup, Core Web Vitals, indexation strategy</li>
              <li><strong>Content Strategy:</strong> Product-led content, programmatic SEO, topic clusters</li>
              <li><strong>Paid Acquisition:</strong> Meta ads (Facebook/Instagram), Google Ads, LinkedIn campaigns</li>
              <li><strong>Analytics & Attribution:</strong> GA4, Mixpanel, custom event tracking</li>
              <li><strong>Conversion Optimization:</strong> A/B testing, funnel analysis, user session replays</li>
            </ul>
            <div className="growth-metrics-inline">
              <div className="growth-metric-chip">
                <span className="metric-value">3.2x</span>
                <span className="metric-label">Avg ROAS</span>
              </div>
              <div className="growth-metric-chip">
                <span className="metric-value">40%</span>
                <span className="metric-label">Traffic Increase</span>
              </div>
            </div>
          </div>
          <div className="growth-cards">
            <div className="growth-card fade-up">
              <h4 className="growth-card-title">Meta Ads Management</h4>
              <p className="growth-card-description">
                Full-funnel Facebook and Instagram ad campaigns. Audience segmentation, creative testing, and bid optimization.
              </p>
            </div>
            <div className="growth-card fade-up">
              <h4 className="growth-card-title">SEO & Organic Growth</h4>
              <p className="growth-card-description">
                Technical SEO audits, on-page optimization, link building, and content strategy for sustainable organic traffic.
              </p>
            </div>
            <div className="growth-card fade-up">
              <h4 className="growth-card-title">Retention & Engagement</h4>
              <p className="growth-card-description">
                Email automation, lifecycle campaigns, push notifications, and in-app messaging to improve LTV.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Growth;
