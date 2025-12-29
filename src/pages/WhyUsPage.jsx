import WhyUs from '../components/WhyUs'
import CtaBand from '../components/CtaBand'

function WhyUsPage() {
  return (
    <div className="page-content">
      {/* Page Hero Section */}
      <section className="page-hero section">
        <div className="container">
          <div className="page-hero-content fade-up">
            <h1 className="page-hero-title">Why Choose Wedigma</h1>
            <p className="page-hero-description">
              We&apos;re not another development agency. We&apos;re your technical co-founder,
              growth partner, and scaling engine—all in one. Our integrated approach combines
              world-class engineering with strategic product thinking to deliver outcomes that
              matter: revenue, users, and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Why Us Section */}
      <WhyUs />

      {/* Detailed Advantages Section */}
      <section className="advantages section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 className="section-title">The Wedigma Difference</h2>
          <div className="advantages-grid">
            <div className="advantage-item fade-up">
              <div className="advantage-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="advantage-title">End-to-End Ownership</h3>
              <p className="advantage-description">
                From initial strategy sessions to post-launch optimization, we own every phase
                of your product journey. No handoffs to separate teams, no communication gaps,
                no finger-pointing when issues arise. One team, one vision, one commitment to
                your success.
              </p>
            </div>
            <div className="advantage-item fade-up">
              <div className="advantage-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </div>
              <h3 className="advantage-title">Transparent Pricing</h3>
              <p className="advantage-description">
                Fixed-scope projects with clear milestones and deliverables. Monthly retainers
                with full visibility into hours and tasks. No surprise charges, no scope creep
                without agreement, no hidden fees. You know exactly what you&apos;re paying for
                and what you&apos;re getting.
              </p>
            </div>
            <div className="advantage-item fade-up">
              <div className="advantage-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 className="advantage-title">Proven Track Record</h3>
              <p className="advantage-description">
                100+ products launched across fintech, e-commerce, SaaS, and healthcare. Our
                clients have raised $50M+ in funding, achieved product-market fit, and scaled
                to millions of users. We don&apos;t just build—we validate, iterate, and
                optimize until success is achieved.
              </p>
            </div>
            <div className="advantage-item fade-up">
              <div className="advantage-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="advantage-title">Senior-Level Team</h3>
              <p className="advantage-description">
                No junior developers learning on your dime. Our team consists of senior engineers,
                product designers, and growth specialists with 7+ years of experience. We&apos;ve
                worked at companies like Google, Amazon, and leading startups—bringing enterprise
                expertise to every engagement.
              </p>
            </div>
            <div className="advantage-item fade-up">
              <div className="advantage-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3 className="advantage-title">Rapid Iteration</h3>
              <p className="advantage-description">
                Two-week sprint cycles mean you see progress constantly. Weekly demos, daily
                standups, and real-time Slack collaboration keep you in the loop. We ship fast,
                gather feedback, and iterate—ensuring your product evolves based on real user
                data, not assumptions.
              </p>
            </div>
            <div className="advantage-item fade-up">
              <div className="advantage-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h3 className="advantage-title">Security-First Approach</h3>
              <p className="advantage-description">
                SOC 2 compliance support, GDPR readiness, penetration testing, and security audits
                built into every project. We don&apos;t treat security as an afterthought—it&apos;s
                baked into our architecture from day one. Your users&apos; data is protected with
                enterprise-grade encryption and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How We Compare</h2>
            <p className="section-description">
              See how Wedigma stacks up against traditional agencies, freelancers, and in-house teams.
            </p>
          </div>
          <div className="comparison-table fade-up">
            <div className="comparison-row comparison-header">
              <div className="comparison-cell"></div>
              <div className="comparison-cell">Wedigma</div>
              <div className="comparison-cell">Traditional Agency</div>
              <div className="comparison-cell">Freelancers</div>
              <div className="comparison-cell">In-House Team</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell">Time to Launch</div>
              <div className="comparison-cell highlight">8-12 weeks</div>
              <div className="comparison-cell">16-24 weeks</div>
              <div className="comparison-cell">12-20 weeks</div>
              <div className="comparison-cell">20-32 weeks</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell">Full-Stack Capability</div>
              <div className="comparison-cell highlight">✓</div>
              <div className="comparison-cell">Limited</div>
              <div className="comparison-cell">Varies</div>
              <div className="comparison-cell">✓</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell">Growth & Marketing</div>
              <div className="comparison-cell highlight">✓</div>
              <div className="comparison-cell">✗</div>
              <div className="comparison-cell">✗</div>
              <div className="comparison-cell">Separate hire</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell">Ongoing Support</div>
              <div className="comparison-cell highlight">✓</div>
              <div className="comparison-cell">Extra cost</div>
              <div className="comparison-cell">Limited</div>
              <div className="comparison-cell">✓</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell">Cost Efficiency</div>
              <div className="comparison-cell highlight">High</div>
              <div className="comparison-cell">Medium</div>
              <div className="comparison-cell">Low-Medium</div>
              <div className="comparison-cell">Low</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-by section">
        <div className="container">
          <h3 style={{textAlign: 'center', marginBottom: '40px', color: '#666', fontSize: '1.5rem'}}>Trusted by Industry Leaders</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '40px', alignItems: 'center', maxWidth: '1000px', margin: '0 auto'}}>
            <img src="https://via.placeholder.com/150x60/4285F4/ffffff?text=Google" alt="Google" style={{maxWidth: '100%', height: '60px', objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.7}} />
            <img src="https://via.placeholder.com/150x60/FF9900/ffffff?text=Amazon" alt="Amazon" style={{maxWidth: '100%', height: '60px', objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.7}} />
            <img src="https://via.placeholder.com/150x60/00A4EF/ffffff?text=Microsoft" alt="Microsoft" style={{maxWidth: '100%', height: '60px', objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.7}} />
            <img src="https://via.placeholder.com/150x60/635BFF/ffffff?text=Stripe" alt="Stripe" style={{maxWidth: '100%', height: '60px', objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.7}} />
            <img src="https://via.placeholder.com/150x60/96BF48/ffffff?text=Shopify" alt="Shopify" style={{maxWidth: '100%', height: '60px', objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.7}} />
            <img src="https://via.placeholder.com/150x60/00A1E0/ffffff?text=Salesforce" alt="Salesforce" style={{maxWidth: '100%', height: '60px', objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.7}} />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 className="section-title">Meet Our Leadership Team</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginTop: '40px'}}>
            <div style={{textAlign: 'center'}} className="fade-up">
              <img src="https://ui-avatars.com/api/?name=John+Doe&size=200&background=4285F4&color=fff&bold=true"
                   alt="John Doe"
                   style={{width: '200px', height: '200px', borderRadius: '50%', marginBottom: '20px', border: '4px solid #f0f0f0'}} />
              <h3 style={{marginBottom: '8px', fontSize: '1.25rem'}}>John Doe</h3>
              <p style={{color: '#666', marginBottom: '12px'}}>CEO & Co-Founder</p>
              <p style={{fontSize: '0.9rem', color: '#888'}}>Former Google, 15+ years in tech</p>
            </div>
            <div style={{textAlign: 'center'}} className="fade-up">
              <img src="https://ui-avatars.com/api/?name=Jane+Smith&size=200&background=EA4335&color=fff&bold=true"
                   alt="Jane Smith"
                   style={{width: '200px', height: '200px', borderRadius: '50%', marginBottom: '20px', border: '4px solid #f0f0f0'}} />
              <h3 style={{marginBottom: '8px', fontSize: '1.25rem'}}>Jane Smith</h3>
              <p style={{color: '#666', marginBottom: '12px'}}>CTO</p>
              <p style={{fontSize: '0.9rem', color: '#888'}}>Former Amazon, Cloud Architecture Expert</p>
            </div>
            <div style={{textAlign: 'center'}} className="fade-up">
              <img src="https://ui-avatars.com/api/?name=Mike+Johnson&size=200&background=FBBC04&color=333&bold=true"
                   alt="Mike Johnson"
                   style={{width: '200px', height: '200px', borderRadius: '50%', marginBottom: '20px', border: '4px solid #f0f0f0'}} />
              <h3 style={{marginBottom: '8px', fontSize: '1.25rem'}}>Mike Johnson</h3>
              <p style={{color: '#666', marginBottom: '12px'}}>Head of Design</p>
              <p style={{fontSize: '0.9rem', color: '#888'}}>Award-winning UX Designer</p>
            </div>
            <div style={{textAlign: 'center'}} className="fade-up">
              <img src="https://ui-avatars.com/api/?name=Sarah+Williams&size=200&background=34A853&color=fff&bold=true"
                   alt="Sarah Williams"
                   style={{width: '200px', height: '200px', borderRadius: '50%', marginBottom: '20px', border: '4px solid #f0f0f0'}} />
              <h3 style={{marginBottom: '8px', fontSize: '1.25rem'}}>Sarah Williams</h3>
              <p style={{color: '#666', marginBottom: '12px'}}>Lead Engineer</p>
              <p style={{fontSize: '0.9rem', color: '#888'}}>Full-stack expert, 10+ years experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card fade-up">
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                <img src="https://ui-avatars.com/api/?name=Sarah+Chen&size=60&background=4285F4&color=fff"
                     alt="Sarah Chen"
                     style={{width: '60px', height: '60px', borderRadius: '50%', marginRight: '15px'}} />
                <div>
                  <strong style={{display: 'block', fontSize: '1.1rem'}}>Sarah Chen</strong>
                  <span style={{color: '#666', fontSize: '0.9rem'}}>CEO, TechFlow</span>
                </div>
              </div>
              <p className="testimonial-text">
                &quot;Wedigma took our vision and turned it into a product that exceeded
                all expectations. Their technical expertise combined with strategic thinking
                helped us secure our Series A funding.&quot;
              </p>
            </div>
            <div className="testimonial-card fade-up">
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                <img src="https://ui-avatars.com/api/?name=Michael+Rodriguez&size=60&background=EA4335&color=fff"
                     alt="Michael Rodriguez"
                     style={{width: '60px', height: '60px', borderRadius: '50%', marginRight: '15px'}} />
                <div>
                  <strong style={{display: 'block', fontSize: '1.1rem'}}>Michael Rodriguez</strong>
                  <span style={{color: '#666', fontSize: '0.9rem'}}>Founder, PayScale</span>
                </div>
              </div>
              <p className="testimonial-text">
                &quot;The team&apos;s ability to move fast without sacrificing quality is
                remarkable. We went from idea to launched product in 10 weeks, and it&apos;s
                been rock-solid since day one.&quot;
              </p>
            </div>
            <div className="testimonial-card fade-up">
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                <img src="https://ui-avatars.com/api/?name=Emily+Thompson&size=60&background=34A853&color=fff"
                     alt="Emily Thompson"
                     style={{width: '60px', height: '60px', borderRadius: '50%', marginRight: '15px'}} />
                <div>
                  <strong style={{display: 'block', fontSize: '1.1rem'}}>Emily Thompson</strong>
                  <span style={{color: '#666', fontSize: '0.9rem'}}>VP Product, HealthSync</span>
                </div>
              </div>
              <p className="testimonial-text">
                &quot;Working with Wedigma felt like having a technical co-founder. They
                challenged our assumptions, improved our strategy, and delivered a product
                our users love.&quot;
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

export default WhyUsPage
