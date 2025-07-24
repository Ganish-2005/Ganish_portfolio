// ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark'); // Default to dark theme

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    const root = document.documentElement.style;

    // Apply a transition to the root element for color changes
    // This makes the theme switch visually smooth
    root.setProperty('transition', 'background-color 0.5s ease, color 0.5s ease');

    if (theme === 'dark') {
      root.setProperty('--background-color', '#0a0f2c'); // Deep space blue
      root.setProperty('--text-color', '#e0e0e0');       // Light grey text
      root.setProperty('--card-bg', '#1a2035');          // Slightly lighter card background
      root.setProperty('--button-bg', '#00d1ff');        // Cyan-blue for buttons
      root.setProperty('--border-color', '#334155');     // Subtle border
      root.setProperty('--section-title-bg', '#0d1338'); // Darker section header background
      root.setProperty('--primary-accent', '#8B5CF6');   // Vibrant Purple-Blue
      root.setProperty('--secondary-accent', '#EC4899'); // Pinkish accent
      root.setProperty('--gradient-start', '#ff6a00');   // Orange for general gradients
      root.setProperty('--gradient-mid', '#ee0979');     // Pink for general gradients
      root.setProperty('--gradient-end', '#00c9ff');     // Light blue for general gradients
    } else {
      root.setProperty('--background-color', '#ffffff');
      root.setProperty('--text-color', '#333333');
      root.setProperty('--card-bg', '#f0f4f8');
      root.setProperty('--button-bg', '#1e88e5');
      root.setProperty('--border-color', '#cbd5e1');
      root.setProperty('--section-title-bg', '#e2e8f0');
      root.setProperty('--primary-accent', '#6366F1');   // Blue-Purple
      root.setProperty('--secondary-accent', '#EF4444'); // Red accent
      root.setProperty('--gradient-start', '#007bff');
      root.setProperty('--gradient-mid', '#6610f2');
      root.setProperty('--gradient-end', '#6f42c1');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};