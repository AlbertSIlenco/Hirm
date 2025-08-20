// src/components/Skills.js
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Networking', level: 85 },
    { name: 'CSA', level: 80 },
    { name: 'Electronics', level: 70 },
    { name: 'Photo Editing', level: 75 },
    { name: 'Video Editing', level: 70 },
    { name: 'Canva', level: 90 },
    { name: 'CapCut', level: 85 }
  ];

  return (
    <section id="skills" style={{
      padding: '100px 0',
      background: 'white'
    }}>
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '40px'
        }}>
          {skills.map((skill, index) => (
            <div key={index} style={{
              background: '#f8fafc',
              padding: '15px 25px',
              borderRadius: '30px',
              border: '1px solid #e2e8f0',
              textAlign: 'center',
              minWidth: '140px'
            }}>
              <div style={{
                fontSize: '1.4rem',
                fontWeight: '600',
                color: '#0f172a'
              }}>
                {skill.level}%
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: '#64748b',
                marginTop: '5px'
              }}>
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;