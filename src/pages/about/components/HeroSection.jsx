import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-academic-navy via-primary to-secondary py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-white rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Icon name="GraduationCap" size={24} color="white" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-medium text-white/90">About Cognito Education</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Democratizing Quality
              <span className="block text-achievement-orange">Education</span>
              <span className="block">for Everyone</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We bridge traditional educational rigor with modern digital convenience, creating an environment where learning feels both challenging and achievable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-3 text-white/90">
                <div className="w-8 h-8 bg-achievement-orange rounded-full flex items-center justify-center">
                  <Icon name="Users" size={16} color="white" strokeWidth={2.5} />
                </div>
                <span className="font-medium">500,000+ Students</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <div className="w-8 h-8 bg-achievement-orange rounded-full flex items-center justify-center">
                  <Icon name="BookOpen" size={16} color="white" strokeWidth={2.5} />
                </div>
                <span className="font-medium">1,200+ Courses</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <div className="w-8 h-8 bg-achievement-orange rounded-full flex items-center justify-center">
                  <Icon name="Award" size={16} color="white" strokeWidth={2.5} />
                </div>
                <span className="font-medium">95% Success Rate</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1592303637753-ce1e6b8a0ffb"
                alt="Diverse group of students collaborating on laptops in modern classroom setting with natural lighting"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl academic-shadow" />

            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 academic-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} color="var(--color-primary)" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-academic-navy">98%</div>
                  <div className="text-sm text-subtle-gray">Completion Rate</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-achievement-orange rounded-xl p-6 academic-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Icon name="Star" size={24} color="white" strokeWidth={2.5} />
                </div>
                <div className="text-white">
                  <div className="text-2xl font-bold">4.9</div>
                  <div className="text-sm opacity-90">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;