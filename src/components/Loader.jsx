// src/components/Loader.js
import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/Loading.json'; // Ensure path is correct

const Loader = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-[#0f172a]"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#0f172a',
      }}
    >
      <Lottie
        animationData={loadingAnimation}
        loop
        style={{ width: '15rem', height: '15rem' }} // 👈 Reduced size
      />
    </div>
  );
};

export default Loader;
