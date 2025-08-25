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
            <li><a href="#home" onClick={toggleMenu} className="nav-link">Home</a></li>
            <li><a href="#about" onClick={toggleMenu} className="nav-link">About</a></li>
            <li><a href="#skills" onClick={toggleMenu} className="nav-link">Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu} className="nav-link">Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu} className="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* ===== Main Content ===== */}
      <main style={{ paddingTop: '80px' }}>
        {/* ===== Hero ===== */}
        <section id="home" style={{
          padding: '100px 20px',
          display: 'flex',
          alignItems: 'center',
          background: 'var(--light)'
        }}>
          <div style={{
            flex: 1,
            maxWidth: '600px',
            padding: '0 20px'
          }}>
            <h1 style={{
              fontSize: '3.5rem',
              color: isDarkMode ? 'white' : '#0f172a',
              margin: '10px 0'
            }}>
              Hello, I'm <span style={{ color: '#6366f1' }}>Albert</span>
            </h1>
            <h3 style={{
              fontSize: '1.8rem',
              color: '#6366f1',
              margin: '15px 0'
            }}>
              Full-Stack Developer
            </h3>
            <p style={{
              color: isDarkMode ? '#e2e8f0' : '#64748b',
              fontSize: '1.1rem',
              lineHeight: '1.7'
            }}>
              I build fast, clean, and modern web apps with React, Node.js, Laravel, and creative tools.
            </p>
            <div style={{ marginTop: '30px' }}>
              <a
                href="#projects"
                style={{
                  background: '#6366f1',
                  color: 'white',
                  padding: '14px 30px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  marginRight: '15px'
                }}
              >
                View My Work
              </a>
              <a
                href="#contact"
                style={{
                  border: '2px solid #6366f1',
                  color: '#6366f1',
                  padding: '14px 30px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            paddingRight: '20px'
          }}>
            <img
              src="/images/albert-profile.png"
              alt="Albert"
              style={{
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                border: '5px solid white',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2)',
                objectFit: 'cover'
              }}
            />
          </div>
        </section>

        {/* ===== About ===== */}
        <section id="about" style={{
          padding: '100px 20px',
          background: isDarkMode ? '#1e293b' : '#f8fafc',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <h2 style={{
              fontSize: '2.8rem',
              color: isDarkMode ? 'white' : '#0f172a'
            }}>
              About Me
            </h2>
            <p style={{
              maxWidth: '700px',
              margin: '20px auto',
              color: isDarkMode ? '#e2e8f0' : '#64748b'
            }}>
              I build beautiful web apps with React, Node.js, and Laravel. I love turning ideas into reality.
            </p>
          </div>
        </section>

        {/* ===== Skills ===== */}
        <section id="skills" style={{
          padding: '100px 20px',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <h2 style={{
              fontSize: '2.8rem',
              color: isDarkMode ? 'white' : '#0f172a'
            }}>
              My Skills
            </h2>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '15px',
              marginTop: '40px'
            }}>
              {[
                'HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Laravel', 'PHP',
                'MySQL', 'Networking', 'CSA', 'Electronics', 'Photo Editing', 'Video Editing'
              ].map(skill => (
                <div key={skill} style={{
                  background: isDarkMode ? '#475569' : '#f1f5f9',
                  color: isDarkMode ? '#e2e8f0' : '#0f172a',
                  padding: '12px 24px',
                  borderRadius: '30px',
                  fontSize: '0.95rem',
                  border: '1px solid #e2e8f0',
                  fontWeight: '500'
                }}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Contact ===== */}
        <section id="contact" style={{
          padding: '100px 20px',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <h2 style={{
              fontSize: '2.8rem',
              color: isDarkMode ? 'white' : '#0f172a'
            }}>
              Get In Touch
            </h2>
            <p style={{
              maxWidth: '700px',
              margin: '20px auto',
              color: isDarkMode ? '#e2e8f0' : '#64748b'
            }}>
              I'm always open to discussing new opportunities.
            </p>
            <a
              href="mailto:albertnzubahimana@gmail.com"
              style={{
                background: '#6366f1',
                color: 'white',
                padding: '16px 40px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}
            >
              Send Email
            </a>
          </div>
        </section>
      </main>

      <footer style={{
        background: isDarkMode ? '#0f172a' : '#0f172a',
        color: 'white',
        textAlign: 'center',
        padding: '40px 0'
      }}>
        <p>&copy; 2025 Albert. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
