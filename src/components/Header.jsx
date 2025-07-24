import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion'; // Import motion for animation

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile && menuOpen) {
      setMenuOpen(false);
    }
  }, [location.pathname, isMobile]);

  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>Ganish's Portfolio</h2>

      <div style={styles.rightSection}>
        {isMobile ? (
          <motion.div
            onClick={() => setMenuOpen(!menuOpen)}
            style={styles.hamburger}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </motion.div>
        ) : (
          <nav style={styles.nav}>
            <ul style={styles.navList}>
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    style={{
                      ...styles.navLink,
                      ...(location.pathname === item.path ? styles.activeNavLink : {})
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--primary-accent)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-color)'}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <motion.div
          onClick={toggleTheme}
          style={styles.toggleButton}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Toggle Theme" // Add tooltip for accessibility
        >
          {theme === 'light' ? <FiMoon size={22} /> : <FiSun size={22} />}
        </motion.div>
      </div>

      {menuOpen && isMobile && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={styles.mobileNavOverlay}
        >
          <nav style={styles.mobileNav}>
            <ul style={styles.mobileNavList}>
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    style={{
                      ...styles.navLink,
                      ...(location.pathname === item.path ? styles.activeNavLink : {})
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 25px', // Increased padding
    background: 'var(--section-title-bg)',
    color: 'var(--text-color)',
    borderBottom: '2px solid var(--border-color)',
    position: 'relative',
    zIndex: 10,
    flexWrap: 'wrap',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)', // Added subtle shadow
  },
  logo: {
    fontWeight: '800',
    fontSize: '1.8rem', // Slightly larger logo
    margin: 0,
    background: 'linear-gradient(90deg, var(--primary-accent), var(--secondary-accent))', // Use new accents
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.2rem', // Increased gap
  },
  nav: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '25px', // Increased gap
    margin: 0,
    padding: 0,
  },
  navLink: {
    textDecoration: 'none',
    color: 'var(--text-color)',
    fontWeight: '600', // Bolder nav links
    padding: '8px 15px', // Increased padding
    borderRadius: '8px', // Slightly rounded links
    transition: 'color 0.3s ease, background-color 0.3s ease', // Smooth transition
    '&:hover': {
      backgroundColor: 'rgba(var(--primary-accent-rgb), 0.1)', // Subtle background on hover
    }
  },
  activeNavLink: {
    color: 'var(--primary-accent)',
    borderBottom: '2px solid var(--primary-accent)', // Stronger active indicator
    fontWeight: '700',
  },
  toggleButton: {
    background: 'var(--primary-accent)',
    color: 'white',
    borderRadius: '50%',
    width: '45px', // Slightly larger button
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    flexShrink: 0,
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)', // Button shadow
    transition: 'all 0.3s ease',
  },
  hamburger: {
    cursor: 'pointer',
    color: 'var(--primary-accent)', // Accent color for hamburger
  },
  mobileNavOverlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0,0.85)', // Darker, more opaque overlay
    zIndex: 9,
    display: 'flex',
    justifyContent: 'flex-end', // Align menu to the right
    alignItems: 'center',
  },
  mobileNav: {
    background: 'var(--section-title-bg)',
    padding: '30px', // More padding
    borderRadius: '10px 0 0 10px', // Rounded only on left side
    width: '70%', // Adjust width for mobile menu
    maxWidth: '300px',
    height: '100%', // Full height menu
    boxShadow: '-8px 0 20px rgba(0,0,0,0.3)', // Shadow for slide-in effect
  },
  mobileNavList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px', // Increased gap
    margin: 0,
    padding: 0,
    textAlign: 'right', // Align text to right
  },
};

export default Header;