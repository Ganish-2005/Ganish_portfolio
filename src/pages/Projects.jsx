import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../ThemeContext'; // Ensure this is correctly imported if needed for theme styling

function Projects() {
  const { theme } = useContext(ThemeContext); // Use theme context if styles depend on it
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

  const gradientText = {
    background: 'linear-gradient(90deg, #ff6a00, #ee0979, #00c9ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent'
  };

  return (
    <div style={containerStyle}>
      <div style={wrapperStyle}>
        <h2 style={{ ...mainTitleStyle, ...gradientText }}>PROJECTS</h2>

        <div style={{ textAlign: 'center' }}>
          <h2 style={sectionTitleStyle}>Main Projects</h2> {/* Changed to Main Projects */}
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
    whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }} // Enhanced hover
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% visible
    style={cardStyle}
  >
    <img
      src={project.image}
      alt={project.title}
      style={imgStyle}
      loading="lazy" // Lazy load images
    />
    <h3 style={cardTitleStyle}>{project.title}</h3>
    <motion.a
      href={project.repo}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, backgroundColor: 'var(--accent-color)' }} // Enhanced button hover
      whileTap={{ scale: 0.95 }}
      style={buttonStyle}
    >
      View Code
    </motion.a>
  </motion.div>
);

const containerStyle = {
  minHeight: '100vh',
  padding: '2rem 1rem',
  // background: 'var(--background-color)', // Ensure consistent background
  color: 'var(--text-color)', // Ensure consistent text color
};

const wrapperStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const mainTitleStyle = {
  fontSize: '2.5rem', // Larger title
  marginBottom: '2.5rem', // More space
  textAlign: 'center',
  fontWeight: 'bold',
};

const sectionTitleStyle = {
  display: 'inline-block',
  background: 'var(--button-bg)',
  color: 'white',
  padding: '0.6rem 2rem', // More padding
  borderRadius: '30px', // More rounded
  fontSize: '2rem', // Larger title
  marginBottom: '2rem', // More space below title
  textAlign: 'center',
  boxShadow: '0 4px 10px rgba(0,0,0,0.15)', // Subtle shadow
  '@media (max-width: 768px)': {
    fontSize: '1.5rem',
    padding: '0.5rem 1.5rem',
    marginBottom: '1.5rem',
  },
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Adjust minmax for better responsiveness
  gap: '2rem', // More gap
  marginBottom: '3.5rem', // More space
  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr', // Single column on mobile
    gap: '1.5rem', // Adjust gap for mobile
  },
};

const cardStyle = {
  background: 'var(--card-bg)',
  borderRadius: '16px', // More rounded corners
  padding: '1.5rem', // More padding inside card
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)', // More prominent shadow
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  transition: 'all 0.3s ease',
};

const imgStyle = {
  width: '100%',
  height: '180px', // Slightly taller images
  objectFit: 'cover',
  borderRadius: '10px', // More rounded image corners
  marginBottom: '1rem', // More space below image
};

const cardTitleStyle = {
  color: 'var(--text-color)', // Use text color for title, or a specific accent color
  fontSize: '1.2rem', // Slightly larger title
  margin: '0.6rem 0', // More margin
  fontWeight: '600', // Bolder title
};

const buttonStyle = {
  display: 'inline-block',
  width: '100%',
  padding: '0.6rem', // More padding
    background: 'var(--primary-accent)',
  color: 'white',
  borderRadius: '10px', // More rounded
  border: 'none',
  cursor: 'pointer',
  fontWeight: '600', // Bolder text
  fontSize: '1rem', // Slightly larger font
  textDecoration: 'none',
  marginTop: 'auto',
  transition: 'all 0.3s ease',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)', // Subtle shadow
};

export default Projects;