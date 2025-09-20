import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-purple-700" />
            </div>
          </div>
          <h1 className="font-montserrat font-bold text-3xl md:text-5xl text-purple-700 mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Your privacy is fundamental to our AI Solopreneurship coaching relationship. 
            This policy explains how we protect and use your information.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-purple-50 p-6 md:p-8 rounded-lg border-l-4 border-purple-700 mb-8">
              <p className="text-sm text-gray-600 mb-2">Last updated: {new Date().toLocaleDateString()}</p>
              <p className="text-purple-700 font-semibold">
                This Privacy Policy applies to all AI Solopreneurship coaching services, knowledge programs, 
                and workshops provided through this website.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-purple-700 mr-3" />
                  <h2 className="font-raleway font-semibold text-2xl md:text-3xl text-gray-900">
                    Information We Collect
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <h3 className="font-semibold text-lg">Personal Information</h3>
                  <p>When you engage with our AI Solopreneurship programs, we may collect:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name, email address, and contact information</li>
                    <li>Professional background and career details</li>
                    <li>Business goals and entrepreneurial aspirations</li>
                    <li>Workshop attendance and program participation data</li>
                    <li>Communication preferences and feedback</li>
                  </ul>
                  
                  <h3 className="font-semibold text-lg mt-6">Usage Information</h3>
                  <p>We automatically collect information about how you use our website and services:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Website navigation patterns and page views</li>
                    <li>Time spent on educational content and resources</li>
                    <li>Device information and browser type</li>
                    <li>IP address and general location data</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Eye className="h-6 w-6 text-purple-700 mr-3" />
                  <h2 className="font-raleway font-semibold text-2xl md:text-3xl text-gray-900">
                    How We Use Your Information
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>Your information helps us deliver exceptional AI Solopreneurship coaching:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide personalized coaching and program recommendations</li>
                    <li>Deliver knowledge programs and workshop materials</li>
                    <li>Send educational content about AI and solopreneurship</li>
                    <li>Improve our coaching methodologies and program effectiveness</li>
                    <li>Communicate about upcoming workshops and opportunities</li>
                    <li>Provide customer support and respond to inquiries</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Lock className="h-6 w-6 text-purple-700 mr-3" />
                  <h2 className="font-raleway font-semibold text-2xl md:text-3xl text-gray-900">
                    Information Protection
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>We implement robust security measures to protect your information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Encrypted data transmission and secure storage</li>
                    <li>Limited access to personal information on a need-to-know basis</li>
                    <li>Regular security audits and system updates</li>
                    <li>Secure payment processing for program enrollments</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-raleway font-semibold text-2xl md:text-3xl text-gray-900 mb-4">
                  Information Sharing
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>We do not sell, trade, or rent your personal information. We may share information only in these limited circumstances:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>With your explicit consent for testimonials or case studies</li>
                    <li>With trusted service providers who assist in program delivery</li>
                    <li>When required by law or to protect our legal rights</li>
                    <li>In connection with a business transfer or acquisition</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-raleway font-semibold text-2xl md:text-3xl text-gray-900 mb-4">
                  Your Rights and Choices
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>You have control over your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access and review your personal information</li>
                    <li>Request corrections to inaccurate information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Request deletion of your personal information</li>
                    <li>Withdraw consent for data processing</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-raleway font-semibold text-2xl md:text-3xl text-gray-900 mb-4">
                  Cookies and Tracking
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>We use cookies and similar technologies to enhance your experience:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Essential cookies for website functionality</li>
                    <li>Analytics cookies to understand user behavior</li>
                    <li>Preference cookies to remember your settings</li>
                  </ul>
                  <p>You can control cookie settings through your browser preferences.</p>
                </div>
              </div>

              <div>
                <h2 className="font-raleway font-semibold text-2xl md:text-3xl text-gray-900 mb-4">
                  Contact Us
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>If you have questions about this Privacy Policy or your personal information:</p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p><strong>Email:</strong> privacy@aisolopreneur.com</p>
                    <p><strong>Subject Line:</strong> Privacy Policy Inquiry</p>
                    <p><strong>Response Time:</strong> Within 48 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;