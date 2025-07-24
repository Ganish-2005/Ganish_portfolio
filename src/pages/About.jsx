import React, { useContext } from 'react';
import { FaBolt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeContext } from '../ThemeContext'; // Import ThemeContext

const timelineData = [
  {
    title: "Bachelor’s Degree",
    degree: "Computer Science and Engineering (Cyber Security)",
    college: "KSR Institute for Engineering and Technology",
    year: "2022 - 2026",
    cgpa: "8.27",
    isLeft: false, // Content on the right side
  },
  {
    title: "Higher Secondary (HSC)",
    school: "Model School",
    year: "2021 - 2022",
    percentage: "75%",
    isLeft: true, // Content on the left side
  },
  {
    title: "Secondary School (SSLC)",
    school: "Model School",
    year: "2019 - 2020",
    percentage: "74%",
    isLeft: false, // Content on the right side
  },
];

const Timeline = () => {
  const { theme } = useContext(ThemeContext); // Use theme context

  React.useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'ease-out' // Smooth easing for AOS animations
    });
  }, []);

  // Function to check if it's a mobile screen (for responsive styles)
  const isMobile = window.innerWidth <= 768;

  return (
    <div style={styles.wrapper}>
      {/* About Me Section */}
      <section style={styles.aboutSection} data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <h2 style={styles.heading}>About Me</h2>
        <div style={styles.aboutText}>
          <p>
            Hello! I'm a passionate cybersecurity engineering student with a keen interest in red teaming,
            VAPT, and building innovative tech solutions. I enjoy exploring new technologies and
            implementing them in real-world applications. I'm always eager to learn and take on
            new challenges that push my limits.
          </p>
          <a
            href="/certificate/resume.jpg" // Assuming PDF is the better format for resumes
            target="_blank"
            rel="noopener noreferrer"
            style={styles.resumeButton}
            aria-label="Download my resume" // Accessibility
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
                // Control overall row direction based on isLeft property - PRESERVED ALIGNMENT
                flexDirection: isMobile ? 'row' : (item.isLeft ? 'row-reverse' : 'row'),
              }}
            >
              {/* Content Box */}
              <div
                style={{
                  ...styles.contentBox,
                  // Adjust horizontal margins for content box to align it correctly - PRESERVED ALIGNMENT
                  marginLeft: isMobile ? '40px' : (item.isLeft ? 'auto' : '0'),
                  marginRight: isMobile ? '0' : (item.isLeft ? '0' : 'auto'),
                  width: isMobile ? 'calc(100% - 60px)' : '45%', // Adjust width for mobile and desktop - PRESERVED ALIGNMENT
                  // Ensure text alignment matches the content box's side - PRESERVED ALIGNMENT
                  textAlign: isMobile ? 'left' : (item.isLeft ? 'right' : 'left'),
                }}
                data-aos={item.isLeft ? 'fade-left' : 'fade-right'}
                data-aos-duration="1000"
                data-aos-once="true" // Ensure animation plays only once
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

              {/* Line + Icon */}
              <div style={{
                ...styles.centerContainer,
                // Adjust icon position for mobile (always on left of content) vs desktop (center) - PRESERVED ALIGNMENT
                left: isMobile ? '20px' : '50%',
                transform: isMobile ? 'translateY(-50%)' : 'translate(-50%, -50%)',
                alignItems: 'center', // Keep items centered in the column
              }}>
                <FaBolt style={styles.icon} />
                {/* Hide connector line on mobile, it's implied by the vertical line - PRESERVED ALIGNMENT */}
                {!isMobile && <div style={connectorLine(item.isLeft)} />}
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
    color: 'var(--text-color)', // Use theme variable
    padding: '5rem 1rem', // Increased padding for more space
    fontFamily: 'Roboto, sans-serif', // **Changed font family to Roboto for consistency**
    minHeight: '100vh',
    // Media query directly in style object (using object syntax for nested styles)
    '@media (max-width: 768px)': {
      padding: '3rem 0.5rem',
    },
  },
  heading: {
    textAlign: 'center',
    marginBottom: '2.5rem', // More space
    fontSize: '2.8rem', // Larger heading
    fontWeight: '900', // Extra bold
    background: 'linear-gradient(90deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end))', // Theme-based gradient
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    '@media (max-width: 768px)': {
      fontSize: '2.2rem',
      marginBottom: '1.5rem',
    },
  },
  aboutSection: {
    maxWidth: '900px', // Wider section
    margin: '0 auto 5rem auto', // More margin for separation
    textAlign: 'center',
  },
  aboutText: {
    fontSize: '1.15rem', // Slightly larger text
    lineHeight: '1.8', // Better readability
    color: 'var(--text-color)', // Theme-based color
    padding: '2.5rem', // More padding
    backgroundColor: 'var(--card-bg)', // Theme-based color
    borderRadius: '16px', // More rounded corners
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)', // Stronger shadow
    transition: 'transform 0.5s ease-in-out', // Smooth transform transition
    '&:hover': {
      transform: 'translateY(-8px)', // More pronounced lift
    },
    '@media (max-width: 768px)': {
      padding: '1.8rem',
      fontSize: '1rem',
    },
  },
  resumeButton: {
    marginTop: '2.5rem', // More margin
    display: 'inline-block',
    padding: '0.9rem 2.2rem', // More padding
    backgroundColor: 'var(--primary-accent)', // Theme-based accent color
    color: 'white',
    fontWeight: '700', // Bolder text
    textDecoration: 'none',
    borderRadius: '30px', // Pill shape
    transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 8px 20px rgba(0,0,0,0.3)', // Stronger shadow
    '&:hover': {
      backgroundColor: 'var(--secondary-accent)', // Color change on hover
      transform: 'translateY(-4px) scale(1.05)', // Lift and slight enlarge
      boxShadow: '0 12px 25px rgba(0,0,0,0.4)',
    },
  },
  timelineWrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
    paddingTop: '3rem', // Space above timeline
  },
  timelineContainer: {
    position: 'relative',
    width: '100%',
    padding: '0 1.5rem', // Horizontal padding
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '4rem 0', // More margin between items
    position: 'relative',
    // Media query for mobile-specific layout
    '@media (max-width: 768px)': {
      flexDirection: 'row', // Always start from left for mobile
      justifyContent: 'flex-start',
      margin: '2.5rem 0', // Reduced margin for mobile
    },
  },
  contentBox: {
    width: '45%', // Adjusted width for desktop content boxes
    padding: '1.5rem', // Increased padding
    backgroundColor: 'var(--card-bg)', // Theme-based color
    borderRadius: '16px', // More rounded
    boxShadow: '0 6px 20px rgba(0,0,0,0.1)', // Stronger shadow
    zIndex: 2,
    transition: 'transform 0.4s ease-in-out, box-shadow 0.4s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    },
    '@media (max-width: 768px)': {
      width: 'calc(100% - 70px)', // Adjusted width for mobile to account for vertical line/icon
      padding: '1.2rem',
    },
  },
  content: {
    fontSize: '1rem', // Slightly larger content font
    lineHeight: '1.7',
    color: 'var(--text-color)', // Theme-based color
    padding: '1rem',
    backgroundColor: 'transparent', // Transparent to show card background
    borderRadius: '10px',
    '@media (max-width: 768px)': {
      fontSize: '0.9rem',
      padding: '0.8rem',
    },
  },
  title: {
    fontSize: '1.4rem', // Larger title
    fontWeight: 'bold',
    marginBottom: '0.8rem',
    background: 'linear-gradient(90deg, var(--primary-accent), var(--secondary-accent))', // Accent gradient
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    '@media (max-width: 768px)': {
      fontSize: '1.2rem',
    },
  },
  centerContainer: {
    position: 'absolute',
    // Mobile positioning logic for the vertical line and icon
    // It's always 20px from the left, regardless of content side - PRESERVED ALIGNMENT
    left: '20px',
    top: '50%',
    transform: 'translateY(-50%)', // Centered vertically in its row - PRESERVED ALIGNMENT
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '0.8rem',
    zIndex: 3,
    // Desktop positioning (overrides mobile for larger screens) - PRESERVED ALIGNMENT
    '@media (min-width: 769px)': {
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  },
  centerVerticalLine: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '50%', // Centered on desktop
    width: '3px', // Thicker line
    backgroundColor: 'var(--border-color)', // Theme-based color
    transform: 'translateX(-50%)',
    zIndex: 1,
    '@media (max-width: 768px)': {
      left: '20px', // Align to left for mobile
    },
  },
  icon: {
    color: 'white',
    backgroundColor: 'var(--primary-accent)', // Theme-based accent color
    fontSize: '1.3rem', // Larger icon
    padding: '8px', // More padding
    borderRadius: '50%',
    border: '3px solid var(--primary-accent)', // Thicker border
    animation: 'pulse 1.8s infinite cubic-bezier(0.4, 0, 0.6, 1)', // Smoother pulse
    boxShadow: '0 0 15px rgba(var(--primary-accent-rgb), 0.6)', // Stronger glow
  },
};

const connectorLine = (isLeft) => ({
  position: 'absolute',
  top: '50%',
  // Dynamic left/right positioning for desktop connector lines - PRESERVED ALIGNMENT
  left: isLeft ? 'auto' : '50%',
  right: isLeft ? '50%' : 'auto',
  width: 'calc(50% - 200px)', // Adjusted width to ensure gap
  height: '3px', // Thicker line
  background: 'linear-gradient(to right, transparent, var(--secondary-accent), transparent)', // Accent gradient
  transform: 'translateY(-50%)',
  zIndex: 2,
  // This style block will effectively be ignored by the !isMobile check in the component's render logic
});

export default Timeline;