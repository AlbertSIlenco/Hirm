// src/components/Hero.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    // Animate text letter by letter
    const text = textRef.current;
    if (text) {
      const chars = text.textContent.split('');
      text.textContent = '';
      chars.forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        text.appendChild(span);
      });

      gsap.from(text.children, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'back.out(1.7)'
      });
    }

    // Animate image and buttons
    gsap.from(imageRef.current, { x: 50, opacity: 0, duration: 1, delay: 0.6 });
    gsap.from(btnRef.current, { y: 30, opacity: 0, duration: 0.8, delay: 0.8 });
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: '#f8fafc',
        padding: '60px 20px',
        fontFamily: 'Inter, sans-serif'
      }}
    >
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '40px'
      }}>
        {/* Profile Picture */}
        <div style={{
          position: 'relative'
        }}>
          <img
            ref={imageRef}
            src="/images/albert-profile.png"  // ✅ From public/images/
            alt="Albert"
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              border: '5px solid white',
              boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.2)',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Text Content */}
        <div style={{ maxWidth: '700px' }}>
          <h1 ref={textRef} style={{
            fontSize: '2.8rem',
            color: '#0f172a',
            margin: '0 0 10px'
          }}>
            Hello, I'm Albert
          </h1>
          <h3 style={{
            color: '#6366f1',
            margin: '10px 0',
            fontSize: '1.6rem',
            fontWeight: 500
          }}>
            Full-Stack Developer
          </h3>
          <p style={{
            color: '#64748b',
            fontSize: '1.1rem',
            lineHeight: '1.7',
            margin: '20px 0',
            maxWidth: '600px',
            textAlign: 'center',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            I build beautiful, fast, and responsive web apps with React, Node.js, and GSAP.
          </p>

          {/* Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            flexWrap: 'wrap',
            marginTop: '20px'
          }}>
            <a href="#projects" className="btn" ref={btnRef}>
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;