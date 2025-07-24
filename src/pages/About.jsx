import React from 'react';
import { FaBolt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const timelineData = [
  {
    title: "Bachelor’s Degree",
    degree: "Computer Science and Engineering (Cyber Security)",
    college: "KSR Institute for Engineering and Technology",
    year: "2022 - 2026",
    cgpa: "8.27",
    isLeft: false,
  },
  {
    title: "Higher Secondary (HSC)",
    school: "Model School",
    year: "2021 - 2022",
    percentage: "75%",
    isLeft: true,
  },
  {
    title: "Secondary School (SSLC)",
    school: "Model School",
    year: "2019 - 2020",
    percentage: "74%",
    isLeft: false,
  },
];

const Timeline = () => {
  React.useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div style={styles.wrapper}>
      {/* About Me Section */}
      <section style={styles.aboutSection} data-aos="fade-up" data-aos-duration="1000">
        <h2 style={styles.heading}>About Me</h2>
        <div style={styles.aboutText}>
          <p>
            Hello! I'm a passionate cybersecurity engineering student with a keen interest in red teaming,
            VAPT, and building innovative tech solutions. I enjoy exploring new technologies and
            implementing them in real-world applications. I'm always eager to learn and take on
            new challenges that push my limits.
          </p>
          <a
            href="/certificate/resume.jpg"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.resumeButton}
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Education Timeline Section */}
      <section style={styles.timelineWrapper}>
        <h2 style={styles.heading}>Education</h2>
        <div style={styles.timelineContainer}>
          <div style={styles.centerVerticalLine} />
          {timelineData.map((item, index) => (
            <div
              key={index}
              style={{
                ...styles.timelineItem,
                flexDirection: item.isLeft ? 'row-reverse' : 'row',
              }}
            >
              <div
                style={{
                  ...styles.contentBox,
                  alignItems: item.isLeft ? 'flex-end' : 'flex-start',
                  textAlign: item.isLeft ? 'right' : 'left',
                }}
                data-aos={item.isLeft ? 'fade-left' : 'fade-right'}
                data-aos-duration="1000"
              >
                <div style={styles.content}>
                  <h3 style={styles.title}>{item.title}</h3>
                  {item.degree && <p>Degree: {item.degree}</p>}
                  {item.college && <p>College: {item.college}</p>}
                  {item.school && <p>School: {item.school}</p>}
                  <p>Year: {item.year}</p>
                  {item.cgpa && <p>CGPA: {item.cgpa}</p>}
                  {item.percentage && <p>Percentage: {item.percentage}</p>}
                </div>
              </div>

              <div style={styles.centerContainer}>
                <FaBolt style={styles.icon} />
                <div style={connectorLine(item.isLeft)} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const styles = {
  wrapper: {
    color: '#fff',
    padding: '4rem 1rem',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '1rem',
    fontSize: '2rem',
    background: 'linear-gradient(90deg, #ff6a00, #ee0979, #00c9ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
  },
  aboutSection: {
    maxWidth: '800px',
    margin: '0 auto 4rem auto',
    textAlign: 'center',
  },
  aboutText: {
    fontSize: '1rem',
    lineHeight: '1.7',
    color: '#d1d5db',
    padding: '2rem',
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    transition: 'transform 0.5s ease',
  },
  resumeButton: {
    marginTop: '2rem',
    display: 'inline-block',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#00d1ff',
    color: '#0a0f2c',
    fontWeight: 'bold',
    textDecoration: 'none',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  timelineWrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  timelineContainer: {
    position: 'relative',
    width: '100%',
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '5rem 0',
    position: 'relative',
  },
  contentBox: {
    width: '40%',
    padding: '1rem',
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
    zIndex: 2,
  },
  content: {
    fontSize: '0.9rem',
    lineHeight: '1.6',
    padding: '1.5rem',
    backgroundColor: '#1e293b',
    borderRadius: '12px',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    background: 'linear-gradient(90deg, #7e3ff2, #a33db7, #cc2b7c, #e0324c, #ff2b2b)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
  },
  centerContainer: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '0.5rem',
    zIndex: 3,
  },
  centerVerticalLine: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '50%',
    width: '2px',
    backgroundColor: '#ccc',
    transform: 'translateX(-50%)',
    zIndex: 1,
  },
  icon: {
    color: '#00d1ff',
    fontSize: '1rem',
    backgroundColor: '#0a0f2c',
    padding: '4px',
    borderRadius: '50%',
    border: '2px solid #00d1ff',
    animation: 'pulse 1.5s infinite',
  },
};

const connectorLine = (isLeft) => ({
  position: 'absolute',
  top: '50%',
  left: isLeft ? 'auto' : '50%',
  right: isLeft ? '50%' : 'auto',
  width: 'calc(50% - 180px)',
  height: '2px',
  background: 'linear-gradient(to right, transparent, #00d1ff, transparent)',
  transform: 'translateY(-50%)',
  zIndex: 2,
});

export default Timeline;