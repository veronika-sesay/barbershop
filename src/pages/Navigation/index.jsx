import React, { useState } from 'react';
import './style.css';
import logo from './img/logo.svg';

export const Navigation = () => {
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
              <a
                href="#hours"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#hours')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
              >
                Business Hours
              </a>
            </li>
            <li>
              <a
                href="#photos"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#photos')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
              >
                Photos
              </a>
            </li>
            <li>
              <img className="logo" src={logo} alt="logo" />
            </li>
            <li>
              <a
                href="#location"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#location')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
              >
                Location
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contacts')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
              >
                Contacts
              </a>
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
              <a
                href="#hours"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#hours')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                  toggleMobileMenu();
                }}
              >
                Business Hours
              </a>
            </li>
            <li>
              <a
                href="#photos"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#photos')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                  toggleMobileMenu();
                }}
              >
                Photos
              </a>
            </li>
            <li>
              <a
                href="#location"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#location')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                  toggleMobileMenu();
                }}
              >
                Location
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contacts')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                  toggleMobileMenu();
                }}
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
