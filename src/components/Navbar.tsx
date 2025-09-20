import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Mission', path: '/mission' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
    { name: 'Privacy', path: '/privacy' },
    { name: 'Terms', path: '/terms' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-white rounded-lg p-1 group-hover:scale-105 transition-transform duration-200 shadow-md">
              <img 
                src="/mascot-removebg-preview (6).png" 
                alt="AI Coach Logo" 
                className="w-full h-full object-contain drop-shadow-sm"
              />
            </div>
            <span className="font-montserrat font-bold text-xl text-gray-900">
              AI<span className="text-purple-700">Coach</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-purple-700 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-700 hover:bg-purple-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="btn-primary text-sm px-6 py-2"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-700 hover:bg-purple-50 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-purple-700 bg-purple-50'
                    : 'text-gray-700 hover:text-purple-700 hover:bg-purple-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full btn-primary text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;