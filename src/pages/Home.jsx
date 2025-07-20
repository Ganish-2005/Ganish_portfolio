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
    <div style={{
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
      boxSizing: 'border-box',
    }}>
      <div
        style={{
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
        }}
      >
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            flex: '1 1 100%',
            maxWidth: '600px',
            background: 'var(--card-bg)',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          <h2 style={{
            color: 'var(--text-color)',
            fontSize: '1.5rem',
            marginBottom: '0.5rem',
            textAlign: 'center'
          }}>
            Hey There, I'm!
          </h2>

          <h1
            style={{
              fontSize: '2rem',
              marginBottom: '0.5rem',
              background: 'linear-gradient(90deg, #ff6a00, #ee0979, #00c9ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            Ganish
          </h1>

          <ReactTyped
            strings={[
              'Full Stack Developer',
              'Cyber Security',
              'Web Developer',
              'Bug Hunter'
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
            style={{
              fontSize: '1.2rem',
              marginBottom: '1rem',
              color: 'var(--text-color)',
              display: 'block',
              textAlign: 'center'
            }}
          />

          <p style={{
            marginTop: '1rem',
            fontSize: '1rem',
            color: 'var(--text-color)',
            lineHeight: '1.6',
            textAlign: 'center'
          }}>
            My journey includes exploring <strong>cybersecurity</strong>, specializing in
            <strong> VAPT</strong>, and developing tools for <strong>phishing detection</strong> and
            <strong> real-time threat monitoring</strong>.
          </p>

          <p style={{
            marginTop: '1rem',
            fontSize: '1rem',
            color: 'var(--text-color)',
            lineHeight: '1.6',
            textAlign: 'center'
          }}>
            I believe in <strong>project-based learning</strong> to transform complex ideas into practical applications.
            I’m constantly exploring <strong>AI</strong>, <strong>web development</strong>, and <strong>security</strong>.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            style={{
              marginTop: '1.5rem',
              padding: '0.8rem 1.2rem',
              fontSize: '1rem',
              borderRadius: '6px',
              background: 'var(--button-bg)',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '500',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              transition: 'all 0.3s ease'
            }}
          >
            Hire me
          </motion.button>
        </motion.div>

        {/* Right Animation Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          style={{
            flex: '1 1 100%',
            maxWidth: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '2rem'
          }}
        >
          <Lottie
            animationData={typingAnimation}
            loop
            style={{ width: '100%', maxWidth: '300px' }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
