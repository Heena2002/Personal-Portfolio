import React from "react";

const About = () => (
  <section>
    <img
      src="/heena.png"
      alt="Heena"
      style={{
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        objectFit: "cover",
        marginBottom: "20px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      }}
    />
    <p style={{ maxWidth: "600px", margin: "auto" }}>
      I am looking to work in a challenging and growth-oriented environment where I can apply my technical
      skills and academic knowledge to build impactful software solutions. As a B.Tech graduate in IT (2025), I
      have a strong foundation in Java, Python, and DSA. Experienced in MERN stack and ML, I have built projects
      like <strong>SmartChef</strong> and <strong>Deepfake Detection System</strong>.
    </p>
  </section>
);

export default About;
