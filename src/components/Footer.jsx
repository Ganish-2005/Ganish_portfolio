import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer style={styles.footer}>
      {/* Left Section */}
      <div style={styles.section}>
        <h3 style={styles.leftTitle}>
          The. <span style={{ fontWeight: "600" }}>Ganish</span>
        </h3>
        <p style={styles.text}>Feel free to contact me.</p>
      </div>

      {/* Middle Section */}
      <div style={styles.section}>
        <h3 style={styles.title}>Connect with Me</h3>
        <div style={styles.iconContainer}>
          <a href="mailto:ganishv2@gmail.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaEnvelope size={22} />
          </a>
          <a href="https://linkedin.com/in/ganish" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://github.com/Ganish-2005" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaGithub size={20} />
          </a>
        </div>
        <p style={styles.copy}>© 2025 Ganish's Portfolio</p>
      </div>

      {/* Right Section */}
      <div style={{ ...styles.section }}>
        <h3 style={styles.title}>Contact Us</h3>
        <p style={styles.text}><strong>Phone:</strong> +91 9360374848</p>
        <p style={styles.text}><strong>Email:</strong> ganishv2@gmail.com</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '2rem',
    gap: '2rem',
    borderTop: '2px solid var(--border-color)',
    background: 'var(--section-title-bg)',
    color: 'var(--text-color)',
    transition: 'background 0.3s, color 0.3s, border-color 0.3s',
  },
  section: {
    flex: '1 1 250px',
    minWidth: '250px',
    textAlign: 'center',
  },
  leftTitle: {
    marginBottom: '0.5rem',
    fontSize: '1.3rem',
    fontWeight: '700',
  },
  title: {
    marginBottom: '0.7rem',
    fontSize: '1.2rem',
    fontWeight: '600',
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1rem",
  },
  icon: {
    border: "2px solid var(--border-color)",
    borderRadius: "50%",
    padding: "0.4rem",
    color: 'var(--text-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    transition: 'transform 0.3s',
  },
  copy: {
    marginTop: '1.2rem',
    fontSize: '0.85rem',
    textAlign: 'center',
  },
  text: {
    fontSize: '0.95rem',
    lineHeight: '1.5',
    margin: '0.3rem 0',
  },
};

export default Footer;
