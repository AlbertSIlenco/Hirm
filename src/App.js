// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    if (savedMode) document.body.classList.add('dark-mode');
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* ===== Navbar ===== */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Albert.</h2>
          </div>
          
          <div className="nav-toggle" onClick={toggleMenu}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>

          <ul className={`nav-menu ${isMenuOpen ? 'nav-active' : ''}`}>
            <li><a href="#home" className="nav-link" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={toggleMenu}>About</a></li>
            <li><a href="#skills" className="nav-link" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" className="nav-link" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a></li>
            <li>
              <button 
                className="nav-link" 
                onClick={toggleDarkMode} 
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}
              >
                <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        {/* ===== Hero Section ===== */}
        <section id="home" className="hero">
          <div className="container hero-content">
            <div className="hero-text">
              <p className="subtitle">Hello, I'm Albert</p>
              <h1>I am a <span className="text-gradient">Full-Stack Developer</span></h1>
              <p className="hero-description">
                I build fast, responsive, and beautiful websites using Laravel, Vue.js, and modern design principles.
              </p>
              <div className="hero-btns">
                <a href="#projects" className="btn btn-large">View My Work</a>
                <a href="#contact" className="btn btn-outline btn-large">Contact Me</a>
              </div>
            </div>
            <div className="hero-image">
              <img src="/profile2.png" alt="Albert Nzubahimana" className="profile-img" />
            </div>
          </div>
        </section>

        {/* ===== About Section ===== */}
        <section id="about" className="about">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Get to know the person behind the code.</p>
            <div className="about-content">
              <div className="about-text">
                <p className="about-paragraph">
                  I'm Albert Nzubahimana, a passionate web developer from East Africa with over 4 years of experience in building modern web applications.
                </p>
                <p className="about-paragraph">
                  I specialize in <strong>Laravel</strong>, <strong>PHP</strong>, <strong>JavaScript</strong>, and <strong>responsive frontend design</strong>. I believe in clean code, user-centered design, and continuous learning.
                </p>
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
              {['Laravel', 'PHP', 'JavaScript', 'Vue.js', 'MySQL', 'HTML/CSS', 'Git', 'Bootstrap'].map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Projects Section ===== */}
        <section id="projects" className="projects">
          <div className="container">
            <h2 className="section-title">My Work</h2>
            <p className="section-subtitle">A selection of my recent work and personal projects.</p>
            <div className="projects-grid">
              {[
                { title: 'E-Commerce Platform', desc: 'Full-featured online store with cart and admin dashboard.', tags: ['Laravel', 'MySQL', 'Stripe'] },
                { title: 'Task Management App', desc: 'Real-time collaborative task board with drag-and-drop.', tags: ['Vue.js', 'Laravel API'] },
                { title: 'Hospital Management', desc: 'Patient records, appointment scheduling, and billing system.', tags: ['PHP', 'Livewire'] }
              ].map((project, index) => (
                <div key={index} className="project-card">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.desc}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Contact Section ===== */}
        <section id="contact" className="contact">
          <div className="container">
            <h2 className="section-title">Contact Me</h2>
            <p className="section-subtitle">Have a project in mind? Let's talk about it.</p>
            <div className="contact-grid">
              <div className="contact-card">
                <i className="fas fa-envelope"></i>
                <p>albertnzubahimana@gmail.com</p>
              </div>
              <div className="contact-card">
                <i className="fas fa-map-marker-alt"></i>
                <p>Kigali, Rwanda</p>
              </div>
              <div className="contact-card">
                <i className="fas fa-phone"></i>
                <p>+250 724 051 404</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Albert Nzubahimana. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
