import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const MethodologySection = () => {
  const methodologies = [
  {
    icon: "Brain",
    title: "Adaptive Learning",
    description: "AI-powered system that adjusts to your learning pace and style, ensuring optimal comprehension.",
    features: ["Personalized pathways", "Real-time adjustments", "Learning analytics"]
  },
  {
    icon: "Users",
    title: "Collaborative Learning",
    description: "Peer-to-peer interaction and group projects that enhance understanding through discussion.",
    features: ["Study groups", "Peer reviews", "Community forums"]
  },
  {
    icon: "Zap",
    title: "Interactive Content",
    description: "Engaging multimedia content with simulations, quizzes, and hands-on exercises.",
    features: ["Virtual labs", "Interactive simulations", "Gamified learning"]
  },
  {
    icon: "Target",
    title: "Outcome-Based",
    description: "Clear learning objectives with measurable outcomes and continuous assessment.",
    features: ["Progress tracking", "Skill assessments", "Certification paths"]
  }];


  const learningSteps = [
  {
    step: "01",
    title: "Assess",
    description: "Initial assessment to understand your current knowledge level and learning preferences.",
    icon: "Search"
  },
  {
    step: "02",
    title: "Personalize",
    description: "AI creates a customized learning path tailored to your goals and pace.",
    icon: "Settings"
  },
  {
    step: "03",
    title: "Engage",
    description: "Interactive lessons with multimedia content, exercises, and real-world applications.",
    icon: "Play"
  },
  {
    step: "04",
    title: "Practice",
    description: "Hands-on practice with immediate feedback and adaptive difficulty adjustment.",
    icon: "Repeat"
  },
  {
    step: "05",
    title: "Master",
    description: "Comprehensive assessment and certification upon achieving learning objectives.",
    icon: "Award"
  }];


  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="BookOpen" size={20} color="var(--color-primary)" strokeWidth={2} />
            <span className="text-primary font-medium">Teaching Methodology</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-academic-navy mb-6">
            Educational Approach &
            <span className="block text-primary">Learning Framework</span>
          </h2>
          
          <p className="text-xl text-reading-charcoal max-w-3xl mx-auto leading-relaxed">
            Our evidence-based teaching methodology combines cognitive science research with cutting-edge technology to create an optimal learning environment for every student.
          </p>
        </div>

        {/* Methodology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {methodologies?.map((method, index) =>
          <div key={index} className="group">
              <div className="bg-white rounded-2xl p-6 academic-shadow hover:shadow-xl academic-transition h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 academic-transition">
                  <Icon name={method?.icon} size={24} color="white" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-xl font-bold text-academic-navy mb-3">{method?.title}</h3>
                <p className="text-reading-charcoal mb-4 leading-relaxed">{method?.description}</p>
                
                <ul className="space-y-2">
                  {method?.features?.map((feature, featureIndex) =>
                <li key={featureIndex} className="flex items-center space-x-2 text-sm text-subtle-gray">
                      <Icon name="CheckCircle" size={14} color="var(--color-primary)" strokeWidth={2} />
                      <span>{feature}</span>
                    </li>
                )}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Learning Process */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 academic-shadow">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-academic-navy mb-4">Our 5-Step Learning Process</h3>
            <p className="text-reading-charcoal text-lg">A systematic approach to ensure effective knowledge acquisition and retention</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {learningSteps?.map((step, index) =>
            <div key={index} className="relative group text-center">
                {/* Step Number */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 academic-transition">
                  <span className="text-white font-bold text-lg">{step?.step}</span>
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={step?.icon} size={20} color="var(--color-primary)" strokeWidth={2.5} />
                </div>
                
                <h4 className="text-lg font-bold text-academic-navy mb-2">{step?.title}</h4>
                <p className="text-sm text-reading-charcoal leading-relaxed">{step?.description}</p>
                
                {/* Connector Line */}
                {index < learningSteps?.length - 1 &&
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform translate-x-4"></div>
              }
              </div>
            )}
          </div>
        </div>

        {/* Research & Innovation */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Icon name="Microscope" size={24} color="var(--color-secondary)" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-medium text-secondary">Research & Innovation</span>
            </div>
            
            <h3 className="text-3xl font-bold text-academic-navy mb-6">Evidence-Based Learning Science</h3>
            <p className="text-reading-charcoal leading-relaxed mb-6">
              Our methodology is grounded in the latest cognitive science research, incorporating principles of spaced repetition, active recall, and multimodal learning to maximize retention and understanding.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle" size={20} color="var(--color-secondary)" strokeWidth={2.5} />
                <div>
                  <h4 className="font-semibold text-academic-navy">Cognitive Load Theory</h4>
                  <p className="text-sm text-reading-charcoal">Optimized information presentation to prevent cognitive overload</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle" size={20} color="var(--color-secondary)" strokeWidth={2.5} />
                <div>
                  <h4 className="font-semibold text-academic-navy">Spaced Repetition</h4>
                  <p className="text-sm text-reading-charcoal">Strategic review scheduling for long-term retention</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle" size={20} color="var(--color-secondary)" strokeWidth={2.5} />
                <div>
                  <h4 className="font-semibold text-academic-navy">Active Learning</h4>
                  <p className="text-sm text-reading-charcoal">Hands-on engagement rather than passive consumption</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1707944745905-1ba3ef7c0c83"
              alt="Researcher in white lab coat analyzing data on multiple computer screens in modern laboratory setting"
              className="w-full h-96 object-cover rounded-2xl academic-shadow" />

            
            {/* Research Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 academic-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon name="BarChart" size={24} color="var(--color-secondary)" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-academic-navy">50+</div>
                  <div className="text-sm text-subtle-gray">Research Studies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default MethodologySection;