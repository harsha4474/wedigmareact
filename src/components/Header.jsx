import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [headerStyle, setHeaderStyle] = useState({});
  const location = useLocation();

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

  // Scroll to top when navigating to a new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className="header" style={headerStyle}>
      <nav className="nav container">
        <div className="nav-brand">
          <Link to="/" className="brand-link">
            <img src="/assets/wedigmalogo.png" alt="Wedigma" className="logo" />
          </Link>
        </div>
        <button
          className={`nav-toggle ${isMenuActive ? 'active' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuActive(!isMenuActive)}
        >
          <span className="hamburger"></span>
        </button>
        <ul className={`nav-menu ${isMenuActive ? 'active' : ''}`}>
          <li><Link to="/capabilities" className="nav-link" onClick={handleNavClick}>Capabilities</Link></li>
          <li><Link to="/why-us" className="nav-link" onClick={handleNavClick}>Why Us</Link></li>
          <li><Link to="/process" className="nav-link" onClick={handleNavClick}>Process</Link></li>
          <li><Link to="/engineering" className="nav-link" onClick={handleNavClick}>Engineering</Link></li>
          <li><Link to="/growth" className="nav-link" onClick={handleNavClick}>Growth</Link></li>
          <li><Link to="/cases" className="nav-link" onClick={handleNavClick}>Cases</Link></li>
          <li><Link to="/contact" className="nav-link nav-link-cta" onClick={handleNavClick}>Get Started</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
