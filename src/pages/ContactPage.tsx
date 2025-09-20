import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    subject: '',
    message: '',
    interest: 'coaching'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="font-raleway font-semibold text-2xl text-gray-900 mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for your interest in AI Solopreneurship. I'll respond within 24 hours to discuss how we can transform your corporate expertise into entrepreneurial success.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  company: '',
                  role: '',
                  subject: '',
                  message: '',
                  interest: 'coaching'
                });
              }}
              className="btn-primary"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-montserrat font-bold text-3xl md:text-5xl text-purple-700 mb-6">
                Start Your AI Solopreneurship Journey
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                Ready to transform your corporate expertise into AI-powered solopreneurship? 
                Let's discuss how my knowledge programs and workshops can accelerate your transformation.
              </p>
              
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-3">
                  <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-700" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">coach@aisolopreneur.com</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-3">
                  <div className="bg-yellow-100 w-10 h-10 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Response Time</p>
                    <p className="text-sm text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/efh_20250716042821_849892_454dd_c4c46.jpg" 
                  alt="AI Solopreneurship Coach - Ready to Help"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Mascot accent */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-full p-2 shadow-lg">
                <img 
                  src="/mascot-removebg-preview (6).png" 
                  alt="AI Coach Mascot" 
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </div>
            </div>
          </div>
          
          {/* Credentials Trust Indicators */}
          <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
            <h4 className="font-semibold text-gray-900 mb-3 text-center">Certified AI Specialist</h4>
            <div className="flex flex-wrap justify-center gap-3">
              <img 
                src="/360-Digit.png" 
                alt="360DigiTMG Certified" 
                className="h-8 w-auto object-contain object-center"
              />
              <img 
                src="/Best-AI-Coach.png" 
                alt="Best AI Coach 2025" 
                className="h-8 w-auto object-contain object-center"
              />
              <img 
                src="/Outskill.png" 
                alt="Outskill Certified" 
                className="h-8 w-auto object-contain object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-raleway font-semibold text-2xl md:text-3xl text-gray-900 mb-4">
              Let's Discuss Your Transformation
            </h2>
            <p className="text-lg text-gray-600">
              Tell me about your corporate background and solopreneurial goals. 
              I'll recommend the perfect knowledge program or workshop for your journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your current employer"
                />
              </div>
              
              <div>
                <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your job title"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
                I'm Most Interested In *
              </label>
              <select
                id="interest"
                name="interest"
                required
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              >
                <option value="coaching">1-on-1 AI Solopreneurship Coaching</option>
                <option value="workshop">Group Workshops & Training</option>
                <option value="program">Knowledge Programs & Courses</option>
                <option value="speaking">Speaking Engagements</option>
                <option value="consulting">Corporate Consulting</option>
                <option value="other">Other - Please Specify</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="Brief subject line"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Tell Me About Your Goals *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Share your current situation, entrepreneurial goals, and what you'd like to achieve through AI Solopreneurship..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-raleway font-semibold text-2xl md:text-3xl text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                How quickly can I expect to see results from AI Solopreneurship?
              </h3>
              <p className="text-gray-600">
                Results vary based on your commitment and implementation. Most participants see initial 
                progress within 30-60 days, with significant transformation typically occurring within 
                3-6 months of consistent application.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Do I need technical experience to succeed with AI tools?
              </h3>
              <p className="text-gray-600">
                Not at all! My programs are designed for corporate professionals without technical backgrounds. 
                I focus on practical, user-friendly AI applications that enhance your existing expertise.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Can I maintain my corporate job while building my solopreneur business?
              </h3>
              <p className="text-gray-600">
                Absolutely! Many of my clients successfully transition gradually, building their AI-powered 
                businesses alongside their corporate careers before making the full transition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;