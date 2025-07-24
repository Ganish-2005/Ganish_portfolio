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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 }, // Slide in from left
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 80, damping: 10, ease: 'easeOut' } },
  };

  const gradientText = {
    background: 'linear-gradient(90deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent'
  };

  const companyGradient = {
    background: 'linear-gradient(90deg, var(--primary-accent), var(--secondary-accent))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent'
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 12 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ ...styles.mainTitle, ...gradientText }}
        >
          Internship Experience
        </motion.h2>

        <div style={styles.contentBox}>
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {internships.map((intern, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }} // Enhanced hover
                viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% visible
                style={styles.internshipCard}
              >
                <h3 style={{ ...styles.companyName, ...companyGradient }}>
                  {intern.company}
                </h3>
                <h4 style={styles.jobTitle}>
                  {intern.title}
                </h4>
                <p style={styles.description}>
                  {intern.description}
                </p>
                <p style={styles.duration}>
                  <em>{intern.duration}</em>
                </p>
                <div style={styles.buttonContainer}>
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: 'var(--secondary-accent)' }} // Enhanced button hover
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCert(intern.certificate)}
                    style={styles.viewButton}
                  >
                    View Certificate
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
            key="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.modalOverlay}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert}
              alt="Certificate"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={styles.modalImage}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    padding: '3rem 1rem',
    // background: 'var(--background-color)',
    color: 'var(--text-color)',
  },
  wrapper: {
    maxWidth: '1000px', // Wider wrapper
    margin: '0 auto',
  },
  mainTitle: {
    textAlign: 'center',
    marginBottom: '3rem',
    fontSize: '3rem',
    fontWeight: '900',
    '@media (max-width: 768px)': {
      fontSize: '2.5rem',
      marginBottom: '2.5rem',
    },
  },
  contentBox: {
    padding: '3rem', // More padding
    borderRadius: '20px', // More rounded
    background: 'var(--card-bg)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)', // Stronger shadow
    '@media (max-width: 768px)': {
      padding: '2rem',
    },
  },
  internshipCard: {
    background: 'var(--background-color)',
    padding: '2.5rem', // More padding
    marginBottom: '2.5rem', // More space between cards
    borderRadius: '16px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)', // Clearer shadow
    transition: 'all 0.3s ease-in-out',
    '&:last-child': {
      marginBottom: 0,
    },
    '@media (max-width: 768px)': {
      padding: '1.8rem',
      marginBottom: '2rem',
    },
  },
  companyName: {
    marginBottom: '0.6rem',
    fontSize: '1.8rem', // Larger font
    fontWeight: '800',
    lineHeight: '1.2',
    '@media (max-width: 768px)': {
      fontSize: '1.5rem',
    },
  },
  jobTitle: {
    margin: '0 0 1rem 0', // More margin
    color: 'var(--button-bg)',
    fontWeight: '700',
    fontSize: '1.3rem', // Larger font
    '@media (max-width: 768px)': {
      fontSize: '1.1rem',
    },
  },
  description: {
    fontSize: '1.1rem',
    color: 'var(--text-color)',
    marginBottom: '1.2rem',
    lineHeight: '1.7',
    '@media (max-width: 768px)': {
      fontSize: '1rem',
    },
  },
  duration: {
    fontSize: '1rem',
    color: 'var(--text-color)',
    marginBottom: '1.5rem',
  },
  buttonContainer: {
    textAlign: 'center',
  },
  viewButton: {
    backgroundColor: 'var(--primary-accent)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '0.8rem 1.6rem',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: '600',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  modalImage: {
    maxWidth: '95%',
    maxHeight: '95%',
    borderRadius: '16px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.6)',
    objectFit: 'contain',
  },
};

export default Experience;