import React from 'react';
import CourseCard from './CourseCard';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';




const CourseGrid = ({ courses, viewMode, onWishlistToggle, onCompare, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(9)]?.map((_, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="aspect-video bg-gray-200 loading-shimmer" />
            <div className="p-5 space-y-3">
              <div className="h-4 bg-gray-200 rounded loading-shimmer" />
              <div className="h-6 bg-gray-200 rounded loading-shimmer" />
              <div className="h-4 bg-gray-200 rounded w-3/4 loading-shimmer" />
              <div className="flex justify-between items-center">
                <div className="h-6 bg-gray-200 rounded w-20 loading-shimmer" />
                <div className="h-8 bg-gray-200 rounded w-24 loading-shimmer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (courses?.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Search" size={32} className="text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-reading-charcoal mb-2">No courses found</h3>
        <p className="text-subtle-gray mb-6">
          Try adjusting your filters or search terms to find what you're looking for.
        </p>
        <Button
          variant="outline"
          iconName="RotateCcw"
          iconSize={16}
        >
          Clear Filters
        </Button>
      </div>
    );
  }

  if (viewMode === 'list') {
    return (
      <div className="space-y-4">
        {courses?.map((course) => (
          <div key={course?.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-primary/30 academic-transition hover:academic-shadow">
            <div className="flex flex-col sm:flex-row">
              {/* Course Image */}
              <div className="sm:w-80 aspect-video sm:aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                  src={course?.thumbnail}
                  alt={course?.thumbnailAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Course Content */}
              <div className="flex-1 p-6">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-primary">{course?.category}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        course?.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        course?.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        course?.difficulty === 'Advanced'? 'bg-orange-100 text-orange-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {course?.difficulty}
                      </span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => onWishlistToggle(course?.id, !course?.isWishlisted)}
                        className="p-2 rounded-full hover:bg-gray-100 academic-transition"
                      >
                        <Icon name="Heart" size={16} className={course?.isWishlisted ? 'text-red-500 fill-current' : 'text-gray-400'} />
                      </button>
                      <button
                        onClick={() => onCompare(course?.id)}
                        className="p-2 rounded-full hover:bg-gray-100 academic-transition"
                      >
                        <Icon name="GitCompare" size={16} className="text-gray-400" />
                      </button>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-bold text-xl text-reading-charcoal mb-2 line-clamp-2">
                    {course?.title}
                  </h3>
                  <p className="text-subtle-gray mb-4 line-clamp-2">
                    {course?.description}
                  </p>

                  {/* Instructor */}
                  <div className="flex items-center space-x-2 mb-4">
                    <Image
                      src={course?.instructor?.avatar}
                      alt={course?.instructor?.avatarAlt}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm text-reading-charcoal font-medium">
                      {course?.instructor?.name}
                    </span>
                  </div>

                  {/* Stats & Price */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-6 text-sm text-subtle-gray">
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={14} />
                        <span>{Math.floor(course?.duration / 60)}h {course?.duration % 60}m</span>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <Icon name="Users" size={14} />
                        <span>{course?.enrolledCount?.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
                        <span>{course?.rating}</span>
                        <span className="text-xs">({course?.reviewCount})</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        {course?.originalPrice && course?.originalPrice !== course?.price && (
                          <div className="text-sm text-subtle-gray line-through">
                            ${course?.originalPrice}
                          </div>
                        )}
                        <div className="text-xl font-bold text-reading-charcoal">
                          {course?.price === 0 ? 'Free' : `$${course?.price}`}
                        </div>
                      </div>

                      <Button
                        variant="default"
                        className="bg-enrollment-orange hover:bg-achievement-orange text-white"
                        iconName="ShoppingCart"
                        iconSize={16}
                      >
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses?.map((course) => (
        <CourseCard
          key={course?.id}
          course={course}
          onWishlistToggle={onWishlistToggle}
          onCompare={onCompare}
        />
      ))}
    </div>
  );
};

export default CourseGrid;