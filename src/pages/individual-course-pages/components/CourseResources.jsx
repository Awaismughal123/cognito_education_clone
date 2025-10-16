import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CourseResources = ({ resources }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Resources' },
    { value: 'pdf', label: 'PDF Documents' },
    { value: 'video', label: 'Video Materials' },
    { value: 'code', label: 'Code Samples' },
    { value: 'template', label: 'Templates' },
    { value: 'tool', label: 'Tools & Software' }
  ];

  const getResourceIcon = (type) => {
    const iconMap = {
      pdf: 'FileText',
      video: 'Play',
      code: 'Code',
      template: 'Layout',
      tool: 'Wrench',
      link: 'ExternalLink'
    };
    return iconMap?.[type] || 'File';
  };

  const getResourceColor = (type) => {
    const colorMap = {
      pdf: '#EF4444',
      video: '#8B5CF6',
      code: '#10B981',
      template: '#F59E0B',
      tool: '#6366F1',
      link: '#06B6D4'
    };
    return colorMap?.[type] || '#6B7280';
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i))?.toFixed(2)) + ' ' + sizes?.[i];
  };

  const filteredResources = resources?.filter(resource => {
    const matchesSearch = resource?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         resource?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource?.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl p-8 academic-shadow">
        <h3 className="text-2xl font-bold text-reading-charcoal mb-6 flex items-center">
          <Icon name="Download" size={24} color="#2563EB" className="mr-3" />
          Course Resources
        </h3>
        
        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Icon name="Search" size={20} color="#6B7280" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e?.target?.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e?.target?.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {categories?.map((category) => (
              <option key={category?.value} value={category?.value}>
                {category?.label}
              </option>
            ))}
          </select>
        </div>
        
        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources?.map((resource, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-primary/30 academic-transition group">
              <div className="flex items-start space-x-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${getResourceColor(resource?.type)}20` }}
                >
                  <Icon 
                    name={getResourceIcon(resource?.type)} 
                    size={24} 
                    color={getResourceColor(resource?.type)} 
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-reading-charcoal mb-2 group-hover:text-primary academic-transition">
                    {resource?.title}
                  </h4>
                  <p className="text-sm text-subtle-gray mb-3 line-clamp-2">
                    {resource?.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-subtle-gray mb-4">
                    <span className="capitalize">{resource?.type}</span>
                    {resource?.size && <span>{formatFileSize(resource?.size)}</span>}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      iconName="Download"
                      iconPosition="left"
                      iconSize={16}
                    >
                      Download
                    </Button>
                    {resource?.previewUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        iconName="Eye"
                        iconSize={16}
                      >
                        Preview
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredResources?.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} color="#D1D5DB" className="mx-auto mb-4" />
            <h4 className="text-lg font-medium text-reading-charcoal mb-2">No resources found</h4>
            <p className="text-subtle-gray">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
      {/* Additional Resources */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 border border-primary/10">
        <h4 className="text-xl font-bold text-reading-charcoal mb-4 flex items-center">
          <Icon name="Lightbulb" size={20} color="#F59E0B" className="mr-3" />
          Additional Learning Resources
        </h4>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h5 className="font-semibold text-reading-charcoal">Recommended Reading</h5>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Icon name="BookOpen" size={16} color="#6B7280" />
                <span className="text-sm text-reading-charcoal">Advanced Programming Concepts</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="BookOpen" size={16} color="#6B7280" />
                <span className="text-sm text-reading-charcoal">Design Patterns in Practice</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="BookOpen" size={16} color="#6B7280" />
                <span className="text-sm text-reading-charcoal">Industry Best Practices Guide</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h5 className="font-semibold text-reading-charcoal">Useful Tools</h5>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Icon name="ExternalLink" size={16} color="#6B7280" />
                <span className="text-sm text-reading-charcoal">Online Code Editor</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="ExternalLink" size={16} color="#6B7280" />
                <span className="text-sm text-reading-charcoal">Documentation Reference</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="ExternalLink" size={16} color="#6B7280" />
                <span className="text-sm text-reading-charcoal">Community Forum</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseResources;