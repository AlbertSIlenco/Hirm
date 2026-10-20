// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Refs for GSAP animations
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const aboutTextRef = useRef(null);
  const aboutImgRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Header entrance animation
    gsap.from(headerRef.current, { opacity: 0, y: -30, duration: 0.8, delay: 0.2 });
    gsap.from('.nav-link', { opacity: 0, y: -20, duration: 0.6, stagger: 0.1, delay: 0.5 });

    // About section scroll animation
    gsap.from(aboutRef.current.querySelector('.section-title'), {
      scrollTrigger: { trigger: aboutRef.current, start: 'top 80%' },
      y: 30, opacity: 0, duration: 0.8
    });
    gsap.from(aboutTextRef.current, {
      scrollTrigger: { trigger: aboutRef.current, start: 'top 80%' },
      x: -50, opacity: 0, duration: 0.8, delay: 0.2
    });
    gsap.from(aboutImgRef.current, {
      scrollTrigger: { trigger: aboutRef.current, start: 'top 80%' },
      x: 50, opacity: 0, duration: 0.8, delay: 0.3
    });
    // Gentle floating animation for about image
    gsap.to(aboutImgRef.current, {
      y: -10, duration: 3, repeat: -1, yoyo: true, ease: 'power1.inOut'
    });

    // Contact section scroll animation
    gsap.from(contactRef.current, {
      scrollTrigger: { trigger: contactRef.current, start: 'top 80%' },
      y: 40, opacity: 0, duration: 0.8
    });
  }, []);

  return (
    <div className="App">
      {/* ===== Header ===== */}
      <header className="header" ref={headerRef}>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <h2>Albert.</h2>
            </div>
            <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </div>
            <nav className={isMenuOpen ? 'nav-open' : ''}>
              <ul className="nav-list">
                <li><a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                <li><a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a></li>
                <li><a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
                <li><a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* ===== Hero Section ===== */}
        <section id="home" className="hero">
          <div className="container">
            <h1 className="hero-title">Hi, I'm <span className="highlight">Albert</span></h1>
            <p className="hero-subtitle">Full-Stack Developer crafting fast, responsive, and beautiful web applications.</p>
            <div className="hero-btns">
              <a href="#about" className="btn">About Me</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
          </div>
        </section>

        {/* ===== About Section ===== */}
        <section id="about" className="about" ref={aboutRef}>
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Passionate about creating digital experiences that blend beauty and function.</p>

            <div className="about-content">
              <div className="about-text" ref={aboutTextRef}>
                <p className="about-paragraph">
                  Hi, I'm Albert, a passionate Full-Stack Developer with over 5 years of experience building responsive, scalable web applications.
                </p>
                <p className="about-paragraph">
                  I specialize in React, Node.js, Laravel, and modern animation libraries like GSAP. I love turning ideas into clean, functional code.
                </p>
                <p className="about-paragraph">
                  When I'm not coding, I enjoy contributing to open-source, writing tech blogs, and learning new frameworks.
                </p>

                <div className="about-stats">
                  <div className="stat-item">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Projects Done</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Years Exp.</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">20+</span>
                    <span className="stat-label">Happy Clients</span>
                  </div>
                </div>

                <a href="#contact" className="btn">Start a Project</a>
              </div>

              <div className="about-image" ref={aboutImgRef}>
                {/* IMPORTANT: Place 'albert-working.png' directly inside your 'public' folder */}
                <img src="/albert-working.png" alt="Albert working" className="about-img" />
              </div>
            </div>
          </div>
        </section>

        {/* ===== Skills Section ===== */}
        <section id="skills" className="skills">
          <div className="container">
            <h2 className="section-title">My Skills</h2>
            <p className="section-subtitle">Technologies I work with on a daily basis.</p>
            <div className="skills-grid">
              {['React', 'Node.js', 'Laravel', 'PHP', 'JavaScript', 'GSAP', 'MySQL', 'CSS3', 'HTML5', 'Git'].map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Contact Section ===== */}
        <section id="contact" className="contact" ref={contactRef}>
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Have a project in mind? Let's talk about it.</p>
            
            <div className="contact-content">
              <div className="contact-form">
                <form onSubmit={(e) => { e.preventDefault(); alert('Message sent! (Demo)'); }}>
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Your Email" required />
                  </div>
                  <div className="form-group">
                    <textarea rows="5" placeholder="Your Message" required></textarea>
                  </div>
                  <button type="submit" className="btn">Send Message</button>
                </form>
              </div>

              <div className="contact-info">
                <h3>Contact Information</h3>
                <p>Fill out the form or reach out directly. I'm always open to discussing new projects.</p>
                
                <div className="contact-methods">
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <div>
                      <h4>Email</h4>
                      <p>albertnzubahimana@gmail.com</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <h4>Location</h4>
                      <p>Kigali, Rwanda</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <div>
                      <h4>Phone</h4>
                      <p>+250 724 051 404</p>
                    </div>
                  </div>
                </div>

                <div className="social-links">
                  <a href="https://github.com" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>Albert.</h3>
              <p>Building digital experiences with clean code and modern design.</p>
            </div>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-social">
              <p>Follow Me</p>
              <div className="social-icons">
                <a href="#"><i className="fab fa-github"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Albert Nzubahimana. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
