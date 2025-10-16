import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RecommendedCourses = ({ recommendations }) => {
  return (
    <div className="bg-white rounded-lg academic-shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-reading-charcoal">Recommended for You</h2>
          <p className="text-sm text-subtle-gray">Based on your learning history and goals</p>
        </div>
        <div className="flex items-center text-primary">
          <Icon name="Sparkles" size={20} strokeWidth={2} />
          <span className="ml-1 text-sm font-medium">AI Powered</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendations?.map((course) => (
          <div key={course?.id} className="border border-gray-100 rounded-lg p-4 hover:border-primary/20 hover:shadow-md academic-transition">
            <div className="flex items-start space-x-3 mb-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={course?.thumbnail}
                  alt={course?.thumbnailAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-reading-charcoal text-sm mb-1 line-clamp-2">
                  {course?.title}
                </h3>
                <p className="text-xs text-subtle-gray mb-2">{course?.instructor}</p>
                
                <div className="flex items-center space-x-3 text-xs text-subtle-gray">
                  <span className="flex items-center">
                    <Icon name="Clock" size={12} strokeWidth={2} />
                    <span className="ml-1">{course?.duration}</span>
                  </span>
                  <span className="flex items-center">
                    <Icon name="Star" size={12} strokeWidth={2} />
                    <span className="ml-1">{course?.rating}</span>
                  </span>
                  <span className="flex items-center">
                    <Icon name="Users" size={12} strokeWidth={2} />
                    <span className="ml-1">{course?.students}</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex items-center justify-between text-xs text-subtle-gray mb-1">
                <span>Match Score</span>
                <span>{course?.matchScore}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className="bg-gradient-to-r from-primary to-secondary h-1.5 rounded-full academic-transition"
                  style={{ width: `${course?.matchScore}%` }}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                {course?.tags?.slice(0, 2)?.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-xs text-subtle-gray rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                iconName="Plus"
                iconPosition="left"
                iconSize={12}
                className="text-primary border-primary hover:bg-primary hover:text-white"
              >
                Enroll
              </Button>
            </div>

            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-xs text-primary font-medium">
                <Icon name="TrendingUp" size={12} strokeWidth={2} className="inline mr-1" />
                {course?.reason}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link to="/course-catalog">
          <Button
            variant="outline"
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={16}
            className="text-primary border-primary hover:bg-primary hover:text-white"
          >
            Explore More Courses
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RecommendedCourses;