import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function CloudApi() {
  const ref = useRef();
  useIntersectionObserver(ref);

  return (
    <section className="cloud-api section" id="cloud-api" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Infrastructure</span>
          <h2 className="section-title">Enterprise Cloud & API Architecture</h2>
          <p className="section-description">Scalable, secure, observable infrastructure built for growth.</p>
        </div>
        <div className="architecture-diagram fade-up">
          <div className="arch-layer">
            <span className="arch-label">CDN & Edge</span>
            <div className="arch-nodes">
              <div className="arch-node">CloudFlare</div>
              <div className="arch-node">Vercel Edge</div>
            </div>
          </div>
          <div className="arch-layer">
            <span className="arch-label">Application</span>
            <div className="arch-nodes">
              <div className="arch-node">Next.js</div>
              <div className="arch-node">Node API</div>
              <div className="arch-node">Python</div>
            </div>
          </div>
          <div className="arch-layer">
            <span className="arch-label">Data & Services</span>
            <div className="arch-nodes">
              <div className="arch-node">PostgreSQL</div>
              <div className="arch-node">Redis</div>
              <div className="arch-node">S3</div>
            </div>
          </div>
          <div className="arch-layer">
            <span className="arch-label">Infrastructure</span>
            <div className="arch-nodes">
              <div className="arch-node">AWS</div>
              <div className="arch-node">GCP</div>
              <div className="arch-node">DigitalOcean</div>
            </div>
          </div>
        </div>
        <div className="cloud-features">
          <div className="cloud-feature-card fade-up">
            <h3 className="feature-card-title">Auto-Scaling Infrastructure</h3>
            <p className="feature-card-description">
              Kubernetes-orchestrated containers with horizontal pod autoscaling. Load balancers, health checks, and blue-green deployments.
            </p>
            <ul className="feature-list">
              <li>Container orchestration (Docker + K8s)</li>
              <li>Auto-scaling based on traffic patterns</li>
              <li>Zero-downtime deployments</li>
            </ul>
          </div>
          <div className="cloud-feature-card fade-up">
            <h3 className="feature-card-title">API Gateway & Integration Layer</h3>
            <p className="feature-card-description">
              RESTful and GraphQL APIs with authentication, rate limiting, caching, and comprehensive logging. Third-party service integration.
            </p>
            <ul className="feature-list">
              <li>OAuth 2.0 & JWT authentication</li>
              <li>API versioning & documentation</li>
              <li>Webhook management</li>
            </ul>
          </div>
          <div className="cloud-feature-card fade-up">
            <h3 className="feature-card-title">Observability & Security</h3>
            <p className="feature-card-description">
              Real-time monitoring, distributed tracing, log aggregation. DDoS protection, WAF rules, and automated security scanning.
            </p>
            <ul className="feature-list">
              <li>Prometheus + Grafana dashboards</li>
              <li>Automated backup & disaster recovery</li>
              <li>SOC 2 & GDPR compliance support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CloudApi;
