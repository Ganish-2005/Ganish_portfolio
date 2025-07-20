import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../ThemeContext'; 

function Projects() {
  const { theme } = useContext(ThemeContext); 
  const mainProjects = [
    { title: 'Phishing Detection Tool', repo: 'https://github.com/Ganish-2005/phishing_detection.git', image: '/project/phishing.jpeg' },
    { title: 'ChatBot_AI', repo: 'https://github.com/Ganish-2005/ChatBot_AI.git', image: '/project/Chatbot.jpeg' },
    { title: 'Real-Time Data Breach Alert System', repo: 'https://github.com/Ganish-2005/Anomaly-Based-User-Behavior-Detection.git', image: '/project/databreach.jpeg' }
  ];

  const miniProjects = [
    { title: 'Portfolio Website', repo: 'https://github.com/Ganish-2005/Ganish_portfolio.git', image: '/project/portfolio.jpeg' },
    { title: 'Tic Tac Toe', repo: 'https://github.com/Ganish-2005/TicTacToe.git', image: '/project/Tic Tac Toe.jpeg' },
    { title: 'Password strength checker', repo: 'https://github.com/Ganish-2005/Password-Strength-checker.git', image: '/project/password.jpeg' }
  ];

  return (
    <div style={containerStyle}>
      <div style={wrapperStyle}>
        <h2 style={mainTitleStyle}>PROJECTS</h2>

        <div style={{ textAlign: 'center' }}>
          <h2 style={sectionTitleStyle}>Projects</h2>
        </div>
        <div style={gridStyle}>
          {mainProjects.map((proj, index) => (
            <ProjectCard key={index} project={proj} index={index} />
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <h2 style={sectionTitleStyle}>Mini Projects</h2>
        </div>
        <div style={gridStyle}>
          {miniProjects.map((proj, index) => (
            <ProjectCard key={index} project={proj} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    style={cardStyle}
  >
    <img
      src={project.image}
      alt={project.title}
      style={imgStyle}
    />
    <h3 style={cardTitleStyle}>{project.title}</h3>
    <motion.a
      href={project.repo}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={buttonStyle}
    >
      View
    </motion.a>
  </motion.div>
);

const containerStyle = {
  minHeight: '100vh',
  padding: '2rem 1rem'
};

const wrapperStyle = {
  maxWidth: '1200px',
  margin: '0 auto'
};

const mainTitleStyle = {
  fontSize: '2rem',
  marginBottom: '2rem',
  textAlign: 'center',
  background: 'linear-gradient(90deg, #ff6a00, #ee0979, #00c9ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent'
};

const sectionTitleStyle = {
  display: 'inline-block',
  background: 'var(--button-bg)',
  color: 'white',
  padding: '0.5rem 1.5rem',
  borderRadius: '25px',
  fontSize: '1.8rem',
  marginBottom: '1.5rem',
  textAlign: 'center'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: '1.5rem',
  marginBottom: '3rem'
};

const cardStyle = {
  background: 'var(--card-bg)',
  borderRadius: '12px',
  padding: '1rem',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%'
};

const imgStyle = {
  width: '100%',
  height: '160px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '0.8rem'
};

const cardTitleStyle = {
  color: 'var(--button-bg)',
  fontSize: '1.1rem',
  margin: '0.5rem 0'
};

const buttonStyle = {
  display: 'inline-block',
  width: '100%',
  padding: '0.4rem',
  background: 'var(--button-bg)',
  color: 'white',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  fontWeight: '500',
  fontSize: '0.95rem',
  textDecoration: 'none',
  marginTop: 'auto'
};

export default Projects;
