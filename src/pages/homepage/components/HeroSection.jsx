import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const heroVideos = [
  {
    id: 1,
    title: "Mathematics Excellence",
    description: "Students mastering calculus concepts",
    thumbnail: "https://images.unsplash.com/photo-1592303637753-ce1e6b8a0ffb",
    alt: "Diverse group of students working together on mathematical equations at modern classroom desk"
  },
  {
    id: 2,
    title: "Science Discovery",
    description: "Laboratory experiments and discoveries",
    thumbnail: "https://images.unsplash.com/photo-1715893040203-da31bafa9e97",
    alt: "Young female student in safety goggles conducting chemistry experiment with colorful solutions"
  },
  {
    id: 3,
    title: "Digital Learning",
    description: "Technology-enhanced education",
    thumbnail: "https://images.unsplash.com/photo-1713998740833-f76168c04676",
    alt: "Student using laptop and tablet for online learning in bright modern study space"
  }];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % heroVideos?.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e?.preventDefault();
    if (searchQuery?.trim()) {
      // Navigate to course catalog with search query
      window.location.href = `/course-catalog?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-academic-navy via-primary to-secondary">
      {/* Background Video/Image Carousel */}
      <div className="absolute inset-0 z-0">
        {heroVideos?.map((video, index) =>
        <div
          key={video?.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentVideoIndex ? 'opacity-30' : 'opacity-0'}`
          }>

            <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${video?.thumbnail})` }}
            aria-label={video?.alt} />

          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-academic-navy/80 via-primary/60 to-secondary/80" />
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <Icon name="Sparkles" size={20} color="white" strokeWidth={2} />
            <span className="text-white font-medium">Transform Your Learning Journey</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Master Any Subject
            <span className="block text-achievement-orange">At Your Own Pace</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Quality education for everyone. Transform your potential into achievement with our comprehensive learning platform designed for academic excellence.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Icon name="Search" size={24} color="#6B7280" strokeWidth={2} />
              </div>
              <Input
                type="search"
                placeholder="Search courses, subjects, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e?.target?.value)}
                className="pl-12 pr-32 py-4 text-lg bg-white/95 backdrop-blur-sm border-0 rounded-2xl shadow-xl" />

              <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                <Button
                  type="submit"
                  variant="default"
                  className="bg-enrollment-orange hover:bg-achievement-orange text-white px-8 py-3 rounded-xl"
                  iconName="ArrowRight"
                  iconPosition="right"
                  iconSize={20}>

                  Search
                </Button>
              </div>
            </div>
          </form>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button
              variant="default"
              size="lg"
              className="bg-white text-academic-navy hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl"
              iconName="Play"
              iconPosition="left"
              iconSize={24}>

              Start Free Trial
            </Button>
            <Link
              to="/course-catalog"
              className="flex items-center space-x-2 text-white hover:text-achievement-orange academic-transition text-lg font-medium">

              <span>Browse All Courses</span>
              <Icon name="ArrowRight" size={20} strokeWidth={2} />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
            { number: "50K+", label: "Active Students", icon: "Users" },
            { number: "200+", label: "Expert Courses", icon: "BookOpen" },
            { number: "95%", label: "Success Rate", icon: "TrendingUp" },
            { number: "24/7", label: "Support", icon: "MessageCircle" }]?.
            map((stat, index) =>
            <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg mb-3">
                  <Icon name={stat?.icon} size={24} color="white" strokeWidth={2} />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat?.number}</div>
                <div className="text-white/80 text-sm font-medium">{stat?.label}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Video Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroVideos?.map((_, index) =>
        <button
          key={index}
          onClick={() => setCurrentVideoIndex(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
          index === currentVideoIndex ? 'bg-white' : 'bg-white/40'}`
          }
          aria-label={`View slide ${index + 1}`} />

        )}
      </div>
    </section>);

};

export default HeroSection;