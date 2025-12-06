function Hero() {
  const handleSmoothScroll = (e, href) => {
    if (href === '#' || href === '') return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-graphic"></div>
      <div className="container">
        <div className="hero-content">
          <span className="hero-tag">Enterprise Product Studio</span>
          <h1 className="hero-title">From Zero to Launch to Growth</h1>
          <p className="hero-subtitle">
            End-to-end product innovation and cloud engineering. Strategic design, scalable infrastructure, integrated systems, and performance-driven growth.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary" onClick={(e) => handleSmoothScroll(e, '#contact')}>Book a Build Session</a>
            <a href="#capabilities" className="btn btn-secondary" onClick={(e) => handleSmoothScroll(e, '#capabilities')}>Explore Capabilities</a>
          </div>
          <div className="hero-metrics">
            <div className="metric-chip">
              <span className="metric-value">48h</span>
              <span className="metric-label">Launch Kickoff</span>
            </div>
            <div className="metric-chip">
              <span className="metric-value">100+</span>
              <span className="metric-label">Products Shipped</span>
            </div>
            <div className="metric-chip">
              <span className="metric-value">99.9%</span>
              <span className="metric-label">Uptime SLA</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="pipeline-card">
            <div className="pipeline-header">
              <span className="pipeline-title">Launch Pipeline</span>
              <span className="pipeline-status">Active</span>
            </div>
            <div className="pipeline-stages">
              <div className="stage">
                <div className="stage-dot"></div>
                <span>Research</span>
              </div>
              <div className="stage">
                <div className="stage-dot"></div>
                <span>Design</span>
              </div>
              <div className="stage">
                <div className="stage-dot"></div>
                <span>Build</span>
              </div>
              <div className="stage">
                <div className="stage-dot"></div>
                <span>Deploy</span>
              </div>
              <div className="stage">
                <div className="stage-dot"></div>
                <span>Grow</span>
              </div>
            </div>
          </div>
          <div className="node-diagram">
            <div className="node node-1">
              <div className="node-inner"></div>
              <span className="node-label">Strategy</span>
            </div>
            <div className="node node-2">
              <div className="node-inner"></div>
              <span className="node-label">UX</span>
            </div>
            <div className="node node-3">
              <div className="node-inner"></div>
              <span className="node-label">Cloud</span>
            </div>
            <div className="node node-4">
              <div className="node-inner"></div>
              <span className="node-label">APIs</span>
            </div>
            <div className="node node-5">
              <div className="node-inner"></div>
              <span className="node-label">Growth</span>
            </div>
            <svg className="node-connections" width="100%" height="100%">
              <line x1="20%" y1="20%" x2="80%" y2="20%" className="connection-line"/>
              <line x1="80%" y1="20%" x2="80%" y2="80%" className="connection-line"/>
              <line x1="80%" y1="80%" x2="20%" y2="80%" className="connection-line"/>
              <line x1="20%" y1="80%" x2="20%" y2="20%" className="connection-line"/>
              <line x1="20%" y1="20%" x2="80%" y2="80%" className="connection-line"/>
            </svg>
          </div>
          <div className="segment-pills">
            <span className="pill">B2B SaaS</span>
            <span className="pill">Fintech</span>
            <span className="pill">Enterprise</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
