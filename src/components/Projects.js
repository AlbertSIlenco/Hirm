// src/components/Projects.js
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const projectsRef = useRef([]);

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with product catalog, cart, and payment integration.',
      image: 'https://via.placeholder.com/400x250',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates and team features.',
      image: 'https://via.placeholder.com/400x250',
      tech: ['React', 'Firebase', 'GSAP', 'Material UI'],
      link: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A creative portfolio website with smooth animations and interactive elements.',
      image: 'https://via.placeholder.com/400x250',
      tech: ['React', 'GSAP', 'Styled Components'],
      link: '#'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather application with real-time data visualization and location-based forecasts.',
      image: 'https://via.placeholder.com/400x250',
      tech: ['JavaScript', 'Chart.js', 'Weather API'],
      link: '#'
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'A dashboard for tracking social media performance across multiple platforms.',
      image: 'https://via.placeholder.com/400x250',
      tech: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'A mobile-first application for tracking workouts, nutrition, and progress.',
      image: 'https://via.placeholder.com/400x250',
      tech: ['React Native', 'Redux', 'Firebase'],
      link: '#'
    }
  ];

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

    // Animate project cards with stagger
    gsap.from(projectsRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    });
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title" ref={headingRef}>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card" 
              ref={el => projectsRef.current[index] = el}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="btn">View Project</a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;