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

  // Scroll Reveal Animation Logic
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! I'll get back to you soon.");
    e.target.reset();
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* ===== Navbar ===== */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Albert<span style={{color: 'var(--secondary)'}}>.</span></h2>
          </div>
          
          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>

          <ul className={`nav-menu ${isMenuOpen ? 'nav-active' : ''}`}>
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <a 
                  href={`#${section}`} 
                  className="nav-link"
                  onClick={(e) => { e.preventDefault(); scrollToSection(section); }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <button className="nav-link" onClick={toggleDarkMode} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>
                <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        {/* ===== Hero Section ===== */}
        <section id="home" className="hero reveal">
          <div className="container hero-content">
            <div className="hero-text">
              <p className="subtitle">Hello, I'm Albert</p>
              <h1>I build <span className="text-gradient">fast & beautiful</span> web experiences.</h1>
              <p className="hero-description">
                Full-Stack Web Developer specializing in Laravel, React, and modern UI/UX design. Let's create something amazing together.
              </p>
              <div className="hero-btns">
                <a href="#projects" className="btn btn-large" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>View My Work</a>
                <a href="#contact" className="btn btn-outline btn-large" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact Me</a>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-img-wrapper">
                <img src="/profile2.png" alt="Albert Nzubahimana" className="profile-img" />
              </div>
            </div>
          </div>
        </section>

        {/* ===== About Section ===== */}
        <section id="about" className="about reveal">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Get to know the person behind the code.</p>
            <div className="about-content">
              <div className="about-text">
                <p className="about-paragraph">
                  I'm a passionate web developer from East Africa with over 4 years of experience in building modern, scalable web applications. 
                </p>
                <p className="about-paragraph">
                  I specialize in <strong>Laravel</strong>, <strong>PHP</strong>, <strong>JavaScript</strong>, and <strong>responsive frontend design</strong>. I believe in clean code, user-centered design, and continuous learning. When I'm not coding, I enjoy mentoring students and exploring new technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Skills Section ===== */}
        <section id="skills" className="skills reveal">
          <div className="container">
            <h2 className="section-title">My Skills</h2>
            <p className="section-subtitle">Technologies I work with on a daily basis.</p>
            <div className="skills-grid">
              {["Laravel", "PHP", "JavaScript", "Vue.js", "React", "MySQL", "HTML/CSS", "Git", "Bootstrap", "Tailwind"].map((skill, index) => (
                <span key={index} className={`skill-tag reveal reveal-delay-${(index % 3) + 1}`}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Projects Section ===== */}
        <section id="projects" className="projects reveal">
          <div className="container">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">A selection of my recent work and personal projects.</p>
            <div className="projects-grid">
              {[
                { title: "E-Commerce Platform", desc: "A full-featured online store with cart, checkout, and admin dashboard.", tags: ["Laravel", "MySQL", "Stripe"] },
                { title: "Task Management App", desc: "Real-time collaborative task board with drag-and-drop functionality.", tags: ["Vue.js", "Laravel API", "Tailwind"] },
                { title: "Hospital Management", desc: "Patient records, appointment scheduling, and billing system.", tags: ["PHP", "Livewire", "Bootstrap"] }
              ].map((project, index) => (
                <div key={index} className={`project-card reveal reveal-delay-${(index % 3) + 1}`}>
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
        <section id="contact" className="contact reveal">
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Have a project in mind? Let's talk about it.</p>
            
            <div className="contact-grid">
              <div className="contact-card reveal reveal-delay-1">
                <i className="fas fa-envelope"></i>
                <p>albertnzubahimana@gmail.com</p>
              </div>
              <div className="contact-card reveal reveal-delay-2">
                <i className="fas fa-map-marker-alt"></i>
                <p>Kigali, Rwanda</p>
              </div>
              <div className="contact-card reveal reveal-delay-3">
                <i className="fas fa-phone"></i>
                <p>+250 724 051 404</p>
              </div>
            </div>

            <form className="reveal" style={{ maxWidth: '600px', margin: '40px auto 0' }} onSubmit={handleContactSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <input type="text" placeholder="Your Name" required className="contact-input" />
                <input type="email" placeholder="Your Email" required className="contact-input" />
              </div>
              <textarea placeholder="Your Message" rows="5" required className="contact-input" style={{ marginBottom: '15px', resize: 'vertical' }}></textarea>
              <button type="submit" className="btn btn-large" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Albert Nzubahimana. Built with React & Love.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
