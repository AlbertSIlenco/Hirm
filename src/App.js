// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode
  useEffect(() => {
    const saved = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(saved);
    if (saved) document.body.classList.add('dark-mode');
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="App">
      {/* ===== Navbar ===== */}
      <nav className="navbar">
        <div className="nav-container">
          <h2>Albert</h2>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
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

      <main style={{ paddingTop: '80px' }}>
        {/* ===== Hero ===== */}
        <section id="home" style={{
          padding: '120px 20px',
          textAlign: 'center',
          background: 'var(--light)'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            color: isDarkMode ? 'white' : '#0f172a',
            margin: '10px 0'
          }}>
            Hello, I'm <span style={{ color: '#6366f1' }}>Albert</span>
          </h1>
          <p style={{ fontSize: '1.8rem', color: '#6366f1' }}>Full-Stack Developer</p>
          <div style={{ marginTop: '30px' }}>
            <a href="#projects" className="btn" style={{ marginRight: '15px' }}>View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </section>

        {/* ===== About ===== */}
        <section id="about" style={{
          padding: '100px 20px',
          background: isDarkMode ? '#1e293b' : '#f8fafc'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <h2 style={{
              fontSize: '2.8rem',
              textAlign: 'center',
              color: isDarkMode ? 'white' : '#0f172a'
            }}>
              About Me
            </h2>
            <p style={{
              maxWidth: '700px',
              margin: '20px auto',
              color: isDarkMode ? '#e2e8f0' : '#64748b',
              textAlign: 'center'
            }}>
              I build beautiful web apps with React, Node.js, and Laravel. I love turning ideas into reality.
            </p>
          </div>
        </section>

        {/* ===== Contact ===== */}
        <section id="contact" style={{
          padding: '100px 20px',
          textAlign: 'center'
        }}>
          <h2>Contact Me</h2>
          <p>albertnzubahimana@gmail.com</p>
          <button
            onClick={() => {
              navigator.clipboard.writeText('albertnzubahimana@gmail.com');
              alert('Email copied!');
            }}
            style={{
              background: '#6366f1',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Copy Email
          </button>
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
