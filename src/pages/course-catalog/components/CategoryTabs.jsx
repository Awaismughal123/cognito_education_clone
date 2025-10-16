import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryTabs = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', label: 'All Courses', icon: 'Grid3X3', count: 214 },
    { id: 'programming', label: 'Programming', icon: 'Code', count: 52 },
    { id: 'data-science', label: 'Data Science', icon: 'BarChart3', count: 34 },
    { id: 'design', label: 'Design', icon: 'Palette', count: 28 },
    { id: 'business', label: 'Business', icon: 'Briefcase', count: 41 },
    { id: 'marketing', label: 'Marketing', icon: 'TrendingUp', count: 29 },
    { id: 'photography', label: 'Photography', icon: 'Camera', count: 18 },
    { id: 'music', label: 'Music', icon: 'Music', count: 12 }
  ];

  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-1 overflow-x-auto scrollbar-hide py-4">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => onCategoryChange(category?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap academic-transition ${
                activeCategory === category?.id
                  ? 'bg-primary text-white' :'text-reading-charcoal hover:bg-gray-100 hover:text-primary'
              }`}
            >
              <Icon name={category?.icon} size={16} strokeWidth={2} />
              <span>{category?.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeCategory === category?.id
                  ? 'bg-white/20 text-white' :'bg-gray-100 text-subtle-gray'
              }`}>
                {category?.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;