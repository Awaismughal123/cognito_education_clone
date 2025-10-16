import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const InstructorSection = () => {
  const instructors = [
  {
    name: "Dr. Emily Watson",
    subject: "Mathematics & Physics",
    image: "https://images.unsplash.com/photo-1617565980755-d57f254b0ba7",
    imageAlt: "Professional headshot of blonde woman with glasses wearing white lab coat in university laboratory setting",
    credentials: ["PhD Physics - Harvard", "15 Years Teaching", "Published Researcher"],
    philosophy: "Making complex mathematical concepts accessible through visual learning and real-world applications.",
    rating: 4.9,
    students: "45,000+"
  },
  {
    name: "Prof. David Kim",
    subject: "Computer Science & AI",
    image: "https://images.unsplash.com/photo-1629272039203-7d76fdaf1324",
    imageAlt: "Professional headshot of Asian man with short black hair wearing dark suit jacket against modern office background",
    credentials: ["PhD Computer Science - MIT", "Former Google AI Lead", "Tech Innovation Expert"],
    philosophy: "Bridging the gap between theoretical computer science and practical industry applications.",
    rating: 4.8,
    students: "38,000+"
  },
  {
    name: "Dr. Maria Santos",
    subject: "Biology & Chemistry",
    image: "https://images.unsplash.com/photo-1672867209978-1183d00d4714",
    imageAlt: "Professional headshot of Hispanic woman with long dark hair wearing navy blazer in modern laboratory environment",
    credentials: ["PhD Biochemistry - Stanford", "Medical Research Background", "Science Communication Expert"],
    philosophy: "Inspiring curiosity about life sciences through hands-on experiments and interactive learning.",
    rating: 4.9,
    students: "52,000+"
  }];


  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-scholarly-teal/10 rounded-full px-4 py-2 mb-6">
            <Icon name="UserCheck" size={20} color="var(--color-scholarly-teal)" strokeWidth={2} />
            <span className="text-scholarly-teal font-medium">Expert Instructors</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-academic-navy mb-6">
            World-Class Educators &
            <span className="block text-scholarly-teal">Teaching Excellence</span>
          </h2>
          
          <p className="text-xl text-reading-charcoal max-w-3xl mx-auto leading-relaxed">
            Our instructors combine deep subject expertise with innovative teaching methodologies, bringing years of academic and industry experience to every course.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {instructors?.map((instructor, index) =>
          <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 academic-shadow hover:shadow-xl academic-transition overflow-hidden">
                {/* Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto overflow-hidden rounded-2xl">
                    <Image
                    src={instructor?.image}
                    alt={instructor?.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 academic-transition" />

                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute -top-2 -right-2 bg-achievement-orange rounded-full px-3 py-1 flex items-center space-x-1">
                    <Icon name="Star" size={14} color="white" strokeWidth={2.5} />
                    <span className="text-white text-sm font-bold">{instructor?.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-academic-navy mb-1">{instructor?.name}</h3>
                  <p className="text-scholarly-teal font-medium mb-4">{instructor?.subject}</p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-center space-x-4 mb-6 text-sm text-subtle-gray">
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={14} color="var(--color-subtle-gray)" strokeWidth={2} />
                      <span>{instructor?.students}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={14} color="var(--color-achievement-orange)" strokeWidth={2} />
                      <span>{instructor?.rating}/5</span>
                    </div>
                  </div>
                  
                  {/* Philosophy */}
                  <p className="text-reading-charcoal text-sm leading-relaxed mb-6 italic">
                    "{instructor?.philosophy}"
                  </p>
                  
                  {/* Credentials */}
                  <div className="space-y-2">
                    {instructor?.credentials?.map((credential, credIndex) =>
                  <div key={credIndex} className="flex items-center justify-center space-x-2 text-xs text-subtle-gray">
                        <Icon name="Award" size={12} color="var(--color-scholarly-teal)" strokeWidth={2} />
                        <span>{credential}</span>
                      </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Teaching Philosophy */}
        <div className="bg-gradient-to-r from-scholarly-teal to-primary rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Icon name="BookOpen" size={24} color="white" strokeWidth={2.5} />
                </div>
                <span className="text-lg font-medium text-white/90">Teaching Philosophy</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-6">Excellence in Education</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Our instructors are carefully selected not just for their expertise, but for their ability to inspire and engage students. Each brings a unique blend of academic rigor and practical experience.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} color="white" strokeWidth={2.5} />
                  <span className="text-white/90">Personalized learning approaches</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} color="white" strokeWidth={2.5} />
                  <span className="text-white/90">Real-world application focus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} color="white" strokeWidth={2.5} />
                  <span className="text-white/90">Continuous student support</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-white/90 text-sm">Expert Instructors</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">4.8</div>
                <div className="text-white/90 text-sm">Average Rating</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-white/90 text-sm">Student Satisfaction</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-white/90 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default InstructorSection;