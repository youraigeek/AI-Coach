import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg p-1 shadow-md">
                <img 
                  src="/mascot-removebg-preview (6).png" 
                  alt="AI Solopreneur Logo" 
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </div>
              <span className="font-montserrat font-bold text-xl">
                AI<span className="text-purple-400">Solopreneur</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering corporate professionals to build their dream businesses through AI transformation and strategic coaching.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-raleway font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About Me', path: '/about' },
                { name: 'My Mission', path: '/mission' },
                { name: 'Services', path: '/services' },
                { name: 'Testimonials', path: '/testimonials' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-1">
            <h4 className="font-raleway font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms of Service', path: '/terms' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="md:col-span-1">
            <h4 className="font-raleway font-semibold text-lg mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:coach@example.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>solopreneur@example.com</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} AI Solopreneur. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Built with ❤️ for aspiring entrepreneurs
            </p>
          </div>
        </div>
      </div>

      {/* Vapi Voice and Chat Widget */}
      <vapi-widget 
        assistant-id="782931dc-51f9-4c96-9f99-a56f967264d2" 
        public-key="45b82946-e45a-48e4-b450-a361346d45ed">
      </vapi-widget>
    </footer>
  );
};

export default Footer;