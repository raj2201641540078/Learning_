import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import roseImg from '../images/photo1.jpg';
import { motion, AnimatePresence } from 'framer-motion';

const RoseDay = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setVisible(true);
  }, []);

  const petals = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
  }));


  // Floating quote cards
  const roseQuotes = [
    'Your laughter is my favorite melody.',
    'With you, every day is a new bloom.',
    'Your smile is the sunshine to my rose.',
    'You are the fragrance in my life.',
    'Our love is as beautiful as a rose garden.',
    'You make my heart blossom.',
    'Every moment with you is a petal of happiness.',
    'You are my forever rose, Shikha.',
    'Your love colors my world.',
    'With you, life is always in full bloom.',
    'You are my laughter, my joy, my rose.',
    'Emotional moments with you are my treasure.',
    'You are the poetry in my garden of life.',
    'Your touch is softer than a rose petal.',
    'You are my sweetest memory.',
    'With you, every day is Rose Day.',
    'You are my heart’s most beautiful flower.',
    'You are the reason my heart smiles.',
    'You are my favorite rose, Shikha.',
    'Our love story is written in petals.',
  ];
  const [selected, setSelected] = useState<number|null>(null);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200" style={{ border: '8px solid #d72660', borderRadius: '2.5rem', boxShadow: '0 0 40px 8px rgba(215, 38, 96, 0.15)' }}>
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute top-0 opacity-80"
          style={{
            left: `${petal.left}%`,
            animation: `fall ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          <img src={roseImg} alt="rose" style={{ width: 28, height: 28, borderRadius: '50%', boxShadow: '0 2px 8px #d72660' }} />
        </div>
      ))}

      {/* Floating quote cards */}
      <div className="rose-quote-cards">
        {roseQuotes.map((quote, i) => (
          <motion.div
            key={i}
            className="rose-quote-card"
            initial={{ opacity: 0, scale: 0.8, y: 0, x: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -20, 0],
              x: [0, 20 * (i % 2 === 0 ? 1 : -1), 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1],
              delay: i * 0.2,
            }}
            whileHover={{ scale: 1.08, boxShadow: '0 0 24px #d72660' }}
            style={{ top: `${10 + (i * 7) % 70}%`, left: `${10 + (i * 13) % 80}%`, position: 'absolute', zIndex: 2, cursor: 'pointer' }}
            onClick={() => setSelected(i)}
          >
            <span>{quote}</span>
          </motion.div>
        ))}
      </div>

      {/* Popup for selected quote */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="rose-popup-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(255, 192, 203, 0.25)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="rose-popup"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ background: '#fff0f6', borderRadius: '2rem', boxShadow: '0 8px 32px rgba(215, 38, 96, 0.25)', padding: '2.5rem 2.5rem', border: '4px solid #d72660', minWidth: 320, maxWidth: 400, textAlign: 'center', zIndex: 100 }}
              onClick={e => e.stopPropagation()}
            >
              <Heart className="mx-auto mb-4" style={{ color: '#d72660', width: 48, height: 48 }} fill="currentColor" />
              <div style={{ fontSize: '1.4rem', color: '#d72660', marginBottom: '1.2rem', fontWeight: 600 }}>{roseQuotes[selected]}</div>
              <div style={{ fontSize: '1.1rem', color: '#d72660', marginBottom: '0.7rem', fontWeight: 500 }}>Shikha, you are my rose 🌹</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Rose Day content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div
          className={`max-w-3xl w-full bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-14 shadow-2xl border-4 border-rose-300 text-center transform transition-all duration-2000 ${
            visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'
          }`}
        >
          <div className="mb-8 animate-pulse-slow">
            <Heart className="w-20 h-20 md:w-32 md:h-32 text-rose-500 mx-auto mb-6" fill="currentColor" />
          </div>

          <h1 className="text-5xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 animate-gradient">
            Rose Day
          </h1>

          <div className="space-y-4 my-8">
            <h2 className="text-4xl md:text-6xl font-serif text-rose-700 animate-fade-in-up">
              Shikha Singh
            </h2>
            <p className="text-2xl md:text-4xl text-rose-600 font-light animate-fade-in-up-delay">
              My Life Partner ❤️
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <p className="text-lg md:text-xl text-rose-700 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
              Like a rose that blooms in the garden of love, you bring beauty and joy to my life every single day.
            </p>
          </div>

          <motion.button
            onClick={() => navigate('/propose-day')}
            className="mt-12 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto group"
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.2 }}
          >
            You Are My Favourite Rose Shikha 💖🌹
          </motion.button>
        </div>
      </div>

      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out 0.5s both;
        }

        .animate-fade-in-up-delay {
          animation: fadeInUp 1s ease-out 1s both;
        }

        .animate-fade-in-up-delay-2 {
          animation: fadeInUp 1s ease-out 1.5s both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default RoseDay;
