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

  // Emotional shayari and moments
  const shayaris = [
    "Your smile is my sweetest memory",
"Every moment spent with you is the most beautiful part of my life",
"I have no complaints, I just want you by my side, Shikha",
"My happiness is hidden in your laughter",
"Without you, this heart feels incomplete",
"Shikha, your memories are everywhere",
"Our first meeting, the most precious moment",
"Those moments we spent together will always live in my heart",
"Shikha, you are the most special to me",
"Your words, your laughter, everything comes back to me"

  ];

  const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10];

  return (
    <motion.div
      className="login-container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="moving-memories">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className={`login-memory-card login-memory-card-${i}`}
            initial={{ opacity: 0, scale: 0.8, y: 0, x: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -20, 0],
              x: [0, 20 * (i % 2 === 0 ? 1 : -1), 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1],
              delay: i * 0.3,
            }}
            style={{ top: `${15 + (i * 12) % 60}%`, left: `${15 + (i * 18) % 70}%` }}
          >
            <img src={img} alt={`login-memory-${i}`} className="login-memory-img" />
          </motion.div>
        ))}
      </div>
      <motion.div
        className="shayari-cards"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {shayaris.map((s, i) => (
          <motion.div
            key={i}
            className="shayari-card"
            whileHover={{ scale: 1.08, boxShadow: '0 0 24px #d72660' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
          >{s}</motion.div>
        ))}
      </motion.div>
      <motion.input
        className="number-input"
        type="text"
        placeholder="Enter your best fav number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.5 }}
      />
      <motion.button
        className="login-btn"
        onClick={handleLogin}
        whileHover={{ scale: 1.1, backgroundColor: '#d72660' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.7 }}
      >
        Login
      </motion.button>
      {error && (
        <motion.div
          className="error-popup"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          Sorry Shikha, try again!
        </motion.div>
      )}
    </motion.div>
  );
};

export default Login;
