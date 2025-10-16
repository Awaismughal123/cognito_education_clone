import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Courses', path: '/course-catalog', icon: 'BookOpen' },
    { name: 'Dashboard', path: '/student-dashboard', icon: 'LayoutDashboard' },
    { name: 'About', path: '/about', icon: 'Info' },
    { name: 'Contact', path: '/contact', icon: 'MessageCircle' }
  ];

  const secondaryItems = [
    { name: 'Individual Course', path: '/individual-course-pages', icon: 'GraduationCap' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location?.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const Logo = () => (
    <Link to="/homepage" className="flex items-center space-x-3 group">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center academic-transition group-hover:scale-105">
          <Icon name="GraduationCap" size={24} color="white" strokeWidth={2.5} />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-achievement-orange rounded-full flex items-center justify-center">
          <Icon name="Sparkles" size={10} color="white" strokeWidth={3} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-academic-navy group-hover:text-primary academic-transition">
          Cognito
        </span>
        <span className="text-xs text-subtle-gray font-medium -mt-1">
          Education
        </span>
      </div>
    </Link>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 academic-transition ${
        isScrolled ? 'academic-shadow' : ''
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium academic-transition ${
                  isActivePath(item?.path)
                    ? 'bg-primary/10 text-primary' :'text-reading-charcoal hover:bg-gray-50 hover:text-primary'
                }`}
              >
                <Icon name={item?.icon} size={18} strokeWidth={2} />
                <span>{item?.name}</span>
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-reading-charcoal hover:bg-gray-50 hover:text-primary academic-transition">
                <Icon name="MoreHorizontal" size={18} strokeWidth={2} />
                <span>More</span>
                <Icon name="ChevronDown" size={16} strokeWidth={2} />
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg academic-shadow border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible academic-transition">
                <div className="py-2">
                  {secondaryItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-3 px-4 py-2 text-sm academic-transition ${
                        isActivePath(item?.path)
                          ? 'bg-primary/10 text-primary' :'text-reading-charcoal hover:bg-gray-50 hover:text-primary'
                      }`}
                    >
                      <Icon name={item?.icon} size={18} strokeWidth={2} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-sm font-medium text-reading-charcoal hover:text-primary academic-transition"
            >
              Sign In
            </Link>
            <Button
              variant="default"
              className="bg-enrollment-orange hover:bg-achievement-orange text-white"
              iconName="ArrowRight"
              iconPosition="right"
              iconSize={16}
            >
              Start Learning
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-reading-charcoal hover:bg-gray-50 academic-transition"
            aria-label="Toggle mobile menu"
          >
            <Icon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              size={24} 
              strokeWidth={2} 
            />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div 
        className={`lg:hidden bg-white border-t border-gray-100 academic-transition ${
          isMobileMenuOpen 
            ? 'opacity-100 visible max-h-screen' :'opacity-0 invisible max-h-0 overflow-hidden'
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {[...navigationItems, ...secondaryItems]?.map((item) => (
            <Link
              key={item?.path}
              to={item?.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium academic-transition ${
                isActivePath(item?.path)
                  ? 'bg-primary/10 text-primary' :'text-reading-charcoal hover:bg-gray-50 hover:text-primary'
              }`}
            >
              <Icon name={item?.icon} size={20} strokeWidth={2} />
              <span>{item?.name}</span>
            </Link>
          ))}
          
          <div className="pt-4 border-t border-gray-100 space-y-2">
            <Link
              to="/login"
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-reading-charcoal hover:bg-gray-50 hover:text-primary academic-transition"
            >
              <Icon name="LogIn" size={20} strokeWidth={2} />
              <span>Sign In</span>
            </Link>
            
            <div className="px-4">
              <Button
                variant="default"
                fullWidth
                className="bg-enrollment-orange hover:bg-achievement-orange text-white"
                iconName="ArrowRight"
                iconPosition="right"
                iconSize={16}
              >
                Start Learning
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;