import React from 'react';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
  const milestones = [
    {
      year: "2019",
      title: "Foundation",
      description: "Cognito Education founded with a vision to democratize quality education through technology.",
      icon: "Rocket",
      stats: "2 Founders"
    },
    {
      year: "2020",
      title: "First Courses",
      description: "Launched our first 50 courses covering mathematics, science, and programming fundamentals.",
      icon: "BookOpen",
      stats: "50 Courses"
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Reached 100,000 students worldwide and expanded to 15 different subject areas.",
      icon: "Globe",
      stats: "100K Students"
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Introduced AI-powered personalized learning paths and adaptive assessment systems.",
      icon: "Brain",
      stats: "AI-Powered"
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Received EdTech Innovation Award and partnerships with leading universities.",
      icon: "Award",
      stats: "Award Winner"
    },
    {
      year: "2024",
      title: "Platform Evolution",
      description: "Launched advanced features including virtual labs, peer collaboration, and certification programs.",
      icon: "Zap",
      stats: "500K+ Students"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-achievement-orange/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Clock" size={20} color="var(--color-achievement-orange)" strokeWidth={2} />
            <span className="text-achievement-orange font-medium">Our Journey</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-academic-navy mb-6">
            Platform Evolution &
            <span className="block text-achievement-orange">Milestones</span>
          </h2>
          
          <p className="text-xl text-reading-charcoal max-w-3xl mx-auto leading-relaxed">
            From a simple idea to a global platform serving hundreds of thousands of students. Here's how we've grown and evolved over the years.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-achievement-orange rounded-full hidden lg:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones?.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 academic-shadow hover:shadow-xl academic-transition group">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 academic-transition">
                        <Icon name={milestone?.icon} size={24} color="white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-achievement-orange">{milestone?.year}</div>
                        <div className="text-sm text-subtle-gray font-medium">{milestone?.stats}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-academic-navy mb-3">{milestone?.title}</h3>
                    <p className="text-reading-charcoal leading-relaxed">{milestone?.description}</p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-primary rounded-full hidden lg:block z-10">
                  <div className="w-full h-full bg-primary rounded-full animate-pulse"></div>
                </div>

                {/* Spacer for opposite side */}
                <div className="w-full lg:w-5/12 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Stats */}
        <div className="mt-20 bg-gradient-to-r from-academic-navy via-primary to-secondary rounded-3xl p-8 lg:p-12">
          <div className="text-center text-white mb-8">
            <h3 className="text-3xl font-bold mb-4">Where We Stand Today</h3>
            <p className="text-white/90 text-lg">Continuing our mission to transform education globally</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div className="group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 academic-transition backdrop-blur-sm">
                <Icon name="Users" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div className="text-3xl font-bold mb-2">500K+</div>
              <div className="text-white/90">Active Students</div>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 academic-transition backdrop-blur-sm">
                <Icon name="BookOpen" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div className="text-3xl font-bold mb-2">1,200+</div>
              <div className="text-white/90">Courses</div>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 academic-transition backdrop-blur-sm">
                <Icon name="Globe" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-white/90">Countries</div>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 academic-transition backdrop-blur-sm">
                <Icon name="Award" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-white/90">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;