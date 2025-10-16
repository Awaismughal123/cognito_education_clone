import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const WelcomeSection = () => {
  const successStats = [
  { number: "50K+", label: "Active Students" },
  { number: "95%", label: "Success Rate" },
  { number: "4.8/5", label: "Student Rating" }];


  const testimonials = [
  {
    name: "Sarah Chen",
    role: "Computer Science Student",
    avatar: "https://images.unsplash.com/photo-1668049221564-862149a48e10",
    avatarAlt: "Asian woman with long black hair smiling at camera in casual blue sweater",
    quote: "Cognito helped me ace my algorithms course. The interactive lessons made complex concepts so much clearer!"
  },
  {
    name: "Marcus Johnson",
    role: "Working Professional",
    avatar: "https://images.unsplash.com/photo-1583411806579-d6e9064caf46",
    avatarAlt: "African American man with short hair in professional white shirt smiling confidently",
    quote: "I completed my data science certification while working full-time. The flexible learning schedule was perfect."
  }];


  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
          <Icon name="Sparkles" size={16} color="var(--color-primary)" strokeWidth={2} />
          <span className="text-sm font-medium text-primary">Welcome Back to Learning</span>
        </div>
        
        <h1 className="text-3xl lg:text-4xl font-bold text-academic-navy">
          Continue Your Learning Journey
        </h1>
        
        <p className="text-lg text-subtle-gray max-w-md mx-auto">
          Access your personalized dashboard, track progress, and discover new courses tailored just for you.
        </p>
      </div>
      {/* Success Stats */}
      <div className="grid grid-cols-3 gap-4">
        {successStats?.map((stat, index) =>
        <div key={index} className="text-center p-4 bg-white rounded-lg academic-shadow">
            <div className="text-2xl font-bold text-primary">{stat?.number}</div>
            <div className="text-xs text-subtle-gray mt-1">{stat?.label}</div>
          </div>
        )}
      </div>
      {/* Featured Image */}
      <div className="relative overflow-hidden rounded-xl academic-shadow">
        <Image
          src="https://images.unsplash.com/photo-1592303637753-ce1e6b8a0ffb"
          alt="Diverse group of students collaborating on laptops in modern classroom with natural lighting"
          className="w-full h-64 object-cover" />

        <div className="absolute inset-0 bg-gradient-to-t from-academic-navy/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-lg font-semibold mb-2">Join Our Learning Community</h3>
          <p className="text-sm opacity-90">Connect with students worldwide and achieve your goals together.</p>
        </div>
      </div>
      {/* Testimonials */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-academic-navy text-center">
          What Our Students Say
        </h3>
        
        <div className="space-y-4">
          {testimonials?.map((testimonial, index) =>
          <div key={index} className="bg-white p-4 rounded-lg academic-shadow">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Image
                  src={testimonial?.avatar}
                  alt={testimonial?.avatarAlt}
                  className="w-12 h-12 rounded-full object-cover" />

                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="text-sm font-semibold text-reading-charcoal">
                      {testimonial?.name}
                    </h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)]?.map((_, i) =>
                    <Icon key={i} name="Star" size={12} strokeWidth={0} className="fill-current" />
                    )}
                    </div>
                  </div>
                  <p className="text-xs text-subtle-gray mb-2">{testimonial?.role}</p>
                  <p className="text-sm text-reading-charcoal italic">
                    "{testimonial?.quote}"
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>);

};

export default WelcomeSection;