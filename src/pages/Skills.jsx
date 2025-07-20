import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../ThemeContext';

function Skills() {
  const { theme } = useContext(ThemeContext);

  const sections = [
    {
      title: "Full Stack Development",
      data: [
        { category: 'Programming Languages', skills: [ { name: 'Java', level: 75 }, { name: 'Python', level: 60 }, { name: 'JavaScript', level: 70 } ] },
        { category: 'Web Technologies', skills: [ { name: 'HTML', level: 90 }, { name: 'CSS', level: 88 } ] },
        { category: 'Frameworks & Libraries', skills: [ { name: 'React.js', level: 50 }, { name: 'Node.js', level: 20 }, { name: 'Express.js', level: 10 } ] },
        { category: 'Databases', skills: [ { name: 'MongoDB', level: 50 }, { name: 'SQL', level: 75 }, { name: 'PostgreSQL', level: 50 } ] },
        { category: 'Tools & Version Control', skills: [ { name: 'VS Code', level: 90 }, { name: 'Eclipse', level: 75 }, { name: 'Git & GitHub', level: 85 } ] },
      ]
    },
    {
      title: "Cyber Security",
      data: [
        { category: 'Cyber Security Tools', skills: [ { name: 'Burp Suite', level: 50 }, { name: 'Wireshark', level: 35 }, { name: 'Nmap', level: 70 } ] },
        { category: 'Operating Systems', skills: [ { name: 'Kali Linux', level: 85 }, { name: 'Parrot OS', level: 30 } ] },
        { category: 'Techniques & Domains', skills: [ { name: 'Vulnerability Assessment', level: 25 }, { name: 'Penetration Testing', level: 80 } ] },
      ]
    }
  ];

  const cardStyle = {
    flex: '1 1 300px',
    maxWidth: '350px',
    background: 'var(--card-bg)',
    borderRadius: '12px',
    padding: '1.5rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center'
  };

  const gradientText = {
    background: 'linear-gradient(90deg, #ff6a00, #ee0979, #00c9ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent'
  };

  return (
    <div style={{ padding: '2rem 1rem', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', ...gradientText }}>
          My Skills
        </h2>

        {sections.map((section, secIdx) => (
          <motion.div
            key={secIdx}
            style={{ marginBottom: '3rem', textAlign: 'center' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{
              display: 'inline-block',
              padding: '0.5rem 1.5rem',
              borderRadius: '25px',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              
            }}>
              {section.title}
            </h3>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
              {section.data.map((item, index) => (
                <motion.div
                  key={index}
                  style={cardStyle}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h4 style={{ marginBottom: '1rem', ...gradientText }}>{item.category}</h4>
                  {item.skills.map((skill, i) => (
                    <div key={i} style={{ marginBottom: '0.8rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem', color: 'var(--text-color)' }}>
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div style={{ height: '10px', backgroundColor: '#e2e8f0', borderRadius: '5px', overflow: 'hidden' }}>
                        <div style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          background: 'linear-gradient(90deg, #0ea5e9, #3b82f6, #9333ea)',
                          borderRadius: '5px'
                        }}></div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
