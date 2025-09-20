import React from 'react';
import { Award, Briefcase, GraduationCap, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-purple-700 mb-6">
                About Your AI Solopreneurship Guide
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I'm passionate about bridging the gap between corporate expertise and AI Solopreneurship success, 
                using the power of artificial intelligence to accelerate your transformation journey.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-purple-700 rounded-full"></div>
                <span className="accent-text">
                  "Every corporate professional has an AI Solopreneur waiting to emerge."
                </span>
              </div>
            </div>
            <div className="relative">
              {/* Professional Photo */}
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/WhatsApp Image 2025-03-18 at 5.57.40 PM.jpeg" 
                  alt="AI Coach in Professional Setting"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-700/20 rounded-full blur-xl"></div>
              
              {/* Mascot accent */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-white rounded-full p-2 shadow-lg">
                <img 
                  src="/mascot-removebg-preview (6).png" 
                  alt="AI Coach Mascot" 
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-raleway font-semibold text-3xl md:text-4xl text-gray-900 mb-6">
              My Professional Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From corporate boardrooms to entrepreneurial breakthrough, my path has been defined by 
              continuous learning, strategic thinking, and a passion for helping others succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="font-raleway font-semibold text-lg mb-3">Corporate Leadership</h3>
              <p className="text-gray-600 text-sm">
                Years of experience in corporate environments, understanding the challenges and 
                opportunities that ambitious professionals face daily.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-raleway font-semibold text-lg mb-3">AI Specialization</h3>
              <p className="text-gray-600 text-sm">
                Deep expertise in artificial intelligence applications, machine learning strategies, 
                and emerging technology trends that drive business innovation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="font-raleway font-semibold text-lg mb-3">Proven Success</h3>
              <p className="text-gray-600 text-sm">
                Track record of helping professionals transition from corporate careers to 
                successful entrepreneurship using strategic AI implementation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-raleway font-semibold text-lg mb-3">Passionate Mentor</h3>
              <p className="text-gray-600 text-sm">
                Dedicated to empowering others through personalized coaching, strategic guidance, 
                and unwavering support throughout their transformation journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Credentials */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-raleway font-semibold text-2xl md:text-3xl text-gray-900 mb-4">
              Professional Certifications & Recognition
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Validated expertise in AI implementation, productivity optimization, and transformational coaching
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* 360DigiTMG AI Certification */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
              <div className="text-center">
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-white shadow-md">
                  <img 
                    src="/360-Digit.png" 
                    alt="360DigiTMG AI @ Work: A 10X Productivity Series Certificate"
                    className="w-full h-full object-contain object-center p-2"
                  />
                </div>
                <h3 className="font-raleway font-semibold text-lg text-gray-900 mb-2">
                  AI @ Work: 10X Productivity
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  360DigiTMG, Malaysia
                </p>
                <div className="bg-blue-100 px-3 py-1 rounded-full inline-block">
                  <span className="text-xs font-semibold text-blue-700">Certified AI Specialist</span>
                </div>
              </div>
            </div>

            {/* Best AI Coach Recognition */}
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-yellow-100">
              <div className="text-center">
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-900 shadow-md">
                  <img 
                    src="/Best-AI-Coach.png" 
                    alt="Best AI Coach - Business Growth Summit 2025"
                    className="w-full h-full object-contain object-center p-2"
                  />
                </div>
                <h3 className="font-raleway font-semibold text-lg text-gray-900 mb-2">
                  Best AI Coach 2025
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Business Growth Summit
                </p>
                <div className="bg-yellow-100 px-3 py-1 rounded-full inline-block">
                  <span className="text-xs font-semibold text-yellow-700">Industry Recognition</span>
                </div>
              </div>
            </div>

            {/* Outskill Certification */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100">
              <div className="text-center">
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-white shadow-md">
                  <img 
                    src="/Outskill.png" 
                    alt="Outskill Professional Certification"
                    className="w-full h-full object-contain object-center p-2"
                  />
                </div>
                <h3 className="font-raleway font-semibold text-lg text-gray-900 mb-2">
                  Professional Development
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Outskill Certification
                </p>
                <div className="bg-purple-100 px-3 py-1 rounded-full inline-block">
                  <span className="text-xs font-semibold text-purple-700">Skill Validation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Credentials Summary */}
          <div className="mt-12 bg-gradient-to-r from-purple-50 to-yellow-50 rounded-2xl p-8 text-center">
            <h3 className="font-raleway font-semibold text-xl text-gray-900 mb-4">
              Validated AI Solopreneurship Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">AI Implementation & Productivity</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-700">Industry-Recognized Coaching</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Professional Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="font-raleway font-semibold text-3xl text-gray-900 mb-8 text-center">
              My Story: From Corporate Professional to AI Entrepreneur
            </h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-700 mb-6 leading-relaxed">
                <span className="accent-text text-2xl">"</span>Like many ambitious professionals, I spent years climbing the corporate ladder, 
                accumulating expertise and building valuable networks. But deep down, I knew I was meant for more. 
                The AI Solopreneurship fire burned within me, yet the path seemed unclear and risky.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                My breakthrough came when I discovered how artificial intelligence could bridge the gap between 
                corporate knowledge and AI Solopreneurship success. AI wasn't just a tool—it was a force multiplier 
                that could accelerate business building, optimize operations, and create competitive advantages 
                that previously required large teams and substantial resources.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Today, I've transformed my corporate experience into multiple successful ventures, and more 
                importantly, I've developed a proven methodology that I'm passionate about sharing with other 
                ambitious professionals who dream of building their own business empires.
              </p>
              
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-700">
                <p className="accent-text text-xl mb-0">
                  "Your corporate experience isn't a limitation—it's your greatest AI Solopreneurship asset. 
                  Combined with AI, it becomes unstoppable."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-700 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-raleway font-bold text-3xl md:text-4xl text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's work together to transform your corporate expertise into AI Solopreneurship success, 
            powered by cutting-edge AI strategies and personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="btn-secondary text-lg px-10 py-4">
              Start Your Journey Today
            </a>
            <a href="/mission" className="text-white border-2 border-white hover:bg-white hover:text-purple-700 px-10 py-4 rounded-lg font-semibold transition-all duration-300">
              Learn About My Mission
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;