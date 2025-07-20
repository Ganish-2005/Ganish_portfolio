import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/Contact' },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>portfolio</h2>

      {isMobile && (
        <div onClick={() => setMenuOpen(!menuOpen)} style={styles.hamburger}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      )}

      {(menuOpen || !isMobile) && (
        <nav style={isMobile ? styles.mobileNav : styles.nav}>
          <ul style={isMobile ? styles.mobileNavList : styles.navList}>
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  style={styles.navLink}
                  onMouseEnter={(e) => e.target.style.color = '#00FFFF'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-color)'}
                  onClick={() => isMobile && setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {!isMobile && (
        <div onClick={toggleTheme} style={styles.toggleButton}>
          {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
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
  },
  logo: {
    fontWeight: '600',
    fontSize: '1.5rem',
    margin: 0,
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
  toggleButton: {
    background: '#6892ecff',
    color: '#fff',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    marginLeft: '1rem',
  },
  hamburger: {
    cursor: 'pointer',
    color: 'var(--text-color)',
  },
  mobileNav: {
    position: 'absolute',
    top: '60px',
    right: 0,
    width: '200px',
    background: 'var(--section-title-bg)',
    padding: '10px 0',
    borderTop: '2px solid var(--border-color)',
    borderLeft: '2px solid var(--border-color)',
    borderBottom: '2px solid var(--border-color)',
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px',
  },
  mobileNavList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    margin: 0,
    padding: '0 20px',
  },
};

export default Header;
