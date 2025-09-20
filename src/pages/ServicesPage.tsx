import React from 'react';

const ServicesPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-montserrat font-bold text-3xl md:text-5xl text-purple-700 mb-6">
                AI Solopreneurship Coaching Services
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                Transform your corporate expertise into AI-powered solopreneurship success through 
                my comprehensive knowledge programs and strategic workshops.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/WhatsApp Image 2025-03-18 at 5.57.42 PM.jpeg" 
                  alt="AI Solopreneur - Services"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Mascot accent */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-full p-2 shadow-lg">
                <img 
                  src="/mascot-removebg-preview (6).png" 
                  alt="AI Solopreneur Mascot" 
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Expertise */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-raleway font-semibold text-2xl md:text-3xl text-gray-900 mb-4">
              Backed by Proven Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              My AI Solopreneurship programs are built on certified expertise and industry recognition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-raleway font-semibold text-xl text-gray-900 mb-6">
                Professional Certifications
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                  <img 
                    src="/360-Digit.png" 
                    alt="360DigiTMG" 
                    className="h-12 w-auto object-contain object-center"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">AI @ Work: 10X Productivity</h4>
                    <p className="text-sm text-gray-600">360DigiTMG Malaysia - Advanced AI Implementation</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                  <img 
                    src="/Best-AI-Coach.png" 
                    alt="Best AI Solopreneur" 
                    className="h-12 w-auto object-contain object-center"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Best AI Solopreneur 2025</h4>
                    <p className="text-sm text-gray-600">Business Growth Summit - Industry Recognition</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                  <img 
                    src="/Outskill.png" 
                    alt="Outskill" 
                    className="h-12 w-auto object-contain object-center"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Professional Development</h4>
                    <p className="text-sm text-gray-600">Outskill - Continuous Learning & Growth</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-yellow-100 rounded-2xl p-8">
              <h3 className="font-raleway font-semibold text-xl text-gray-900 mb-4">
                Why Credentials Matter
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Validated expertise in AI implementation and productivity optimization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <span>Industry recognition as a leading AI solopreneur and transformation specialist</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Commitment to continuous learning and professional development</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <span>Proven methodologies backed by certified training programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-raleway font-semibold text-2xl md:text-3xl text-gray-900 mb-4">
              Knowledge Programs & Workshops
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Designed specifically for corporate professionals ready to leverage AI in building their solopreneur empire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service cards with professional images */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/mascot-removebg-preview (6).png" alt="AI Solopreneur" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="font-raleway font-semibold text-lg text-center mb-3">1-on-1 AI Coaching</h3>
              <p className="text-gray-600 text-center text-sm">
                Personalized coaching sessions to develop your AI Solopreneurship strategy and implementation plan.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/mascot-removebg-preview (6).png" alt="AI Solopreneur" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="font-raleway font-semibold text-lg text-center mb-3">Group Workshops</h3>
              <p className="text-gray-600 text-center text-sm">
                Interactive workshops covering AI tools, business strategies, and transformation methodologies.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/mascot-removebg-preview (6).png" alt="AI Solopreneur" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="font-raleway font-semibold text-lg text-center mb-3">Knowledge Programs</h3>
              <p className="text-gray-600 text-center text-sm">
                Comprehensive learning programs designed to accelerate your AI Solopreneurship journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;