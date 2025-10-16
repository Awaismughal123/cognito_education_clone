import React from 'react';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import LiveChatWidget from './components/LiveChatWidget';
import FAQSection from './components/FAQSection';
import SupportTicketForm from './components/SupportTicketForm';
import CommunityForum from './components/CommunityForum';
import OfficeHours from './components/OfficeHours';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-16">
        <ContactHero />
        <ContactMethods />
        <FAQSection />
        <SupportTicketForm />
        <OfficeHours />
        <CommunityForum />
      </main>
      {/* Live Chat Widget */}
      <LiveChatWidget />
      {/* Footer */}
      <footer className="bg-academic-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Cognito Education</h3>
                  <p className="text-white/70 text-sm">Empowering minds, transforming futures</p>
                </div>
              </div>
              <p className="text-white/80 mb-6 max-w-md">
                We're committed to providing exceptional educational support and fostering a community where every learner can thrive.
              </p>
              <div className="space-y-2 text-sm text-white/80">
                <p>📧 support@cognitoeducation.com</p>
                <p>📞 1-800-COGNITO (1-800-264-6486)</p>
                <p>🕒 24/7 Support Available</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="/homepage" className="hover:text-white academic-transition">Home</a></li>
                <li><a href="/course-catalog" className="hover:text-white academic-transition">Courses</a></li>
                <li><a href="/student-dashboard" className="hover:text-white academic-transition">Dashboard</a></li>
                <li><a href="/about" className="hover:text-white academic-transition">About</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#faq" className="hover:text-white academic-transition">FAQ</a></li>
                <li><a href="#community" className="hover:text-white academic-transition">Community</a></li>
                <li><a href="#office-hours" className="hover:text-white academic-transition">Office Hours</a></li>
                <li><a href="#contact" className="hover:text-white academic-transition">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; {new Date()?.getFullYear()} Cognito Education. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;