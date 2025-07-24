import React, { useContext } from 'react';
import { ReactTyped } from "react-typed";
import { ThemeContext } from '../ThemeContext';
import Lottie from "lottie-react";
import typingAnimation from '../assets/animation.json';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <main style={styles.container}> {/* Use main for semantic HTML */}
      <div style={styles.wrapper}>
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={styles.textSection}
        >
          <h2 style={styles.greeting}>
            Hey There, I'm!
          </h2>

          <h1 style={styles.name}>
            Ganish
          </h1>

          <ReactTyped
            strings={[
              'Full Stack Developer',
              'Cyber Security Enthusiast', // More engaging text
              'Web Developer',
              'Bug Hunter'
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
            style={styles.typedText}
          />

          <p style={styles.paragraph}>
            My journey includes exploring <strong>cybersecurity</strong>, specializing in
            <strong> VAPT (Vulnerability Assessment and Penetration Testing)</strong>, and developing tools for <strong>phishing detection</strong> and
            <strong> real-time threat monitoring</strong>.
          </p>

          <p style={styles.paragraph}>
            I believe in <strong>project-based learning</strong> to transform complex ideas into practical applications.
            I’m constantly exploring <strong>AI</strong>, <strong>web development</strong>, and <strong>security</strong>.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            style={styles.hireMeButton}
          >
            Hire me
          </motion.button>
        </motion.div>

        {/* Right Animation Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          style={styles.animationSection}
        >
          <Lottie
            animationData={typingAnimation}
            loop
            style={styles.lottieAnimation}
            aria-label="Typing animation" // Accessibility
            loading="lazy" // Lazy load animation
          />
        </motion.div>
      </div>
    </main>
  );
}

const styles = {
  container: {
    position: 'relative',
    overflow: 'hidden',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    boxSizing: 'border-box',
    // Responsive padding for smaller screens
    '@media (max-width: 768px)': {
      padding: '0.5rem',
    },
  },
  wrapper: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '1200px',
    width: '100%',
    gap: '2rem',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    // Change flex direction to column on smaller screens
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      paddingTop: '2rem', // Add some top padding when stacked
    },
  },
  textSection: {
    flex: '1 1 100%',
    maxWidth: '600px',
    background: 'var(--card-bg)',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center', // Center text for better mobile presentation
    // Responsive padding
    '@media (max-width: 768px)': {
      padding: '1.5rem',
      maxWidth: '95%', // Adjust max width for mobile
    },
  },
  greeting: {
    color: 'var(--text-color)',
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
    textAlign: 'center',
  },
  name: {
    fontSize: '2.5rem', // Slightly larger name
    marginBottom: '0.5rem',
    background: 'linear-gradient(90deg, #ff6a00, #ee0979, #00c9ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      fontSize: '2rem',
    },
  },
  typedText: {
    fontSize: '1.3rem', // Slightly larger typed text
    marginBottom: '1rem',
    color: 'var(--text-color)',
    display: 'block',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      fontSize: '1rem',
    },
  },
  paragraph: {
    marginTop: '1rem',
    fontSize: '1rem',
    color: 'var(--text-color)',
    lineHeight: '1.6',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      fontSize: '0.9rem',
    },
  },
  hireMeButton: {
    marginTop: '1.5rem',
    padding: '0.8rem 1.5rem', // Slightly more padding
    fontSize: '1.1rem', // Slightly larger font
    borderRadius: '8px', // Slightly more rounded
    background: 'var(--primary-accent)',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600', // Bolder text
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)', // Add subtle shadow
    '&:hover': {
      transform: 'translateY(-2px)', // Lift on hover
      boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
    },
  },
  animationSection: {
    flex: '1 1 100%',
    maxWidth: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem',
    '@media (max-width: 768px)': {
      marginTop: '1.5rem',
      maxWidth: '80%', // Adjust max width for mobile
    },
  },
  lottieAnimation: {
    width: '100%',
    maxWidth: '350px', // Slightly larger animation
  },
};

export default Home;