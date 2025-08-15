import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const name = "Karan";

  // Trigger animations on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 text-slate-800 px-6 sm:px-16 py-16"
      id="home"
      role="banner"
    >
      <div className="max-w-4xl text-center space-y-8">
        {/* Name with letter-by-letter animation */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="text-slate-700">Hi, I'm </span>

            <span className="relative">
              <span className="text-[#210E50] bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-extrabold">
                {name.split("").map((letter, index) => (
                  <span
                    key={index}
                    className="inline-block animate-letter-reveal"
                    style={{
                      animationDelay: `${0.5 + index * 0.1}s`,
                      animationFillMode: "both",
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
              {/* Animated underline */}
              <div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-underline"
                style={{ animationDelay: "1s" }}
              />
            </span>
          </h1>
        </div>

        {/* Professional Title */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-600 mb-6">
            Sheet Metal Stamping Simulation Engineer
          </h2>
        </div>

        {/* Description */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            I am a skilled Sheet Metal Stamping Simulation Engineer with deep
            expertise in advanced simulation techniques that optimize the
            manufacturability and efficiency of automotive parts. With extensive
            experience in the automotive sector, I design and test innovative
            solutions that enhance product durability and reduce production
            costs.
          </p>

          <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-3xl mx-auto">
            I strive to bridge the gap between complex engineering challenges
            and practical, scalable solutions that meet industry standards.
          </p>
        </div>

        {/* Call-to-Action Button */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 focus:outline-none focus:ring-4 focus:ring-purple-300"
            aria-label="Navigate to contact section"
          >
            <span className="relative z-10">Let's Connect</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Animated arrow */}
            <svg
              className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-sm text-slate-400 mb-2">
              Scroll to explore
            </span>
            <svg
              className="w-6 h-6 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes letterReveal {
          0% {
            opacity: 0;
            transform: translateY(20px) rotateX(-90deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }

        @keyframes underlineGrow {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 100%;
            opacity: 1;
          }
        }

        .animate-letter-reveal {
          animation: letterReveal 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          opacity: 0;
        }

        .animate-underline {
          animation: underlineGrow 0.8s ease-out forwards;
          width: 0;
        }
      `}</style>
    </section>
  );
};

export default HomePage;
