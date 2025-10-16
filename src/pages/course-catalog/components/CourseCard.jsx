import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CourseCard = ({ course, onWishlistToggle, onCompare }) => {
  const [isWishlisted, setIsWishlisted] = useState(course?.isWishlisted || false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleWishlistClick = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setIsWishlisted(!isWishlisted);
    onWishlistToggle(course?.id, !isWishlisted);
  };

  const handleCompareClick = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    onCompare(course?.id);
  };

  const getDifficultyColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-orange-100 text-orange-800';
      case 'expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours === 0) return `${mins}m`;
    if (mins === 0) return `${hours}h`;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-primary/30 academic-transition hover:academic-shadow">
      {/* Course Image */}
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        <Image
          src={course?.thumbnail}
          alt={course?.thumbnailAlt}
          className={`w-full h-full object-cover group-hover:scale-105 academic-transition ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 loading-shimmer" />
        )}

        {/* Overlay Actions */}
        <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 academic-transition">
          <button
            onClick={handleWishlistClick}
            className={`p-2 rounded-full backdrop-blur-sm academic-transition ${
              isWishlisted 
                ? 'bg-red-500 text-white' :'bg-white/90 text-gray-700 hover:bg-white'
            }`}
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Icon 
              name={isWishlisted ? "Heart" : "Heart"} 
              size={16} 
              strokeWidth={isWishlisted ? 0 : 2}
              className={isWishlisted ? 'fill-current' : ''}
            />
          </button>
          
          <button
            onClick={handleCompareClick}
            className="p-2 rounded-full bg-white/90 text-gray-700 hover:bg-white backdrop-blur-sm academic-transition"
            aria-label="Add to comparison"
          >
            <Icon name="GitCompare" size={16} strokeWidth={2} />
          </button>
        </div>

        {/* Course Badge */}
        {course?.badge && (
          <div className="absolute top-3 left-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              course?.badge === 'Bestseller' ? 'bg-achievement-orange text-white' :
              course?.badge === 'New' ? 'bg-primary text-white' :
              course?.badge === 'Free'? 'bg-green-500 text-white' : 'bg-gray-800 text-white'
            }`}>
              {course?.badge}
            </span>
          </div>
        )}

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 academic-transition">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Icon name="Play" size={24} className="text-primary ml-1" />
          </div>
        </div>
      </div>
      {/* Course Content */}
      <div className="p-5">
        {/* Course Category */}
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-sm font-medium text-primary">{course?.category}</span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course?.difficulty)}`}>
            {course?.difficulty}
          </span>
        </div>

        {/* Course Title */}
        <Link to="/individual-course-pages" className="block group/title">
          <h3 className="font-bold text-lg text-reading-charcoal group-hover/title:text-primary academic-transition line-clamp-2 mb-2">
            {course?.title}
          </h3>
        </Link>

        {/* Course Description */}
        <p className="text-sm text-subtle-gray line-clamp-2 mb-3">
          {course?.description}
        </p>

        {/* Instructor */}
        <div className="flex items-center space-x-2 mb-3">
          <Image
            src={course?.instructor?.avatar}
            alt={course?.instructor?.avatarAlt}
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-sm text-reading-charcoal font-medium">
            {course?.instructor?.name}
          </span>
        </div>

        {/* Course Stats */}
        <div className="flex items-center space-x-4 mb-4 text-sm text-subtle-gray">
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={14} />
            <span>{formatDuration(course?.duration)}</span>
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

        {/* Course Footer */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            {course?.originalPrice && course?.originalPrice !== course?.price && (
              <span className="text-sm text-subtle-gray line-through">
                ${course?.originalPrice}
              </span>
            )}
            <span className="text-xl font-bold text-reading-charcoal">
              {course?.price === 0 ? 'Free' : `$${course?.price}`}
            </span>
          </div>

          <Button
            variant="default"
            size="sm"
            className="bg-enrollment-orange hover:bg-achievement-orange text-white"
            iconName="ShoppingCart"
            iconSize={16}
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;