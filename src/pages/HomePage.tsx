import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Target, Users, TrendingUp, Play } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-yellow-50">
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            {/* Professional Photo */}
            <div 
              className="w-56 h-72 mx-auto mb-8 rounded-2xl border-4 border-white shadow-2xl ring-4 ring-purple-200"
              style={{
                backgroundImage: "url('/efh_20250716040759_894008_1b2db_322b1.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat'
              }}
              role="img"
              aria-label="AI Transformational Coach - Professional Portrait"
            >
            </div>

            <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-purple-700 mb-6">
              Transform Your Corporate Career Into Your
              <span className="block text-yellow-600 mt-2">
                AI Solopreneurship Success
              </span>
            </h1>

            <p className="font-open-sans text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              I'm your AI Generalist and Transformational Coach, empowering ambitious corporate professionals 
              to leverage artificial intelligence and build their own AI Solopreneurship empire.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/contact" className="btn-primary text-lg px-10 py-4 inline-flex items-center">
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Link>
              <Link to="/mission" className="btn-outline text-lg px-10 py-4">
                Learn My Mission
              </Link>
            </div>

            {/* Mascot Video Section */}
            <div className="relative max-w-md mx-auto">
              <div className="bg-gradient-to-br from-yellow-50 to-purple-50 rounded-xl p-8 shadow-xl border-2 border-white">
                <div className="text-center mb-4">
                  <img 
                    src="/mascot.png" 
                    alt="AI Coach Mascot" 
                    className="w-32 h-32 mx-auto mb-4 drop-shadow-lg"
                  />
                  <h3 className="font-raleway font-semibold text-lg text-purple-700 mb-2">
                    Meet Your AI Transformation Guide
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Your friendly companion on the journey from corporate professional to business owner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Trust Bar */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <p className="text-sm text-gray-600 font-medium">CERTIFIED AI SPECIALIST & RECOGNIZED COACH</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-lg shadow-sm">
              <img 
                src="/360-Digit.png" 
                alt="360DigiTMG Certified" 
                className="h-8 w-auto object-contain"
              />
              <span className="text-xs font-semibold text-gray-700">AI Productivity Certified</span>
            </div>
            <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-lg shadow-sm">
              <img 
                src="/Best-AI-Coach.png" 
                alt="Best AI Coach 2025" 
                className="h-8 w-auto object-contain"
              />
              <span className="text-xs font-semibold text-gray-700">Best AI Coach 2025</span>
            </div>
            <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-lg shadow-sm">
              <img 
                src="/Outskill.png" 
                alt="Outskill Certified" 
                className="h-8 w-auto object-contain"
              />
              <span className="text-xs font-semibold text-gray-700">Professional Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Professional credibility section */}
          <div className="flex justify-center mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="w-24 h-24 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/KKK07405.JPG" 
                  alt="Professional Portrait 1"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-24 h-24 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/KKK07840.JPG" 
                  alt="Professional Portrait 2"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-24 h-24 bg-purple-50 rounded-lg flex items-center justify-center shadow-lg">
                <img 
                  src="/mascot.png" 
                  alt="AI Coach Mascot" 
                  className="w-16 h-16 object-contain drop-shadow-sm"
                />
              </div>
              <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-yellow-100 rounded-lg flex items-center justify-center shadow-lg">
                <Sparkles className="h-8 w-8 text-purple-700" />
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="font-raleway font-semibold text-3xl md:text-4xl text-gray-900 mb-4">
              Why Choose AI-Powered Transformation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In today's rapidly evolving business landscape, AI isn't just an advantage—it's essential. 
              Let me guide you through leveraging AI to build the business you've always dreamed of.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <Sparkles className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="font-raleway font-semibold text-xl mb-4">AI-First Approach</h3>
              <p className="text-gray-600">
                Learn to integrate cutting-edge AI tools and strategies that give you a competitive edge 
                in any industry you choose to enter.
              </p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors duration-300">
                <Target className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-raleway font-semibold text-xl mb-4">Strategic Guidance</h3>
              <p className="text-gray-600">
                Get personalized coaching tailored to your corporate background and entrepreneurial 
                aspirations, with actionable strategies for success.
              </p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <TrendingUp className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="font-raleway font-semibold text-xl mb-4">Proven Results</h3>
              <p className="text-gray-600">
                Join successful professionals who have transformed their careers into thriving 
                businesses using our AI-powered methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-700 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="font-raleway font-bold text-3xl md:text-4xl text-white mb-6">
              Ready to Build Your Business Empire?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Don't let another day pass dreaming about entrepreneurial success. 
              Take the first step toward transforming your corporate experience into business mastery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="btn-secondary text-lg px-10 py-4">
                Schedule Your Consultation
              </Link>
              <Link to="/about" className="text-white border-2 border-white hover:bg-white hover:text-purple-700 px-10 py-4 rounded-lg font-semibold transition-all duration-300">
                Learn About My Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;