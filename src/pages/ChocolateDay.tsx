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
import { Heart, ArrowRight, Gift } from 'lucide-react';
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
  // Falling chocolates
  const chocolates = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 7 + Math.random() * 4,
  }));

const ChocolateDay = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-pink-100" style={{ border: '8px solid #d72660', borderRadius: '2.5rem', boxShadow: '0 0 40px 8px rgba(215, 38, 96, 0.15)' }}>
      {/* Falling chocolates */}
      {chocolates.map((choco) => (
        <div
          key={choco.id}
          className="absolute top-0 opacity-80"
          style={{
            left: `${choco.left}%`,
            animation: `fall-choco ${choco.duration}s linear infinite`,
            animationDelay: `${choco.delay}s`,
            zIndex: 2,
          }}
        >
          <span style={{ fontSize: 28, filter: 'drop-shadow(0 2px 8px #b5651d)' }}>🍫</span>
        </div>
      ))}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-rose-300 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-300 rounded-full animate-float-delay" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-rose-200 rounded-full animate-float-delay-2" />
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-pink-200 rounded-full animate-float" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div
          className={`max-w-4xl w-full transform transition-all duration-1000 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="text-center mb-12">
            <Gift className="w-16 h-16 md:w-24 md:h-24 text-rose-500 mx-auto mb-6 animate-bounce-slow" />
            <h1 className="text-4xl md:text-7xl font-bold text-rose-600 mb-6">
              Chocolate Day
            </h1>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-rose-200 animate-fade-in-scale relative">
            {/* Diagonal corner images */}
            <img src={photo1} alt="corner1" className="absolute left-0 top-0 w-20 h-20 rounded-xl border-2 border-rose-400 shadow-lg -translate-x-1/3 -translate-y-1/3" style={{zIndex: 3}} />
            <img src={photo2} alt="corner2" className="absolute right-0 bottom-0 w-20 h-20 rounded-xl border-2 border-rose-400 shadow-lg translate-x-1/3 translate-y-1/3" style={{zIndex: 3}} />
            <div className="space-y-6 text-center">
              <h2 className="text-3xl md:text-4xl font-serif text-rose-700 mb-4">
                Sweet Like Chocolate
              </h2>

              <div className="w-full aspect-video bg-gradient-to-br from-amber-100 to-rose-100 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
                <img src={photo3} alt="Chocolate Memory" className="relative z-10 w-auto h-5/6 max-h-[220px] rounded-2xl shadow-xl border-2 border-rose-300 object-cover" />
              </div>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Life with you is sweeter than the finest chocolate.
                Every moment spent with you is a treat I cherish deeply.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Just like chocolate brings joy to the soul, your presence brings happiness to my heart.
                You're the sweetness in my life, Shikha! 🍫
              </p>

              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="bg-rose-100 p-4 rounded-xl">
                  <Heart className="w-8 h-8 text-rose-500 mx-auto mb-2" fill="currentColor" />
                  <p className="text-sm text-rose-600 font-semibold">Sweet</p>
                </div>
                <div className="bg-pink-100 p-4 rounded-xl">
                  <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" fill="currentColor" />
                  <p className="text-sm text-pink-600 font-semibold">Caring</p>
                </div>
                <div className="bg-rose-100 p-4 rounded-xl">
                  <Heart className="w-8 h-8 text-rose-500 mx-auto mb-2" fill="currentColor" />
                  <p className="text-sm text-rose-600 font-semibold">Lovely</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate('/teddy-day')}
            className="mt-12 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto group"
          >
            Continue to Teddy Day
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <style>{`
                @keyframes fall-choco {
                  0% { top: -40px; opacity: 0.8; }
                  80% { opacity: 1; }
                  100% { top: 110vh; opacity: 0.7; }
                }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float 6s ease-in-out infinite 2s;
        }

        .animate-float-delay-2 {
          animation: float 6s ease-in-out infinite 4s;
        }

        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }

        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-scale {
          animation: fade-in-scale 0.8s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
};

export default ChocolateDay;
