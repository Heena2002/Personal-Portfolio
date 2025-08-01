import React from "react";

const projects = [
  {
    name: "SmartChef – AI Recipe Recommender",
    description:
      "A full-stack MERN web app with JWT login, protected favorites, dark mode, and Spoonacular API integration.",
    github: "https://github.com/Heena2002/smartchef",
  },
  {
    name: "Deepfake Image Detection System",
    description:
      "ML project using ResNet50, Keras, and Scikit-learn for image-based deepfake detection with 10% accuracy boost.",
    github: "https://github.com/Heena2002/deepfake-image-detection",
  },
  {
    name: "Chain Reaction Game",
    description:
      "Java-based 2-player recursive game where players dominate using chain explosions.",
    github: "https://github.com/Heena2002/chainreaction-game",
  },
  {
    name: "Tic Tac Toe – Minimax AI",
    description:
      "Java game with unbeatable AI using Minimax algorithm.",
    github: "#",
  },
];

const Projects = () => (
  <section>
    <h2>🚀 Projects</h2>
    <div className="skills-grid">
      {projects.map((proj, index) => (
        <div key={index} className="skill-box">
          <h3>{proj.name}</h3>
          <p>{proj.description}</p>
          <a href={proj.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
