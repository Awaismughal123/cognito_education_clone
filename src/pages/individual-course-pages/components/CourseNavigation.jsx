import React from 'react';
import Icon from '../../../components/AppIcon';

const CourseNavigation = ({ activeTab, onTabChange, progress }) => {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Info' },
    { id: 'curriculum', label: 'Curriculum', icon: 'BookOpen' },
    { id: 'instructor', label: 'Instructor', icon: 'User' },
    { id: 'reviews', label: 'Reviews', icon: 'MessageSquare' },
    { id: 'resources', label: 'Resources', icon: 'Download' }
  ];

  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => onTabChange(tab?.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap academic-transition ${
                  activeTab === tab?.id
                    ? 'border-primary text-primary' :'border-transparent text-reading-charcoal hover:text-primary hover:border-gray-300'
                }`}
              >
                <Icon name={tab?.icon} size={18} strokeWidth={2} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </nav>

          {/* Progress Indicator */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-accent h-2 rounded-full academic-transition"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-sm font-medium text-reading-charcoal">{progress}%</span>
            </div>
            <Icon name="Trophy" size={20} color="#059669" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseNavigation;