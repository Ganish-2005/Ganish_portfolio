import React, { useState, useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [showPopup, setShowPopup] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.send('service_mal9wul', 'template_ri6xtb8', formData, 'FD1zxb8HRWdomMmpC')
      .then(result => {
        console.log('Email sent:', result.text);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
      })
      .catch(error => {
        console.error('Email error:', error.text);
        alert('❌ Failed to send message. Please try again later.');
      });
  };

  return (
    <div style={{ padding: '2rem 1rem', minHeight: '100vh', position: 'relative' }}>
      {/* ✅ Popup Message */}
      {showPopup && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#4ade80',
          color: '#fff',
          padding: '1rem 2rem',
          borderRadius: '10px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
          zIndex: 999
        }}>
          ✅ Your message has been successfully sent!
        </div>
      )}

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '2rem', textAlign: 'center', marginBottom: '1.5rem',
           fontWeight: 'bold',background: 'linear-gradient(90deg, #ff6a00, #ee0979, #00c9ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent'
        }}>
          Contact Me
        </h2>

        <div style={{ padding: '2rem', borderRadius: '12px', background: 'transparent' }}>
          <p style={{
            fontSize: '1.5rem',
            color: theme === 'dark' ? "#38bdf8" : "#0ea5e9",
            textAlign: 'center',
            marginBottom: '1.5rem',
            fontWeight: '500'
          }}>
            FEEL FREE TO REACH
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
            {/* Left Side - Contact Form */}
            <div style={{
              flex: '1 1 500px',
              background: 'var(--card-bg)',
              borderRadius: '10px',
              padding: '2rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <form onSubmit={handleSubmit}>
                {['name', 'email', 'subject'].map((field, i) => (
                  <div key={i} style={{ marginBottom: '1rem' }}>
                    <label style={{
                      fontSize: '1.2rem',
                      display: 'block',
                      marginBottom: '0.3rem',
                      fontWeight: '500',
                      color: 'var(--text-color)'
                    }}>
                      {field === 'name' ? 'Full Name' : field === 'email' ? 'Email address' : 'Subject'}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      placeholder={`Enter your ${field === 'name' ? 'Name' : field === 'email' ? 'E-Mail' : 'Subject'}`}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        borderRadius: '4px',
                        border: '1px solid var(--text-color)',
                        background: 'transparent',
                        color: 'var(--text-color)'
                      }}
                    />
                  </div>
                ))}

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{
                    fontSize: '1.2rem',
                    display: 'block',
                    marginBottom: '0.3rem',
                    fontWeight: '500',
                    color: 'var(--text-color)'
                  }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    required
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '4px',
                      border: '1px solid var(--text-color)',
                      background: 'transparent',
                      color: 'var(--text-color)'
                    }}
                  ></textarea>
                </div>

                <button type="submit" style={{
                  width: '100%',
                  padding: '0.8rem',
                  background: 'var(--button-bg)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  fontSize: '1rem'
                }}>
                  Submit
                </button>
              </form>
            </div>

            {/* Right Side - Google Maps */}
            <div style={{
              flex: '1 1 500px',
              minHeight: '400px',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11647.97299003044!2d77.86272567802226!3d11.47485640111815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba95e3912e6c8e7%3A0x48974d5c0936ee65!2sSangagiri%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1752162980389!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="My Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
