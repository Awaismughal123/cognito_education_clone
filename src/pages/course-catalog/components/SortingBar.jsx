import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SortingBar = ({ 
  totalCourses, 
  currentSort, 
  onSortChange, 
  viewMode, 
  onViewModeChange, 
  onToggleFilters,
  showingCount 
}) => {
  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant', icon: 'Target' },
    { value: 'popularity', label: 'Most Popular', icon: 'TrendingUp' },
    { value: 'rating', label: 'Highest Rated', icon: 'Star' },
    { value: 'newest', label: 'Newest First', icon: 'Calendar' },
    { value: 'price-low', label: 'Price: Low to High', icon: 'ArrowUp' },
    { value: 'price-high', label: 'Price: High to Low', icon: 'ArrowDown' }
  ];

  const getCurrentSortLabel = () => {
    const option = sortOptions?.find(opt => opt?.value === currentSort);
    return option ? option?.label : 'Sort by';
  };

  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-30">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left Section - Results Count & Filter Toggle */}
          <div className="flex items-center space-x-4">
            {/* Mobile Filter Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={onToggleFilters}
              iconName="Filter"
              iconSize={16}
              className="lg:hidden"
            >
              Filters
            </Button>

            {/* Results Count */}
            <div className="text-sm text-subtle-gray">
              Showing <span className="font-medium text-reading-charcoal">{showingCount}</span> of{' '}
              <span className="font-medium text-reading-charcoal">{totalCourses}</span> courses
            </div>
          </div>

          {/* Right Section - Sort & View Options */}
          <div className="flex items-center space-x-4">
            {/* Sort Dropdown */}
            <div className="relative group">
              <Button
                variant="outline"
                size="sm"
                iconName="ChevronDown"
                iconPosition="right"
                iconSize={16}
                className="min-w-[140px] justify-between"
              >
                {getCurrentSortLabel()}
              </Button>
              
              {/* Dropdown Menu */}
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg academic-shadow border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible academic-transition z-50">
                <div className="py-2">
                  {sortOptions?.map((option) => (
                    <button
                      key={option?.value}
                      onClick={() => onSortChange(option?.value)}
                      className={`w-full flex items-center space-x-3 px-4 py-2 text-sm text-left academic-transition ${
                        currentSort === option?.value
                          ? 'bg-primary/10 text-primary' :'text-reading-charcoal hover:bg-gray-50 hover:text-primary'
                      }`}
                    >
                      <Icon name={option?.icon} size={16} strokeWidth={2} />
                      <span>{option?.label}</span>
                      {currentSort === option?.value && (
                        <Icon name="Check" size={16} className="ml-auto" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => onViewModeChange('grid')}
                className={`p-2 rounded-md academic-transition ${
                  viewMode === 'grid' ?'bg-white text-primary shadow-sm' :'text-subtle-gray hover:text-reading-charcoal'
                }`}
                aria-label="Grid view"
              >
                <Icon name="Grid3X3" size={18} strokeWidth={2} />
              </button>
              
              <button
                onClick={() => onViewModeChange('list')}
                className={`p-2 rounded-md academic-transition ${
                  viewMode === 'list' ?'bg-white text-primary shadow-sm' :'text-subtle-gray hover:text-reading-charcoal'
                }`}
                aria-label="List view"
              >
                <Icon name="List" size={18} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        {/* Active Filters Summary (if any) */}
        <div className="mt-3 flex flex-wrap gap-2">
          {/* This would be populated based on active filters */}
          <div className="flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
            <span>Programming</span>
            <button className="hover:bg-primary/20 rounded-full p-0.5">
              <Icon name="X" size={14} />
            </button>
          </div>
          
          <div className="flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
            <span>Beginner</span>
            <button className="hover:bg-primary/20 rounded-full p-0.5">
              <Icon name="X" size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortingBar;