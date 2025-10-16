import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import FounderSection from './components/FounderSection';
import TimelineSection from './components/TimelineSection';
import InstructorSection from './components/InstructorSection';
import SuccessSection from './components/SuccessSection';
import MethodologySection from './components/MethodologySection';
import PartnershipsSection from './components/PartnershipsSection';
import TeamSection from './components/TeamSection';
import Icon from '../../components/AppIcon';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-16">
        <HeroSection />
        <MissionSection />
        <FounderSection />
        <TimelineSection />
        <InstructorSection />
        <SuccessSection />
        <MethodologySection />
        <PartnershipsSection />
        <TeamSection />
      </main>
      {/* Footer */}
      <footer className="bg-academic-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" size={24} color="white" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">Cognito</span>
                  <span className="text-xs text-white/70 font-medium -mt-1">Education</span>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Democratizing quality education through technology, making learning accessible and effective for everyone.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 academic-transition">
                  <Icon name="Facebook" size={20} color="white" strokeWidth={2} />
                </button>
                <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 academic-transition">
                  <Icon name="Twitter" size={20} color="white" strokeWidth={2} />
                </button>
                <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 academic-transition">
                  <Icon name="Linkedin" size={20} color="white" strokeWidth={2} />
                </button>
                <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 academic-transition">
                  <Icon name="Youtube" size={20} color="white" strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="/homepage" className="text-white/80 hover:text-white academic-transition">Home</a></li>
                <li><a href="/course-catalog" className="text-white/80 hover:text-white academic-transition">Courses</a></li>
                <li><a href="/student-dashboard" className="text-white/80 hover:text-white academic-transition">Dashboard</a></li>
                <li><a href="/about" className="text-white/80 hover:text-white academic-transition">About Us</a></li>
                <li><a href="/contact" className="text-white/80 hover:text-white academic-transition">Contact</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/80 hover:text-white academic-transition">Help Center</a></li>
                <li><a href="#" className="text-white/80 hover:text-white academic-transition">Community</a></li>
                <li><a href="#" className="text-white/80 hover:text-white academic-transition">Privacy Policy</a></li>
                <li><a href="#" className="text-white/80 hover:text-white academic-transition">Terms of Service</a></li>
                <li><a href="#" className="text-white/80 hover:text-white academic-transition">Accessibility</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Mail" size={20} color="white" strokeWidth={2} />
                  <div>
                    <p className="text-white/80">support@cognito-education.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Phone" size={20} color="white" strokeWidth={2} />
                  <div>
                    <p className="text-white/80">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={20} color="white" strokeWidth={2} />
                  <div>
                    <p className="text-white/80">123 Education Street<br />San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {new Date()?.getFullYear()} Cognito Education. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} color="white" strokeWidth={2} />
                <span className="text-white/60 text-sm">Secure & Trusted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} color="white" strokeWidth={2} />
                <span className="text-white/60 text-sm">Accredited</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;