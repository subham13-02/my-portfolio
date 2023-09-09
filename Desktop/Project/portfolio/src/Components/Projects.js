// src/components/Projects.js

import React from 'react';
// import './Projects.css';

function Projects() {
  return (
    <section className="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="project-card">
        <h3 className="project-title">Shopping Aplication</h3>
        <p className="project-description">
        •Successfully developed an e-commerce application using JavaScript, HTML, and CSS.
        •Implemented local storage for efficient data management.
        •Skillfully integrated a secure payment checkout system to enhance user experience and facilitate online transactions.
        •Utilized JSON data fetching and external APIs for product information
        •Deployed using Git and GitHub for version control and collaborative development.
        </p>
        <div className="project-links">
          <a href="https://github.com/subham13-02/Shopping-Application">Github Repo</a><br/>
          <a href="https://subham13-02.github.io/Shopping-Application/">Deployed Link</a>
        </div>
      </div>
      <div className="project-card">
        <h3 className="project-title">Project 2</h3>
        <p className="project-description">
        •Designed a responsive web application using HTML and CSS, focusing on UI/UX design principles.
        •Demonstrated strong frontend web development skills with a user-centric approach.
        •Ensured optimal user interaction and prototyped features to enhance the user experience.
        •Leveraged Git and GitHub for collaborative development and version control.
        </p>
        <div className="project-links">
            <a href="https://github.com/subham13-02/Chat-Application">Github Repo</a><br/>
          <a href="https://subham13-02.github.io/Chat-Application/">Deployed Link</a>
        </div>
      </div>
      <div className="project-card">
        <h3 className="project-title">BlinkIt Clone</h3>
        <p className="project-description">
        •Developed a responsive frontend project resembling Blinkit using HTML and CSS.
        •Designed and coded a user-friendly interface, showcasing proficiency in frontend web development principles.
        •Implemented responsive design techniques for a seamless user experience.
        </p>
        <div className="project-links">
            <a href="https://github.com/subham13-02/Blikit-clone">Github Repo</a><br/>
          <a href="https://subham13-02.github.io/Blikit-clone/">Deployed Link</a>
        </div>
      </div>
      {/* Add more project cards as needed */}
    </section>
  );
}

export default Projects;
