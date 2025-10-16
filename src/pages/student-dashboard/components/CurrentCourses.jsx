import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CurrentCourses = ({ courses }) => {
  return (
    <div className="bg-white rounded-lg academic-shadow p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-reading-charcoal">Continue Learning</h2>
        <Link 
          to="/course-catalog" 
          className="text-primary hover:text-secondary text-sm font-medium academic-transition"
        >
          View All Courses
        </Link>
      </div>
      <div className="space-y-4">
        {courses?.map((course) => (
          <div key={course?.id} className="border border-gray-100 rounded-lg p-4 hover:border-primary/20 academic-transition">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={course?.thumbnail}
                  alt={course?.thumbnailAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-reading-charcoal truncate">{course?.title}</h3>
                <p className="text-sm text-subtle-gray mb-2">{course?.instructor}</p>
                
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-xs text-subtle-gray mb-1">
                      <span>Progress</span>
                      <span>{course?.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full academic-transition"
                        style={{ width: `${course?.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-xs text-subtle-gray">
                    {course?.nextLesson}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-subtle-gray">
                    <span className="flex items-center">
                      <Icon name="Clock" size={12} strokeWidth={2} />
                      <span className="ml-1">{course?.timeRemaining}</span>
                    </span>
                    <span className="flex items-center">
                      <Icon name="Users" size={12} strokeWidth={2} />
                      <span className="ml-1">{course?.classmates} classmates</span>
                    </span>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Play"
                    iconPosition="left"
                    iconSize={14}
                    className="text-primary border-primary hover:bg-primary hover:text-white"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentCourses;