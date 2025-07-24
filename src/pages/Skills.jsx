import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../ThemeContext';

function Skills() {
  const { theme } = useContext(ThemeContext);

  const sections = [
    {
      title: "Full Stack Development",
      data: [
        { category: 'Programming Languages', skills: [ { name: 'Java', level: 75 }, { name: 'Python', level: 60 }, { name: 'JavaScript', level: 70 } ] },
        { category: 'Web Technologies', skills: [ { name: 'HTML', level: 90 }, { name: 'CSS', level: 88 } ] },
        { category: 'Frameworks & Libraries', skills: [ { name: 'React.js', level: 50 }, { name: 'Node.js', level: 20 }, { name: 'Express.js', level: 10 } ] },
        { category: 'Databases', skills: [ { name: 'MongoDB', level: 50 }, { name: 'SQL', level: 75 }, { name: 'PostgreSQL', level: 50 } ] },
        { category: 'Tools & Version Control', skills: [ { name: 'VS Code', level: 90 }, { name: 'Eclipse', level: 75 }, { name: 'Git & GitHub', level: 85 } ] },
      ]
    },
    {
      title: "Cyber Security",
      data: [
        { category: 'Cyber Security Tools', skills: [ { name: 'Burp Suite', level: 50 }, { name: 'Wireshark', level: 35 }, { name: 'Nmap', level: 70 } ] },
        { category: 'Operating Systems', skills: [ { name: 'Kali Linux', level: 85 }, { name: 'Parrot OS', level: 30 } ] },
        { category: 'Techniques & Domains', skills: [ { name: 'Vulnerability Assessment', level: 25 }, { name: 'Penetration Testing', level: 80 } ] },
      ]
    }
  ];

  const gradientText = {
    background: 'linear-gradient(90deg, #ff6a00, #ee0979, #00c9ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent'
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h2 style={styles.mainTitle}>
          My Skills
        </h2>

        {sections.map((section, secIdx) => (
          <motion.div
            key={secIdx}
            style={styles.sectionContainer}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% visible
            transition={{ duration: 0.6 }}
          >
            <h3 style={styles.sectionTitle}>
              {section.title}
            </h3>

            <div style={styles.grid}>
              {section.data.map((item, index) => (
                <motion.div
                  key={index}
                  style={styles.card}
                  whileHover={{ scale: 1.03, boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }} // Enhanced hover
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% visible
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h4 style={{ ...styles.cardCategory, ...gradientText }}>{item.category}</h4>
                  {item.skills.map((skill, i) => (
                    <div key={i} style={styles.skillItem}>
                      <div style={styles.skillHeader}>
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div style={styles.progressBarBackground}>
                        <div style={{
                          ...styles.progressBarFill,
                          width: `${skill.level}%`,
                        }}></div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem 1rem',
    minHeight: '100vh',
    // background: 'var(--background-color)', // Ensure background is consistent
    color: 'var(--text-color)', // Ensure text color is consistent
  },
  wrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  mainTitle: {
    textAlign: 'center',
    marginBottom: '2.5rem', // More space
    fontSize: '2.5rem', // Larger title
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #ff6a00, #ee0979, #00c9ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    '@media (max-width: 768px)': {
      fontSize: '2rem',
      marginBottom: '2rem',
    },
  },
  sectionContainer: {
    marginBottom: '3.5rem', // More space between sections
    textAlign: 'center',
  },
  sectionTitle: {
    display: 'inline-block',
    padding: '0.6rem 2rem', // More padding
    borderRadius: '30px', // More rounded
    fontSize: '2rem', // Larger title
    fontWeight: 'bold',
    marginBottom: '2rem', // More space below title
    background: 'var(--button-bg)', // Use CSS variable
    color: 'white', // Text color for button
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)', // Subtle shadow
    '@media (max-width: 768px)': {
      fontSize: '1.5rem',
      padding: '0.5rem 1.5rem',
      marginBottom: '1.5rem',
    },
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem', // More gap
    justifyContent: 'center',
    '@media (max-width: 768px)': {
      gap: '1.5rem', // Adjust gap for mobile
      flexDirection: 'column', // Stack cards on small screens
      alignItems: 'center', // Center items when stacked
    },
  },
  card: {
    flex: '1 1 300px',
    maxWidth: '350px',
    background: 'var(--card-bg)',
    borderRadius: '16px', // More rounded corners
    padding: '2rem', // More padding inside card
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)', // More prominent shadow
    textAlign: 'center',
    transition: 'all 0.3s ease',
    '@media (max-width: 768px)': {
      maxWidth: '95%', // Adjust max width for mobile
      padding: '1.5rem',
    },
  },
  cardCategory: {
    marginBottom: '1.2rem', // More space below category
    fontSize: '1.5rem', // Larger font
    fontWeight: 'bold',
  },
  skillItem: {
    marginBottom: '1.2rem', // More space between skills
  },
  skillHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.4rem', // More space below header
    color: 'var(--text-color)',
    fontSize: '1rem', // Slightly larger skill text
    fontWeight: '500',
  },
  progressBarBackground: {
    height: '12px', // Thicker progress bar
    backgroundColor: 'var(--border-color)', // Use a theme variable for background
    borderRadius: '6px', // More rounded
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #0ea5e9, #3b82f6, #9333ea)', // Consistent gradient
    borderRadius: '6px',
    transition: 'width 0.5s ease-out', // Smooth fill animation
  },
};

export default Skills;