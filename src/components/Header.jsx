import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the styles!

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {
      name: 'Life @ Movsac',
      isDropdown: true,
      children: [
        { name: 'About Us', href: '/about' },
        { name: 'Mission & Values', href: '/mission' },
        { name: 'How we work and Function', href: '/how-we-work' },
        { name: 'Compliance', href: '/compliance' }
      ]
    },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Insights', href: '/insight' }
  ];

  // Rolling Text Component
  const RollingText = ({ text, to, isDropdown, onClick }) => {
    const letters = text.split('');

    return (
      <div className="rolling-text-wrapper">
        {isDropdown ? (
          <div
            className={`nav-link dropdown-toggle ${isDropdownOpen ? 'show' : ''}`}
            role="button"
            onClick={onClick}
            aria-expanded={isDropdownOpen}
          >
            <div className="rolling-text">
              <div className="rolling-text-inner">
                {/* Original Layer */}
                <span className="rolling-original">
                  {letters.map((letter, i) => (
                    <span key={i} className="char" style={{ transitionDelay: `${i * 0.05}s` }}>
                      {letter === ' ' ? '\u00A0' : letter}
                    </span>
                  ))}
                </span>
                {/* Duplicate Layer */}
                <span className="rolling-duplicate">
                  {letters.map((letter, i) => (
                    <span key={i} className="char" style={{ transitionDelay: `${i * 0.05}s` }}>
                      {letter === ' ' ? '\u00A0' : letter}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <NavLink
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            to={to}
            onClick={onClick}
          >
            <div className="rolling-text">
              <div className="rolling-text-inner">
                {/* Original Layer */}
                <span className="rolling-original">
                  {letters.map((letter, i) => (
                    <span key={i} className="char" style={{ transitionDelay: `${i * 0.05}s` }}>
                      {letter === ' ' ? '\u00A0' : letter}
                    </span>
                  ))}
                </span>
                {/* Duplicate Layer */}
                <span className="rolling-duplicate">
                  {letters.map((letter, i) => (
                    <span key={i} className="char" style={{ transitionDelay: `${i * 0.05}s` }}>
                      {letter === ' ' ? '\u00A0' : letter}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </NavLink>
        )}
      </div>
    );
  };

  return (
    <header>
      <nav className={`navbar navbar-expand-lg ${isScrolled ? 'nav-scrolled' : ''}`}>
        <div className="container">
          {/* Logo - ✅ ABSOLUTE PATH */}
          <Link className="navbar-brand" to="/" onClick={() => setIsMenuOpen(false)}>
            <img id="navLogo" src="/img/Logo.png" alt="Movsac Logo" />
            <span>Movsac</span>
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className={`navbar-toggler ${isMenuOpen ? '' : 'collapsed'}`}
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
          </button>

          {/* Navigation Menu */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarText">
            <ul className="navbar-nav mx-auto mb-lg-0">
              {navItems.map((item, index) => (
                <li className={`nav-item ${item.isDropdown ? 'dropdown' : ''}`} key={index}>
                  {item.isDropdown ? (
                    <>
                      <RollingText
                        text={item.name}
                        isDropdown={true}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      />
                      <ul className={`dropdown-menu border-0 shadow-sm rounded-3 overflow-hidden p-0 ${isDropdownOpen ? 'show' : ''}`}>
                        {item.children.map((child, idx) => (
                          <li key={idx}>
                            <NavLink
                              className={({ isActive }) => (isActive ? 'dropdown-item active' : 'dropdown-item')}
                              to={child.href}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsDropdownOpen(false);
                              }}
                            >
                              {child.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <RollingText
                      text={item.name}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                    />
                  )}
                </li>
              ))}

              {/* Contact Button - Mobile Only */}
              <li className="nav-item d-lg-none">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? 'text-decoration-none btn-get-now active' : 'text-decoration-none btn-get-now')}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact us
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.50033 5.54128C7.50033 5.54128 13.2822 5.08901 14.0965 5.90321C14.9107 6.71741 14.4583 12.4994 14.4583 12.4994M13.7503 6.24935L5.41699 14.5827" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </NavLink>
              </li>
            </ul>

            {/* Contact Button - Desktop Only */}
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'text-decoration-none d-none d-lg-block btn-get-now active' : 'text-decoration-none d-none d-lg-block btn-get-now')}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact us
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.50033 5.54128C7.50033 5.54128 13.2822 5.08901 14.0965 5.90321C14.9107 6.71741 14.4583 12.4994 14.4583 12.4994M13.7503 6.24935L5.41699 14.5827" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;