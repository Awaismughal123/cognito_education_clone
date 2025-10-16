import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RecommendedSection = () => {
  const recommendedCourses = [
  {
    id: 'rec-1',
    title: 'Complete Python Programming Bootcamp',
    category: 'Programming',
    thumbnail: "https://images.unsplash.com/photo-1662638600476-d563fffbb072",
    thumbnailAlt: 'Modern computer setup with Python code displayed on multiple monitors in dark workspace',
    instructor: {
      name: 'Dr. Sarah Chen',
      avatar: "https://images.unsplash.com/photo-1597621969117-1a305d3e0c68",
      avatarAlt: 'Professional headshot of Asian woman with shoulder-length black hair in navy blazer'
    },
    rating: 4.9,
    enrolledCount: 15420,
    price: 89,
    originalPrice: 199,
    badge: 'Bestseller'
  },
  {
    id: 'rec-2',
    title: 'Advanced Machine Learning with TensorFlow',
    category: 'Data Science',
    thumbnail: "https://images.unsplash.com/photo-1733295928625-439a9692ba63",
    thumbnailAlt: 'Abstract visualization of neural network connections with glowing nodes and data flow patterns',
    instructor: {
      name: 'Prof. Michael Rodriguez',
      avatar: "https://images.unsplash.com/photo-1714974528959-d082e5053d9d",
      avatarAlt: 'Professional headshot of Hispanic man with short beard wearing dark suit and glasses'
    },
    rating: 4.8,
    enrolledCount: 8930,
    price: 129,
    originalPrice: 249,
    badge: 'New'
  },
  {
    id: 'rec-3',
    title: 'Digital Marketing Mastery 2024',
    category: 'Marketing',
    thumbnail: "https://images.unsplash.com/photo-1515408201103-f7a8c194a15c",
    thumbnailAlt: 'Modern office desk with laptop showing marketing analytics dashboard and colorful charts',
    instructor: {
      name: 'Emma Thompson',
      avatar: "https://images.unsplash.com/photo-1587403655231-b1734312903f",
      avatarAlt: 'Professional headshot of blonde woman in white blouse smiling at camera'
    },
    rating: 4.7,
    enrolledCount: 12650,
    price: 79,
    originalPrice: 159,
    badge: 'Popular'
  }];


  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-academic-navy mb-2">
            Recommended for You
          </h2>
          <p className="text-subtle-gray">
            Based on your learning history and goals
          </p>
        </div>
        
        <Link
          to="/student-dashboard"
          className="hidden sm:flex items-center space-x-2 text-primary hover:text-primary/80 academic-transition font-medium">

          <span>View All</span>
          <Icon name="ArrowRight" size={16} />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendedCourses?.map((course) =>
        <div
          key={course?.id}
          className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-primary/30 academic-transition hover:academic-shadow group">

            {/* Course Image */}
            <div className="relative aspect-video overflow-hidden bg-gray-100">
              <Image
              src={course?.thumbnail}
              alt={course?.thumbnailAlt}
              className="w-full h-full object-cover group-hover:scale-105 academic-transition" />

              
              {/* Badge */}
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              course?.badge === 'Bestseller' ? 'bg-achievement-orange text-white' :
              course?.badge === 'New' ? 'bg-primary text-white' : 'bg-secondary text-white'}`
              }>
                  {course?.badge}
                </span>
              </div>

              {/* AI Recommendation Badge */}
              <div className="absolute top-3 right-3">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Icon name="Sparkles" size={14} className="text-primary" />
                </div>
              </div>
            </div>

            {/* Course Content */}
            <div className="p-5">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm font-medium text-primary">{course?.category}</span>
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={12} className="text-yellow-500 fill-current" />
                  <span className="text-sm text-subtle-gray">{course?.rating}</span>
                </div>
              </div>

              <Link to="/individual-course-pages" className="block group/title">
                <h3 className="font-bold text-lg text-reading-charcoal group-hover/title:text-primary academic-transition line-clamp-2 mb-2">
                  {course?.title}
                </h3>
              </Link>

              <div className="flex items-center space-x-2 mb-4">
                <Image
                src={course?.instructor?.avatar}
                alt={course?.instructor?.avatarAlt}
                className="w-6 h-6 rounded-full object-cover" />

                <span className="text-sm text-reading-charcoal font-medium">
                  {course?.instructor?.name}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-sm text-subtle-gray line-through">
                    ${course?.originalPrice}
                  </span>
                  <span className="text-xl font-bold text-reading-charcoal">
                    ${course?.price}
                  </span>
                </div>

                <Button
                variant="default"
                size="sm"
                className="bg-enrollment-orange hover:bg-achievement-orange text-white"
                iconName="Plus"
                iconSize={16}>

                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Mobile View All Link */}
      <div className="mt-6 text-center sm:hidden">
        <Link
          to="/student-dashboard"
          className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 academic-transition font-medium">

          <span>View All Recommendations</span>
          <Icon name="ArrowRight" size={16} />
        </Link>
      </div>
    </div>);

};

export default RecommendedSection;