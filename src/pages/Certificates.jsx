import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../ThemeContext';

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const { theme } = useContext(ThemeContext);

  const courseCertificates = [
    { title: 'Cyber Security Audits', issuer: 'Infosys', image: '/certificate/cybersecurityaudits.jpg' },
    { title: 'Cybersecurity Foundation', issuer: 'Palo Alto', image: '/certificate/Cybersecurityfoundation.jpg' },
    { title: 'Cyber Security Analyst', issuer: 'Forage', image: '/certificate/Forage.jpg' },
    { title: 'Zero Trust Cloud Security', issuer: 'Zscaler', image: '/certificate/zscaler.jpg' },
    { title: 'Cyber Security Essentials', issuer: 'Cisco', image: '/certificate/cyber Security Essentials.jpg' },
    { title: 'Introduction to Cybersecurity', issuer: 'Cisco', image: '/certificate/cyber Security.jpg' },
    { title: 'Full Stack Course', issuer: 'Udemy', image: '/certificate/Fullstack course.jpg' },
    { title: 'Cloud Security', issuer: 'Zscaler', image: '/certificate/Zscalercloudsecurity.jpg' },
    { title: 'AI in Action', issuer: 'Firechip Academy', image: '/certificate/AI in action.jpg' },
  ];

  const internshipCertificates = [
    { title: 'Cybersecurity Internship', issuer: 'Cube AI Solutions', image: '/certificate/Cube AI internship.jpg' },
    { title: 'VAPT Internship', issuer: 'Pargavan Cyber Solutions', image: '/certificate/pargavan internship.jpg' },
    { title: 'Cybersecurity Virtual Internship', issuer: 'Palo Alto Networks', image: '/certificate/palo alto internship.jpg' },
  ];

  const openModal = (cert) => setSelectedCert(cert);
  const closeModal = () => setSelectedCert(null);

  // Define gradients and variants consistent with Projects.jsx
  const gradientText = {
    background: 'linear-gradient(90deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent'
  };

  const sectionGradient = {
    background: 'linear-gradient(45deg, var(--primary-accent), var(--secondary-accent))',
    color: 'white'
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 10, ease: 'easeOut' } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 12 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h2 style={{ ...styles.mainTitle, ...gradientText }}>
          CERTIFICATES
        </h2>

        <h2 style={{ ...styles.sectionTitle, ...sectionGradient }}>Courses</h2>
        <div style={styles.grid}>
          {courseCertificates.map((cert, index) => (
            <CertificateCard
              key={index}
              cert={cert}
              onView={() => openModal(cert)}
              index={index}
              variants={cardVariants}
            />
          ))}
        </div>

        <h2 style={{ ...styles.sectionTitle, ...sectionGradient }}>Internships</h2>
        <div style={styles.grid}>
          {internshipCertificates.map((cert, index) => (
            <CertificateCard
              key={index}
              cert={cert}
              onView={() => openModal(cert)}
              index={index}
              variants={cardVariants}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert?.image && (
          <motion.div
            key="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.modalOverlay}
            onClick={closeModal}
          >
            <motion.img
              src={selectedCert.image}
              alt={selectedCert.title}
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

const CertificateCard = ({ cert, onView, index, variants }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    whileHover={{ scale: 1.05, boxShadow: '0 12px 30px rgba(0,0,0,0.2)' }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true, amount: 0.3 }}
    style={styles.card}
    variants={variants}
  >
    <img
      src={cert.image}
      alt={cert.title}
      style={{
        width: '100%',
        height: '180px',
        objectFit: 'cover',
        borderRadius: '12px',
        marginBottom: '1rem',
        border: '2px solid var(--border-color)',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
      }}
      loading="lazy"
    />
    <h3 style={{ color: 'var(--text-color)', fontSize: '1.3rem', margin: '0.8rem 0', fontWeight: '700' }}>{cert.title}</h3>
    <p style={{ color: 'var(--text-color)', fontSize: '1rem', marginBottom: '0.5rem' }}>{cert.issuer}</p>
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: 'var(--secondary-accent)' }}
      whileTap={{ scale: 0.95 }}
      onClick={onView}
      style={styles.button}
    >
      View Certificate
    </motion.button>
  </motion.div>
);

const styles = {
  container: {
    padding: '3rem 1rem',
    minHeight: '80vh',
    marginTop:'2rem',
    color: 'var(--text-color)',
    '@media (max-width: 768px)': {
      padding: '2rem 0.5rem',
    },
  },
  wrapper: {
    maxWidth: '1300px',
    margin: '0 auto',
  },
  mainTitle: {
    fontSize: '3rem',
    marginBottom: '3rem',
    textAlign: 'center',
    fontWeight: '900',
    background: 'linear-gradient(90deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    '@media (max-width: 768px)': {
      fontSize: '2.5rem',
      marginBottom: '2.5rem',
    },
  },
  sectionTitle: {
    display: 'block',
    width: 'fit-content',
    background: 'linear-gradient(45deg, var(--primary-accent), var(--secondary-accent))',
    color: 'white',
    padding: '0.8rem 2.5rem',
    borderRadius: '40px',
    fontSize: '2.2rem',
    fontWeight: '700',
    marginBottom: '2.5rem',
    textAlign: 'center',
    boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media (max-width: 768px)': {
      fontSize: '1.7rem',
      padding: '0.6rem 2rem',
      marginBottom: '2rem',
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem', // Increased gap to create more vertical spacing between individual cards
    marginBottom: '6rem', // This controls the vertical gap BETWEEN the entire "Courses" grid and "Internships" grid
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '2rem',
    },
  },
  card: {
    background: 'var(--card-bg)',
    borderRadius: '20px',
    padding: '1rem',
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    transition: 'all 0.3s ease-in-out',
  },
  button: {
    display: 'inline-block',
    width: '100%',
    padding: '0.8rem',
    background: 'var(--primary-accent)',
    color: 'white',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1.1rem',
    textDecoration: 'none',
    marginTop: 'auto',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  },
  modalOverlay: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  modalImage: {
    maxWidth: '95%',
    maxHeight: '95%',
    borderRadius: '16px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.6)',
    objectFit: 'contain',
  },
};

export default Certificates;