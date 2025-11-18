import React, { useState } from 'react';
import './style.css';
import logo from './img/logo.svg';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-container container">
        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <ul className="nav-links">
            <li>
              <a href="#hours">Opening Hours</a>
            </li>
            <li>
              <img className="logo" src={logo} alt="logo" />
            </li>
            <li>
              <a href="#location">Location</a>
            </li>
          </ul>
        </div>

        {/* Mobile Header */}
        <div className="mobile-header">
          <img className="logo" src={logo} alt="logo" />
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            <span
              className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-nav container">
          <ul className="mobile-nav-links">
            <li>
              <a href="#hours" onClick={toggleMobileMenu}>
                Opening Hours
              </a>
            </li>
            <li>
              <a href="#location" onClick={toggleMobileMenu}>
                Location
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
