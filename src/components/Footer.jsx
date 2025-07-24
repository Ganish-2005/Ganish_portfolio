import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer style={styles.footer}>
      {/* Left Section */}
      <div style={styles.section}>
        <h3 style={styles.leftTitle}>
          The. <span style={{ fontWeight: "700" }}>Ganish</span>
        </h3>
        <p style={styles.text}>Feel free to contact me for collaborations or opportunities.</p> {/* More descriptive text */}
      </div>

      {/* Middle Section */}
      <div style={styles.section}>
        <h3 style={styles.title}>Connect with Me</h3>
        <div style={styles.iconContainer}>
          <a href="mailto:ganishv2@gmail.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink} aria-label="Email Ganish">
            <FaEnvelope size={22} style={styles.icon} />
          </a>
          <a href="https://linkedin.com/in/ganish" target="_blank" rel="noopener noreferrer" style={styles.iconLink} aria-label="Ganish's LinkedIn Profile">
            <FaLinkedinIn size={20} style={styles.icon} />
          </a>
          <a href="https://github.com/Ganish-2005" target="_blank" rel="noopener noreferrer" style={styles.iconLink} aria-label="Ganish's GitHub Profile">
            <FaGithub size={20} style={styles.icon} />
          </a>
        </div>
        <p style={styles.copy}>© {currentYear} Ganish's Portfolio</p> {/* Dynamic year */}
      </div>

      {/* Right Section */}
      <div style={styles.section}>
        <h3 style={styles.title}>Reach Out</h3> {/* Changed title for variety */}
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
    padding: '2.5rem 2rem', // More padding
    gap: '2.5rem', // More gap
    borderTop: '2px solid var(--border-color)',
    background: 'var(--section-title-bg)',
    color: 'var(--text-color)',
    transition: 'background 0.3s, color 0.3s, border-color 0.3s',
    '@media (max-width: 768px)': {
      flexDirection: 'column', // Stack sections on mobile
      alignItems: 'center', // Center align content
      padding: '1.5rem 1rem', // Adjust padding for mobile
      gap: '1.5rem', // Adjust gap
    },
  },
  section: {
    flex: '1 1 280px', // Slightly larger base width
    minWidth: '250px',
    textAlign: 'center',
  },
  leftTitle: {
    marginBottom: '0.8rem', // More space
    fontSize: '1.5rem', // Larger font
    fontWeight: '800', // Bolder
    background: 'linear-gradient(90deg, #ff6a00, #ee0979, #00c9ff)', // Match other gradients
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
  },
  title: {
    marginBottom: '1rem', // More space
    fontSize: '1.3rem', // Larger font
    fontWeight: '700', // Bolder
    color: 'var(--accent-color)', // Use accent color for titles
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "1.2rem", // More gap
    marginTop: "1.2rem", // More margin
  },
  iconLink: {
    border: "2px solid var(--border-color)",
    borderRadius: "50%",
    padding: "0.6rem", // More padding
    color: 'var(--text-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    transition: 'transform 0.3s, background-color 0.3s, border-color 0.3s',
    '&:hover': {
      transform: 'translateY(-3px) scale(1.1)', // Lift and slightly enlarge
      backgroundColor: 'var(--button-bg)', // Change background on hover
      borderColor: 'var(--button-bg)', // Change border on hover
      color: 'white', // Ensure icon color changes on hover
    },
  },
  icon: {
    color: 'inherit', // Inherit color from parent (iconLink)
  },
  copy: {
    marginTop: '1.5rem', // More margin
    fontSize: '0.9rem', // Slightly larger
    textAlign: 'center',
    color: 'var(--text-color)', // Ensure consistent text color
  },
  text: {
    fontSize: '0.98rem', // Slightly larger
    lineHeight: '1.6',
    margin: '0.4rem 0', // More margin
    color: 'var(--text-color)',
  },
};

export default Footer;