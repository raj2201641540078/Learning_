import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';
import photo4 from '../images/photo4.jpg';
import photo5 from '../images/photo5.jpg';
import photo6 from '../images/photo6.jpg';
import photo7 from '../images/photo7.jpg';
import photo8 from '../images/photo8.jpg';
import photo9 from '../images/photo9.jpg';
import photo10 from '../images/photo10.jpg';
import photo11 from '../images/photo11.jpg';
import photo12 from '../images/photo12.jpg';
import photo13 from '../images/photo13.jpg';
import photo14 from '../images/photo14.jpg';
import photo15 from '../images/photo15.jpg';
import photo16 from '../images/photo16.jpg';
import photo17 from '../images/photo17.jpg';
import photo18 from '../images/photo18.png';
import photo19 from '../images/photo19.png';
import photo20 from '../images/photo20.png';
// import photo from '../images/photo.jpg';


const Login = () => {
  const [number, setNumber] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (number === '0221') {
      navigate('/rose-day');
    } else {
      setError(true);
    }
  };

  // Emotional shayari and beautiful quotes
  const shayaris = [
    "Hey Wifey",
    "Your smile is my sweetest memory.",
    "Shikha, your memories are everywhere.",
    
    // "I have no complaints, I just want you by my side, Shikha.",
   
    // "Without you, this heart feels incomplete.",

        "My wife, my love, my everything.",
    
       "You are my sun, my moon, and all my stars."
  ];

  const images = [
    photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10,
    photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18, photo19, photo20
  ];

  return (
    <motion.div
      className="login-container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}
    >
      {/* Animated background photos */}
      <div className="login-bg-photos" style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={`bg-photo-${i}`}
            className="login-bg-photo"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: [0, 0.7, 0],
              scale: [1.1, 1, 1.1],
              filter: [
                'blur(2px) brightness(0.7)',
                'blur(0.5px) brightness(0.9)',
                'blur(2px) brightness(0.7)'
              ]
            }}
            transition={{
              duration: 7 + (i % 4),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.7
            }}
            style={{
              position: 'absolute',
              top: `${10 + (i * 8) % 70}%`,
              left: `${10 + (i * 13) % 80}%`,
              width: '180px',
              height: '120px',
              objectFit: 'cover',
              borderRadius: '18px',
              zIndex: 1,
              opacity: 0.6,
              boxShadow: '0 4px 32px 0 rgba(215,38,96,0.13)'
            }}
          />
        ))}
      </div>
      {/* Foreground card with quotes, input, and button */}
      <motion.div
        className="login-main-card"
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{
          position: 'relative',
          zIndex: 10,
          margin: '0 auto',
          maxWidth: 480,
          background: 'rgba(255,255,255,0.92)',
          borderRadius: 32,
          boxShadow: '0 8px 48px 0 rgba(215,38,96,0.18)',
          padding: '2.5rem 2rem 2rem 2rem',
          marginTop: 80,
          marginBottom: 80,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24
        }}
      >
        <div className="shayari-cards" style={{ width: '100%' }}>
          {shayaris.map((s, i) => (
            <motion.div
              key={i}
              className="shayari-card"
              whileHover={{ scale: 1.08, boxShadow: '0 0 24px #d72660' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              style={{
                background: 'linear-gradient(90deg, #ffe0ec 0%, #e0f7fa 100%)',
                borderRadius: 18,
                marginBottom: 10,
                padding: '0.7rem 1.2rem',
                fontSize: 18,
                color: '#d72660',
                fontWeight: 500,
                boxShadow: '0 2px 12px 0 rgba(215,38,96,0.07)'
              }}
            >{s}</motion.div>
          ))}
        </div>
        <motion.input
          className="number-input"
          type="text"
          placeholder="Enter your best fav number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          style={{
            marginTop: 18,
            width: '80%',
            padding: '0.7rem 1.2rem',
            borderRadius: 14,
            border: '1.5px solid #d72660',
            fontSize: 18,
            outline: 'none',
            color: '#d72660',
            background: '#fff',
            boxShadow: '0 2px 8px 0 rgba(215,38,96,0.07)'
          }}
        />
        <motion.button
          className="login-btn"
          onClick={handleLogin}
          whileHover={{ scale: 1.1, backgroundColor: '#d72660', color: '#fff' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.7 }}
          style={{
            marginTop: 10,
            padding: '0.7rem 2.2rem',
            borderRadius: 14,
            border: 'none',
            fontSize: 20,
            fontWeight: 600,
            background: '#d72660',
            color: '#fff',
            boxShadow: '0 2px 12px 0 rgba(215,38,96,0.13)',
            cursor: 'pointer',
            letterSpacing: 1.2
          }}
        >
          Login
        </motion.button>
        {error && (
          <motion.div
            className="error-popup"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{ color: '#d72660', fontWeight: 600, marginTop: 10 }}
          >
            Sorry Shikha, try again!
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Login;
