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
import { Heart, ArrowRight, Smile } from 'lucide-react';

const TeddyDay = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-rose-50" style={{ border: '8px solid #d72660', borderRadius: '2.5rem', boxShadow: '0 0 40px 8px rgba(215, 38, 96, 0.15)' }}>
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-random"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <Heart className="text-rose-200 w-8 h-8 opacity-30" fill="currentColor" />
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
            <Smile className="w-16 h-16 md:w-24 md:h-24 text-rose-500 mx-auto mb-6 animate-wiggle" />
            <h1 className="text-4xl md:text-7xl font-bold text-rose-600 mb-6">
              Teddy Day
            </h1>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-rose-200 animate-slide-in">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl md:text-4xl font-serif text-rose-700 mb-4">
                My Cuddly Love
              </h2>

              <div className="w-full aspect-video bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
                <img src={photo9} alt="corner1" className="absolute left-0 top-0 w-20 h-20 rounded-xl border-2 border-rose-400 shadow-lg -translate-x-1/3 -translate-y-1/3" style={{zIndex: 3}} />
                <img src={photo10} alt="corner2" className="absolute right-0 bottom-0 w-20 h-20 rounded-xl border-2 border-rose-400 shadow-lg translate-x-1/3 translate-y-1/3" style={{zIndex: 3}} />
                <img src={photo4} alt="Teddy Memory" className="relative z-10 w-auto h-5/6 max-h-[220px] rounded-2xl shadow-xl border-2 border-rose-300 object-cover" />
              </div>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Just like a teddy bear brings comfort and warmth,
                your presence in my life brings me endless peace and happiness.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                I want to hold you close, cuddle you tight, and never let you go.
                You're my forever teddy, my comfort zone, my home. 🧸
              </p>

              <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-2xl mt-6">
                <p className="text-rose-600 italic text-lg">
                  "In your arms, I found my safest place, my warmest hug, and my greatest love."
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate('/promise-day')}
            className="mt-12 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto group"
          >
            Continue to Promise Day
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes wiggle {
          0%, 100% {
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }

        .animate-wiggle {
          animation: wiggle 1s ease-in-out infinite;
        }

        @keyframes float-random {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }

        .animate-float-random {
          animation: float-random 10s ease-in-out infinite;
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.8s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
};

export default TeddyDay;
