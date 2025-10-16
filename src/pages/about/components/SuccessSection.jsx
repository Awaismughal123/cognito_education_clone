import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SuccessSection = () => {
  const [activeStory, setActiveStory] = useState(0);

  const successStories = [
  {
    name: "Alex Thompson",
    age: 22,
    course: "Computer Science Fundamentals",
    image: "https://images.unsplash.com/photo-1713456047082-4e844b81c494",
    imageAlt: "Young professional man with short brown hair wearing casual button-up shirt smiling at camera in modern office",
    beforeGrade: "D+",
    afterGrade: "A-",
    improvement: "85%",
    story: "I was struggling with programming concepts until I found Cognito. The interactive coding exercises and personalized feedback helped me go from failing to excelling in my computer science degree.",
    outcome: "Landed internship at Microsoft",
    timeframe: "6 months"
  },
  {
    name: "Maria Rodriguez",
    age: 28,
    course: "Advanced Mathematics",
    image: "https://images.unsplash.com/photo-1684262855358-88f296a2cfc2",
    imageAlt: "Professional Hispanic woman with long dark hair wearing navy blazer smiling confidently in bright office setting",
    beforeGrade: "C",
    afterGrade: "A+",
    improvement: "92%",
    story: "As a working mother returning to education, I needed flexible learning. Cognito's adaptive pace and comprehensive support helped me master calculus while balancing work and family.",
    outcome: "Accepted to Engineering Masters",
    timeframe: "8 months"
  },
  {
    name: "David Chen",
    age: 19,
    course: "Physics & Chemistry",
    image: "https://images.unsplash.com/photo-1496552019417-f5eff42eaba1",
    imageAlt: "Young Asian man with glasses wearing casual gray sweater studying with books in university library setting",
    beforeGrade: "C-",
    afterGrade: "A",
    improvement: "88%",
    story: "The visual learning approach and interactive simulations made complex physics concepts finally click for me. I went from barely passing to becoming a tutor for other students.",
    outcome: "Physics Department Award",
    timeframe: "4 months"
  }];


  const metrics = [
  {
    icon: "TrendingUp",
    value: "98%",
    label: "Course Completion Rate",
    description: "Students who start finish their courses"
  },
  {
    icon: "Award",
    value: "87%",
    label: "Grade Improvement",
    description: "Average grade increase after completion"
  },
  {
    icon: "Users",
    value: "94%",
    label: "Student Satisfaction",
    description: "Would recommend to friends"
  },
  {
    icon: "Target",
    value: "76%",
    label: "Career Advancement",
    description: "Achieved career goals within 1 year"
  }];


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 rounded-full px-4 py-2 mb-6">
            <Icon name="TrendingUp" size={20} color="var(--color-success)" strokeWidth={2} />
            <span className="text-success font-medium">Success Stories</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-academic-navy mb-6">
            Measurable Outcomes &
            <span className="block text-success">Student Achievements</span>
          </h2>
          
          <p className="text-xl text-reading-charcoal max-w-3xl mx-auto leading-relaxed">
            Real students, real results. See how our platform has transformed academic performance and career trajectories for thousands of learners worldwide.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics?.map((metric, index) =>
          <div key={index} className="group text-center">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 academic-shadow hover:shadow-xl academic-transition">
                <div className="w-16 h-16 bg-gradient-to-br from-success to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 academic-transition">
                  <Icon name={metric?.icon} size={24} color="white" strokeWidth={2.5} />
                </div>
                
                <div className="text-3xl font-bold text-academic-navy mb-2">{metric?.value}</div>
                <div className="text-lg font-semibold text-success mb-2">{metric?.label}</div>
                <div className="text-sm text-subtle-gray">{metric?.description}</div>
              </div>
            </div>
          )}
        </div>

        {/* Student Success Carousel */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-academic-navy mb-4">Student Success Stories</h3>
            <p className="text-reading-charcoal">Real transformations from our learning community</p>
          </div>

          {/* Story Navigation */}
          <div className="flex justify-center space-x-4 mb-8">
            {successStories?.map((_, index) =>
            <button
              key={index}
              onClick={() => setActiveStory(index)}
              className={`w-3 h-3 rounded-full academic-transition ${
              activeStory === index ? 'bg-success' : 'bg-gray-300'}`
              } />

            )}
          </div>

          {/* Active Story */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Story Content */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 overflow-hidden rounded-2xl">
                  <Image
                    src={successStories?.[activeStory]?.image}
                    alt={successStories?.[activeStory]?.imageAlt}
                    className="w-full h-full object-cover" />

                </div>
                <div>
                  <h4 className="text-xl font-bold text-academic-navy">{successStories?.[activeStory]?.name}</h4>
                  <p className="text-success font-medium">{successStories?.[activeStory]?.course}</p>
                  <p className="text-sm text-subtle-gray">Age {successStories?.[activeStory]?.age}</p>
                </div>
              </div>
              
              <blockquote className="text-lg text-reading-charcoal leading-relaxed mb-6 italic">
                "{successStories?.[activeStory]?.story}"
              </blockquote>
              
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} color="var(--color-subtle-gray)" strokeWidth={2} />
                  <span className="text-subtle-gray">{successStories?.[activeStory]?.timeframe}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={16} color="var(--color-success)" strokeWidth={2} />
                  <span className="text-success font-medium">{successStories?.[activeStory]?.outcome}</span>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 academic-shadow">
                <h5 className="text-lg font-bold text-academic-navy mb-4">Performance Improvement</h5>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-subtle-gray">Before Cognito</span>
                    <span className="text-2xl font-bold text-error">{successStories?.[activeStory]?.beforeGrade}</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-error to-success h-2 rounded-full academic-transition"
                      style={{ width: `${successStories?.[activeStory]?.improvement}%` }}>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-subtle-gray">After Cognito</span>
                    <span className="text-2xl font-bold text-success">{successStories?.[activeStory]?.afterGrade}</span>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <div className="text-3xl font-bold text-success">{successStories?.[activeStory]?.improvement}%</div>
                  <div className="text-sm text-subtle-gray">Overall Improvement</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-success to-primary rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their academic performance and achieved their goals with Cognito Education.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-success px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 academic-transition flex items-center justify-center space-x-2">
                <Icon name="Play" size={20} strokeWidth={2.5} />
                <span>Watch Success Stories</span>
              </button>
              <button className="bg-achievement-orange text-white px-8 py-3 rounded-xl font-semibold hover:bg-enrollment-orange academic-transition flex items-center justify-center space-x-2">
                <Icon name="ArrowRight" size={20} strokeWidth={2.5} />
                <span>Start Your Journey</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default SuccessSection;