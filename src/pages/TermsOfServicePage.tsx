import React from 'react';
import { FileCheck, Users, AlertTriangle, Scale } from 'lucide-react';

const TermsOfServicePage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center">
              <Scale className="h-8 w-8 text-purple-700" />
            </div>
          </div>
          <h1 className="font-montserrat font-bold text-3xl md:text-5xl text-purple-700 mb-6">
            Terms of Service
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Clear terms governing our AI Solopreneurship coaching relationship and 
            the knowledge programs designed to transform your professional journey.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-purple-50 p-6 md:p-8 rounded-lg border-l-4 border-purple-700 mb-8">
              <p className="text-sm text-gray-600 mb-2">Last updated: {new Date().toLocaleDateString()}</p>
              <p className="text-purple-700 font-semibold">
                By accessing our AI Solopreneurship coaching services, knowledge programs, and workshops, 
                you agree to these terms and conditions.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <FileCheck className="h-6 w-6 text-purple-700 mr-3" />
                  <h2 className="font-raleway font-semibold text-2xl md:text-3xl text-gray-900">
                    Service Description
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>Our AI Solopreneurship coaching services include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Knowledge Programs:</strong> Structured learning experiences designed to help corporate professionals transition to AI-powered solopreneurship</li>
                    <li><strong>Workshops:</strong> Interactive sessions covering AI tools, business strategies, and entrepreneurial mindset development</li>
                    <li><strong>Coaching Sessions:</strong> Personalized guidance tailored to your professional background and solopreneurial goals</li>
                    <li><strong>Educational Resources:</strong> Access to curated content, templates, and AI implementation guides</li>
                    <li><strong>Community Access:</strong> Connection with like-minded professionals on similar transformation journeys</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-purple-700 mr-3" />
                  <h2 className="font-raleway font-semibold text-2xl md:text-3xl text-gray-900">
                    Eligibility and Enrollment
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <h3 className="font-semibold text-lg">Who Can Participate</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Corporate professionals seeking entrepreneurial transformation</li>
                    <li>Individuals committed to building AI-powered solo businesses</li>
                    <li>Participants must be 18 years or older</li>
                    <li>Access to reliable internet connection for online components</li>
                  </ul>
                  
                  <h3 className="font-semibold text-lg mt-6">Enrollment Process</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Complete application and assessment process</li>
                    <li>Provide accurate professional and contact information</li>
                    <li>Commit to active participation in selected programs</li>
                    <li>Payment of applicable program fees</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-raleway font-semibold text-2xl md:text-3xl text-gray-900 mb-4">
                  Payment Terms
                </h2>
                <div className="space-y-4 text-gray-700">
                  <h3 className="font-semibold text-lg">Program Fees</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>All fees are clearly stated before enrollment</li>
                    <li>Payment is required prior to program access</li>
                    <li>Payment plans may be available for select programs</li>
                    <li>Prices are subject to change with 30 days notice</li>
                  </ul>
                  
                  <h3 className="font-semibold text-lg mt-6">Refund Policy</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>7-day money-back guarantee for knowledge programs</li>
                    <li>Workshop fees are non-refundable within 48 hours of start date</li>
                    <li>Coaching packages: pro-rated refunds available within first 30 days</li>
                    <li>Refund requests must be submitted in writing</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-raleway font-semibold text-2xl md:text-3xl text-gray-900 mb-4">
                  Participant Responsibilities
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>To maximize your AI Solopreneurship transformation, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Actively participate in all program components</li>
                    <li>Complete assignments and implement recommended strategies</li>
                    <li>Maintain confidentiality of proprietary methodologies</li>
                    <li>Respect other participants and maintain professional conduct</li>
                    <li>Provide honest feedback to improve program effectiveness</li>
                    <li>Take responsibility for your own business decisions and outcomes</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-purple-700 mr-3" />
                  <h2 className="font-raleway font-semibold text-2xl md:text-3xl text-gray-900">
                    Important Disclaimers
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <h3 className="font-semibold text-lg">Results and Expectations</h3>
                  <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                    <p className="font-semibold text-yellow-800 mb-2">No Guarantee of Business Success</p>
                    <p>While our AI Solopreneurship programs provide proven strategies and tools, individual results vary. Success depends on your effort, market conditions, and implementation of learned concepts. We do not guarantee specific income levels or business outcomes.</p>
                  </div>
                  
                  <h3 className="font-semibold text-lg mt-6">Educational Nature</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Our programs are educational and coaching-based</li>
                    <li>We do not provide legal, financial, or tax advice</li>
                    <li>Consult appropriate professionals for specific business decisions</li>
                    <li>AI tools and strategies are subject to technological changes</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-raleway font-semibold text-2xl md:text-3xl text-gray-900 mb-4">
                  Intellectual Property
                </h2>
                <div className="space-y-4 text-gray-700">
                  <h3 className="font-semibold text-lg">Our Content</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>All program materials, methodologies, and content are proprietary</li>
                    <li>The term "AI Solopreneurship" and related branding are our intellectual property</li>
                    <li>Participants receive limited license for personal use only</li>
                    <li>Reproduction or distribution of materials is prohibited</li>
                  </ul>
                  
                  <h3 className="font-semibold text-lg mt-6">Your Content</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You retain ownership of your business ideas and implementations</li>
                    <li>We may use anonymized case studies for educational purposes</li>
                    <li>Testimonials and feedback may be used in marketing materials</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-raleway font-semibold text-2xl md:text-3xl text-gray-900 mb-4">
                  Limitation of Liability
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>Our liability is limited to the amount you paid for the specific program or service. We are not liable for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Business losses or missed opportunities</li>
                    <li>Indirect, consequential, or punitive damages</li>
                    <li>Technical issues or platform downtime</li>
                    <li>Third-party AI tool changes or limitations</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-raleway font-semibold text-2xl md:text-3xl text-gray-900 mb-4">
                  Termination
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>Either party may terminate the coaching relationship:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>With 30 days written notice for ongoing programs</li>
                    <li>Immediately for violation of these terms</li>
                    <li>Upon completion of agreed program duration</li>
                  </ul>
                  <p>Upon termination, access to materials and community will be revoked, but completed work remains yours.</p>
                </div>
              </div>

              <div>
                <h2 className="font-raleway font-semibold text-2xl md:text-3xl text-gray-900 mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>For questions about these Terms of Service:</p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p><strong>Email:</strong> legal@aicoach.com</p>
                    <p><strong>Subject Line:</strong> Terms of Service Inquiry</p>
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

export default TermsOfServicePage;