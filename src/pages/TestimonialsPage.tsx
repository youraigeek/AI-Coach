import React from 'react';

const TestimonialsPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-montserrat font-bold text-3xl md:text-5xl text-purple-700 mb-6">
                AI Solopreneurship Success Stories
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                Discover how corporate professionals have transformed their careers into thriving 
                AI-powered solopreneur businesses through my knowledge programs and coaching.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/WhatsApp Image 2025-03-18 at 5.57.42 PM (1).jpeg" 
                  alt="AI Solopreneurship Success Stories"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Mascot accent */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-full p-2 shadow-lg">
                <img 
                  src="/mascot.png" 
                  alt="AI Coach Mascot" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-raleway font-semibold text-2xl md:text-3xl text-gray-900 mb-4">
              Transformation Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real results from corporate professionals who embraced AI Solopreneurship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial cards with professional context */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <img src="/mascot.png" alt="Success" className="w-8 h-8 object-contain" />
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">Corporate Executive</h4>
                  <p className="text-sm text-gray-600">Fortune 500 Company</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "The AI Solopreneurship program transformed my perspective on leveraging corporate experience. 
                Within 6 months, I launched my consulting practice using AI tools I never knew existed."
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <img src="/mascot.png" alt="Success" className="w-8 h-8 object-contain" />
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">Marketing Director</h4>
                  <p className="text-sm text-gray-600">Tech Industry</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "The knowledge programs provided exactly what I needed to transition from corporate marketing 
                to running my own AI-powered marketing agency. The ROI has been incredible."
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <img src="/mascot.png" alt="Success" className="w-8 h-8 object-contain" />
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">Operations Manager</h4>
                  <p className="text-sm text-gray-600">Manufacturing</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "I never thought my operations background could translate to solopreneurship. 
                The AI tools and strategies opened up possibilities I hadn't considered."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;