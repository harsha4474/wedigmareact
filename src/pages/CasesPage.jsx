import Cases from '../components/Cases'
import CtaBand from '../components/CtaBand'

function CasesPage() {
  return (
    <div className="page-content">
      {/* Page Hero Section */}
      <section className="page-hero section">
        <div className="container">
          <div className="page-hero-content fade-up">
            <h1 className="page-hero-title">Case Studies & Success Stories</h1>
            <p className="page-hero-description">
              Real products, real results, real impact. See how we&apos;ve helped startups
              and established companies launch, scale, and succeed with data-driven
              product development and growth strategies.
            </p>
            <div className="page-hero-stats">
              <div className="stat-item">
                <span className="stat-value">100+</span>
                <span className="stat-label">Products Launched</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">$50M+</span>
                <span className="stat-label">Funding Raised</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">10M+</span>
                <span className="stat-label">Users Served</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Cases Section */}
      <Cases />

      {/* Product Screenshots Section */}
      <section className="screenshots-section section" style={{background: '#fff', padding: '60px 0'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Product Showcases</h2>
            <p className="section-description">
              Real products we&apos;ve built for real clients, delivering real results.
            </p>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px'}}>
            <div className="fade-up">
              <img src="https://via.placeholder.com/600x400/4285F4/ffffff?text=Fintech+Dashboard"
                   alt="Fintech Dashboard Screenshot"
                   style={{width: '100%', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}} />
              <p style={{marginTop: '15px', color: '#666', textAlign: 'center', fontSize: '0.95rem'}}>Fintech Payment Platform</p>
            </div>
            <div className="fade-up">
              <img src="https://via.placeholder.com/600x400/EA4335/ffffff?text=E-commerce+Platform"
                   alt="E-commerce Platform Screenshot"
                   style={{width: '100%', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}} />
              <p style={{marginTop: '15px', color: '#666', textAlign: 'center', fontSize: '0.95rem'}}>E-commerce Marketplace</p>
            </div>
            <div className="fade-up">
              <img src="https://via.placeholder.com/600x400/34A853/ffffff?text=SaaS+Analytics"
                   alt="SaaS Analytics Dashboard"
                   style={{width: '100%', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}} />
              <p style={{marginTop: '15px', color: '#666', textAlign: 'center', fontSize: '0.95rem'}}>SaaS Analytics Dashboard</p>
            </div>
            <div className="fade-up">
              <img src="https://via.placeholder.com/600x400/FBBC04/333333?text=Mobile+App"
                   alt="Mobile Application Screenshot"
                   style={{width: '100%', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}} />
              <p style={{marginTop: '15px', color: '#666', textAlign: 'center', fontSize: '0.95rem'}}>Mobile Application</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Case Studies Section */}
      <section className="more-cases section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">More Success Stories</h2>
            <p className="section-description">
              Additional case studies showcasing our work across different industries
              and product types.
            </p>
          </div>
          <div className="cases-grid">
            <div className="case-card fade-up">
              <div className="case-label">HealthTech</div>
              <h3 className="case-title">Telemedicine Platform</h3>
              <div className="case-section">
                <h4 className="case-section-title">Challenge</h4>
                <p className="case-section-text">
                  Healthcare startup needed HIPAA-compliant video consultation platform with
                  EHR integration and prescription management.
                </p>
              </div>
              <div className="case-section">
                <h4 className="case-section-title">Solution</h4>
                <p className="case-section-text">
                  HIPAA-compliant architecture on AWS. WebRTC video platform. Integration
                  with Epic and Cerner EHR systems. E-prescribing via SureScripts.
                </p>
              </div>
              <div className="case-section">
                <h4 className="case-section-title">Outcome</h4>
                <p className="case-section-text">
                  <strong>HIPAA certified in 8 weeks.</strong> 15,000+ consultations in
                  first month. 4.8/5 patient satisfaction. Series A funding secured.
                </p>
              </div>
            </div>
            <div className="case-card fade-up">
              <div className="case-label">EdTech</div>
              <h3 className="case-title">Learning Management System</h3>
              <div className="case-section">
                <h4 className="case-section-title">Challenge</h4>
                <p className="case-section-text">
                  Education company wanted to build interactive LMS with live classes,
                  assignments, grading, and parent-teacher communication.
                </p>
              </div>
              <div className="case-section">
                <h4 className="case-section-title">Solution</h4>
                <p className="case-section-text">
                  React frontend with video conferencing integration. Real-time collaboration
                  features. Mobile apps for iOS and Android. Admin dashboard for teachers.
                </p>
              </div>
              <div className="case-section">
                <h4 className="case-section-title">Outcome</h4>
                <p className="case-section-text">
                  <strong>Launched in 14 weeks.</strong> 5,000+ students onboarded.
                  95% class attendance rate. Expanded to 3 new markets.
                </p>
              </div>
            </div>
            <div className="case-card fade-up">
              <div className="case-label">PropTech</div>
              <h3 className="case-title">Real Estate Marketplace</h3>
              <div className="case-section">
                <h4 className="case-section-title">Challenge</h4>
                <p className="case-section-text">
                  Real estate startup needed two-sided marketplace connecting property
                  buyers with agents, featuring virtual tours and document management.
                </p>
              </div>
              <div className="case-section">
                <h4 className="case-section-title">Solution</h4>
                <p className="case-section-text">
                  Next.js marketplace with 3D virtual tours. MLS integration. Document
                  signing via DocuSign. Map-based search with filters.
                </p>
              </div>
              <div className="case-section">
                <h4 className="case-section-title">Outcome</h4>
                <p className="case-section-text">
                  <strong>$3M GMV in year one.</strong> 200+ agents onboarded. 50,000+
                  property listings. Acquired by major real estate company.
                </p>
              </div>
            </div>
            <div className="case-card fade-up">
              <div className="case-label">Logistics</div>
              <h3 className="case-title">Fleet Management System</h3>
              <div className="case-section">
                <h4 className="case-section-title">Challenge</h4>
                <p className="case-section-text">
                  Logistics company needed real-time fleet tracking, route optimization,
                  and driver management for 500+ vehicles.
                </p>
              </div>
              <div className="case-section">
                <h4 className="case-section-title">Solution</h4>
                <p className="case-section-text">
                  IoT integration for GPS tracking. AI-powered route optimization. Mobile
                  app for drivers. Admin dashboard with analytics and reporting.
                </p>
              </div>
              <div className="case-section">
                <h4 className="case-section-title">Outcome</h4>
                <p className="case-section-text">
                  <strong>30% reduction in fuel costs.</strong> 25% improvement in
                  delivery times. Real-time visibility for all shipments.
                </p>
              </div>
            </div>
            <div className="case-card fade-up">
              <div className="case-label">Social Platform</div>
              <h3 className="case-title">Creator Economy Platform</h3>
              <div className="case-section">
                <h4 className="case-section-title">Challenge</h4>
                <p className="case-section-text">
                  Social media startup for content creators needed monetization features,
                  subscription management, and content analytics.
                </p>
              </div>
              <div className="case-section">
                <h4 className="case-section-title">Solution</h4>
                <p className="case-section-text">
                  React Native mobile apps. Stripe subscription billing. Content CDN. Creator
                  analytics dashboard. Fan engagement features.
                </p>
              </div>
              <div className="case-section">
                <h4 className="case-section-title">Outcome</h4>
                <p className="case-section-text">
                  <strong>10,000+ creators in 6 months.</strong> $500K+ monthly GMV.
                  Featured in TechCrunch. Closed seed round.
                </p>
              </div>
            </div>
            <div className="case-card fade-up">
              <div className="case-label">AI/ML</div>
              <h3 className="case-title">AI Document Processing</h3>
              <div className="case-section">
                <h4 className="case-section-title">Challenge</h4>
                <p className="case-section-text">
                  Enterprise needed automated document processing using OCR and NLP to
                  extract data from invoices, contracts, and forms.
                </p>
              </div>
              <div className="case-section">
                <h4 className="case-section-title">Solution</h4>
                <p className="case-section-text">
                  Python ML pipeline with TensorFlow. OCR using Google Cloud Vision. NLP
                  for entity extraction. API for integration with existing systems.
                </p>
              </div>
              <div className="case-section">
                <h4 className="case-section-title">Outcome</h4>
                <p className="case-section-text">
                  <strong>95% extraction accuracy.</strong> 80% reduction in manual data
                  entry. Processing 100,000+ documents monthly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="industries section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-description">
              Deep experience across multiple verticals, from highly-regulated industries
              to fast-moving consumer products.
            </p>
          </div>
          <div className="industries-grid">
            <div className="industry-item fade-up">
              <h3 className="industry-name">Fintech & Banking</h3>
              <p className="industry-description">
                Payment processing, lending platforms, wealth management, cryptocurrency
                exchanges, and financial analytics.
              </p>
            </div>
            <div className="industry-item fade-up">
              <h3 className="industry-name">E-Commerce & Retail</h3>
              <p className="industry-description">
                D2C brands, marketplaces, subscription commerce, inventory management,
                and omnichannel retail solutions.
              </p>
            </div>
            <div className="industry-item fade-up">
              <h3 className="industry-name">Healthcare & Life Sciences</h3>
              <p className="industry-description">
                Telemedicine, EHR systems, medical devices, clinical trials, pharmacy
                management, and HIPAA-compliant platforms.
              </p>
            </div>
            <div className="industry-item fade-up">
              <h3 className="industry-name">B2B SaaS</h3>
              <p className="industry-description">
                CRM systems, project management, marketing automation, HR tech, sales
                enablement, and enterprise productivity tools.
              </p>
            </div>
            <div className="industry-item fade-up">
              <h3 className="industry-name">Education Technology</h3>
              <p className="industry-description">
                Learning management systems, online courses, student information systems,
                virtual classrooms, and tutoring platforms.
              </p>
            </div>
            <div className="industry-item fade-up">
              <h3 className="industry-name">Real Estate & PropTech</h3>
              <p className="industry-description">
                Property listings, virtual tours, tenant management, facility management,
                and real estate investment platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics & Impact Section */}
      <section className="impact-metrics section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Impact in Numbers</h2>
            <p className="section-description">
              Measurable outcomes that demonstrate the value we deliver to our clients.
            </p>
          </div>
          <div className="metrics-grid">
            <div className="metric-card fade-up">
              <span className="metric-number">100+</span>
              <span className="metric-label">Products Launched</span>
              <p className="metric-description">
                From MVP to market leader, we&apos;ve helped launch products across
                every industry and vertical.
              </p>
            </div>
            <div className="metric-card fade-up">
              <span className="metric-number">$50M+</span>
              <span className="metric-label">Funding Raised</span>
              <p className="metric-description">
                Our clients have raised significant capital, validating product-market
                fit and growth potential.
              </p>
            </div>
            <div className="metric-card fade-up">
              <span className="metric-number">10M+</span>
              <span className="metric-label">Users Served</span>
              <p className="metric-description">
                Products we&apos;ve built serve millions of users globally, processing
                billions in transactions.
              </p>
            </div>
            <div className="metric-card fade-up">
              <span className="metric-number">98%</span>
              <span className="metric-label">Client Satisfaction</span>
              <p className="metric-description">
                Our clients love working with us, evidenced by long-term partnerships
                and referrals.
              </p>
            </div>
            <div className="metric-card fade-up">
              <span className="metric-number">99.9%</span>
              <span className="metric-label">Uptime SLA</span>
              <p className="metric-description">
                Enterprise-grade infrastructure with reliability that customers and
                users can depend on.
              </p>
            </div>
            <div className="metric-card fade-up">
              <span className="metric-number">8-12 weeks</span>
              <span className="metric-label">Average Time to Launch</span>
              <p className="metric-description">
                Fast execution without compromising quality. We ship in weeks, not
                months or years.
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

export default CasesPage
