import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CourseReviews = ({ reviews, overallRating, ratingDistribution }) => {
  const [sortBy, setSortBy] = useState('newest');
  const [filterRating, setFilterRating] = useState('all');

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'highest', label: 'Highest Rating' },
    { value: 'lowest', label: 'Lowest Rating' }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Ratings' },
    { value: '5', label: '5 Stars' },
    { value: '4', label: '4 Stars' },
    { value: '3', label: '3 Stars' },
    { value: '2', label: '2 Stars' },
    { value: '1', label: '1 Star' }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        color={index < rating ? "#F59E0B" : "#E5E7EB"}
        fill={index < rating ? "#F59E0B" : "#E5E7EB"}
      />
    ));
  };

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-8">
      {/* Rating Overview */}
      <div className="bg-white rounded-xl p-8 academic-shadow">
        <h3 className="text-2xl font-bold text-reading-charcoal mb-6 flex items-center">
          <Icon name="MessageSquare" size={24} color="#2563EB" className="mr-3" />
          Student Reviews
        </h3>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Overall Rating */}
          <div className="text-center">
            <div className="text-5xl font-bold text-reading-charcoal mb-2">
              {overallRating}
            </div>
            <div className="flex items-center justify-center space-x-1 mb-2">
              {renderStars(Math.round(overallRating))}
            </div>
            <p className="text-subtle-gray">Course Rating</p>
          </div>
          
          {/* Rating Distribution */}
          <div className="lg:col-span-2">
            <div className="space-y-3">
              {ratingDistribution?.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 w-16">
                    <span className="text-sm font-medium">{item?.stars}</span>
                    <Icon name="Star" size={14} color="#F59E0B" fill="#F59E0B" />
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-warning h-2 rounded-full academic-transition"
                      style={{ width: `${item?.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-subtle-gray w-12">{item?.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Filters and Sort */}
      <div className="bg-white rounded-xl p-6 academic-shadow">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-reading-charcoal">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e?.target?.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {sortOptions?.map((option) => (
                <option key={option?.value} value={option?.value}>
                  {option?.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-reading-charcoal">Filter:</span>
            <select
              value={filterRating}
              onChange={(e) => setFilterRating(e?.target?.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {filterOptions?.map((option) => (
                <option key={option?.value} value={option?.value}>
                  {option?.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {/* Reviews List */}
      <div className="space-y-6">
        {reviews?.map((review, index) => (
          <div key={index} className="bg-white rounded-xl p-6 academic-shadow">
            <div className="flex items-start space-x-4">
              <Image
                src={review?.avatar}
                alt={review?.avatarAlt}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h5 className="font-semibold text-reading-charcoal">{review?.name}</h5>
                    <p className="text-sm text-subtle-gray">{review?.title}</p>
                  </div>
                  <span className="text-sm text-subtle-gray">{formatDate(review?.date)}</span>
                </div>
                
                <div className="flex items-center space-x-1 mb-3">
                  {renderStars(review?.rating)}
                </div>
                
                <p className="text-reading-charcoal leading-relaxed mb-4">
                  {review?.comment}
                </p>
                
                {review?.helpful && (
                  <div className="flex items-center space-x-4 text-sm">
                    <button className="flex items-center space-x-2 text-subtle-gray hover:text-primary academic-transition">
                      <Icon name="ThumbsUp" size={16} />
                      <span>Helpful ({review?.helpfulCount})</span>
                    </button>
                    <button className="flex items-center space-x-2 text-subtle-gray hover:text-primary academic-transition">
                      <Icon name="MessageCircle" size={16} />
                      <span>Reply</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Load More */}
      <div className="text-center">
        <Button
          variant="outline"
          iconName="ChevronDown"
          iconPosition="right"
        >
          Load More Reviews
        </Button>
      </div>
    </div>
  );
};

export default CourseReviews;