import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../ThemeContext';

function Experience() {
  const { theme } = useContext(ThemeContext);
  const [selectedCert, setSelectedCert] = useState(null);

  const internships = [
    {
      company: 'Cube AI Solutions',
      title: 'Cyber Security Intern',
      description:
        'Worked on securing web applications, learning penetration testing basics, and using tools like Burp Suite and Wireshark.',
      duration: 'Oct 2024 – Jan 2025',
      certificate: '/certificate/Cube AI internship.jpg',
    },
    {
      company: 'Pargavan Cyber Solutions',
      title: 'VAPT Intern',
      description:
        'Performed vulnerability assessments, created detailed reports, and explored red teaming fundamentals.',
      duration: 'Jun 2024 – Jul 2024',
      certificate: '/certificate/pargavan internship.jpg',
    },
    {
      company: 'Neura AI Solutions',
      title: 'IoT Intern',
      description:
        'Explored IoT device security, data analytics pipelines, and built prototypes integrating AI and IoT sensors.',
      duration: 'Jul 2025 – Sep 2025',
      certificate: '/certificate/Neura AI internship.jpg',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div style={{ minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '950px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            marginBottom: '1.5rem',
            fontSize: '2rem',
            background: 'linear-gradient(90deg, #ff6a00, #ee0979, #00c9ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Internship Experience
        </motion.h2>

        <div
          style={{
            padding: '2rem',
            borderRadius: '12px',
            background: 'var(--card-bg)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          <motion.div variants={container} initial="hidden" animate="visible">
            {internships.map((intern, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.02 }}
                style={{
                  background: 'var(--background-color)',
                  padding: '1.8rem',
                  marginBottom: '1.5rem',
                  borderRadius: '10px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}
              >
                <h3
                  style={{
                    marginBottom: '0.3rem',
                    fontSize: '1.3rem',
                    background: 'linear-gradient(90deg, #ff6a00, #ee0979, #00c9ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent'
                  }}
                >
                  {intern.company}
                </h3>
                <h4
                  style={{
                    margin: '0 0 0.6rem 0',
                    color: 'var(--button-bg)',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                  }}
                >
                  {intern.title}
                </h4>
                <p
                  style={{
                    fontSize: '1.05rem',
                    color: 'var(--text-color)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {intern.description}
                </p>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-color)',
                    marginBottom: '1rem',
                  }}
                >
                  <em>{intern.duration}</em>
                </p>
                <div style={{ textAlign: 'center' }}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCert(intern.certificate)}
                    style={{
                      backgroundColor: 'var(--button-bg)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      padding: '0.5rem 1rem',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                    }}
                  >
                    View
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.7)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 999,
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert}
              alt="Certificate"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Experience;
