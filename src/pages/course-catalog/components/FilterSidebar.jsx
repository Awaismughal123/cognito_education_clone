import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ filters, onFilterChange, onClearFilters, isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const subjects = [
    { id: 'mathematics', label: 'Mathematics', count: 45 },
    { id: 'science', label: 'Science', count: 38 },
    { id: 'programming', label: 'Programming', count: 52 },
    { id: 'business', label: 'Business', count: 29 },
    { id: 'languages', label: 'Languages', count: 34 },
    { id: 'arts', label: 'Arts & Design', count: 26 },
    { id: 'history', label: 'History', count: 18 },
    { id: 'psychology', label: 'Psychology', count: 22 }
  ];

  const difficultyLevels = [
    { id: 'beginner', label: 'Beginner', count: 89 },
    { id: 'intermediate', label: 'Intermediate', count: 67 },
    { id: 'advanced', label: 'Advanced', count: 43 },
    { id: 'expert', label: 'Expert', count: 15 }
  ];

  const durations = [
    { id: 'short', label: 'Under 5 hours', count: 34 },
    { id: 'medium', label: '5-20 hours', count: 78 },
    { id: 'long', label: '20-50 hours', count: 56 },
    { id: 'extended', label: '50+ hours', count: 32 }
  ];

  const formats = [
    { id: 'video', label: 'Video Lectures', count: 156 },
    { id: 'interactive', label: 'Interactive', count: 89 },
    { id: 'text', label: 'Text-based', count: 45 },
    { id: 'mixed', label: 'Mixed Media', count: 67 }
  ];

  const instructorRatings = [
    { id: '5', label: '5 Stars', count: 45 },
    { id: '4', label: '4+ Stars', count: 89 },
    { id: '3', label: '3+ Stars', count: 134 },
    { id: '2', label: '2+ Stars', count: 178 }
  ];

  const handleFilterChange = (category, value, checked) => {
    onFilterChange(category, value, checked);
  };

  const FilterSection = ({ title, items, category, icon }) => (
    <div className="mb-6">
      <div className="flex items-center space-x-2 mb-3">
        <Icon name={icon} size={18} className="text-primary" />
        <h3 className="font-semibold text-reading-charcoal">{title}</h3>
      </div>
      <div className="space-y-2">
        {items?.map((item) => (
          <div key={item?.id} className="flex items-center justify-between">
            <Checkbox
              label={item?.label}
              checked={filters?.[category]?.includes(item?.id) || false}
              onChange={(e) => handleFilterChange(category, item?.id, e?.target?.checked)}
              className="flex-1"
            />
            <span className="text-sm text-subtle-gray ml-2">({item?.count})</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-0 left-0 h-full lg:h-auto w-80 bg-white z-50 lg:z-auto
        transform transition-transform duration-300 ease-in-out lg:transform-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        border-r border-gray-200 overflow-y-auto
      `}>
        <div className="p-6">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h2 className="text-xl font-bold text-academic-navy">Filters</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              iconName="X"
              iconSize={20}
            />
          </div>

          {/* Search */}
          <div className="mb-6">
            <Input
              type="search"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e?.target?.value)}
              className="w-full"
            />
          </div>

          {/* Clear Filters */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-academic-navy hidden lg:block">Filters</h2>
            <Button
              variant="outline"
              size="sm"
              onClick={onClearFilters}
              iconName="RotateCcw"
              iconSize={16}
              className="text-sm"
            >
              Clear All
            </Button>
          </div>

          {/* Filter Sections */}
          <div className="space-y-6">
            <FilterSection
              title="Subject"
              items={subjects}
              category="subjects"
              icon="BookOpen"
            />

            <FilterSection
              title="Difficulty Level"
              items={difficultyLevels}
              category="difficulty"
              icon="TrendingUp"
            />

            <FilterSection
              title="Duration"
              items={durations}
              category="duration"
              icon="Clock"
            />

            <FilterSection
              title="Format"
              items={formats}
              category="format"
              icon="Play"
            />

            <FilterSection
              title="Instructor Rating"
              items={instructorRatings}
              category="rating"
              icon="Star"
            />
          </div>

          {/* Apply Filters Button (Mobile) */}
          <div className="mt-8 lg:hidden">
            <Button
              variant="default"
              fullWidth
              onClick={onClose}
              className="bg-primary hover:bg-primary/90"
            >
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;