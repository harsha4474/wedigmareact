import Contact from '../components/Contact'

function ContactPage() {
  return (
    <div className="page-content">
      {/* Page Hero Section */}
      <section className="page-hero section">
        <div className="container">
          <div className="page-hero-content fade-up">
            <h1 className="page-hero-title">Let&apos;s Build Something Great Together</h1>
            <p className="page-hero-description">
              Whether you&apos;re launching a new product, scaling an existing platform,
              or need expert guidance on your tech stack—we&apos;re here to help. Tell us
              about your vision, and we&apos;ll respond within 24 hours with a tailored
              approach.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <Contact />

      {/* Why Work With Us Section */}
      <section className="why-contact section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Happens Next?</h2>
            <p className="section-description">
              Our streamlined process gets you from inquiry to kickoff in days, not weeks.
            </p>
          </div>
          <div className="process-steps">
            <div className="step-item fade-up">
              <div className="step-number">01</div>
              <h3 className="step-title">Initial Consultation (24 hours)</h3>
              <p className="step-description">
                We review your submission and respond within 24 hours to schedule a
                30-minute discovery call. No sales pitch—just an honest conversation
                about your needs and how we can help.
              </p>
            </div>
            <div className="step-item fade-up">
              <div className="step-number">02</div>
              <h3 className="step-title">Scope & Proposal (48 hours)</h3>
              <p className="step-description">
                After understanding your requirements, we deliver a detailed proposal
                including timeline, technology stack, team composition, and transparent
                pricing. Fixed-price or retainer options available.
              </p>
            </div>
            <div className="step-item fade-up">
              <div className="step-number">03</div>
              <h3 className="step-title">Kickoff & Sprint Planning (1 week)</h3>
              <p className="step-description">
                Once you approve the proposal, we assemble your dedicated team and begin
                sprint planning. Within one week of signing, we&apos;re building your
                product with daily updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="contact-methods section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Multiple Ways to Reach Us</h2>
            <p className="section-description">
              Choose the communication method that works best for you.
            </p>
          </div>
          <div className="methods-grid">
            <div className="method-card fade-up">
              <div className="method-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <h3 className="method-title">Email</h3>
              <p className="method-description">
                Send us a detailed message about your project. We respond within 24 hours.
              </p>
              <a href="mailto:hello@wedigma.com" className="method-link">hello@wedigma.com</a>
            </div>
            <div className="method-card fade-up">
              <div className="method-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3 className="method-title">Phone</h3>
              <p className="method-description">
                Prefer a quick call? Schedule a time that works for you.
              </p>
              <a href="tel:+1234567890" className="method-link">+1 (234) 567-890</a>
            </div>
            <div className="method-card fade-up">
              <div className="method-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <h3 className="method-title">Schedule a Meeting</h3>
              <p className="method-description">
                Book a 30-minute consultation directly on our calendar.
              </p>
              <a href="#" className="method-link">View Availability</a>
            </div>
            <div className="method-card fade-up">
              <div className="method-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3 className="method-title">Live Chat</h3>
              <p className="method-description">
                Chat with our team in real-time during business hours (9 AM - 6 PM EST).
              </p>
              <button className="method-link">Start Chat</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">
              Common questions about working with Wedigma.
            </p>
          </div>
          <div className="faq-grid">
            <div className="faq-item fade-up">
              <h3 className="faq-question">What is your typical project timeline?</h3>
              <p className="faq-answer">
                Most projects launch in 8-12 weeks from kickoff to production deployment.
                Complex enterprise projects may take 16-20 weeks. We work in 2-week sprints
                with continuous delivery, so you see progress every week.
              </p>
            </div>
            <div className="faq-item fade-up">
              <h3 className="faq-question">What are your pricing models?</h3>
              <p className="faq-answer">
                We offer fixed-price projects for defined scopes and monthly retainers for
                ongoing work. Pricing depends on project complexity, timeline, and team size.
                Typical projects range from $50K-$200K. We provide detailed breakdowns in
                our proposals.
              </p>
            </div>
            <div className="faq-item fade-up">
              <h3 className="faq-question">Do you work with startups or only enterprises?</h3>
              <p className="faq-answer">
                We work with both! We&apos;ve helped pre-seed startups build MVPs and
                Fortune 500 companies scale their platforms. Our modular approach adapts
                to your stage and budget.
              </p>
            </div>
            <div className="faq-item fade-up">
              <h3 className="faq-question">What technologies do you specialize in?</h3>
              <p className="faq-answer">
                Our core stack includes React/Next.js for frontend, Node.js and Python
                for backend, PostgreSQL and MongoDB for databases, and AWS/GCP for cloud
                infrastructure. We adapt based on your specific requirements.
              </p>
            </div>
            <div className="faq-item fade-up">
              <h3 className="faq-question">Do you provide ongoing support after launch?</h3>
              <p className="faq-answer">
                Absolutely. We offer maintenance retainers, performance monitoring, feature
                enhancements, and technical support. Many clients keep us on retainer for
                continuous product evolution.
              </p>
            </div>
            <div className="faq-item fade-up">
              <h3 className="faq-question">Can you work with our existing team?</h3>
              <p className="faq-answer">
                Yes! We integrate seamlessly with your in-house developers, designers, or
                product managers. We can augment your team or take full ownership—whatever
                works best for your organization.
              </p>
            </div>
            <div className="faq-item fade-up">
              <h3 className="faq-question">Where is your team located?</h3>
              <p className="faq-answer">
                Our team is distributed across North America and Europe, with overlap
                during US business hours. We work with clients globally and are experienced
                in remote collaboration.
              </p>
            </div>
            <div className="faq-item fade-up">
              <h3 className="faq-question">What industries do you have experience in?</h3>
              <p className="faq-answer">
                Fintech, healthcare, e-commerce, SaaS, education technology, real estate,
                logistics, and more. We&apos;ve launched 100+ products across virtually
                every major industry vertical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="locations section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Locations</h2>
            <p className="section-description">
              Global presence with local expertise.
            </p>
          </div>
          <div className="locations-grid">
            <div className="location-card fade-up">
              <h3 className="location-name">San Francisco, CA</h3>
              <p className="location-address">
                123 Market Street<br />
                Suite 400<br />
                San Francisco, CA 94103
              </p>
            </div>
            <div className="location-card fade-up">
              <h3 className="location-name">New York, NY</h3>
              <p className="location-address">
                456 Broadway<br />
                Floor 10<br />
                New York, NY 10013
              </p>
            </div>
            <div className="location-card fade-up">
              <h3 className="location-name">London, UK</h3>
              <p className="location-address">
                78 Shoreditch High Street<br />
                London E1 6JJ<br />
                United Kingdom
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
