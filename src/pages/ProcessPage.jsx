import Lifecycle from '../components/Lifecycle'
import CtaBand from '../components/CtaBand'

function ProcessPage() {
  return (
    <div className="page-content">
      {/* Page Hero Section */}
      <section className="page-hero section">
        <div className="container">
          <div className="page-hero-content fade-up">
            <h1 className="page-hero-title">Our Product Development Process</h1>
            <p className="page-hero-description">
              A proven, battle-tested methodology that takes products from concept to market
              in weeks, not months. Our integrated sprint model ensures continuous progress,
              transparent communication, and predictable outcomes.
            </p>
            <div className="page-hero-stats">
              <div className="stat-item">
                <span className="stat-value">2-Week</span>
                <span className="stat-label">Sprint Cycles</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">Daily</span>
                <span className="stat-label">Standups</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">100%</span>
                <span className="stat-label">Transparency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Lifecycle Section */}
      <Lifecycle />

      {/* Agile Methodology Section */}
      <section className="methodology section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Agile Methodology</h2>
            <p className="section-description">
              We combine the best practices from Scrum, Kanban, and Lean to create a
              flexible, results-driven approach.
            </p>
          </div>
          <div className="methodology-grid">
            <div className="methodology-card fade-up">
              <h3 className="methodology-title">Sprint Planning</h3>
              <p className="methodology-description">
                Every two weeks, we hold sprint planning sessions where we define goals,
                break down tasks, estimate effort, and commit to deliverables. You&apos;re
                involved in every planning session to ensure alignment with your vision.
              </p>
              <ul className="methodology-list">
                <li>Define sprint goals and priorities</li>
                <li>Break down user stories into tasks</li>
                <li>Estimate effort using story points</li>
                <li>Assign tasks to team members</li>
              </ul>
            </div>
            <div className="methodology-card fade-up">
              <h3 className="methodology-title">Daily Standups</h3>
              <p className="methodology-description">
                15-minute daily sync-ups keep everyone aligned. Team members share what
                they completed yesterday, what they&apos;re working on today, and any
                blockers they&apos;re facing. Quick, focused, and effective.
              </p>
              <ul className="methodology-list">
                <li>What was accomplished yesterday</li>
                <li>What&apos;s planned for today</li>
                <li>Any blockers or challenges</li>
                <li>Real-time problem-solving</li>
              </ul>
            </div>
            <div className="methodology-card fade-up">
              <h3 className="methodology-title">Sprint Reviews</h3>
              <p className="methodology-description">
                At the end of each sprint, we demo completed features to you. You see
                working software, provide feedback, and help shape the next sprint&apos;s
                priorities. No surprises, just steady progress.
              </p>
              <ul className="methodology-list">
                <li>Live demo of completed features</li>
                <li>Gather stakeholder feedback</li>
                <li>Review sprint metrics and velocity</li>
                <li>Plan next sprint priorities</li>
              </ul>
            </div>
            <div className="methodology-card fade-up">
              <h3 className="methodology-title">Retrospectives</h3>
              <p className="methodology-description">
                After each sprint, we reflect on what went well, what could improve, and
                what we&apos;ll change. Continuous improvement isn&apos;t just a buzzword—
                it&apos;s baked into our process.
              </p>
              <ul className="methodology-list">
                <li>What worked well this sprint</li>
                <li>What could be improved</li>
                <li>Action items for next sprint</li>
                <li>Process optimizations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Collaboration Section */}
      <section className="tools-collab section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Tools & Collaboration</h2>
            <p className="section-description">
              We use industry-standard tools to keep projects organized, communication
              clear, and progress visible.
            </p>
          </div>
          <div className="tools-grid">
            <div className="tool-card fade-up">
              <h3 className="tool-name">Project Management</h3>
              <p className="tool-description">
                Jira or Linear for sprint tracking, task management, and backlog grooming.
                You have full visibility into every task, its status, and who&apos;s working
                on it.
              </p>
            </div>
            <div className="tool-card fade-up">
              <h3 className="tool-name">Communication</h3>
              <p className="tool-description">
                Slack for real-time chat and quick questions. Weekly Zoom calls for sprint
                reviews and planning. Email for formal updates and documentation.
              </p>
            </div>
            <div className="tool-card fade-up">
              <h3 className="tool-name">Design Collaboration</h3>
              <p className="tool-description">
                Figma for design handoffs, prototypes, and design system management. You can
                comment directly on designs and see iterations in real-time.
              </p>
            </div>
            <div className="tool-card fade-up">
              <h3 className="tool-name">Code Repository</h3>
              <p className="tool-description">
                GitHub or GitLab for version control, code reviews, and CI/CD pipelines.
                Every commit is tracked, reviewed, and tested before deployment.
              </p>
            </div>
            <div className="tool-card fade-up">
              <h3 className="tool-name">Documentation</h3>
              <p className="tool-description">
                Notion or Confluence for technical documentation, API specs, and project
                wikis. Everything is documented for easy handoff and future maintenance.
              </p>
            </div>
            <div className="tool-card fade-up">
              <h3 className="tool-name">Analytics & Monitoring</h3>
              <p className="tool-description">
                Google Analytics, Mixpanel, or Amplitude for user analytics. Grafana and
                Sentry for application monitoring and error tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="qa-process section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Quality Assurance Built In</h2>
            <p className="section-description">
              Quality isn&apos;t checked at the end—it&apos;s embedded throughout our entire
              development process.
            </p>
          </div>
          <div className="qa-grid">
            <div className="qa-item fade-up">
              <div className="qa-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 className="qa-title">Code Reviews</h3>
              <p className="qa-description">
                Every line of code is reviewed by at least one senior developer before
                merging. We catch bugs early and maintain code quality standards.
              </p>
            </div>
            <div className="qa-item fade-up">
              <div className="qa-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <h3 className="qa-title">Automated Testing</h3>
              <p className="qa-description">
                Unit tests, integration tests, and end-to-end tests run automatically on
                every commit. If tests fail, code doesn&apos;t ship.
              </p>
            </div>
            <div className="qa-item fade-up">
              <div className="qa-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3 className="qa-title">Cross-Browser Testing</h3>
              <p className="qa-description">
                We test on Chrome, Firefox, Safari, and Edge. Mobile responsiveness is
                verified on iOS and Android devices.
              </p>
            </div>
            <div className="qa-item fade-up">
              <div className="qa-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="qa-title">Security Audits</h3>
              <p className="qa-description">
                Regular security scans, dependency audits, and penetration testing ensure
                your product is protected against vulnerabilities.
              </p>
            </div>
            <div className="qa-item fade-up">
              <div className="qa-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <h3 className="qa-title">Performance Testing</h3>
              <p className="qa-description">
                Load testing, stress testing, and performance profiling ensure your app
                can handle growth without degradation.
              </p>
            </div>
            <div className="qa-item fade-up">
              <div className="qa-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3 className="qa-title">Accessibility Compliance</h3>
              <p className="qa-description">
                WCAG 2.1 AA compliance testing ensures your product is accessible to all
                users, including those with disabilities.
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

export default ProcessPage
