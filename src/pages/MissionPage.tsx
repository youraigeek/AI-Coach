import React from 'react';

const MissionPage = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-purple-700 mb-8">
                My Mission: Empowering Corporate Professionals
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                To transform ambitious corporate professionals into successful AI Solopreneurs through AI-powered strategies, 
                personalized coaching, and proven methodologies that bridge corporate expertise with AI Solopreneurship mastery.
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <img 
                  src="/mascot-removebg-preview (6).png" 
                  alt="AI Solopreneur Mascot" 
                  className="w-16 h-16 object-contain"
                />
                <div className="accent-text text-lg">
                  "Your corporate journey is the foundation of your AI Solopreneurship empire."
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/WhatsApp Image 2025-03-18 at 5.57.41 PM.jpeg" 
                  alt="AI Solopreneur Professional Mission"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-700/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;