// src/components/Header.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Header.css';

const Header = () => {
  useEffect(() => {
    gsap.from('.logo', { opacity: 0, y: -30, duration: 0.8, delay: 0.2 });
    gsap.from('.nav-link', { opacity: 0, y: -20, duration: 0.6, stagger: 0.1, delay: 0.5 });
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>Albert</h2>
          </div>
          <nav>
            <ul className="nav-list">
              <li><a href="#home" className="nav-link">Home</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#skills" className="nav-link">Skills</a></li>
              <li><a href="#projects" className="nav-link">Projects</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;