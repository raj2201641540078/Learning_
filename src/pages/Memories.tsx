import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Memories.css';

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
import photo21 from '../images/photo21.png';
import photo22 from '../images/photo22.png';
import photo23 from '../images/photo23.png';
import photo24 from '../images/photo24.png';
import photo25 from '../images/photo25.png';
import photo26 from '../images/photo26.png';
import photo27 from '../images/photo27.png';
import photo28 from '../images/photo28.png';
import photo29 from '../images/photo29.png';
import photo30 from '../images/photo30.png';
import photo31 from '../images/photo31.png';
import photo32 from '../images/photo32.png';
import photo33 from '../images/photo33.png';
import photo34 from '../images/photo34.png';
import photo35 from '../images/photo35.png';
import photo36 from '../images/photo36.png';
import photo37 from '../images/photo37.png';
import photo38 from '../images/photo38.png';
import photo39 from '../images/photo39.png';
import photo40 from '../images/photo40.png';

const images = [
  photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10,
  photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18, photo19, photo20,
   photo21, photo22, photo23, photo24, photo25, photo26, photo27, photo28, photo29, photo30,
   photo31, photo32, photo33, photo34, photo35, photo36, photo37, photo38, photo39, photo40
];
const dates = Array.from({ length: 40 }, (_, i) => `02/${(i+4).toString().padStart(2, '0')}/2024`);
const quotes = Array.from({ length: 40 }, (_, i) => `Memory ${i+1} – Every moment with you is special ❤️`);
type SelectedType = number | null;
const Memories = () => {
  const [selected, setSelected] = useState<SelectedType>(null);
  return (
    <div className="memories-page">
      <h1 className="memories-title">Memories ❤️</h1>
      <div className="memories-cards">
        {images.map((img, i) => (
          <motion.div
            className="memories-card"
            key={i}
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
              delay: i * 0.2,
            }}
            whileHover={{ scale: 1.08, boxShadow: '0 0 24px #d72660' }}
            style={{ top: `${10 + (i * 7) % 70}%`, left: `${10 + (i * 13) % 80}%` }}
            onClick={() => setSelected(i)}
          >
            <img src={img} alt={`memory-${i}`} className="memories-img" />
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="memories-popup-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="memories-popup"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={e => e.stopPropagation()}
            >
              <img src={images[selected!]} alt={`memory-big-${selected}`} className="memories-popup-img" />
              <div className="memories-popup-date">{dates[selected!]}</div>
              <div className="memories-popup-quote">{quotes[selected!]}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

};

export default Memories;

