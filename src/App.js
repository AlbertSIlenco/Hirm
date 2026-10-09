// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Typing effect state
  const roles = ["Full-Stack Developer", "Laravel Expert", "UI/UX Enthusiast", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // 1. Load dark mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    if (savedMode) document.body.classList.add('dark-mode');
  }, []);

  // 2. Typing Effect Logic
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause at end
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setTypedText(isDeleting ? currentRole.substring(0, typedText.length - 1) : currentRole.substring(0, typedText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  // 3. Scroll Listener for Active Section & Scroll-to-Top Button
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll-to-top button
      setShowScrollTop(window.scrollY > 400);

      // Determine active section
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu on click
    }
  };

  // Mock form submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    e.target.reset();
  };

  // Data Arrays (Easy to update!)
  const skills = ["Laravel", "PHP", "JavaScript", "Vue.js", "React", "MySQL", "HTML/CSS", "Git", "Bootstrap", "Tailwind"];
  
  const projects = [
    { title: "E-Commerce Platform", desc: "A full-featured online store with cart, checkout, and admin dashboard.", tags: ["Laravel", "MySQL", "Stripe"] },
    { title: "Task Management App", desc: "Real-time collaborative task board with drag-and-drop functionality.", tags: ["Vue.js", "Laravel API", "Tailwind"] },
    { title: "Hospital Management", desc: "Patient records, appointment scheduling, and billing system.", tags: ["PHP", "Livewire", "Bootstrap"] }
  ];

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
                  className={`nav-link ${activeSection === section ? 'active-link' : ''}`}
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
        <section id="home" className="hero">
          <div className="container hero-content">
            <div className="hero-text">
              <p className="subtitle">Hello, I'm Albert</p>
              <h1>I am a <span className="text-gradient">{typedText}</span><span className="typing-cursor">|</span></h1>
              <p className="hero-description">
                I build fast, responsive, and beautiful web applications using modern technologies like Laravel, React, and Vue.js. Let's create something amazing together.
              </p>
              <div className="hero-btns">
                <a href="#projects" className="btn btn-large" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>View My Work</a>
                <a href="#contact" className="btn btn-outline btn-large" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact Me</a>
              </div>
            </div>
            <div className="hero-image">
              {/* Replace with your actual image path */}
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
        <section id="skills" className="skills">
          <div className="container">
            <h2 className="section-title">My Skills</h2>
            <p className="section-subtitle">Technologies I work with on a daily basis.</p>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Projects Section ===== */}
        <section id="projects" className="projects">
          <div className="container">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">A selection of my recent work and personal projects.</p>
            <div className="projects-grid">
              {projects.map((project, index) => (
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
            <h2 className="section-title">Get In Touch</h2>
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

            <form className="contact-form-container" style={{ maxWidth: '600px', margin: '40px auto 0' }} onSubmit={handleContactSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <input type="text" placeholder="Your Name" required style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--gray)', background: 'var(--card-bg)', color: 'var(--dark)' }} />
                <input type="email" placeholder="Your Email" required style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--gray)', background: 'var(--card-bg)', color: 'var(--dark)' }} />
              </div>
              <textarea placeholder="Your Message" rows="5" required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--gray)', background: 'var(--card-bg)', color: 'var(--dark)', marginBottom: '15px' }}></textarea>
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

      {/* ===== Scroll to Top Button ===== */}
      {showScrollTop && (
        <button 
          className="scroll-to-top" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}

export default App;
