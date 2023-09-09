// src/components/Skills.js

import React from 'react';
// import './Skills.css';

function Skills() {
  // Define your skills as an array of strings
  const skillsList = [
    'JavaScript',
    'React',
    'HTML5',
    'CSS3',
    'Java',
    'Python',
    'Github',
    'Git',
  ];

  return (
    <section className="skills">
      <h2 className="skills-title">Skills</h2>
      <ul className="skills-list">
        {skillsList.map((skill, index) => (
          <li key={index} className="skills-item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
