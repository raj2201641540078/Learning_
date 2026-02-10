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
          {/* Main themed image */}
          <div className="w-full aspect-video bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
            <img src={photo8} alt="Valentine Memory" className="relative z-10 w-auto h-5/6 max-h-[220px] rounded-2xl shadow-xl border-2 border-rose-300 object-cover" />
          </div>
import { useEffect, useState } from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

// Valentine photo gallery with animation
const valentinePhotos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10];
function ValentinePhotoGallery() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="w-full aspect-video bg-gradient-to-br from-red-100 via-pink-100 to-rose-100 rounded-2xl flex items-center justify-center mb-8 border-4 border-rose-200 relative overflow-hidden">
      <div className={`grid grid-cols-2 md:grid-cols-5 gap-4 w-full h-full px-4 py-4 ${selected !== null ? 'pointer-events-none opacity-40 blur-sm' : ''}`}>
        {valentinePhotos.map((img, i) => (
          <div key={i} className="flex items-center justify-center">
            <img
              src={img}
              alt={`valentine-${i}`}
              className="rounded-xl shadow-lg border-2 border-rose-400 cursor-pointer transition-all duration-300 hover:scale-110"
              style={{ width: '100%', height: 110, objectFit: 'cover' }}
              onClick={() => setSelected(i)}
            />
          </div>
        ))}
      </div>
      {selected !== null && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/40" onClick={() => setSelected(null)}>
          <div className="relative flex flex-col items-center justify-center animate-pop-in" style={{maxWidth: 420}}>
            <img
              src={valentinePhotos[selected]}
              alt={`valentine-big-${selected}`}
              className="rounded-2xl border-4 border-rose-500 shadow-2xl transition-all duration-500"
              style={{ width: 320, height: 320, objectFit: 'cover' }}
            />
            <div className="absolute bottom-6 left-0 right-0 text-center text-3xl md:text-4xl font-bold text-white drop-shadow-lg animate-fade-in-slow" style={{textShadow: '0 2px 12px #d72660'}}>
              I love you my wife
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const ValentineDay = () => {
  const [visible, setVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setVisible(true);
    setTimeout(() => setShowMessage(true), 1000);
  }, []);

  const confetti = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 3,
    color: ['bg-rose-400', 'bg-pink-400', 'bg-red-400', 'bg-purple-400'][Math.floor(Math.random() * 4)],
  }));

  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 4 + Math.random() * 2,
  }));

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-200 via-pink-100 to-red-100" style={{ border: '8px solid #d72660', borderRadius: '2.5rem', boxShadow: '0 0 40px 8px rgba(215, 38, 96, 0.15)' }}>
      {confetti.map((item) => (
        <div
          key={`confetti-${item.id}`}
          className={`absolute w-3 h-3 ${item.color} animate-confetti`}
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
          }}
        />
      ))}

      {hearts.map((heart) => (
        <div
          key={`heart-${heart.id}`}
          className="absolute animate-float-up"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          <Heart className="text-rose-400 w-8 h-8" fill="currentColor" />
        </div>
      ))}

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div
          className={`max-w-5xl w-full transform transition-all duration-1000 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <div className="text-center mb-12">
            <div className="relative inline-block mb-8">
              <Heart className="w-24 h-24 md:w-40 md:h-40 text-rose-500 mx-auto animate-mega-heartbeat" fill="currentColor" />
              <Star className="absolute -top-4 -right-4 w-12 h-12 text-yellow-400 animate-spin-slow" fill="currentColor" />
              <Star className="absolute -bottom-4 -left-4 w-12 h-12 text-yellow-400 animate-spin-slow" fill="currentColor" />
              <Sparkles className="absolute top-1/2 -right-8 w-10 h-10 text-pink-400 animate-bounce" />
              <Sparkles className="absolute top-1/2 -left-8 w-10 h-10 text-pink-400 animate-bounce" />
            </div>

            <h1 className="text-5xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 animate-gradient-text">
              Happy Valentine's Day!
            </h1>

            <h2 className="text-3xl md:text-5xl font-serif text-rose-700 mb-8 animate-fade-in-delay">
              & Girlfriend Day 💖
            </h2>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-16 shadow-2xl border-4 border-rose-300 animate-scale-bounce">
            <div className="space-y-8 text-center">
              <h2 className="text-4xl md:text-5xl font-serif text-rose-700 mb-6">
                To My Beloved Shikha Singh
              </h2>

              <div className="w-full aspect-video bg-gradient-to-br from-red-100 via-pink-100 to-rose-100 rounded-2xl flex items-center justify-center mb-8 border-4 border-rose-200 relative overflow-hidden">
                <img src={photo9} alt="corner1" className="absolute left-0 top-0 w-20 h-20 rounded-xl border-2 border-rose-400 shadow-lg -translate-x-1/3 -translate-y-1/3" style={{zIndex: 3}} />
                <img src={photo10} alt="corner2" className="absolute right-0 bottom-0 w-20 h-20 rounded-xl border-2 border-rose-400 shadow-lg translate-x-1/3 translate-y-1/3" style={{zIndex: 3}} />
                <ValentinePhotoGallery />
              </div>

              {showMessage && (
                <div className="space-y-6 animate-fade-in-slow">
                  <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-serif">
                    You are the love of my life, my best friend, and my forever partner.
                  </p>

                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                    Every day with you feels like Valentine's Day. You fill my world with colors,
                    my heart with love, and my life with endless happiness.
                  </p>

                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                    From the moment I wake up to the moment I sleep, you're always on my mind.
                    Your smile is my sunshine, your laughter is my favorite song.
                  </p>

                  <div className="bg-gradient-to-r from-rose-100 via-pink-100 to-red-100 p-8 rounded-2xl my-8 border-2 border-rose-300">
                    <p className="text-3xl md:text-4xl font-serif italic text-rose-800 mb-4">
                      "I love you more than words can express,
                    </p>
                    <p className="text-3xl md:text-4xl font-serif italic text-rose-800 mb-4">
                      more than actions can show,
                    </p>
                    <p className="text-3xl md:text-4xl font-serif italic text-rose-800">
                      and more than you'll ever know."
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mt-12">
                    <div className="bg-rose-100 p-6 rounded-2xl border-2 border-rose-300 animate-bounce-in" style={{ animationDelay: '0.5s' }}>
                      <Heart className="w-12 h-12 text-rose-500 mx-auto mb-3" fill="currentColor" />
                      <h3 className="text-rose-700 font-bold text-xl mb-2">Forever</h3>
                      <p className="text-gray-600">You & Me</p>
                    </div>
                    <div className="bg-pink-100 p-6 rounded-2xl border-2 border-pink-300 animate-bounce-in" style={{ animationDelay: '0.7s' }}>
                      <Heart className="w-12 h-12 text-pink-500 mx-auto mb-3" fill="currentColor" />
                      <h3 className="text-pink-700 font-bold text-xl mb-2">Always</h3>
                      <p className="text-gray-600">Together</p>
                    </div>
                    <div className="bg-red-100 p-6 rounded-2xl border-2 border-red-300 animate-bounce-in" style={{ animationDelay: '0.9s' }}>
                      <Heart className="w-12 h-12 text-red-500 mx-auto mb-3" fill="currentColor" />
                      <h3 className="text-red-700 font-bold text-xl mb-2">Eternally</h3>
                      <p className="text-gray-600">In Love</p>
                    </div>
                  </div>

                  <div className="mt-12 p-8 bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 rounded-2xl text-white">
                    <p className="text-3xl md:text-5xl font-bold mb-4">
                      I Love You, Shikha! ❤️
                    </p>
                    <p className="text-xl md:text-2xl">
                      Now. Forever. Always.
                    </p>
                    <div className="flex justify-center gap-3 mt-6 text-4xl">
                      💕 💖 💗 💓 💝
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <a href="/memories">
          <button className="memory-btn">
            Our Memory
          </button>
        </a>
      </div>

      <style>{`
        .memory-btn {
          background: linear-gradient(90deg, #d72660 0%, #fbbfca 100%);
          color: #fff;
          font-size: 1.5rem;
          font-weight: bold;
          padding: 1rem 3rem;
          border: none;
          border-radius: 1.2rem;
          cursor: pointer;
          box-shadow: 0 2px 12px rgba(215, 38, 96, 0.12);
          transition: background 0.3s, transform 0.2s;
          margin-top: 2rem;
        }
        .memory-btn:hover {
          background: linear-gradient(90deg, #fbbfca 0%, #d72660 100%);
          transform: scale(1.08);
        }
        @keyframes confetti {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        .animate-confetti {
          animation: confetti linear infinite;
        }

        @keyframes float-up {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(1);
            opacity: 0;
          }
        }

        .animate-float-up {
          animation: float-up linear infinite;
        }

        @keyframes mega-heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          5%, 15% {
            transform: scale(1.3);
          }
          10%, 20% {
            transform: scale(1.1);
          }
        }

        .animate-mega-heartbeat {
          animation: mega-heartbeat 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        @keyframes gradient-text {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 4s ease infinite;
        }

        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.8s both;
        }

        .animate-fade-in-slow {
          animation: fadeIn 1.5s ease-out both;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-bounce {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          60% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-scale-bounce {
          animation: scale-bounce 0.8s ease-out 0.5s both;
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0) translateY(20px);
          }
          50% {
            transform: scale(1.1) translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default ValentineDay;
