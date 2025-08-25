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
    if (savedMode) {
      document.body.classList.add('dark-mode');
    }
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
    <div className="App">
      {/* ===== Navbar ===== */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Albert</h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              style={{
                background: 'none',
                border: '2px solid #6366f1',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '1.2rem',
                color: isDarkMode ? '#818cf8' : '#6366f1',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>

            <div className="nav-toggle" onClick={toggleMenu}>
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </div>
          </div>

          <ul className={`nav-menu ${isMenuOpen ? 'nav-active' : ''}`}>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)} className="nav-link">Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="nav-link">About</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)} className="nav-link">Skills</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)} className="nav-link">Projects</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* ===== Main Content ===== */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <SkillCategories />
        <FunFacts />
        <Contact />

        {/* ===== Scroll to Top Button ===== */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            background: '#6366f1',
            color: 'white',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            zIndex: 100
          }}
        >
          ↑
        </div>
      </main>

      <Footer />
    </div>
  );
}

// ===== Components =====
const Hero = () => (
  <section id="home" className="hero">
    <div className="container">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hello, I'm <span className="text-gradient">Albert</span>
          </h1>
          <h3 className="hero-subtitle">Full-Stack Developer</h3>
          <p className="hero-description">
            I build fast, responsive, and scalable web apps with React, Node.js, Laravel, and modern design tools.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-large">View My Work</a>
            <a href="#contact" className="btn btn-outline btn-large">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="/images/albert-profile.png"
            alt="Albert"
            className="profile-img"
          />
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="about">
    <div className="container">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="about-paragraph">
            I'm Albert, a passionate full-stack developer with a strong foundation in Computer Systems & Architecture (CSA), Electronics, and creative technologies.
          </p>
          <p className="about-paragraph">
            I specialize in building modern web applications with React and Node.js, designing secure networks, and creating engaging digital content using Canva and CapCut.
          </p>
          <p className="about-paragraph">
            My goal is to turn ideas into functional, beautiful, and user-friendly digital experiences.
          </p>
          <a href="#contact" className="btn btn-large">Let's Connect</a>
        </div>
        <div className="about-image">
          <img
            src="/images/albert-working.png"
            alt="Albert working"
            className="about-img"
          />
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const skills = [
    'HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Laravel', 'PHP',
    'MySQL', 'Networking', 'CSA', 'Electronics', 'Photo Editing', 'Video Editing', 'Canva', 'CapCut'
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div key={i} className="skill-tag">{skill}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio built with React and GSAP for smooth animations and modern design.",
      tags: ["React", "GSAP", "CSS3", "JavaScript"],
      demo: "https://yourportfolio.com"
    },
    {
      title: "Student Management System",
      description: "A full-featured web app built with Laravel for managing student records, grades, and attendance with secure login and admin dashboard.",
      tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "Admin Panel"],
      demo: "https://laravel-demo.com"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the real-world projects I've worked on across web development, networking, electronics, and creative design.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.8rem',
                  color: '#6366f1',
                  textDecoration: 'underline',
                  marginTop: '8px',
                  display: 'block'
                }}
              >
                🔗 Live Demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCategories = () => (
  <section className="skill-categories">
    <div className="container">
      <h2 className="section-title">Skills by Category</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
        marginTop: '20px'
      }}>
        {[
          { title: 'Web Dev', items: ['HTML/CSS', 'JavaScript', 'React', 'Node.js'] },
          { title: 'Backend', items: ['Laravel', 'PHP', 'MySQL'] },
          { title: 'Creative', items: ['Canva', 'CapCut', 'Photo & Video Editing'] },
          { title: 'Systems', items: ['CSA', 'Networking', 'Electronics'] }
        ].map((cat, i) => (
          <div key={i} style={{
            background: 'var(--card-bg)',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: 'var(--shadow)',
            width: '200px'
          }}>
            <h3 style={{ color: '#6366f1', marginBottom: '10px' }}>{cat.title}</h3>
            <ul style={{ textAlign: 'left', color: 'var(--gray)' }}>
              {cat.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FunFacts = () => (
  <section className="fun-facts">
    <div className="container">
      <h2 className="section-title">A Bit About Me</h2>
      <p className="section-subtitle">
        When I'm not coding, I enjoy creating digital art, editing videos, and learning new tech.
      </p>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '30px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🎨</div>
          <p><strong>Digital Art</strong></p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🎵</div>
          <p><strong>Video Editing</strong></p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📚</div>
          <p><strong>Tech Learning</strong></p>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const contactCardStyle = {
    background: 'var(--card-bg)',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 10px 25px -10px rgba(0,0,0,0.1)',
    width: '220px',
    textAlign: 'center',
    transition: 'transform 0.3s ease'
  };

  const iconStyle = {
    fontSize: '1.8rem',
    marginBottom: '10px'
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm always open to discussing new opportunities, collaborations, and creative projects.
        </p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '40px',
          marginTop: '20px'
        }}>
          <div style={contactCardStyle}>
            <i className="fas fa-envelope" style={{ ...iconStyle, color: isDarkMode ? '#818cf8' : '#6366f1' }}></i>
            <h4>Email</h4>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <p><strong>albertnzubahimana@gmail.com</strong></p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('albertnzubahimana@gmail.com');
                  alert('Email copied to clipboard!');
                }}
                style={{
                  background: '#6366f1',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                Copy
              </button>
            </div>
          </div>

          <div style={contactCardStyle}>
            <i className="fas fa-map-marker-alt" style={{ ...iconStyle, color: isDarkMode ? '#818cf8' : '#6366f1' }}></i>
            <h4>Location</h4>
            <p><strong>Kigali, Rwanda</strong></p>
          </div>

          <div style={contactCardStyle}>
            <i className="fas fa-home" style={{ ...iconStyle, color: isDarkMode ? '#818cf8' : '#6366f1' }}></i>
            <h4>Home Address</h4>
            <p><strong>Nothern, Rwanda</strong></p>
          </div>

          <div style={contactCardStyle}>
            <i className="fas fa-phone" style={{ ...iconStyle, color: isDarkMode ? '#818cf8' : '#6366f1' }}></i>
            <h4>Phone</h4>
            <p><strong>+250 724 051 404</strong><br/><strong>+250 793 120 674</strong></p>
          </div>

          <div style={contactCardStyle}>
            <a
              href="https://wa.me/250724051404"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <i className="fab fa-whatsapp" style={{ ...iconStyle, color: isDarkMode ? '#4FCE5D' : '#25D366' }}></i>
              <h4>WhatsApp</h4>
              <p><strong>Chat with Me</strong></p>
            </a>
          </div>

          <div style={contactCardStyle}>
            <a
              href="https://instagram.com/albert_silenco"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <i className="fab fa-instagram" style={{ ...iconStyle, color: isDarkMode ? '#D9539C' : '#E4405F' }}></i>
              <h4>Instagram</h4>
              <p><strong>@albert_silenco</strong></p>
            </a>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <a
            href="mailto:albertnzubahimana@gmail.com"
            className="btn btn-large"
            style={{ padding: '16px 40px', fontSize: '1.2rem' }}
          >
            Send Email
          </a>

          <a
            href="/files/Albert_Resume.pdf"
            download="Albert_Silenco_Resume.pdf"
            className="btn btn-large"
            style={{ marginTop: '15px', background: '#10b981', color: 'white' }}
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p>&copy; 2025 Albert. All rights reserved.</p>
    </div>
  </footer>
);

export default App;
