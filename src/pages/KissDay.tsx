
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ArrowRight, Sparkles } from 'lucide-react';
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

const KissDay = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setVisible(true);
  }, []);

  const kisses = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-red-100 via-pink-100 to-rose-100" style={{ border: '8px solid #d72660', borderRadius: '2.5rem', boxShadow: '0 0 40px 8px rgba(215, 38, 96, 0.15)' }}>
      {kisses.map((kiss) => (
        <div
          key={kiss.id}
          className="absolute text-4xl animate-float-kiss"
          style={{
            left: `${kiss.left}%`,
            top: `${kiss.top}%`,
            animationDelay: `${kiss.delay}s`,
            animationDuration: `${kiss.duration}s`,
          }}
        >
          💋
        </div>
      ))}

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div
          className={`max-w-4xl w-full transform transition-all duration-1000 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <Heart className="w-16 h-16 md:w-24 md:h-24 text-rose-500 mx-auto mb-6 animate-heartbeat-strong" fill="currentColor" />
              <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-pink-400 animate-spin-slow" />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-rose-600 mb-6">
              Kiss Day
            </h1>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-rose-300 animate-scale-in">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl md:text-4xl font-serif text-rose-700 mb-4">
                Sealed with a Kiss 💋
              </h2>

              <div className="w-full aspect-video bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
                <span className="absolute inset-0 flex items-center justify-center text-rose-200 text-3xl font-serif font-bold opacity-40 select-none pointer-events-none px-8 text-center z-0" style={{whiteSpace: 'pre-line'}}>
                  "Every kiss from you is a memory I want to relive forever."
                </span>
                <img src={photo9} alt="corner1" className="absolute left-0 top-0 w-20 h-20 rounded-xl border-2 border-rose-400 shadow-lg -translate-x-1/3 -translate-y-1/3" style={{zIndex: 3}} />
                <img src={photo10} alt="corner2" className="absolute right-0 bottom-0 w-20 h-20 rounded-xl border-2 border-rose-400 shadow-lg translate-x-1/3 translate-y-1/3" style={{zIndex: 3}} />
                <img src={photo7} alt="Kiss Memory" className="relative z-10 w-auto h-5/6 max-h-[220px] rounded-2xl shadow-xl border-2 border-rose-300 object-cover" />
              </div>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Every kiss from you is magic that makes my heart skip a beat.
                Your lips are poetry, and every moment with you feels like a beautiful dream.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                I want to spend forever stealing kisses from you,
                making memories, and falling deeper in love with you every single day. 💕
              </p>

              <div className="bg-gradient-to-r from-rose-100 via-pink-100 to-rose-100 p-8 rounded-2xl mt-6 border-2 border-rose-200">
                <div className="space-y-4">
                  <p className="text-rose-700 text-2xl font-serif italic">
                    "A kiss from you is worth a thousand words of love."
                  </p>
                  <div className="flex justify-center gap-2 text-3xl">
                    💋 ❤️ 💋
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {['Passion', 'Romance', 'Forever', 'Love'].map((word, index) => (
                  <div
                    key={word}
                    className="bg-rose-50 p-4 rounded-xl border border-rose-200 animate-pop-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <p className="text-rose-600 font-bold">{word}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate('/valentine-day')}
            className="mt-12 px-8 py-4 bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto group animate-pulse-button"
          >
            Continue to Valentine's Day
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float-kiss {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
          }
        }

        .animate-float-kiss {
          animation: float-kiss ease-in-out infinite;
        }

        @keyframes heartbeat-strong {
          0%, 100% {
            transform: scale(1);
          }
          10%, 30% {
            transform: scale(1.2);
          }
          20%, 40% {
            transform: scale(1);
          }
        }

        .animate-heartbeat-strong {
          animation: heartbeat-strong 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.7);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-scale-in {
          animation: scale-in 0.8s ease-out 0.3s both;
        }

        @keyframes pop-in {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-pop-in {
          animation: pop-in 0.5s ease-out both;
        }

        .animate-pulse-button {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default KissDay;
