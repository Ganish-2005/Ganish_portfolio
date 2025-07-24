import React, { useState, useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('success');

  const { theme } = useContext(ThemeContext);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.send('service_mal9wul', 'template_ri6xtb8', formData, 'FD1zxb8HRWdomMmpC')
      .then(result => {
        console.log('Email sent:', result.text);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setPopupMessage('✅ Your message has been successfully sent!');
        setPopupType('success');
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3500); // Increased duration
      })
      .catch(error => {
        console.error('Email error:', error.text);
        setPopupMessage('❌ Failed to send message. Please try again later.');
        setPopupType('error');
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3500); // Increased duration
      });
  };

  const gradientText = {
    background: 'linear-gradient(90deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent'
  };

  const popupVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 20, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 10 } },
    exit: { y: -100, opacity: 0, transition: { ease: 'easeOut', duration: 0.3 } }
  };

  return (
    <div style={styles.container}>
      <AnimatePresence>
        {showPopup && (
          <motion.div
            key="popup"
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              ...styles.popup,
              backgroundColor: popupType === 'success' ? '#4ade80' : '#ef4444'
            }}
          >
            {popupMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <div style={styles.wrapper}>
        <h2 style={{ ...styles.mainTitle, ...gradientText }}>
          Contact Me
        </h2>

        <div style={styles.innerContent}>
          <p style={styles.reachText}>
            FEEL FREE TO REACH
          </p>

          <div style={styles.contactContent}>
            {/* Left Side - Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: 'spring', stiffness: 80, damping: 10, delay: 0.1 }}
                style={styles.formCard}
            >
              <form onSubmit={handleSubmit}>
                {['name', 'email', 'subject'].map((field, i) => (
                  <div key={i} style={styles.formGroup}>
                    <label htmlFor={field} style={styles.formLabel}>
                      {field === 'name' ? 'Full Name' : field === 'email' ? 'Email address' : 'Subject'}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field} // Added id for label for attribute
                      name={field}
                      placeholder={`Enter your ${field === 'name' ? 'Name' : field === 'email' ? 'E-Mail' : 'Subject'}`}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      style={styles.formInput}
                    />
                  </div>
                ))}

                <div style={styles.formGroup}>
                  <label htmlFor="message" style={styles.formLabel}>
                    Message
                  </label>
                  <textarea
                    id="message" // Added id
                    name="message"
                    rows="5" // Slightly more rows
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    required
                    style={{...styles.formInput, ...styles.textarea}}
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0,0,0,0.3)' }} // Enhanced hover
                  whileTap={{ scale: 0.95 }}
                  style={styles.submitButton}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Right Side - Google Maps */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: 'spring', stiffness: 80, damping: 10, delay: 0.2 }}
                style={styles.mapCard}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654.582697274094!2d78.13458641477764!3d11.66432426868841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1f54460021b%3A0x6b4b4b4b4b4b4b4b!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" // REPLACE WITH YOUR ACTUAL EMBEDDED MAP URL
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="My Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '3rem 1rem',
    minHeight: '100vh',
    position: 'relative',
    // background: 'var(--background-color)',
    color: 'var(--text-color)',
    '@media (max-width: 768px)': {
      padding: '2rem 0.5rem',
    },
  },
  popup: {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#fff',
    padding: '1rem 2rem',
    borderRadius: '12px', // More rounded
    boxShadow: '0 8px 20px rgba(0,0,0,0.3)', // Stronger shadow
    zIndex: 999,
    textAlign: 'center',
    fontSize: '1.1rem',
    fontWeight: '600',
    minWidth: '250px',
  },
  wrapper: {
    maxWidth: '1300px',
    margin: '0 auto',
  },
  mainTitle: {
    fontSize: '3rem',
    textAlign: 'center',
    marginBottom: '3rem',
    fontWeight: '900',
    '@media (max-width: 768px)': {
      fontSize: '2.5rem',
      marginBottom: '2.5rem',
    },
  },
  innerContent: {
    padding: '2.5rem', // Increased padding
    borderRadius: '20px',
    background: 'transparent',
    '@media (max-width: 768px)': {
      padding: '1.5rem',
    },
  },
  reachText: {
    fontSize: '2rem', // Larger
    color: 'var(--primary-accent)',
    textAlign: 'center',
    marginBottom: '2.5rem',
    fontWeight: '700',
    lineHeight: '1.2',
    '@media (max-width: 768px)': {
      fontSize: '1.6rem',
      marginBottom: '2rem',
    },
  },
  contactContent: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '3rem', // More gap
    justifyContent: 'center',
    '@media (max-width: 768px)': {
      gap: '2rem',
      flexDirection: 'column', // Stack on mobile
      alignItems: 'center',
    },
  },
  formCard: {
    flex: '1 1 500px', // Flexible base width
    background: 'var(--card-bg)',
    borderRadius: '20px',
    padding: '3rem', // More padding
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
    '@media (max-width: 768px)': {
      flex: '1 1 100%',
      padding: '2rem',
      maxWidth: '95%',
    },
  },
  formGroup: {
    marginBottom: '1.5rem', // More space
  },
  formLabel: {
    fontSize: '1.15rem', // Slightly larger label
    display: 'block',
    marginBottom: '0.6rem',
    fontWeight: '500',
    color: 'var(--text-color)',
  },
  formInput: {
    width: '100%',
    padding: '0.9rem', // More padding
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    background: 'transparent',
    color: 'var(--text-color)',
    fontSize: '1rem',
    boxSizing: 'border-box', // Include padding in width
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    '&:focus': {
      outline: 'none',
      borderColor: 'var(--primary-accent)',
      boxShadow: '0 0 0 3px rgba(var(--primary-accent-rgb), 0.3)', // Accent glow on focus
    },
  },
  textarea: {
    resize: 'vertical', // Allow vertical resize
    minHeight: '100px', // Minimum height for textarea
  },
  submitButton: {
    width: '100%',
    padding: '1.2rem', // More padding
    background: 'var(--primary-accent)', // Use primary accent
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    fontWeight: '700',
    fontSize: '1.2rem', // Larger font
    transition: 'all 0.3s ease',
    boxShadow: '0 6px 15px rgba(0,0,0,0.25)',
  },
  mapCard: {
    flex: '1 1 500px', // Flexible base width
    minHeight: '450px', // Slightly taller map
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
    '@media (max-width: 768px)': {
      flex: '1 1 100%',
      minHeight: '350px',
      maxWidth: '95%',
    },
  },
};

export default Contact;