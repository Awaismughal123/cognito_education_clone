import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SuccessStories = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const successStories = [
  {
    id: 1,
    name: "Maria Rodriguez",
    role: "Medical Student",
    university: "Stanford University",
    avatar: "https://images.unsplash.com/photo-1690306816872-91063f6de36b",
    avatarAlt: "Smiling Hispanic woman with long dark hair in medical scrubs holding stethoscope",
    course: "Advanced Biology & Chemistry",
    achievement: "Improved GPA from 3.2 to 3.9",
    story: `Cognito Education completely transformed my understanding of complex biological processes. The interactive lessons and personalized feedback helped me grasp concepts I struggled with for years. Now I'm confidently pursuing my dream of becoming a doctor.`,
    beforeGrade: "C+",
    afterGrade: "A",
    timeframe: "6 months",
    videoThumbnail: "https://images.unsplash.com/photo-1685431967050-bb9e833d76c3",
    videoThumbnailAlt: "Medical student studying anatomy with digital tablet in modern laboratory",
    metrics: {
      gradeImprovement: "2.1 points",
      coursesCompleted: 8,
      studyHours: 240
    }
  },
  {
    id: 2,
    name: "James Chen",
    role: "Engineering Student",
    university: "MIT",
    avatar: "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
    avatarAlt: "Asian male student with glasses wearing engineering lab coat in technical workshop",
    course: "Advanced Calculus & Physics",
    achievement: "Scored 98% on final exam",
    story: `The step-by-step problem-solving approach in Cognito's math courses helped me master calculus concepts that seemed impossible before. The visual explanations and practice problems were game-changers for my engineering studies.`,
    beforeGrade: "B-",
    afterGrade: "A+",
    timeframe: "4 months",
    videoThumbnail: "https://images.unsplash.com/photo-1609155035300-15e1ffa95f12",
    videoThumbnailAlt: "Engineering student working on complex mathematical equations with digital tools",
    metrics: {
      gradeImprovement: "2.4 points",
      coursesCompleted: 6,
      studyHours: 180
    }
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "High School Senior",
    university: "Preparing for Harvard",
    avatar: "https://images.unsplash.com/photo-1557167015-836376f6b84b",
    avatarAlt: "Young blonde woman in school uniform smiling while holding academic achievement certificate",
    course: "SAT Preparation & AP Courses",
    achievement: "SAT score increased by 340 points",
    story: `Thanks to Cognito's comprehensive SAT prep and AP courses, I not only improved my test scores dramatically but also developed genuine confidence in my academic abilities. I'm now headed to my dream university!`,
    beforeGrade: "1180",
    afterGrade: "1520",
    timeframe: "8 months",
    videoThumbnail: "https://images.unsplash.com/photo-1658235081451-0f5a4af2a1b4",
    videoThumbnailAlt: "High school student celebrating academic success with diploma and awards",
    metrics: {
      gradeImprovement: "340 points",
      coursesCompleted: 12,
      studyHours: 320
    }
  },
  {
    id: 4,
    name: "David Park",
    role: "Computer Science Student",
    university: "UC Berkeley",
    avatar: "https://images.unsplash.com/photo-1603575449096-da705f622102",
    avatarAlt: "Asian male programmer with short black hair working on laptop with multiple coding screens",
    course: "Data Science & Programming",
    achievement: "Landed internship at Google",
    story: `The practical approach to data science and programming on Cognito helped me build real-world skills. The projects and coding challenges prepared me perfectly for technical interviews. I couldn't have done it without this platform.`,
    beforeGrade: "B",
    afterGrade: "A+",
    timeframe: "5 months",
    videoThumbnail: "https://images.unsplash.com/photo-1651990892631-723da6447d7d",
    videoThumbnailAlt: "Computer science student coding on multiple monitors with data visualization displays",
    metrics: {
      gradeImprovement: "1.8 points",
      coursesCompleted: 10,
      studyHours: 280
    }
  }];


  const overallStats = [
  {
    number: "94%",
    label: "Average Grade Improvement",
    description: "Students see significant improvement",
    icon: "TrendingUp",
    color: "text-accent"
  },
  {
    number: "50K+",
    label: "Success Stories",
    description: "Students transformed their futures",
    icon: "Users",
    color: "text-primary"
  },
  {
    number: "4.9/5",
    label: "Student Satisfaction",
    description: "Based on 25,000+ reviews",
    icon: "Star",
    color: "text-yellow-500"
  },
  {
    number: "89%",
    label: "Course Completion",
    description: "Higher than industry average",
    icon: "Award",
    color: "text-achievement-orange"
  }];


  const TestimonialCard = ({ story, isActive }) =>
  <div className={`bg-white rounded-2xl academic-shadow p-8 academic-transition ${
  isActive ? 'ring-2 ring-primary scale-105' : 'hover:shadow-lg'}`
  }>
      {/* Header */}
      <div className="flex items-start space-x-4 mb-6">
        <div className="relative">
          <Image
          src={story?.avatar}
          alt={story?.avatarAlt}
          className="w-16 h-16 rounded-full object-cover" />

          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
            <Icon name="CheckCircle" size={16} color="white" strokeWidth={2.5} />
          </div>
        </div>
        
        <div className="flex-1">
          <h4 className="text-xl font-bold text-academic-navy">{story?.name}</h4>
          <p className="text-primary font-medium">{story?.role}</p>
          <p className="text-subtle-gray text-sm">{story?.university}</p>
        </div>

        {/* Grade Improvement Badge */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-error to-accent rounded-lg px-3 py-2 mb-1">
            <div className="flex items-center space-x-2 text-white text-sm font-bold">
              <span>{story?.beforeGrade}</span>
              <Icon name="ArrowRight" size={14} strokeWidth={3} />
              <span>{story?.afterGrade}</span>
            </div>
          </div>
          <p className="text-xs text-subtle-gray">{story?.timeframe}</p>
        </div>
      </div>

      {/* Story */}
      <blockquote className="text-reading-charcoal mb-6 leading-relaxed italic">
        "{story?.story}"
      </blockquote>

      {/* Course & Achievement */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-subtle-gray">Course Completed</span>
          <span className="text-sm font-bold text-primary">{story?.course}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-subtle-gray">Key Achievement</span>
          <span className="text-sm font-bold text-accent">{story?.achievement}</span>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-lg font-bold text-academic-navy">{story?.metrics?.gradeImprovement}</div>
          <div className="text-xs text-subtle-gray">Improvement</div>
        </div>
        <div>
          <div className="text-lg font-bold text-academic-navy">{story?.metrics?.coursesCompleted}</div>
          <div className="text-xs text-subtle-gray">Courses</div>
        </div>
        <div>
          <div className="text-lg font-bold text-academic-navy">{story?.metrics?.studyHours}</div>
          <div className="text-xs text-subtle-gray">Study Hours</div>
        </div>
      </div>
    </div>;


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-6 py-2 mb-6">
            <Icon name="Trophy" size={20} color="var(--color-accent)" strokeWidth={2} />
            <span className="text-accent font-semibold">Success Stories</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-academic-navy mb-6">
            Real Students, Real Results
          </h2>
          
          <p className="text-xl text-subtle-gray max-w-3xl mx-auto">
            Discover how our students transformed their academic performance and achieved their dreams through personalized learning experiences.
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {overallStats?.map((stat, index) =>
          <div key={index} className="text-center bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg academic-transition">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
            stat?.color === 'text-accent' ? 'bg-accent/10' :
            stat?.color === 'text-primary' ? 'bg-primary/10' :
            stat?.color === 'text-yellow-500' ? 'bg-yellow-100' : 'bg-achievement-orange/10'}`
            }>
                <Icon name={stat?.icon} size={24} className={stat?.color} strokeWidth={2} />
              </div>
              <div className="text-3xl font-bold text-academic-navy mb-2">{stat?.number}</div>
              <div className="text-sm font-semibold text-reading-charcoal mb-1">{stat?.label}</div>
              <div className="text-xs text-subtle-gray">{stat?.description}</div>
            </div>
          )}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          {/* Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2 bg-gray-100 rounded-full p-1">
              {successStories?.map((_, index) =>
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium academic-transition ${
                activeTestimonial === index ?
                'bg-primary text-white' : 'text-subtle-gray hover:text-primary'}`
                }>

                  Story {index + 1}
                </button>
              )}
            </div>
          </div>

          {/* Active Testimonial */}
          <div className="max-w-4xl mx-auto">
            <TestimonialCard story={successStories?.[activeTestimonial]} isActive={true} />
          </div>
        </div>

        {/* Video Testimonials Preview */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-academic-navy mb-4">Watch Their Journey</h3>
            <p className="text-subtle-gray">See how our students achieved academic excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successStories?.map((story, index) =>
            <div key={story?.id} className="relative group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                  src={story?.videoThumbnail}
                  alt={story?.videoThumbnailAlt}
                  className="w-full h-32 object-cover group-hover:scale-105 academic-transition" />

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 academic-transition" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 academic-transition">
                      <Icon name="Play" size={20} color="var(--color-primary)" strokeWidth={2} />
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="font-semibold text-academic-navy text-sm">{story?.name}</p>
                  <p className="text-xs text-subtle-gray">{story?.achievement}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their academic performance with our proven learning system.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              variant="default"
              size="lg"
              className="bg-white text-primary hover:bg-gray-50"
              iconName="Rocket"
              iconPosition="left"
              iconSize={20}>

              Start Your Journey
            </Button>
            
            <Link
              to="/student-dashboard"
              className="flex items-center space-x-2 text-white hover:text-white/80 academic-transition font-medium">

              <span>View Sample Dashboard</span>
              <Icon name="ArrowRight" size={16} strokeWidth={2} />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-8 mt-8 pt-8 border-t border-white/20">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} color="white" strokeWidth={2} />
              <span className="text-sm">Money-back Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={20} color="white" strokeWidth={2} />
              <span className="text-sm">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={20} color="white" strokeWidth={2} />
              <span className="text-sm">Certified Courses</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default SuccessStories;