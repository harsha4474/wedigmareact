import Capabilities from '../components/Capabilities'
import CtaBand from '../components/CtaBand'

function CapabilitiesPage() {
  return (
    <div className="page-content">
      {/* Page Hero Section */}
      <section className="page-hero section">
        <div className="container">
          <div className="page-hero-content fade-up">
            <h1 className="page-hero-title">Complete Launch Operating System</h1>
            <p className="page-hero-description">
              Six integrated capabilities designed to take your product from concept to scale.
              Our modular approach allows you to engage with individual services or leverage
              the complete platform for end-to-end product development.
            </p>
            <div className="page-hero-stats">
              <div className="stat-item">
                <span className="stat-value">6</span>
                <span className="stat-label">Core Modules</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">100+</span>
                <span className="stat-label">Products Launched</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Capabilities Section */}
      <Capabilities />

      {/* Detailed Breakdown Section */}
      <section className="capabilities-detail section">
        <div className="container">
          <h2 className="section-title">How Our Capabilities Work Together</h2>
          <div className="detail-grid">
            <div className="detail-card fade-up">
              <h3 className="detail-title">Integrated Workflows</h3>
              <p className="detail-text">
                Our six capabilities don&apos;t operate in silos. The Experience Layer informs
                the Brand System. Cloud Core supports the Integration Mesh. Growth Engine data
                feeds back into Launch OS planning. This integration ensures every component
                works in harmony to accelerate your product&apos;s success.
              </p>
            </div>
            <div className="detail-card fade-up">
              <h3 className="detail-title">Modular Engagement</h3>
              <p className="detail-text">
                Need just cloud infrastructure? Start with Cloud Core. Want to scale an existing
                product? Engage our Growth Engine. Our modular approach means you only pay for
                what you need, when you need it. As your product evolves, we scale our services
                alongside your requirements.
              </p>
            </div>
            <div className="detail-card fade-up">
              <h3 className="detail-title">Technology Stack</h3>
              <p className="detail-text">
                We leverage modern, battle-tested technologies: React, Next.js, Node.js, Python,
                PostgreSQL, Redis, Kubernetes, AWS, GCP, and more. Our tech choices prioritize
                performance, scalability, and developer experience—ensuring your product can grow
                without technical debt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Expertise Section */}
      <section className="tech-expertise section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Technologies We Master</h2>
            <p className="section-description">
              Our team stays at the forefront of technology, continuously learning and
              adapting to provide you with the best solutions.
            </p>
          </div>

          {/* Technology Logos */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '30px', marginBottom: '60px', alignItems: 'center'}}>
            <div style={{textAlign: 'center'}} className="fade-up">
              <img src="https://via.placeholder.com/80x80/61DAFB/000000?text=React" alt="React" style={{width: '80px', height: '80px', marginBottom: '10px'}} />
              <p style={{fontSize: '0.9rem', color: '#666'}}>React</p>
            </div>
            <div style={{textAlign: 'center'}} className="fade-up">
              <img src="https://via.placeholder.com/80x80/000000/ffffff?text=Next.js" alt="Next.js" style={{width: '80px', height: '80px', marginBottom: '10px'}} />
              <p style={{fontSize: '0.9rem', color: '#666'}}>Next.js</p>
            </div>
            <div style={{textAlign: 'center'}} className="fade-up">
              <img src="https://via.placeholder.com/80x80/339933/ffffff?text=Node" alt="Node.js" style={{width: '80px', height: '80px', marginBottom: '10px'}} />
              <p style={{fontSize: '0.9rem', color: '#666'}}>Node.js</p>
            </div>
            <div style={{textAlign: 'center'}} className="fade-up">
              <img src="https://via.placeholder.com/80x80/3776AB/ffffff?text=Python" alt="Python" style={{width: '80px', height: '80px', marginBottom: '10px'}} />
              <p style={{fontSize: '0.9rem', color: '#666'}}>Python</p>
            </div>
            <div style={{textAlign: 'center'}} className="fade-up">
              <img src="https://via.placeholder.com/80x80/FF9900/ffffff?text=AWS" alt="AWS" style={{width: '80px', height: '80px', marginBottom: '10px'}} />
              <p style={{fontSize: '0.9rem', color: '#666'}}>AWS</p>
            </div>
            <div style={{textAlign: 'center'}} className="fade-up">
              <img src="https://via.placeholder.com/80x80/4285F4/ffffff?text=GCP" alt="Google Cloud" style={{width: '80px', height: '80px', marginBottom: '10px'}} />
              <p style={{fontSize: '0.9rem', color: '#666'}}>Google Cloud</p>
            </div>
            <div style={{textAlign: 'center'}} className="fade-up">
              <img src="https://via.placeholder.com/80x80/2496ED/ffffff?text=Docker" alt="Docker" style={{width: '80px', height: '80px', marginBottom: '10px'}} />
              <p style={{fontSize: '0.9rem', color: '#666'}}>Docker</p>
            </div>
            <div style={{textAlign: 'center'}} className="fade-up">
              <img src="https://via.placeholder.com/80x80/326CE5/ffffff?text=K8s" alt="Kubernetes" style={{width: '80px', height: '80px', marginBottom: '10px'}} />
              <p style={{fontSize: '0.9rem', color: '#666'}}>Kubernetes</p>
            </div>
            <div style={{textAlign: 'center'}} className="fade-up">
              <img src="https://via.placeholder.com/80x80/336791/ffffff?text=PostgreSQL" alt="PostgreSQL" style={{width: '80px', height: '80px', marginBottom: '10px'}} />
              <p style={{fontSize: '0.9rem', color: '#666'}}>PostgreSQL</p>
            </div>
            <div style={{textAlign: 'center'}} className="fade-up">
              <img src="https://via.placeholder.com/80x80/47A248/ffffff?text=MongoDB" alt="MongoDB" style={{width: '80px', height: '80px', marginBottom: '10px'}} />
              <p style={{fontSize: '0.9rem', color: '#666'}}>MongoDB</p>
            </div>
            <div style={{textAlign: 'center'}} className="fade-up">
              <img src="https://via.placeholder.com/80x80/DC382D/ffffff?text=Redis" alt="Redis" style={{width: '80px', height: '80px', marginBottom: '10px'}} />
              <p style={{fontSize: '0.9rem', color: '#666'}}>Redis</p>
            </div>
            <div style={{textAlign: 'center'}} className="fade-up">
              <img src="https://via.placeholder.com/80x80/3178C6/ffffff?text=TS" alt="TypeScript" style={{width: '80px', height: '80px', marginBottom: '10px'}} />
              <p style={{fontSize: '0.9rem', color: '#666'}}>TypeScript</p>
            </div>
          </div>

          <div className="tech-categories">
            <div className="tech-category fade-up">
              <h3 className="tech-category-title">Frontend</h3>
              <ul className="tech-list">
                <li>React & Next.js</li>
                <li>Vue.js & Nuxt</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            <div className="tech-category fade-up">
              <h3 className="tech-category-title">Backend</h3>
              <ul className="tech-list">
                <li>Node.js & Express</li>
                <li>Python & Django</li>
                <li>GraphQL & REST APIs</li>
                <li>Serverless Functions</li>
                <li>Microservices Architecture</li>
              </ul>
            </div>
            <div className="tech-category fade-up">
              <h3 className="tech-category-title">Infrastructure</h3>
              <ul className="tech-list">
                <li>AWS & GCP</li>
                <li>Docker & Kubernetes</li>
                <li>CI/CD Pipelines</li>
                <li>Terraform</li>
                <li>Monitoring & Logging</li>
              </ul>
            </div>
            <div className="tech-category fade-up">
              <h3 className="tech-category-title">Data & Analytics</h3>
              <ul className="tech-list">
                <li>PostgreSQL & MongoDB</li>
                <li>Redis & Elasticsearch</li>
                <li>Google Analytics 4</li>
                <li>Mixpanel & Amplitude</li>
                <li>Data Visualization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaBand />
    </div>
  )
}

export default CapabilitiesPage
