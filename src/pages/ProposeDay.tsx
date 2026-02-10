import photo10 from '../images/photo10.jpg';
import photo9 from '../images/photo9.jpg';
import photo8 from '../images/photo8.jpg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';
import photo4 from '../images/photo4.jpg';
import photo5 from '../images/photo5.jpg';
import photo6 from '../images/photo6.jpg';
import photo7 from '../images/photo7.jpg';

const ProposeDay = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setVisible(true);
  }, []);

  const sparkles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 2,
  }));


  // Floating image cards with quotes
  const proposeImages = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10];
  const proposeQuotes = [
    'With you, every moment is a new beginning.',
    'Your smile is my forever proposal.',
    'You are the answer to my every wish.',
    'Let’s write our love story together, Shikha.',
  ];
  const [selected, setSelected] = useState<number|null>(null);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-200 via-pink-100 to-rose-100" style={{ border: '8px solid #d72660', borderRadius: '2.5rem', boxShadow: '0 0 40px 8px rgba(215, 38, 96, 0.15)' }}>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-twinkle"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          <Sparkles className="text-rose-400 w-4 h-4" />
        </div>
      ))}




      {/* Main Propose Day content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div
          className={`max-w-4xl w-full transform transition-all duration-1000 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="text-center mb-12">
            <Heart className="w-16 h-16 md:w-24 md:h-24 text-rose-500 mx-auto mb-6 animate-heartbeat" fill="currentColor" />
            <h1 className="text-4xl md:text-7xl font-bold text-rose-600 mb-6">
              Propose Day
            </h1>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-rose-200 animate-slide-up">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl md:text-4xl font-serif text-rose-700 mb-4">
                To My Dearest Shikha
              </h2>

              <div className="w-full aspect-video bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
                {/* Diagonal corner images */}
                <img src={photo7} alt="corner1" className="absolute left-0 top-0 w-20 h-20 rounded-xl border-2 border-rose-400 shadow-lg -translate-x-1/3 -translate-y-1/3" style={{zIndex: 3}} />
                <img src={photo8} alt="corner2" className="absolute right-0 bottom-0 w-20 h-20 rounded-xl border-2 border-rose-400 shadow-lg translate-x-1/3 translate-y-1/3" style={{zIndex: 3}} />
                <img src={photo2} alt="Propose Memory" className="relative z-10 w-auto h-5/6 max-h-[220px] rounded-2xl shadow-xl border-2 border-rose-300 object-cover" />
              </div>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                From the moment I met you, I knew my life would never be the same.
                Your smile lights up my darkest days, and your love fills my heart with endless joy.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Will you be mine forever? Today and always, I choose you. ❤️
              </p>

              <div className="flex items-center justify-center gap-2 text-rose-600 text-xl font-semibold pt-6">
                <Heart className="w-6 h-6" fill="currentColor" />
                <span>Forever Yours</span>
                <Heart className="w-6 h-6" fill="currentColor" />
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate('/chocolate-day')}
            className="mt-12 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto group"
          >
            Continue to Chocolate Day
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.15);
          }
        }

        .animate-heartbeat {
          animation: heartbeat 2s ease-in-out infinite;
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out 0.5s both;
        }
      `}</style>
    </div>
  );
};

export default ProposeDay;
