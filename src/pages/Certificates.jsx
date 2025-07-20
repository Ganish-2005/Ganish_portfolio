import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../ThemeContext';

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const { theme } = useContext(ThemeContext);

  const courseCertificates = [
    { title: 'Cyber Security audits', issuer: 'infosys', image: '/certificate/cybersecurityaudits.jpg' },
    { title: 'Cybersecurity_Foundation', issuer: 'palo alto', image: '/certificate/Cybersecurityfoundation.jpg' },
    { title: 'CyberSecurity Analyst', issuer: 'Forge', image: '/certificate/Forage.jpg' },
    { title: 'Zero Trust cloud security', issuer: 'Zscaler', image: '/certificate/zscaler.jpg' },
    { title: 'cyber Security Essentials', issuer: 'cisco', image: '/certificate/cyber Security Essentials.jpg' },
    { title: 'introduction to cybersecurity', issuer: 'cisco', image: '/certificate/cyber Security.jpg' },
    { title: 'Full stack course', issuer: 'Udemy', image: '/certificate/Fullstack course.jpg' },
    { title: 'cloud security', issuer: 'zscaler', image: '/certificate/Zscalercloudsecurity.jpg' },
    { title: 'AI in Action', issuer: 'Firechip Academy', image: '/certificate/AI in action.jpg' },
  ];

  const internshipCertificates = [
    { title: 'Cybersecurity Internship', issuer: 'Cube AI Solutions', image: '/certificate/Cube AI internship.jpg' },
    { title: 'VAPT Internship', issuer: 'Pargavan Cyber Solutions', image: '/certificate/pargavan internship.jpg' },
    { title: 'Cybersecurity virtual internship', issuer: 'Palo Alto Networks', image: '/certificate/palo alto internship.jpg' },
  ];

  const openModal = (cert) => setSelectedCert(cert);
  const closeModal = () => setSelectedCert(null);

  return (
    <div style={{ padding: '1rem' }}>
      <style>
        {`
          @media (max-width: 768px) {
            .cert-grid {
              grid-template-columns: 1fr !important;
            }
            .section-title {
              margin-left: auto !important;
              margin-right: auto !important;
              font-size: 1.4rem !important;
              text-align: center !important;
            }
          }
          @media (max-width: 1024px) and (min-width: 768px) {
            .cert-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            .section-title {
              margin-left: auto !important;
              margin-right: auto !important;
              text-align: center !important;
            }
          }
        `}
      </style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', background: 'linear-gradient(90deg, #ff6a00, #ee0979, #00c9ff)', WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent',backgroundClip: 'text',color: 'transparent'}}>
          CERTIFICATES
        </h2>

        <h2 className="section-title" style={sectionTitleStyle}>Courses</h2>
        <div className="cert-grid" style={gridStyle}>
          {courseCertificates.map((cert, index) => (
            <CertificateCard key={index} cert={cert} onView={() => openModal(cert)} index={index} />
          ))}
        </div>

        <h2 className="section-title" style={sectionTitleStyle}>Internships</h2>
        <div className="cert-grid" style={gridStyle}>
          {internshipCertificates.map((cert, index) => (
            <CertificateCard key={index} cert={cert} onView={() => openModal(cert)} index={index} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert?.image && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={modalOverlayStyle}
            onClick={closeModal}
          >
            <motion.img
              src={selectedCert.image}
              alt={selectedCert.title}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={modalImageStyle}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const CertificateCard = ({ cert, onView, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    style={cardStyle}
  >
    <img
      src={cert.image}
      alt={cert.title}
      style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '8px', marginBottom: '0.8rem' }}
    />
    <h3 style={{ color: 'var(--button-bg)', fontSize: '1.1rem', margin: '0.5rem 0' }}>{cert.title}</h3>
    <p style={{ color: 'var(--text-color)', fontSize: '0.9rem', marginBottom: '0.8rem' }}>{cert.issuer}</p>
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onView}
      style={buttonStyle}
    >
      View
    </motion.button>
  </motion.div>
);

const sectionTitleStyle = {
  display: 'inline-block',
  background: 'var(--button-bg)',
  color: 'white',
  padding: '0.5rem 1.5rem',
  borderRadius: '25px',
  fontSize: '1.8rem',
  marginBottom: '1.5rem',
  textAlign: 'center',
  marginLeft: '32rem',
  marginRight: 'auto',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1.5rem',
  marginBottom: '3rem'
};

const cardStyle = {
  background: 'var(--card-bg)',
  borderRadius: '12px',
  padding: '1rem',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  textAlign: 'center'
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
  fontSize: '0.95rem'
};

const modalOverlayStyle = {
  position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000
};

const modalImageStyle = {
  maxWidth: '90%',
  maxHeight: '90%',
  borderRadius: '10px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
};

export default Certificates;
