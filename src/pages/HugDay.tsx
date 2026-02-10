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
import { Heart, ArrowRight, Users } from 'lucide-react';

const HugDay = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200" style={{ border: '8px solid #d72660', borderRadius: '2.5rem', boxShadow: '0 0 40px 8px rgba(215, 38, 96, 0.15)' }}>
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 10}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Heart
              className="text-rose-300 opacity-20 animate-pulse-wave"
              style={{ animationDelay: `${i * 0.3}s` }}
              fill="currentColor"
            />
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
            <Users className="w-16 h-16 md:w-24 md:h-24 text-rose-500 mx-auto mb-6 animate-hug" />
            <h1 className="text-4xl md:text-7xl font-bold text-rose-600 mb-6">
              Hug Day
            </h1>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-rose-200 animate-fade-in-up">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl md:text-4xl font-serif text-rose-700 mb-4">
                Wrapped in Your Love
              </h2>

              <div className="w-full aspect-video bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
                <img src={photo9} alt="corner1" className="absolute left-0 top-0 w-20 h-20 rounded-xl border-2 border-rose-400 shadow-lg -translate-x-1/3 -translate-y-1/3" style={{zIndex: 3}} />
                <img src={photo10} alt="corner2" className="absolute right-0 bottom-0 w-20 h-20 rounded-xl border-2 border-rose-400 shadow-lg translate-x-1/3 translate-y-1/3" style={{zIndex: 3}} />
                <img src={photo6} alt="Hug Memory" className="relative z-10 w-auto h-5/6 max-h-[220px] rounded-2xl shadow-xl border-2 border-rose-300 object-cover" />
              </div>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Your hugs are my sanctuary, where all my worries fade away
                and I feel completely at peace. In your arms, I've found my home.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Every embrace from you tells me that everything will be alright.
                Your warmth is my comfort, your arms are my safe place. 🤗
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-rose-50 p-6 rounded-2xl border border-rose-200">
                  <Heart className="w-10 h-10 text-rose-500 mx-auto mb-3" fill="currentColor" />
                  <h3 className="text-rose-600 font-semibold text-lg mb-2">Comfort</h3>
                  <p className="text-gray-600">Your hugs heal my soul</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-2xl border border-pink-200">
                  <Heart className="w-10 h-10 text-pink-500 mx-auto mb-3" fill="currentColor" />
                  <h3 className="text-pink-600 font-semibold text-lg mb-2">Warmth</h3>
                  <p className="text-gray-600">Your embrace warms my heart</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-rose-100 to-pink-100 p-6 rounded-2xl mt-6">
                <p className="text-rose-700 text-xl font-serif italic">
                  "I could stay in your arms forever, and it still wouldn't be long enough."
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate('/kiss-day')}
            className="mt-12 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto group"
          >
            Continue to Kiss Day
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes hug {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        .animate-hug {
          animation: hug 2s ease-in-out infinite;
        }

        @keyframes pulse-wave {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.4;
          }
        }

        .animate-pulse-wave {
          animation: pulse-wave 3s ease-in-out infinite;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
};

export default HugDay;
