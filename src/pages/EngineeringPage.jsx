import CloudApi from '../components/CloudApi'
import CtaBand from '../components/CtaBand'

function EngineeringPage() {
  return (
    <div className="page-content">
      {/* Page Hero Section */}
      <section className="page-hero section">
        <div className="container">
          <div className="page-hero-content fade-up">
            <h1 className="page-hero-title">Cloud Engineering & Infrastructure</h1>
            <p className="page-hero-description">
              Enterprise-grade cloud architecture built for scale, performance, and reliability.
              We design and deploy infrastructure that grows with your business—from MVP to
              millions of users.
            </p>
            <div className="page-hero-stats">
              <div className="stat-item">
                <span className="stat-value">99.9%</span>
                <span className="stat-label">Uptime SLA</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">&lt;100ms</span>
                <span className="stat-label">API Response</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">24/7</span>
                <span className="stat-label">Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Cloud API Section */}
      <CloudApi />

      {/* Infrastructure Services Section */}
      <section className="infra-services section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Infrastructure Services We Provide</h2>
            <p className="section-description">
              From cloud setup to ongoing maintenance, we handle every aspect of your
              technical infrastructure.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card fade-up">
              <h3 className="service-title">Cloud Architecture Design</h3>
              <p className="service-description">
                We design scalable, resilient cloud architectures tailored to your specific
                needs. Whether you&apos;re building a SaaS platform, e-commerce site, or
                mobile backend, we architect for growth.
              </p>
              <ul className="service-features">
                <li>Multi-region deployment strategies</li>
                <li>High availability & disaster recovery</li>
                <li>Cost optimization & budget planning</li>
                <li>Security & compliance architecture</li>
              </ul>
            </div>
            <div className="service-card fade-up">
              <h3 className="service-title">DevOps & CI/CD</h3>
              <p className="service-description">
                Automated deployment pipelines that enable rapid iteration and zero-downtime
                releases. Code merges trigger automated tests, builds, and deployments.
              </p>
              <ul className="service-features">
                <li>GitHub Actions / GitLab CI setup</li>
                <li>Automated testing & code quality checks</li>
                <li>Blue-green & canary deployments</li>
                <li>Infrastructure as Code (Terraform)</li>
              </ul>
            </div>
            <div className="service-card fade-up">
              <h3 className="service-title">Kubernetes & Containerization</h3>
              <p className="service-description">
                Container orchestration with Kubernetes for efficient resource utilization
                and seamless scaling. Docker containers ensure consistency across environments.
              </p>
              <ul className="service-features">
                <li>Kubernetes cluster setup & management</li>
                <li>Horizontal pod autoscaling</li>
                <li>Service mesh implementation (Istio)</li>
                <li>Container registry & image optimization</li>
              </ul>
            </div>
            <div className="service-card fade-up">
              <h3 className="service-title">Database Management</h3>
              <p className="service-description">
                Scalable database solutions with automated backups, replication, and
                performance tuning. We work with SQL and NoSQL databases.
              </p>
              <ul className="service-features">
                <li>PostgreSQL, MySQL, MongoDB setup</li>
                <li>Read replicas & sharding strategies</li>
                <li>Automated backup & point-in-time recovery</li>
                <li>Query optimization & indexing</li>
              </ul>
            </div>
            <div className="service-card fade-up">
              <h3 className="service-title">API Development & Management</h3>
              <p className="service-description">
                RESTful and GraphQL APIs with comprehensive documentation, versioning, and
                rate limiting. Built for reliability and developer experience.
              </p>
              <ul className="service-features">
                <li>RESTful & GraphQL API design</li>
                <li>OpenAPI/Swagger documentation</li>
                <li>OAuth 2.0 & JWT authentication</li>
                <li>Rate limiting & caching strategies</li>
              </ul>
            </div>
            <div className="service-card fade-up">
              <h3 className="service-title">Monitoring & Observability</h3>
              <p className="service-description">
                Real-time monitoring dashboards, alerting systems, and distributed tracing.
                Know what&apos;s happening in your infrastructure at all times.
              </p>
              <ul className="service-features">
                <li>Prometheus & Grafana dashboards</li>
                <li>Error tracking with Sentry</li>
                <li>Log aggregation (ELK stack)</li>
                <li>Application performance monitoring (APM)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="cloud-providers section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Cloud Platforms We Support</h2>
            <p className="section-description">
              Multi-cloud expertise across AWS, Google Cloud, Azure, and more. We help you
              choose the right platform for your needs.
            </p>
          </div>

          {/* Cloud Provider Logos */}
          <div style={{display: 'flex', justifyContent: 'center', gap: '50px', marginBottom: '50px', flexWrap: 'wrap'}}>
            <div style={{textAlign: 'center'}} className="fade-up">
              <img src="https://via.placeholder.com/120x120/FF9900/ffffff?text=AWS" alt="AWS" style={{width: '120px', height: '120px', marginBottom: '15px'}} />
              <p style={{fontSize: '1rem', color: '#666', fontWeight: '600'}}>Amazon Web Services</p>
            </div>
            <div style={{textAlign: 'center'}} className="fade-up">
              <img src="https://via.placeholder.com/120x120/4285F4/ffffff?text=GCP" alt="Google Cloud" style={{width: '120px', height: '120px', marginBottom: '15px'}} />
              <p style={{fontSize: '1rem', color: '#666', fontWeight: '600'}}>Google Cloud</p>
            </div>
            <div style={{textAlign: 'center'}} className="fade-up">
              <img src="https://via.placeholder.com/120x120/0080FF/ffffff?text=Azure" alt="Microsoft Azure" style={{width: '120px', height: '120px', marginBottom: '15px'}} />
              <p style={{fontSize: '1rem', color: '#666', fontWeight: '600'}}>Microsoft Azure</p>
            </div>
            <div style={{textAlign: 'center'}} className="fade-up">
              <img src="https://via.placeholder.com/120x120/0080FF/ffffff?text=DO" alt="DigitalOcean" style={{width: '120px', height: '120px', marginBottom: '15px'}} />
              <p style={{fontSize: '1rem', color: '#666', fontWeight: '600'}}>DigitalOcean</p>
            </div>
          </div>

          <div className="providers-grid">
            <div className="provider-card fade-up">
              <h3 className="provider-name">Amazon Web Services (AWS)</h3>
              <p className="provider-description">
                Our primary cloud platform. Deep expertise in EC2, ECS, Lambda, RDS, S3,
                CloudFront, and 50+ other AWS services.
              </p>
              <div className="provider-services">
                <span className="service-tag">EC2</span>
                <span className="service-tag">Lambda</span>
                <span className="service-tag">RDS</span>
                <span className="service-tag">S3</span>
                <span className="service-tag">CloudFront</span>
                <span className="service-tag">ECS/EKS</span>
              </div>
            </div>
            <div className="provider-card fade-up">
              <h3 className="provider-name">Google Cloud Platform (GCP)</h3>
              <p className="provider-description">
                Excellent for data-intensive applications and machine learning workloads.
                We leverage GCP&apos;s BigQuery, Cloud Run, and GKE.
              </p>
              <div className="provider-services">
                <span className="service-tag">Compute Engine</span>
                <span className="service-tag">Cloud Run</span>
                <span className="service-tag">BigQuery</span>
                <span className="service-tag">Cloud Storage</span>
                <span className="service-tag">GKE</span>
              </div>
            </div>
            <div className="provider-card fade-up">
              <h3 className="provider-name">DigitalOcean</h3>
              <p className="provider-description">
                Cost-effective solution for startups and mid-sized applications. Simple,
                predictable pricing with excellent developer experience.
              </p>
              <div className="provider-services">
                <span className="service-tag">Droplets</span>
                <span className="service-tag">Kubernetes</span>
                <span className="service-tag">Managed Databases</span>
                <span className="service-tag">Spaces</span>
              </div>
            </div>
            <div className="provider-card fade-up">
              <h3 className="provider-name">Vercel & Netlify</h3>
              <p className="provider-description">
                Optimal for frontend deployments and JAMstack applications. Edge network
                distribution for blazing-fast load times.
              </p>
              <div className="provider-services">
                <span className="service-tag">Edge Functions</span>
                <span className="service-tag">CDN</span>
                <span className="service-tag">Serverless</span>
                <span className="service-tag">Preview Deploys</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="security-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Security & Compliance</h2>
            <p className="section-description">
              Security isn&apos;t optional—it&apos;s fundamental to everything we build.
              We follow industry best practices and compliance standards.
            </p>
          </div>
          <div className="security-grid">
            <div className="security-item fade-up">
              <h3 className="security-title">Data Encryption</h3>
              <p className="security-description">
                Encryption at rest and in transit using AES-256 and TLS 1.3. All sensitive
                data is encrypted using industry-standard algorithms.
              </p>
            </div>
            <div className="security-item fade-up">
              <h3 className="security-title">Access Control</h3>
              <p className="security-description">
                Role-based access control (RBAC), multi-factor authentication (MFA), and
                principle of least privilege across all systems.
              </p>
            </div>
            <div className="security-item fade-up">
              <h3 className="security-title">Compliance Support</h3>
              <p className="security-description">
                SOC 2 Type II, GDPR, HIPAA, and PCI DSS compliance support. We help you
                meet regulatory requirements for your industry.
              </p>
            </div>
            <div className="security-item fade-up">
              <h3 className="security-title">Vulnerability Management</h3>
              <p className="security-description">
                Regular security audits, penetration testing, dependency scanning, and
                automated vulnerability detection with rapid patching.
              </p>
            </div>
            <div className="security-item fade-up">
              <h3 className="security-title">DDoS Protection</h3>
              <p className="security-description">
                Cloudflare WAF, rate limiting, and DDoS mitigation strategies protect your
                infrastructure from malicious traffic and attacks.
              </p>
            </div>
            <div className="security-item fade-up">
              <h3 className="security-title">Incident Response</h3>
              <p className="security-description">
                24/7 monitoring with automated alerting and documented incident response
                procedures to minimize impact of security events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Optimization Section */}
      <section className="performance-section section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Performance Optimization</h2>
            <p className="section-description">
              Fast applications convert better, rank higher, and deliver superior user
              experiences. We optimize every layer of your stack.
            </p>
          </div>
          <div className="optimization-grid">
            <div className="optimization-card fade-up">
              <h3 className="optimization-title">CDN & Edge Caching</h3>
              <p className="optimization-description">
                Global content delivery networks place your content closer to users.
                Edge caching reduces latency and improves load times worldwide.
              </p>
            </div>
            <div className="optimization-card fade-up">
              <h3 className="optimization-title">Database Query Optimization</h3>
              <p className="optimization-description">
                Slow queries kill performance. We optimize database indexes, implement
                caching strategies, and use read replicas for high-traffic applications.
              </p>
            </div>
            <div className="optimization-card fade-up">
              <h3 className="optimization-title">Load Balancing</h3>
              <p className="optimization-description">
                Distribute traffic across multiple servers for improved performance and
                fault tolerance. Auto-scaling responds to traffic spikes.
              </p>
            </div>
            <div className="optimization-card fade-up">
              <h3 className="optimization-title">Code & Asset Optimization</h3>
              <p className="optimization-description">
                Minification, compression, tree-shaking, and lazy loading reduce bundle
                sizes. Image optimization delivers perfect formats for each device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaBand />
    </div>
  )
}

export default EngineeringPage
