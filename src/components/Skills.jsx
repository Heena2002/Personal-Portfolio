import React from "react";

const Skills = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React.js",
    "Node.js", "Express.js", "MongoDB", "MySQL",
    "Python", "Java", "C", "Git", "Postman",
    "Jupyter", "TensorFlow", "Keras", "Scikit-learn","AWS"
    
  ];

  return (
    <section>
      <h2>💡 Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-box">{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
