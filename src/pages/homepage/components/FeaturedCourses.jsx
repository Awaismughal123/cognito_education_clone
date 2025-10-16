import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedCourses = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef(null);

  const featuredCourses = [
  {
    id: 1,
    title: "Advanced Calculus Mastery",
    instructor: "Dr. Sarah Chen",
    instructorAvatar: "https://images.unsplash.com/photo-1720575796966-7d1483e238e5",
    instructorAlt: "Professional Asian woman with glasses in academic setting wearing navy blazer",
    category: "Mathematics",
    level: "Advanced",
    duration: "12 weeks",
    students: 2847,
    rating: 4.9,
    reviews: 342,
    price: 149,
    originalPrice: 199,
    thumbnail: "https://images.unsplash.com/photo-1631047085941-a29e9730a7e6",
    thumbnailAlt: "Mathematical equations and calculus formulas written on blackboard with chalk",
    description: "Master advanced calculus concepts including multivariable calculus, differential equations, and real analysis with hands-on problem solving.",
    skills: ["Differential Calculus", "Integral Calculus", "Vector Analysis", "Series & Sequences"],
    isPopular: true,
    completionRate: 94
  },
  {
    id: 2,
    title: "Organic Chemistry Fundamentals",
    instructor: "Prof. Michael Rodriguez",
    instructorAvatar: "https://images.unsplash.com/photo-1612363584451-cd060fb62018",
    instructorAlt: "Hispanic male professor in white lab coat holding molecular model in chemistry lab",
    category: "Chemistry",
    level: "Intermediate",
    duration: "10 weeks",
    students: 1923,
    rating: 4.8,
    reviews: 287,
    price: 129,
    originalPrice: 179,
    thumbnail: "https://images.unsplash.com/photo-1624683027339-1d9d5414f628",
    thumbnailAlt: "Chemistry laboratory with colorful chemical solutions in beakers and test tubes",
    description: "Comprehensive organic chemistry course covering reaction mechanisms, synthesis, and molecular structure analysis.",
    skills: ["Reaction Mechanisms", "Synthesis", "Spectroscopy", "Stereochemistry"],
    isNew: true,
    completionRate: 89
  },
  {
    id: 3,
    title: "Physics: Quantum Mechanics",
    instructor: "Dr. Emily Watson",
    instructorAvatar: "https://images.unsplash.com/photo-1580983222866-a16bc7f1cdc3",
    instructorAlt: "Professional woman with short blonde hair in physics laboratory wearing white coat",
    category: "Physics",
    level: "Advanced",
    duration: "14 weeks",
    students: 1456,
    rating: 4.9,
    reviews: 198,
    price: 179,
    originalPrice: 229,
    thumbnail: "https://images.unsplash.com/photo-1705742678404-99af23d1266c",
    thumbnailAlt: "Quantum physics equations and wave functions displayed on digital screen with particle illustrations",
    description: "Explore the fascinating world of quantum mechanics, wave-particle duality, and quantum field theory.",
    skills: ["Wave Functions", "Quantum States", "Uncertainty Principle", "Quantum Entanglement"],
    isPopular: true,
    completionRate: 91
  },
  {
    id: 4,
    title: "Data Science with Python",
    instructor: "Alex Thompson",
    instructorAvatar: "https://images.unsplash.com/photo-1711200777049-91bda11646b5",
    instructorAlt: "Young male programmer with dark hair working on laptop with code on multiple monitors",
    category: "Computer Science",
    level: "Beginner",
    duration: "8 weeks",
    students: 3521,
    rating: 4.7,
    reviews: 456,
    price: 99,
    originalPrice: 149,
    thumbnail: "https://images.unsplash.com/photo-1721525746389-fac9b1f423c5",
    thumbnailAlt: "Python programming code on computer screen with data visualization charts and graphs",
    description: "Learn data science fundamentals using Python, including data analysis, visualization, and machine learning basics.",
    skills: ["Python Programming", "Data Analysis", "Machine Learning", "Data Visualization"],
    isNew: true,
    completionRate: 87
  },
  {
    id: 5,
    title: "Advanced Biology: Genetics",
    instructor: "Dr. Lisa Park",
    instructorAvatar: "https://images.unsplash.com/photo-1630959302878-a30de73cdbb5",
    instructorAlt: "Asian female scientist in white lab coat examining DNA samples under microscope",
    category: "Biology",
    level: "Advanced",
    duration: "11 weeks",
    students: 1789,
    rating: 4.8,
    reviews: 234,
    price: 139,
    originalPrice: 189,
    thumbnail: "https://images.unsplash.com/photo-1731775748389-0fb0047fa626",
    thumbnailAlt: "DNA double helix structure model with genetic code sequences in laboratory setting",
    description: "Comprehensive genetics course covering molecular genetics, heredity, and modern genetic engineering techniques.",
    skills: ["Molecular Genetics", "Gene Expression", "Genetic Engineering", "Heredity Patterns"],
    isPopular: false,
    completionRate: 92
  },
  {
    id: 6,
    title: "Statistics & Probability",
    instructor: "Prof. James Wilson",
    instructorAvatar: "https://images.unsplash.com/photo-1728977701784-4aca80ed96f2",
    instructorAlt: "Middle-aged male professor with beard explaining statistical concepts at whiteboard",
    category: "Mathematics",
    level: "Intermediate",
    duration: "9 weeks",
    students: 2156,
    rating: 4.6,
    reviews: 312,
    price: 119,
    originalPrice: 159,
    thumbnail: "https://images.unsplash.com/photo-1723095469034-c3cf31e32730",
    thumbnailAlt: "Statistical charts and probability distributions displayed on computer screen with calculator",
    description: "Master statistical analysis and probability theory with real-world applications and data interpretation.",
    skills: ["Statistical Analysis", "Probability Theory", "Hypothesis Testing", "Data Interpretation"],
    isNew: false,
    completionRate: 88
  }];


  const scrollToSlide = (direction) => {
    const container = scrollContainerRef?.current;
    if (!container) return;

    const cardWidth = 320; // Approximate card width including margin
    const scrollAmount = cardWidth * 2; // Scroll 2 cards at a time

    if (direction === 'next') {
      container?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setCurrentSlide((prev) => Math.min(prev + 2, featuredCourses?.length - 1));
    } else {
      container?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setCurrentSlide((prev) => Math.max(prev - 2, 0));
    }
  };

  const CourseCard = ({ course }) =>
  <div className="flex-shrink-0 w-80 bg-white rounded-2xl academic-shadow hover:shadow-xl academic-transition knowledge-card group">
      {/* Course Image */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <Image
        src={course?.thumbnail}
        alt={course?.thumbnailAlt}
        className="w-full h-48 object-cover group-hover:scale-105 academic-transition" />

        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex space-x-2">
          {course?.isPopular &&
        <span className="bg-achievement-orange text-white px-3 py-1 rounded-full text-xs font-semibold">
              Popular
            </span>
        }
          {course?.isNew &&
        <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
              New
            </span>
        }
        </div>

        {/* Price */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
          <div className="text-lg font-bold text-academic-navy">${course?.price}</div>
          {course?.originalPrice > course?.price &&
        <div className="text-sm text-subtle-gray line-through">${course?.originalPrice}</div>
        }
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 academic-transition flex items-center justify-center">
          <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 academic-transition">
            <Icon name="Play" size={24} color="var(--color-primary)" strokeWidth={2} />
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Category & Level */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            {course?.category}
          </span>
          <span className="text-sm text-subtle-gray">{course?.level}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-academic-navy mb-2 group-hover:text-primary academic-transition">
          {course?.title}
        </h3>

        {/* Description */}
        <p className="text-subtle-gray text-sm mb-4 line-clamp-2">
          {course?.description}
        </p>

        {/* Instructor */}
        <div className="flex items-center space-x-3 mb-4">
          <Image
          src={course?.instructorAvatar}
          alt={course?.instructorAlt}
          className="w-8 h-8 rounded-full object-cover" />

          <span className="text-sm font-medium text-reading-charcoal">{course?.instructor}</span>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4 text-sm text-subtle-gray">
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={16} strokeWidth={2} />
            <span>{course?.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Users" size={16} strokeWidth={2} />
            <span>{course?.students?.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Star" size={16} strokeWidth={2} className="text-yellow-500 fill-current" />
            <span>{course?.rating}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {course?.skills?.slice(0, 2)?.map((skill, index) =>
        <span
          key={index}
          className="text-xs bg-gray-100 text-reading-charcoal px-2 py-1 rounded-md">

              {skill}
            </span>
        )}
          {course?.skills?.length > 2 &&
        <span className="text-xs text-subtle-gray">+{course?.skills?.length - 2} more</span>
        }
        </div>

        {/* CTA */}
        <Link to={`/individual-course-pages?id=${course?.id}`}>
          <Button
          variant="default"
          fullWidth
          className="bg-primary hover:bg-primary/90 text-white"
          iconName="ArrowRight"
          iconPosition="right"
          iconSize={16}>

            Enroll Now
          </Button>
        </Link>
      </div>
    </div>;


  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Icon name="BookOpen" size={20} color="var(--color-primary)" strokeWidth={2} />
            <span className="text-primary font-semibold">Featured Courses</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-academic-navy mb-6">
            Start Your Learning Journey
          </h2>
          
          <p className="text-xl text-subtle-gray max-w-3xl mx-auto mb-8">
            Discover our most popular courses designed by expert instructors to help you achieve academic excellence and career growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/course-catalog">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                iconName="Search"
                iconPosition="left"
                iconSize={20}>

                Browse All Courses
              </Button>
            </Link>
            <Link
              to="/student-dashboard"
              className="flex items-center space-x-2 text-primary hover:text-primary/80 academic-transition font-medium">

              <span>View Learning Path</span>
              <Icon name="ArrowRight" size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>

        {/* Course Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
            <button
              onClick={() => scrollToSlide('prev')}
              disabled={currentSlide === 0}
              className="w-12 h-12 bg-white academic-shadow rounded-full flex items-center justify-center text-academic-navy hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed academic-transition"
              aria-label="Previous courses">

              <Icon name="ChevronLeft" size={24} strokeWidth={2} />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
            <button
              onClick={() => scrollToSlide('next')}
              disabled={currentSlide >= featuredCourses?.length - 2}
              className="w-12 h-12 bg-white academic-shadow rounded-full flex items-center justify-center text-academic-navy hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed academic-transition"
              aria-label="Next courses">

              <Icon name="ChevronRight" size={24} strokeWidth={2} />
            </button>
          </div>

          {/* Course Cards */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

            {featuredCourses?.map((course) =>
            <CourseCard key={course?.id} course={course} />
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Future?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of students who have already started their journey to academic and professional success.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                className="bg-white text-primary hover:bg-gray-50"
                iconName="Play"
                iconPosition="left"
                iconSize={20}>

                Start Free Trial
              </Button>
              <Link
                to="/about"
                className="flex items-center space-x-2 text-white hover:text-white/80 academic-transition font-medium">

                <span>Learn More About Us</span>
                <Icon name="ArrowRight" size={16} strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default FeaturedCourses;