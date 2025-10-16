import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-br from-academic-navy via-primary to-secondary py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Icon name="MessageCircle" size={40} color="white" strokeWidth={2} />
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            We're Here to Help
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get the support you need to succeed in your learning journey. Our dedicated team is ready to assist you 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-white/90">
              <Icon name="Clock" size={20} strokeWidth={2} />
              <span className="text-sm font-medium">24/7 Support Available</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Icon name="Users" size={20} strokeWidth={2} />
              <span className="text-sm font-medium">Active Community</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Icon name="Zap" size={20} strokeWidth={2} />
              <span className="text-sm font-medium">Quick Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;