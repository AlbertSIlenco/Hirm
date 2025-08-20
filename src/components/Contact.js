// src/components/Contact.js
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

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

    // Animate contact form
    gsap.from(formRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      },
      x: -50,
      opacity: 0,
      duration: 0.8,
      delay: 0.2
    });

    // Animate contact info
    gsap.from(infoRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      },
      x: 50,
      opacity: 0,
      duration: 0.8,
      delay: 0.4
    });

    // Float animation for contact info
    gsap.fromTo(infoRef.current, 
      { y: 0 }, 
      { 
        y: -10, 
        duration: 3, 
        repeat: -1, 
        yoyo: true, 
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Message sent! (This is a demo)');
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title" ref={headingRef}>Get In Touch</h2>
        <div className="contact-content">
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
          
          <div ref={infoRef} className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new opportunities, collaborations, 
              and interesting projects. Feel free to reach out!
            </p>
            
            <div className="contact-methods">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>albert@example.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (123) 456-7890</p>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <p>San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;