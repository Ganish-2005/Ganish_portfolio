import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { ThemeContext } from '../ThemeContext';
import { FaShieldAlt } from 'react-icons/fa';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext); // Access current theme
  const phoneNumber = '9360374848';

  const handleChat = () => {
    const message = encodeURIComponent("Hi! I'd like to know more!");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  // Dynamic background based on theme
  const backgroundColor = theme === 'dark'
    ? 'var(--card-bg)'
    : 'var(--background-color)';
  const textColor = theme === 'dark'
    ? 'var(--text-color)'
    : '#333';

  return (
    <>
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 999,
            background: 'var(--button-bg)',
            border: 'none',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            cursor: 'pointer'
          }}
        >
          <FaWhatsapp color="white" size={28} />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              width: '300px',
              height: '350px',
              background: backgroundColor,
              color: textColor,
              borderRadius: '1.5rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              zIndex: 999,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{
              background: 'var(--button-bg)',
              color: 'white',
              padding: '0.75rem 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaShieldAlt size={20} />
              <div>
                <div style={{ fontWeight: 'bold' }}>Ganish V</div>
                <div style={{ fontSize: '0.8rem', color: '#d4f8e8' }}>online</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '1.2rem',
              cursor: 'pointer'
            }}>×</button>
            </div>
            <div style={{ padding: '1rem', fontSize: '2rem', flex: 1 }}>
              Feel free to reach
            </div>

            <button
              onClick={handleChat}
              style={{
              background: '#2563eb', 
              color: 'white',
              border: 'none',
              width: '100%', 
              margin: '0 auto ',
              borderRadius: '9999px',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              fontWeight: 'bold', 
              cursor: 'pointer',
              display: 'block',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
  }}

            >
              Start chat
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
