import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionSection = () => {
  const values = [
    {
      icon: "Target",
      title: "Accessibility",
      description: "Making quality education accessible to learners worldwide, regardless of background or location."
    },
    {
      icon: "Lightbulb",
      title: "Innovation",
      description: "Continuously evolving our platform with cutting-edge technology and pedagogical research."
    },
    {
      icon: "Heart",
      title: "Empowerment",
      description: "Empowering students to transform their potential into tangible achievements and career success."
    },
    {
      icon: "Shield",
      title: "Excellence",
      description: "Maintaining the highest standards of educational content and learning experiences."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Compass" size={20} color="var(--color-primary)" strokeWidth={2} />
            <span className="text-primary font-medium">Our Mission</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-academic-navy mb-6">
            Transform Your Potential Into
            <span className="block text-achievement-orange">Achievement</span>
          </h2>
          
          <p className="text-xl text-reading-charcoal max-w-4xl mx-auto leading-relaxed">
            We believe that quality education should be accessible to everyone. Our mission is to democratize learning by combining traditional educational rigor with modern digital convenience, creating an environment where complex subjects become approachable while maintaining academic integrity.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values?.map((value, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 academic-transition">
                  <Icon name={value?.icon} size={32} color="white" strokeWidth={2} />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-achievement-orange rounded-full flex items-center justify-center">
                  <Icon name="Sparkles" size={12} color="white" strokeWidth={3} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-academic-navy mb-3">{value?.title}</h3>
              <p className="text-reading-charcoal leading-relaxed">{value?.description}</p>
            </div>
          ))}
        </div>

        {/* Key Messages */}
        <div className="mt-20 bg-gradient-to-r from-muted to-gray-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 academic-transition">
                <Icon name="Clock" size={24} color="white" strokeWidth={2.5} />
              </div>
              <h3 className="text-lg font-bold text-academic-navy mb-2">Master Any Subject</h3>
              <p className="text-reading-charcoal">At Your Own Pace</p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 academic-transition">
                <Icon name="Users" size={24} color="white" strokeWidth={2.5} />
              </div>
              <h3 className="text-lg font-bold text-academic-navy mb-2">Quality Education</h3>
              <p className="text-reading-charcoal">For Everyone</p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-achievement-orange rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 academic-transition">
                <Icon name="TrendingUp" size={24} color="white" strokeWidth={2.5} />
              </div>
              <h3 className="text-lg font-bold text-academic-navy mb-2">Transform Potential</h3>
              <p className="text-reading-charcoal">Into Achievement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;