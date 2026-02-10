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
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ArrowRight, Gem } from 'lucide-react';

const PromiseDay = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setVisible(true);
  }, []);

  const promises = [
    "To love you unconditionally",
    "To support you in every dream",
    "To make you smile every day",
    "To be by your side always",
    "To cherish every moment with you",
    "To build our beautiful future together"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100" style={{ border: '8px solid #d72660', borderRadius: '2.5rem', boxShadow: '0 0 40px 8px rgba(215, 38, 96, 0.15)' }}>
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <div className="w-2 h-2 bg-rose-400 rounded-full" />
          </div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div
          className={`max-w-4xl w-full transform transition-all duration-1000 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="text-center mb-12">
            <Gem className="w-16 h-16 md:w-24 md:h-24 text-rose-500 mx-auto mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-7xl font-bold text-rose-600 mb-6">
              Promise Day
            </h1>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-rose-200 animate-zoom-in">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl md:text-4xl font-serif text-rose-700 mb-4">
                My Promises to You, Shikha
              </h2>

              <div className="w-full aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
                <img src={photo9} alt="corner1" className="absolute left-0 top-0 w-20 h-20 rounded-xl border-2 border-rose-400 shadow-lg -translate-x-1/3 -translate-y-1/3" style={{zIndex: 3}} />
                <img src={photo10} alt="corner2" className="absolute right-0 bottom-0 w-20 h-20 rounded-xl border-2 border-rose-400 shadow-lg translate-x-1/3 translate-y-1/3" style={{zIndex: 3}} />
                <img src={photo5} alt="Promise Memory" className="relative z-10 w-auto h-5/6 max-h-[220px] rounded-2xl shadow-xl border-2 border-rose-300 object-cover" />
              </div>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Today, I make these sacred promises to you, my love.
                These are not just words, but commitments from the depths of my heart.
              </p>

              <div className="grid gap-4 text-left max-w-2xl mx-auto">
                {promises.map((promise, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-rose-50 to-pink-50 p-4 rounded-xl border-l-4 border-rose-400 animate-slide-in-stagger"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0" fill="currentColor" />
                      <p className="text-gray-700 font-medium">{promise}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-rose-100 p-6 rounded-2xl mt-8">
                <p className="text-rose-700 text-xl font-serif italic">
                  "These promises are sealed with all my love, today and forever."
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate('/hug-day')}
            className="mt-12 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto group"
          >
            Continue to Hug Day
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }

        @keyframes zoom-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-zoom-in {
          animation: zoom-in 0.8s ease-out 0.3s both;
        }

        @keyframes slide-in-stagger {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-stagger {
          animation: slide-in-stagger 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default PromiseDay;
