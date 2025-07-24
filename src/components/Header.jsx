import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { ThemeContext } from '../ThemeContext';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation(); // Get current location

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

  // Close menu when navigating on mobile
  useEffect(() => {
    if (isMobile && menuOpen) {
      setMenuOpen(false);
    }
  }, [location.pathname, isMobile]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>Ganish's Portfolio</h2> {/* More professional logo text */}

      <div style={styles.rightSection}>
        {isMobile ? (
          <div onClick={() => setMenuOpen(!menuOpen)} style={styles.hamburger}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </div>
        ) : (
          <nav style={styles.nav}>
            <ul style={styles.navList}>
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    style={{
                      ...styles.navLink,
                      ...(location.pathname === item.path ? styles.activeNavLink : {}) // Apply active style
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'} // Use a CSS variable for hover
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-color)'}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Theme toggle always present */}
        <div onClick={toggleTheme} style={styles.toggleButton}>
          {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && isMobile && (
        <div style={styles.mobileNavOverlay}>
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
                    onClick={() => setMenuOpen(false)} // Close menu on link click
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    background: 'var(--section-title-bg)',
    color: 'var(--text-color)',
    borderBottom: '2px solid var(--border-color)',
    position: 'relative',
    zIndex: 10,
    flexWrap: 'wrap', // Allow wrapping for small screens
  },
  logo: {
    fontWeight: '700', // Make logo bolder
    fontSize: '1.6rem', // Slightly larger logo
    margin: 0,
    background: 'linear-gradient(90deg, #ff6a00, #ee0979, #00c9ff)', // Match other gradients
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  nav: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  navLink: {
    textDecoration: 'none',
    color: 'var(--text-color)',
    fontWeight: '500',
    padding: '6px 12px',
    borderBottom: '2px solid transparent',
    transition: 'color 0.3s, border-color 0.3s',
  },
  activeNavLink: {
    color: 'var(--accent-color)', // Highlight active link
    borderBottom: '2px solid var(--accent-color)',
  },
  toggleButton: {
    background: 'var(--button-bg)', // Use button background variable
    color: 'white',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    flexShrink: 0, // Prevent shrinking
  },
  hamburger: {
    cursor: 'pointer',
    color: 'var(--text-color)',
    display: 'block', // Ensure it's block on mobile
  },
  mobileNavOverlay: {
    position: 'fixed',
    top: '0', // Full screen overlay
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0,0.7)', // Semi-transparent overlay
    zIndex: 9, // Below header but above content
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileNav: {
    background: 'var(--section-title-bg)',
    padding: '20px',
    borderRadius: '10px',
    width: '80%', // Make it wider
    maxWidth: '300px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  },
  mobileNavList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    margin: 0,
    padding: 0,
  },
};

export default Header;