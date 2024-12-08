import React from "react";

function Portfolio() {
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.name}>Hailemeskel Getaneh</h1>
        <h2 style={styles.title}>Software Engineering Student</h2>
        <p style={styles.location}>Debre Birhan University, Ethiopia</p>
      </header>

      {/* About Me Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <p style={styles.text}>
          Hello! I'm Hailemeskel, a passionate software engineering student at Debre Birhan University, Ethiopia. 
          I am enthusiastic about building innovative software solutions and improving my skills in full-stack development.
        </p>
      </section>

      {/* Skills Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Skills</h2>
        <ul style={styles.skillsList}>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Node.js & Express</li>
          <li>HTML5 & CSS3</li>
          <li>MongoDB</li>
          <li>Version Control (Git & GitHub)</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Projects</h2>
        <ul style={styles.projectsList}>
          <li>
            <strong>Portfolio Website:</strong> A personal website to showcase my skills and projects.
          </li>
          <li>
            <strong>Blog App:</strong> A full-stack application for writing and sharing blog posts.
          </li>
          <li>
            <strong>E-commerce App:</strong> A basic e-commerce platform with cart functionality.
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <footer style={styles.footer}>
        <h2 style={styles.sectionTitle}>Contact</h2>
        <p style={styles.text}>Feel free to reach out to me!</p>
        <p style={styles.text}>
          <strong>Email:</strong> hailemeskel.getaneh@example.com
        </p>
        <p style={styles.text}>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/your-github-username"
            style={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/your-github-username
          </a>
        </p>
        <p style={styles.text}>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://linkedin.com/in/your-linkedin-username"
            style={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/your-linkedin-username
          </a>
        </p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    padding: "20px",
    maxWidth: "800px",
    margin: "auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  name: {
    fontSize: "2.5rem",
    color: "#333",
  },
  title: {
    fontSize: "1.5rem",
    color: "#555",
  },
  location: {
    fontSize: "1rem",
    color: "#777",
  },
  section: {
    marginBottom: "30px",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    borderBottom: "2px solid #ddd",
    paddingBottom: "5px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1rem",
    color: "#555",
  },
  skillsList: {
    listStyleType: "square",
    paddingLeft: "20px",
  },
  projectsList: {
    listStyleType: "circle",
    paddingLeft: "20px",
  },
  footer: {
    textAlign: "center",
    marginTop: "20px",
  },
  link: {
    color: "#0066cc",
    textDecoration: "none",
  },
};

export default Portfolio;
