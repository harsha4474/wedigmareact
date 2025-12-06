import { useState, useEffect } from 'react';

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [headerStyle, setHeaderStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        setHeaderStyle({
          background: 'rgba(255, 255, 255, 0.98)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
        });
      } else {
        setHeaderStyle({
          background: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuActive(false);
  };

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
      handleNavClick();
    }
  };

  return (
    <header className="header" style={headerStyle}>
      <nav className="nav container">
        <div className="nav-brand">
          <a href="#" className="brand-link">
            <img src="/assets/wedigmalogo.png" alt="Wedigma" className="logo" />
          </a>
        </div>
        <button
          className={`nav-toggle ${isMenuActive ? 'active' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuActive(!isMenuActive)}
        >
          <span className="hamburger"></span>
        </button>
        <ul className={`nav-menu ${isMenuActive ? 'active' : ''}`}>
          <li><a href="#capabilities" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#capabilities')}>Capabilities</a></li>
          <li><a href="#why-us" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#why-us')}>Why Us</a></li>
          <li><a href="#lifecycle" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#lifecycle')}>Process</a></li>
          <li><a href="#cloud-api" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#cloud-api')}>Engineering</a></li>
          <li><a href="#growth" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#growth')}>Growth</a></li>
          <li><a href="#cases" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#cases')}>Cases</a></li>
          <li><a href="#contact" className="nav-link nav-link-cta" onClick={(e) => handleSmoothScroll(e, '#contact')}>Get Started</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
