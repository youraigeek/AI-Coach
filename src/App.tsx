import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MissionPage from './pages/MissionPage';
import ServicesPage from './pages/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Initialize Vapi widget after component mounts
    const initVapiWidget = () => {
      if (typeof window !== 'undefined' && window.document) {
        const existingWidget = document.querySelector('vapi-widget');
        if (!existingWidget) {
          const vapiWidget = document.createElement('vapi-widget');
          vapiWidget.setAttribute('assistant-id', '782931dc-51f9-4c96-9f99-a56f967264d2');
          vapiWidget.setAttribute('public-key', '45b82946-e45a-48e4-b450-a361346d45ed');
          document.body.appendChild(vapiWidget);
        }
      }
    };

    // Wait for the Vapi script to load
    const checkVapiScript = () => {
      if (window.VapiWidget || document.querySelector('script[src*="vapi-ai"]')) {
        initVapiWidget();
      } else {
        setTimeout(checkVapiScript, 100);
      }
    };

    checkVapiScript();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;