import Growth from '../components/Growth'
import CtaBand from '../components/CtaBand'

function GrowthPage() {
  return (
    <div className="page-content">
      {/* Page Hero Section */}
      <section className="page-hero section">
        <div className="container">
          <div className="page-hero-content fade-up">
            <h1 className="page-hero-title">Performance Marketing & Growth</h1>
            <p className="page-hero-description">
              Data-driven growth strategies that drive qualified traffic, optimize conversions,
              and maximize ROI. From SEO to paid ads, we build sustainable acquisition engines
              that scale with your business.
            </p>
            <div className="page-hero-stats">
              <div className="stat-item">
                <span className="stat-value">3.2x</span>
                <span className="stat-label">Avg ROAS</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">40%</span>
                <span className="stat-label">Traffic Growth</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">2.5x</span>
                <span className="stat-label">Conversion Lift</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Growth Section */}
      <Growth />

      {/* SEO Services Section */}
      <section className="seo-services section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Search Engine Optimization (SEO)</h2>
            <p className="section-description">
              Organic traffic that compounds over time. Our SEO strategies focus on
              technical excellence, content quality, and sustainable link building.
            </p>
          </div>
          <div className="seo-grid">
            <div className="seo-card fade-up">
              <h3 className="seo-title">Technical SEO</h3>
              <p className="seo-description">
                Fast, crawlable, indexable websites that search engines love. We optimize
                Core Web Vitals, implement structured data, and fix technical issues that
                hurt rankings.
              </p>
              <ul className="seo-list">
                <li>Core Web Vitals optimization</li>
                <li>Schema markup implementation</li>
                <li>XML sitemap & robots.txt configuration</li>
                <li>Mobile-first indexing optimization</li>
                <li>Page speed optimization</li>
              </ul>
            </div>
            <div className="seo-card fade-up">
              <h3 className="seo-title">Content Strategy</h3>
              <p className="seo-description">
                High-quality content that ranks and converts. We research keywords, create
                topic clusters, and produce content that matches search intent.
              </p>
              <ul className="seo-list">
                <li>Keyword research & competitor analysis</li>
                <li>Content calendar & topic clusters</li>
                <li>SEO-optimized blog posts & landing pages</li>
                <li>Content refresh & optimization</li>
                <li>Featured snippet targeting</li>
              </ul>
            </div>
            <div className="seo-card fade-up">
              <h3 className="seo-title">Link Building</h3>
              <p className="seo-description">
                Quality backlinks from authoritative domains. We use white-hat strategies
                including content partnerships, digital PR, and resource page outreach.
              </p>
              <ul className="seo-list">
                <li>Guest posting on authoritative sites</li>
                <li>Digital PR & journalist outreach</li>
                <li>Broken link building</li>
                <li>Resource page link acquisition</li>
                <li>Competitor backlink analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Paid Advertising Section */}
      <section className="paid-ads section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Paid Advertising Management</h2>
            <p className="section-description">
              Strategic paid campaigns that drive immediate results while optimizing for
              long-term profitability.
            </p>
          </div>
          <div className="ads-grid">
            <div className="ad-card fade-up">
              <h3 className="ad-title">Meta Ads (Facebook & Instagram)</h3>
              <p className="ad-description">
                Full-funnel campaigns from awareness to conversion. We create scroll-stopping
                creatives, target precise audiences, and optimize for ROAS.
              </p>
              <ul className="ad-features">
                <li>Custom & lookalike audience creation</li>
                <li>A/B testing of ad creative & copy</li>
                <li>Conversion tracking & attribution</li>
                <li>Retargeting campaigns</li>
                <li>Dynamic product ads</li>
              </ul>
            </div>
            <div className="ad-card fade-up">
              <h3 className="ad-title">Google Ads</h3>
              <p className="ad-description">
                Search, Display, Shopping, and YouTube campaigns designed to capture
                high-intent users and drive qualified leads.
              </p>
              <ul className="ad-features">
                <li>Search ads for high-intent keywords</li>
                <li>Shopping campaigns for e-commerce</li>
                <li>Display remarketing</li>
                <li>YouTube video ads</li>
                <li>Google Analytics 4 integration</li>
              </ul>
            </div>
            <div className="ad-card fade-up">
              <h3 className="ad-title">LinkedIn Ads</h3>
              <p className="ad-description">
                B2B lead generation through LinkedIn&apos;s professional network. Perfect
                for SaaS, enterprise software, and professional services.
              </p>
              <ul className="ad-features">
                <li>Sponsored content & InMail campaigns</li>
                <li>Account-based marketing (ABM)</li>
                <li>Lead gen forms & CRM integration</li>
                <li>Job title & company targeting</li>
                <li>Conversion tracking & reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Rate Optimization Section */}
      <section className="cro-section section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Conversion Rate Optimization (CRO)</h2>
            <p className="section-description">
              More traffic is great, but better conversion is transformative. We optimize
              every step of your funnel to turn visitors into customers.
            </p>
          </div>
          <div className="cro-grid">
            <div className="cro-item fade-up">
              <h3 className="cro-title">Funnel Analysis</h3>
              <p className="cro-description">
                Identify where users drop off and why. We use heatmaps, session recordings,
                and funnel visualization to find friction points.
              </p>
            </div>
            <div className="cro-item fade-up">
              <h3 className="cro-title">A/B Testing</h3>
              <p className="cro-description">
                Systematic testing of headlines, CTAs, layouts, and pricing. Data-driven
                decisions that compound into significant conversion lifts.
              </p>
            </div>
            <div className="cro-item fade-up">
              <h3 className="cro-title">Landing Page Optimization</h3>
              <p className="cro-description">
                Conversion-focused landing pages with clear value propositions, social
                proof, and compelling calls-to-action.
              </p>
            </div>
            <div className="cro-item fade-up">
              <h3 className="cro-title">User Research</h3>
              <p className="cro-description">
                User interviews, surveys, and usability testing reveal why users behave
                the way they do—insights that guide optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics & Attribution Section */}
      <section className="analytics-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Analytics & Attribution</h2>
            <p className="section-description">
              Measure what matters. Comprehensive analytics setup with custom event
              tracking, attribution modeling, and actionable insights.
            </p>
          </div>
          <div className="analytics-grid">
            <div className="analytics-card fade-up">
              <h3 className="analytics-name">Google Analytics 4</h3>
              <p className="analytics-description">
                Full GA4 setup with custom events, conversion tracking, and enhanced
                e-commerce. Dashboards that show what&apos;s working and what&apos;s not.
              </p>
            </div>
            <div className="analytics-card fade-up">
              <h3 className="analytics-name">Mixpanel / Amplitude</h3>
              <p className="analytics-description">
                Product analytics for SaaS and mobile apps. Track user behavior, cohort
                analysis, and retention metrics.
              </p>
            </div>
            <div className="analytics-card fade-up">
              <h3 className="analytics-name">Hotjar / FullStory</h3>
              <p className="analytics-description">
                Session recordings and heatmaps reveal how users actually interact with
                your site. See where they click, scroll, and get stuck.
              </p>
            </div>
            <div className="analytics-card fade-up">
              <h3 className="analytics-name">Custom Dashboards</h3>
              <p className="analytics-description">
                Looker Studio or Tableau dashboards with real-time data from all your
                marketing channels. One source of truth for performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Email & Retention Section */}
      <section className="retention-section section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Email Marketing & Retention</h2>
            <p className="section-description">
              Acquiring customers is expensive. Retaining them is profitable. We build
              automated lifecycle campaigns that maximize customer lifetime value.
            </p>
          </div>
          <div className="retention-grid">
            <div className="retention-card fade-up">
              <h3 className="retention-title">Welcome Sequences</h3>
              <p className="retention-description">
                Automated onboarding emails that educate new users, highlight key features,
                and drive activation. First impressions matter.
              </p>
            </div>
            <div className="retention-card fade-up">
              <h3 className="retention-title">Lifecycle Campaigns</h3>
              <p className="retention-description">
                Nurture campaigns based on user behavior and lifecycle stage. Keep users
                engaged from trial to power user.
              </p>
            </div>
            <div className="retention-card fade-up">
              <h3 className="retention-title">Re-engagement Campaigns</h3>
              <p className="retention-description">
                Win back inactive users with targeted campaigns. Special offers, new
                features, or content that brings them back.
              </p>
            </div>
            <div className="retention-card fade-up">
              <h3 className="retention-title">Newsletter & Content</h3>
              <p className="retention-description">
                Regular newsletters with valuable content keep your brand top-of-mind.
                Education, insights, and updates that users actually want.
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

export default GrowthPage
