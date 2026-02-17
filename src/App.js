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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      {/* ===== Navbar ===== */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Albert S.</h2>
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
            <li><a href="#home" onClick={closeMenu} className="nav-link">Home</a></li>
            <li><a href="#about" onClick={closeMenu} className="nav-link">About</a></li>
            <li><a href="#skills" onClick={closeMenu} className="nav-link">Skills</a></li>
            <li><a href="#projects" onClick={closeMenu} className="nav-link">Projects</a></li>
            <li><a href="#gallery" onClick={closeMenu} className="nav-link">Gallery</a></li>
            <li><a href="#contact" onClick={closeMenu} className="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* ===== Main Content ===== */}
      <main>
        {/* ===== Hero Section ===== */}
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1>Hello, I'm <span className="text-gradient">Albert Silencco</span></h1>
                <h3 className="subtitle">Building Digital Experiences</h3>
                <p className="hero-description">
                  I craft fast, clean, and modern web apps with React, Node.js, Laravel, and creative design tools.
                </p>
                <div className="hero-btns">
                  <a href="#projects" className="btn btn-large">View My Work</a>
                  <a href="#contact" className="btn btn-outline btn-large">Contact Me</a>
                </div>
              </div>
              <div className="hero-image">
                <img
                  src="/images/albert-profile.png"
                  alt="Albert - Full Stack Developer"
                  className="profile-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== About Section ===== */}
        <section id="about" className="about">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <p className="about-paragraph">
                  Hi, I'm Albert Silencco — a passionate full-stack developer with expertise in web development, networking, and digital creativity.
                </p>
                <p className="about-paragraph">
                  I’ve studied Computer Systems & Architecture (CSA) and Electronics, and I'm skilled in photo and video editing using Canva and CapCut.
                </p>
                <p className="about-paragraph">
                  I love turning ideas into clean, functional, and beautiful digital experiences.
                </p>
                <a href="#contact" className="btn">Let's Connect</a>
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

        {/* ===== Skills Section ===== */}
        <section id="skills" className="skills">
          <div className="container">
            <h2 className="section-title">My Skills</h2>
            <div className="skills-grid">
              {[
                'HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Laravel', 'PHP',
                'MySQL', 'Networking', 'CSA', 'Electronics', 'Photo Editing', 'Video Editing', 'Canva', 'CapCut'
              ].map((skill, i) => (
                <div key={i} className="skill-tag">{skill}</div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Projects Section ===== */}
        <section id="projects" className="projects">
          <div className="container">
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">
              Here are some of the real-world projects I've worked on across web development, networking, electronics, and creative design.
            </p>
            <div className="projects-grid">
              {[
                {
                  title: "Personal Portfolio Website",
                  description: "A responsive portfolio built with React and GSAP for smooth animations and modern design.",
                  tags: ["React", "GSAP", "CSS3", "JavaScript"]
                },
                {
                  title: "Student Management System",
                  description: "A full-featured web app built with Laravel for managing student records, grades, and attendance with secure login and admin dashboard.",
                  tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "Admin Panel"]
                },
                {
                  title: "Network Setup for Small Business",
                  description: "Designed and implemented a secure LAN network for a 15-user office, including router configuration and IP management.",
                  tags: ["Networking", "CSA", "Router Setup", "LAN"]
                },
                {
                  title: "Promotional Video Edits",
                  description: "Created engaging promotional videos for local businesses using CapCut and Canva with motion graphics and sound design.",
                  tags: ["CapCut", "Canva", "Video Editing", "Motion Graphics"]
                },
                {
                  title: "Digital Photo Editing Service",
                  description: "Provided professional photo retouching, color correction, and social media content design for clients.",
                  tags: ["Photo Editing", "Canva", "Color Grading", "Social Media"]
                },
                {
                  title: "IoT Electronics Project",
                  description: "Built a temperature monitoring system using sensors and a Raspberry Pi for real-time data display.",
                  tags: ["Electronics", "CSA", "Raspberry Pi", "Sensor Integration"]
                },
                {
                  title: "Website for Local Cafe",
                  description: "Designed and developed a responsive website with menu display and contact form using HTML, CSS, and JavaScript.",
                  tags: ["HTML/CSS", "JavaScript", "Responsive Design", "UI"]
                }
              ].map((project, i) => (
                <div key={i} className="project-card">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Gallery Section (Only shows when clicked from nav) ===== */}
        <section id="gallery" className="gallery">
          <div className="container">
            <h2 className="section-title">My Creative Gallery</h2>
            <p className="section-subtitle">
              A collection of my best photo edits, video designs, UI mockups, and digital creations.
            </p>
            <div className="gallery-grid">
              <img src="/images/IMG-20250804-WA0008.jpg" alt="Project 1" className="gallery-item" />
              <img src="/images/IMG_20250820_155002_854.jpg" alt="Project 2" className="gallery-item" />
              <img src="/images/IMG_20250820_155002_854~2.jpg" alt="Project 3" className="gallery-item" />
              <img src="/images/y.jpg" alt="YouTube Thumbnail" className="gallery-item" />
              <img src="/images/Copy of profile.png" alt="Profile Edit" className="gallery-item" />
              <img src="/images/albert-working.png" alt="Work Setup" className="gallery-item" />
            </div>
          </div>
        </section>

        {/* ===== Contact Section ===== */}
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
              {/* Email */}
              <div style={cardStyle()}>
                <i className="fas fa-envelope" style={iconStyle()}></i>
                <h4>Email</h4>
                <p><strong>albertnzubahimana@gmail.com</strong></p>
              </div>

              {/* Location */}
              <div style={cardStyle()}>
                <i className="fas fa-map-marker-alt" style={iconStyle()}></i>
                <h4>Location</h4>
                <p><strong>Kigali, Rwanda</strong></p>
              </div>

              {/* Phone */}
              <div style={cardStyle()}>
                <i className="fas fa-phone" style={iconStyle()}></i>
                <h4>Phone</h4>
                <p><strong>+250 724 051 404</strong><br/><strong>+250 793 120 674</strong></p>
              </div>

              {/* WhatsApp */}
              <div style={cardStyle()}>
                <a href="https://wa.me/250724051404" target="_blank" rel="noopener noreferrer" style={linkStyle()}>
                  <i className="fab fa-whatsapp" style={{ ...iconStyle(), color: '#25D366' }}></i>
                  <h4>WhatsApp</h4>
                  <p><strong>Chat with Me</strong></p>
                </a>
              </div>

              {/* YouTube */}
              <div style={cardStyle()}>
                <a href="https://youtube.com/@albertsilenco" target="_blank" rel="noopener noreferrer" style={linkStyle()}>
                  <i className="fab fa-youtube" style={{ ...iconStyle(), color: '#FF0000' }}></i>
                  <h4>YouTube</h4>
                  <p><strong>@albertsilenco</strong></p>
                </a>
              </div>

              {/* Instagram */}
              <div style={cardStyle()}>
                <a href="https://instagram.com/albert_silenco" target="_blank" rel="noopener noreferrer" style={linkStyle()}>
                  <i className="fab fa-instagram" style={{ ...iconStyle(), color: '#E4405F' }}></i>
                  <h4>Instagram</h4>
                  <p><strong>@albert_silenco</strong></p>
                </a>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <a
                href="mailto:albertnzubahimana@gmail.com"
                className="btn"
                style={{ padding: '16px 40px', fontSize: '1.1rem' }}
              >
                Send Email
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Albert Silencco. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );

  function cardStyle() {
    return {
      background: 'var(--card-bg)',
      padding: '25px',
      borderRadius: '12px',
      boxShadow: '0 10px 25px -10px rgba(0,0,0,0.1)',
      width: '220px',
      textAlign: 'center',
      transition: 'transform 0.3s ease'
    };
  }

  function iconStyle() {
    return {
      fontSize: '1.8rem',
      marginBottom: '10px'
    };
  }

  function linkStyle() {
    return { color: 'inherit', textDecoration: 'none' };
  }
}

export default App;
