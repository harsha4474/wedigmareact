import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function Cases() {
  const ref = useRef();
  useIntersectionObserver(ref);

  return (
    <section className="cases section" id="cases" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Case Studies</span>
          <h2 className="section-title">Real Products, Real Results</h2>
        </div>
        <div className="cases-grid">
          <div className="case-card fade-up">
            <div className="case-label">B2B SaaS</div>
            <h3 className="case-title">Enterprise Analytics Platform</h3>
            <div className="case-section">
              <h4 className="case-section-title">Challenge</h4>
              <p className="case-section-text">
                Late-stage startup needed to rebuild legacy analytics dashboard with modern tech stack and scale to 10,000+ concurrent users.
              </p>
            </div>
            <div className="case-section">
              <h4 className="case-section-title">Solution</h4>
              <p className="case-section-text">
                Next.js frontend with real-time data streaming. Kubernetes cluster on AWS with auto-scaling. GraphQL API layer with Redis caching.
              </p>
            </div>
            <div className="case-section">
              <h4 className="case-section-title">Outcome</h4>
              <p className="case-section-text">
                <strong>12-week delivery.</strong> 4x performance improvement. Scaled to 50k users without infrastructure changes. $2M ARR in year one.
              </p>
            </div>
          </div>
          <div className="case-card fade-up">
            <div className="case-label">Fintech</div>
            <h3 className="case-title">Payment Gateway Integration</h3>
            <div className="case-section">
              <h4 className="case-section-title">Challenge</h4>
              <p className="case-section-text">
                Fintech startup required secure payment processing with Stripe, bank integrations, and PCI compliance for regulated markets.
              </p>
            </div>
            <div className="case-section">
              <h4 className="case-section-title">Solution</h4>
              <p className="case-section-text">
                Secure API gateway with tokenization. Multi-currency support. Fraud detection rules and automated reconciliation workflows.
              </p>
            </div>
            <div className="case-section">
              <h4 className="case-section-title">Outcome</h4>
              <p className="case-section-text">
                <strong>PCI DSS Level 1 certified.</strong> Processing $5M+ monthly. 99.98% transaction success rate. Zero security incidents.
              </p>
            </div>
          </div>
          <div className="case-card fade-up">
            <div className="case-label">E-Commerce</div>
            <h3 className="case-title">DTC Brand Replatform</h3>
            <div className="case-section">
              <h4 className="case-section-title">Challenge</h4>
              <p className="case-section-text">
                D2C brand on legacy Shopify needed custom storefront with advanced personalization and subscription management.
              </p>
            </div>
            <div className="case-section">
              <h4 className="case-section-title">Solution</h4>
              <p className="case-section-text">
                Headless commerce with Shopify backend. Next.js frontend with dynamic product recommendations. Subscription engine with Recharge.
              </p>
            </div>
            <div className="case-section">
              <h4 className="case-section-title">Outcome</h4>
              <p className="case-section-text">
                <strong>65% conversion lift.</strong> 2.1s page load time. 40% increase in subscription retention. $1.2M additional revenue in Q1.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cases;
