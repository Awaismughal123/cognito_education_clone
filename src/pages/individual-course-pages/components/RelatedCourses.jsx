import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RelatedCourses = ({ courses }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={14}
        color={index < Math.floor(rating) ? "#F59E0B" : "#E5E7EB"}
        fill={index < Math.floor(rating) ? "#F59E0B" : "#E5E7EB"}
      />
    ));
  };

  return (
    <div className="bg-white rounded-xl p-8 academic-shadow">
      <h3 className="text-2xl font-bold text-reading-charcoal mb-6 flex items-center">
        <Icon name="BookOpen" size={24} color="#7C3AED" className="mr-3" />
        Related Courses
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses?.map((course, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-primary/30 academic-transition knowledge-card">
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={course?.thumbnail}
                  alt={course?.thumbnailAlt}
                  className="w-full h-48 object-cover group-hover:scale-105 academic-transition"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                    {course?.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white academic-transition">
                    <Icon name="Heart" size={16} color="#6B7280" />
                  </button>
                </div>
              </div>
              
              {/* Course Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    {renderStars(course?.rating)}
                    <span className="text-sm text-subtle-gray ml-1">({course?.reviewCount})</span>
                  </div>
                  <span className="text-sm text-subtle-gray">{course?.level}</span>
                </div>
                
                <h4 className="font-bold text-reading-charcoal mb-2 line-clamp-2 group-hover:text-primary academic-transition">
                  {course?.title}
                </h4>
                
                <p className="text-sm text-subtle-gray mb-4 line-clamp-2">
                  {course?.description}
                </p>
                
                <div className="flex items-center space-x-4 text-sm text-subtle-gray mb-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>{course?.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Users" size={14} />
                    <span>{course?.students}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Image
                      src={course?.instructor?.avatar}
                      alt={course?.instructor?.avatarAlt}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="text-sm text-reading-charcoal font-medium">
                      {course?.instructor?.name}
                    </span>
                  </div>
                  
                  <div className="text-right">
                    {course?.originalPrice && (
                      <span className="text-sm text-subtle-gray line-through">
                        ${course?.originalPrice}
                      </span>
                    )}
                    <div className="text-lg font-bold text-primary">
                      ${course?.price}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Button
                    variant="outline"
                    fullWidth
                    className="group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                    iconName="ArrowRight"
                    iconPosition="right"
                    iconSize={16}
                  >
                    View Course
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button
          variant="outline"
          iconName="Grid3X3"
          iconPosition="left"
        >
          View All Courses
        </Button>
      </div>
    </div>
  );
};

export default RelatedCourses;