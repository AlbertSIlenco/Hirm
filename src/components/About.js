// src/components/About.js
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animate section title
    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      },
      y: 30,
      opacity: 0,
      duration: 0.8
    });

    // Animate text content
    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      },
      x: -50,
      opacity: 0,
      duration: 0.8,
      delay: 0.2
    });

    // Animate image
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      },
      x: 50,
      opacity: 0,
      duration: 0.8,
      delay: 0.3
    });

    // Gentle floating animation for the image
    gsap.to(imageRef.current, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef} style={{
      background: 'white',
      padding: '100px 0'
    }}>
      <div className="container">
        <h2 className="section-title" ref={headingRef}>About Me</h2>
        <p className="section-subtitle">
          Passionate about creating digital experiences that blend beauty and function.
        </p>

        <div className="about-content" style={{
          display: 'flex',
          gap: '60px',
          alignItems: 'center',
          marginTop: '40px'
        }}>
          {/* Text Section */}
          <div className="about-text" ref={contentRef} style={{
            flex: 1,
            fontSize: '1.1rem',
            color: '#64748b',
            lineHeight: '1.8'
          }}>
            <p style={{ marginBottom: '20px' }}>
              Hi, I'm Albert, a passionate Full-Stack Developer with over 5 years of experience building responsive, scalable web applications.
            </p>
            <p style={{ marginBottom: '20px' }}>
              I specialize in React, Node.js, and modern animation libraries like GSAP. I love turning ideas into clean, functional code.
            </p>
            <p style={{ marginBottom: '20px' }}>
              When I'm not coding, I enjoy contributing to open-source, writing tech blogs, and learning new frameworks.
            </p>

            {/* Stats */}
            <div style={{
              display: 'flex',
              gap: '40px',
              margin: '40px 0',
              flexWrap: 'wrap'
            }}>
              <div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#6366f1',
                  marginBottom: '5px'
                }}>50+</div>
                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Projects Done</div>
              </div>
              <div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#ec4899',
                  marginBottom: '5px'
                }}>5+</div>
                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Years Experience</div>
              </div>
              <div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#f59e0b',
                  marginBottom: '5px'
                }}>20+</div>
                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Happy Clients</div>
              </div>
            </div>

            <a href="#contact" className="btn">Start a Project</a>
          </div>

          {/* Image Section - Fixed: Removed overlay */}
          <div className="about-image" style={{
            flex: 1,
            position: 'relative'
          }}>
            <img
              ref={imageRef}
              src={require('../images/albert-working.png')}
              alt="Albert working"
              style={{
                width: '100%',
                borderRadius: '12px',
                boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.2)',
                objectFit: 'cover',
                transition: 'transform 0.3s ease'
              }}
            />
            {/* ✅ REMOVED: <div className="about-overlay"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;