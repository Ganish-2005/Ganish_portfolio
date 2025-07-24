import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { ThemeContext } from '../ThemeContext';
import { FaShieldAlt, FaTimes } from 'react-icons/fa'; // Import FaTimes for close icon

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const phoneNumber = '9360374848'; // Your WhatsApp phone number

  const handleChat = () => {
    const message = encodeURIComponent("Hi! I'd like to know more about your work."); // More specific message
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer'); // Added security attributes
  };

  const widgetVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120, // More springy opening
        damping: 12,
        duration: 0.4
      }
    },
    exit: {
      opacity: 0,
      y: 100,
      scale: 0.8,
      transition: {
        ease: 'easeOut', // Smooth exit
        duration: 0.3
      }
    }
  };

  return (
    <>
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.1, boxShadow: '0 6px 16px rgba(0,0,0,0.3)' }} // Enhanced hover
          whileTap={{ scale: 0.95 }}
          aria-label="Open WhatsApp Chat Widget" // Accessibility
          style={styles.floatingButton}
        >
          <FaWhatsapp color="white" size={28} />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-widget" // Key for AnimatePresence
            variants={widgetVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={styles.chatWidgetBody}
          >
            <div style={styles.chatHeader}>
              <div style={styles.headerInfo}>
                <FaShieldAlt size={22} style={{ color: 'var(--secondary-accent)' }} /> {/* Accent color for icon */}
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Ganish V</div>
                  <div style={{ fontSize: '0.85rem', color: '#d4f8e8' }}>online</div> {/* Keep specific online color */}
                </div>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1, rotate: 90 }} // Rotate on hover
                whileTap={{ scale: 0.9 }}
                aria-label="Close Chat Widget" // Accessibility
                style={styles.closeButton}
              >
                <FaTimes size={20} /> {/* Use FaTimes for a standard close icon */}
              </motion.button>
            </div>
            <div style={styles.chatContent}>
              <p style={styles.chatMessage}>Feel free to reach out to me directly!</p> {/* More inviting message */}
            </div>

            <motion.button
              onClick={handleChat}
              whileHover={{ scale: 1.05, boxShadow: '0 6px 15px rgba(0,0,0,0.3)' }} // Enhanced hover
              whileTap={{ scale: 0.95 }}
              style={styles.startChatButton}
            >
              Start Chat <FaWhatsapp style={{ marginLeft: '8px' }} /> {/* Add WhatsApp icon to button */}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const styles = {
  floatingButton: {
    position: 'fixed',
    bottom: '2rem', // Use rem for consistent spacing
    right: '2rem',   // Use rem for consistent spacing
    zIndex: 999,
    background: 'var(--primary-accent)', // Theme-based button background
    border: 'none',
    borderRadius: '50%',
    width: '65px',   // Slightly larger button
    height: '65px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 6px 15px rgba(0,0,0,0.25)', // Stronger shadow
    cursor: 'pointer',
    transition: 'all 0.3s ease', // General transition
    '@media (max-width: 768px)': {
      width: '55px',
      height: '55px',
      bottom: '1.5rem',
      right: '1.5rem',
    }
  },
  chatWidgetBody: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    width: '320px', // Slightly wider widget
    height: '380px', // Slightly taller widget
    background: 'var(--card-bg)', // Theme-based card background
    color: 'var(--text-color)', // Theme-based text color
    borderRadius: '1.5rem', // Consistent rounded corners
    boxShadow: '0 8px 25px rgba(0,0,0,0.25)', // Stronger shadow
    zIndex: 999,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 768px)': {
      width: '90%', // Responsive width for mobile
      maxWidth: '300px', // Max width to prevent it from getting too large on small tablets
      height: 'auto', // Auto height for flexible content
      minHeight: '280px',
      bottom: '1.5rem',
      right: '5%', // Centered on mobile
      left: '5%',
    }
  },
  chatHeader: {
    background: 'var(--section-title-bg)', // Theme-based header background
    color: 'white', // Text color for header
    padding: '0.8rem 1.2rem', // Increased padding
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid var(--border-color)', // Subtle border
  },
  headerInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem', // Increased gap
  },
  closeButton: {
    background: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '1.3rem', // Larger close icon
    cursor: 'pointer',
    padding: '0.2rem',
    display: 'flex', // Ensures icon is centered
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatContent: {
    padding: '1.5rem', // Increased padding
    fontSize: '1.4rem', // Larger message text
    fontWeight: '600', // Bolder message
    flex: 1, // Allows content to take available space
    display: 'flex', // For centering message
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: '1.4',
    color: 'var(--text-color)', // Ensure content text color is theme-based
  },
  chatMessage: {
    margin: 0, // Remove default paragraph margin
    padding: 0,
    background: 'linear-gradient(45deg, var(--primary-accent), var(--secondary-accent))', // Apply gradient
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
  },
  startChatButton: {
    background: 'var(--primary-accent)', // Theme-based primary accent color
    color: 'white',
    border: 'none',
    width: 'calc(100% - 2rem)', // Button fills width minus padding
    margin: '0 1rem 1rem 1rem', // Margin for padding inside widget
    borderRadius: '30px', // Pill-shaped button
    padding: '0.8rem 1.5rem', // More padding
    fontSize: '1.1rem', // Larger font size
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex', // For icon alignment
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)', // Stronger shadow
    textDecoration: 'none', // Ensure it looks like a button even if it's a link
    transition: 'all 0.3s ease', // General transition
  },
};

export default ChatWidget;