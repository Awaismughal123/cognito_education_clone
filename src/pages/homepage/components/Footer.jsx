import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: "Courses",
      links: [
        { name: "Mathematics", href: "/course-catalog?category=mathematics" },
        { name: "Science", href: "/course-catalog?category=science" },
        { name: "Computer Science", href: "/course-catalog?category=computer-science" },
        { name: "Test Preparation", href: "/course-catalog?category=test-prep" },
        { name: "All Courses", href: "/course-catalog" }
      ]
    },
    {
      title: "Platform",
      links: [
        { name: "Student Dashboard", href: "/student-dashboard" },
        { name: "Course Catalog", href: "/course-catalog" },
        { name: "Individual Courses", href: "/individual-course-pages" },
        { name: "Mobile App", href: "#mobile-app" },
        { name: "API Documentation", href: "#api-docs" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Careers", href: "#careers" },
        { name: "Press", href: "#press" },
        { name: "Blog", href: "#blog" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#help" },
        { name: "Community Forum", href: "#forum" },
        { name: "Live Chat", href: "#chat" },
        { name: "System Status", href: "#status" },
        { name: "Contact Support", href: "/contact" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "Facebook", href: "#facebook", color: "hover:text-blue-600" },
    { name: "Twitter", icon: "Twitter", href: "#twitter", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: "Linkedin", href: "#linkedin", color: "hover:text-blue-700" },
    { name: "Instagram", icon: "Instagram", href: "#instagram", color: "hover:text-pink-600" },
    { name: "YouTube", icon: "Youtube", href: "#youtube", color: "hover:text-red-600" }
  ];

  const trustBadges = [
    {
      icon: "Shield",
      text: "SSL Secured",
      description: "256-bit encryption"
    },
    {
      icon: "Award",
      text: "Accredited",
      description: "Educational standards"
    },
    {
      icon: "Users",
      text: "50K+ Students",
      description: "Worldwide community"
    },
    {
      icon: "Star",
      text: "4.9/5 Rating",
      description: "Student satisfaction"
    }
  ];

  const handleNewsletterSubmit = (e) => {
    e?.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription submitted');
  };

  return (
    <footer className="bg-academic-navy text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-6 py-2 mb-6">
              <Icon name="Mail" size={20} color="white" strokeWidth={2} />
              <span className="font-semibold">Stay Updated</span>
            </div>
            
            <h3 className="text-3xl font-bold mb-4">
              Get the Latest Learning Resources
            </h3>
            
            <p className="text-white/80 text-lg mb-8">
              Subscribe to our newsletter for study tips, new course announcements, and exclusive educational content delivered to your inbox.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex space-x-4">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-white/10 border-white/20 text-white placeholder-white/60"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  variant="default"
                  className="bg-achievement-orange hover:bg-achievement-orange/90 text-white px-8"
                  iconName="Send"
                  iconPosition="right"
                  iconSize={16}
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-white/60 text-sm mt-3">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </form>
          </div>
        </div>
      </div>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/homepage" className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" size={28} color="white" strokeWidth={2.5} />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-achievement-orange rounded-full flex items-center justify-center">
                  <Icon name="Sparkles" size={12} color="white" strokeWidth={3} />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">Cognito</span>
                <span className="text-sm text-white/80 font-medium -mt-1">Education</span>
              </div>
            </Link>

            <p className="text-white/80 mb-6 leading-relaxed">
              Democratizing quality education through technology. Transform your potential into achievement with our comprehensive learning platform designed for academic excellence.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.href}
                  className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/80 ${social?.color} academic-transition`}
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={20} strokeWidth={2} />
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              {trustBadges?.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon name={badge?.icon} size={16} color="var(--color-achievement-orange)" strokeWidth={2} />
                  <div>
                    <div className="text-sm font-semibold text-white">{badge?.text}</div>
                    <div className="text-xs text-white/60">{badge?.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections?.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="text-lg font-bold text-white mb-6">{section?.title}</h4>
              <ul className="space-y-3">
                {section?.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link?.href}
                      className="text-white/80 hover:text-white academic-transition text-sm"
                    >
                      {link?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/60 text-sm">
              © {currentYear} Cognito Education. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-white/60 hover:text-white academic-transition">
                Privacy Policy
              </a>
              <a href="#terms" className="text-white/60 hover:text-white academic-transition">
                Terms of Service
              </a>
              <a href="#cookies" className="text-white/60 hover:text-white academic-transition">
                Cookie Policy
              </a>
              <a href="#accessibility" className="text-white/60 hover:text-white academic-transition">
                Accessibility
              </a>
            </div>

            {/* Language & Region */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-white/60 hover:text-white academic-transition text-sm">
                <Icon name="Globe" size={16} strokeWidth={2} />
                <span>English (US)</span>
                <Icon name="ChevronDown" size={14} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-white/60 text-sm max-w-4xl mx-auto">
              Cognito Education is committed to providing accessible, high-quality education to learners worldwide. 
              Our platform complies with international educational standards and accessibility guidelines to ensure 
              an inclusive learning experience for all students.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;