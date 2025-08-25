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
        <Contact />
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
          <h1>Hello, I'm <span className="text-gradient">Albert</span></h1>
          <h3 className="subtitle">Full-Stack Developer & Creative Technologist</h3>
          <p className="hero-description">
            I build fast, responsive, and scalable web applications using React, Node.js, Laravel, and modern design tools.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
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
);

const About = () => (
  <section id="about" className="about">
    <div className="container">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="about-paragraph">
            I'm Albert, also known as Silenco Hirm — a passionate full-stack developer with expertise in web development, networking, and digital creativity.
          </p>
          <p className="about-paragraph">
            I’ve studied Computer Systems & Architecture (CSA) and Electronics, and I’m skilled in photo and video editing using Canva and CapCut.
          </p>
          <p className="about-paragraph">
            I enjoy turning ideas into clean, functional, and beautiful digital experiences that solve real problems.
          </p>
          <a href="#contact" className="btn">Let's Connect</a>
        </div>
        <div className="about-image">
          <img
            src="/images/albert-working.png"
            alt="Albert working on laptop"
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
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginTop: '15px',
                justifyContent: 'center'
              }}>
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      background: tag.includes('Laravel') || tag.includes('PHP') 
                        ? '#f9322c' 
                        : tag.includes('React') || tag.includes('JavaScript') 
                          ? '#61dafb' 
                          : tag.includes('CapCut') || tag.includes('Canva')
                            ? '#00c4cc' 
                            : '#6366f1',
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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
    color: '#6366f1',
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
            <i className="fas fa-envelope" style={iconStyle}></i>
            <h4>Email</h4>
            <p><strong>albertnzubahimana@gmail.com</strong></p>
          </div>

          <div style={contactCardStyle}>
            <i className="fas fa-map-marker-alt" style={iconStyle}></i>
            <h4>Location</h4>
            <p><strong>Kigali, Rwanda</strong></p>
          </div>

          <div style={contactCardStyle}>
            <i className="fas fa-home" style={iconStyle}></i>
            <h4>Home Address</h4>
            <p><strong>Nothern, Rwanda</strong></p>
          </div>

          <div style={contactCardStyle}>
            <i className="fas fa-phone" style={iconStyle}></i>
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
              <i className="fab fa-whatsapp" style={{ ...iconStyle, color: '#25D366' }}></i>
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
              <i className="fab fa-instagram" style={{ ...iconStyle, color: '#E4405F' }}></i>
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
