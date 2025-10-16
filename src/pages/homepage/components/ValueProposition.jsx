import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ValueProposition = () => {
  const coreValues = [
  {
    id: 1,
    icon: "Brain",
    title: "Personalized Learning Paths",
    description: "AI-powered recommendations adapt to your learning style, pace, and goals for maximum effectiveness.",
    features: ["Adaptive difficulty", "Custom study schedules", "Progress tracking", "Smart recommendations"],
    image: "https://images.unsplash.com/photo-1601509876214-10b40c3f248d",
    imageAlt: "Student using AI-powered learning platform on tablet with personalized study dashboard",
    color: "primary"
  },
  {
    id: 2,
    icon: "Users",
    title: "Expert Instructors",
    description: "Learn from world-class educators and industry professionals with proven track records.",
    features: ["PhD-level expertise", "Industry experience", "Personalized feedback", "Office hours"],
    image: "https://images.unsplash.com/photo-1701777508358-833de8c614ec",
    imageAlt: "Professional female instructor teaching in modern classroom with interactive whiteboard",
    color: "secondary"
  },
  {
    id: 3,
    icon: "Zap",
    title: "Interactive Learning",
    description: "Engage with dynamic content, simulations, and hands-on exercises that make learning memorable.",
    features: ["3D visualizations", "Interactive simulations", "Gamified quizzes", "Real-time feedback"],
    image: "https://images.unsplash.com/photo-1712120255604-46046f74548a",
    imageAlt: "Interactive 3D molecular model displayed on computer screen with student manipulating virtual objects",
    color: "accent"
  },
  {
    id: 4,
    icon: "Award",
    title: "Proven Results",
    description: "Join thousands of students who have achieved academic excellence and career advancement.",
    features: ["94% grade improvement", "Industry certifications", "Career placement", "Alumni network"],
    image: "https://images.unsplash.com/photo-1658235081451-0f5a4af2a1b4",
    imageAlt: "Successful graduate student holding diploma and academic achievement awards at graduation ceremony",
    color: "achievement-orange"
  }];


  const learningMethods = [
  {
    icon: "Video",
    title: "Video Lectures",
    description: "High-quality video content with expert explanations"
  },
  {
    icon: "FileText",
    title: "Interactive Notes",
    description: "Smart note-taking with automatic summaries"
  },
  {
    icon: "Target",
    title: "Practice Problems",
    description: "Thousands of problems with step-by-step solutions"
  },
  {
    icon: "MessageCircle",
    title: "Discussion Forums",
    description: "Connect with peers and instructors for support"
  },
  {
    icon: "BarChart3",
    title: "Progress Analytics",
    description: "Detailed insights into your learning journey"
  },
  {
    icon: "Smartphone",
    title: "Mobile Learning",
    description: "Study anywhere with our mobile-optimized platform"
  }];


  const trustSignals = [
  {
    icon: "Shield",
    title: "Secure & Private",
    description: "Your data is protected with enterprise-grade security"
  },
  {
    icon: "Clock",
    title: "24/7 Support",
    description: "Get help whenever you need it from our expert team"
  },
  {
    icon: "Globe",
    title: "Global Community",
    description: "Join learners from 150+ countries worldwide"
  },
  {
    icon: "Bookmark",
    title: "Lifetime Access",
    description: "Keep your courses forever with free updates"
  }];


  const ValueCard = ({ value, index }) =>
  <div className={`relative overflow-hidden rounded-3xl academic-shadow hover:shadow-xl academic-transition knowledge-card ${
  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex bg-white`
  }>
      {/* Image Section */}
      <div className="lg:w-1/2 relative overflow-hidden">
        <Image
        src={value?.image}
        alt={value?.imageAlt}
        className="w-full h-64 lg:h-full object-cover" />

        <div className={`absolute inset-0 bg-gradient-to-br ${
      value?.color === 'primary' ? 'from-primary/20 to-primary/40' :
      value?.color === 'secondary' ? 'from-secondary/20 to-secondary/40' :
      value?.color === 'accent' ? 'from-accent/20 to-accent/40' : 'from-achievement-orange/20 to-achievement-orange/40'}`
      } />
        
        {/* Floating Icon */}
        <div className={`absolute top-6 left-6 w-16 h-16 rounded-2xl flex items-center justify-center ${
      value?.color === 'primary' ? 'bg-primary' :
      value?.color === 'secondary' ? 'bg-secondary' :
      value?.color === 'accent' ? 'bg-accent' : 'bg-achievement-orange'}`
      }>
          <Icon name={value?.icon} size={32} color="white" strokeWidth={2} />
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
        <h3 className="text-3xl font-bold text-academic-navy mb-4">{value?.title}</h3>
        <p className="text-lg text-subtle-gray mb-6 leading-relaxed">{value?.description}</p>
        
        {/* Features List */}
        <ul className="space-y-3 mb-8">
          {value?.features?.map((feature, featureIndex) =>
        <li key={featureIndex} className="flex items-center space-x-3">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
          value?.color === 'primary' ? 'bg-primary/10' :
          value?.color === 'secondary' ? 'bg-secondary/10' :
          value?.color === 'accent' ? 'bg-accent/10' : 'bg-achievement-orange/10'}`
          }>
                <Icon name="Check" size={14} className={
            value?.color === 'primary' ? 'text-primary' :
            value?.color === 'secondary' ? 'text-secondary' :
            value?.color === 'accent' ? 'text-accent' : 'text-achievement-orange'
            } strokeWidth={3} />
              </div>
              <span className="text-reading-charcoal font-medium">{feature}</span>
            </li>
        )}
        </ul>

        <Button
        variant="outline"
        className={`w-fit ${
        value?.color === 'primary' ? 'border-primary text-primary hover:bg-primary hover:text-white' :
        value?.color === 'secondary' ? 'border-secondary text-secondary hover:bg-secondary hover:text-white' :
        value?.color === 'accent' ? 'border-accent text-accent hover:bg-accent hover:text-white' : 'border-achievement-orange text-achievement-orange hover:bg-achievement-orange hover:text-white'}`
        }
        iconName="ArrowRight"
        iconPosition="right"
        iconSize={16}>

          Learn More
        </Button>
      </div>
    </div>;


  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Icon name="Lightbulb" size={20} color="var(--color-primary)" strokeWidth={2} />
            <span className="text-primary font-semibold">Why Choose Cognito</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-academic-navy mb-6">
            Transform Your Potential
            <span className="block text-primary">Into Achievement</span>
          </h2>
          
          <p className="text-xl text-subtle-gray max-w-3xl mx-auto">
            Experience the perfect blend of cutting-edge technology, expert instruction, and personalized learning that makes complex subjects accessible and engaging.
          </p>
        </div>

        {/* Core Values */}
        <div className="space-y-16 mb-20">
          {coreValues?.map((value, index) =>
          <ValueCard key={value?.id} value={value} index={index} />
          )}
        </div>

        {/* Learning Methods Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-academic-navy mb-4">Complete Learning Ecosystem</h3>
            <p className="text-lg text-subtle-gray max-w-2xl mx-auto">
              Multiple learning formats and tools designed to accommodate different learning styles and preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningMethods?.map((method, index) =>
            <div key={index} className="bg-white rounded-2xl p-6 academic-shadow hover:shadow-lg academic-transition text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 academic-transition">
                  <Icon name={method?.icon} size={28} color="white" strokeWidth={2} />
                </div>
                <h4 className="text-xl font-bold text-academic-navy mb-3">{method?.title}</h4>
                <p className="text-subtle-gray">{method?.description}</p>
              </div>
            )}
          </div>
        </div>

        {/* Trust Signals */}
        <div className="bg-white rounded-3xl academic-shadow p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-academic-navy mb-4">Trusted by Students Worldwide</h3>
            <p className="text-lg text-subtle-gray">
              Join a platform built on trust, security, and student success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals?.map((signal, index) =>
            <div key={index} className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={signal?.icon} size={24} color="var(--color-accent)" strokeWidth={2} />
                </div>
                <h4 className="text-lg font-bold text-academic-navy mb-2">{signal?.title}</h4>
                <p className="text-subtle-gray text-sm">{signal?.description}</p>
              </div>
            )}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-academic-navy via-primary to-secondary rounded-3xl p-12 text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h3>
            <p className="text-xl text-white/90 mb-8">
              Start your free trial today and discover why millions of students choose Cognito Education for their academic success.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <Button
                variant="default"
                size="lg"
                className="bg-white text-primary hover:bg-gray-50"
                iconName="Rocket"
                iconPosition="left"
                iconSize={20}>

                Start Free Trial
              </Button>
              
              <Link
                to="/course-catalog"
                className="flex items-center space-x-2 text-white hover:text-white/80 academic-transition font-medium">

                <span>Browse Courses</span>
                <Icon name="ArrowRight" size={16} strokeWidth={2} />
              </Link>
            </div>

            {/* Money Back Guarantee */}
            <div className="flex items-center justify-center space-x-2 text-white/80">
              <Icon name="Shield" size={20} strokeWidth={2} />
              <span className="text-sm">30-day money-back guarantee • No credit card required</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ValueProposition;