import React, { useEffect, useState } from "react";

import image1 from "../../assets/lastone/img1.png";

const image = image1;

export default function StripLayout() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-6 sm:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            Progressive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Strip Layout
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Optimized progressive die strip layouts designed for high-volume
            production efficiency and maximum material utilization.
          </p>
        </div>

        {/* Main Content */}
        <div
          className={`mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
            <img
              src={image}
              alt="Progressive Strip Layout Design"
              className="w-full h-full "
            />
            <div className="p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Advanced Strip Design Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl">
                  <span className="text-3xl block mb-3">🏭</span>
                  <h3 className="font-semibold text-slate-800 mb-2">
                    High-Volume Production
                  </h3>
                  <p className="text-sm text-slate-600">
                    Optimized for continuous manufacturing processes
                  </p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl">
                  <span className="text-3xl block mb-3">📐</span>
                  <h3 className="font-semibold text-slate-800 mb-2">
                    Precision Layout
                  </h3>
                  <p className="text-sm text-slate-600">
                    Accurate positioning and material flow control
                  </p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-purple-50 rounded-xl">
                  <span className="text-3xl block mb-3">💰</span>
                  <h3 className="font-semibold text-slate-800 mb-2">
                    Cost Efficiency
                  </h3>
                  <p className="text-sm text-slate-600">
                    Minimized waste and optimized material usage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div
          className={`text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-3xl font-bold mb-2">20%</div>
                <div className="text-sm opacity-90">Material Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">35%</div>
                <div className="text-sm opacity-90">Faster Production</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-sm opacity-90">Precision Accuracy</div>
              </div>
            </div>
            <a
              href="#contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
