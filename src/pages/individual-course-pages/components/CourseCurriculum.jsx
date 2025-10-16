import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CourseCurriculum = ({ curriculum, userProgress = {} }) => {
  const [expandedSections, setExpandedSections] = useState(new Set([0]));

  const toggleSection = (sectionIndex) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded?.has(sectionIndex)) {
      newExpanded?.delete(sectionIndex);
    } else {
      newExpanded?.add(sectionIndex);
    }
    setExpandedSections(newExpanded);
  };

  const isLessonCompleted = (sectionIndex, lessonIndex) => {
    return userProgress?.[`${sectionIndex}-${lessonIndex}`] || false;
  };

  const getSectionProgress = (section, sectionIndex) => {
    const completedLessons = section?.lessons?.filter((_, lessonIndex) => 
      isLessonCompleted(sectionIndex, lessonIndex)
    )?.length;
    return Math.round((completedLessons / section?.lessons?.length) * 100);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-8 academic-shadow">
        <h3 className="text-2xl font-bold text-reading-charcoal mb-6 flex items-center">
          <Icon name="BookOpen" size={24} color="#2563EB" className="mr-3" />
          Course Curriculum
        </h3>
        
        <div className="space-y-4">
          {curriculum?.map((section, sectionIndex) => {
            const isExpanded = expandedSections?.has(sectionIndex);
            const sectionProgress = getSectionProgress(section, sectionIndex);
            
            return (
              <div key={sectionIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(sectionIndex)}
                  className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 academic-transition flex items-center justify-between text-left"
                >
                  <div className="flex items-center space-x-4">
                    <Icon 
                      name={isExpanded ? "ChevronDown" : "ChevronRight"} 
                      size={20} 
                      color="#6B7280" 
                    />
                    <div>
                      <h4 className="font-semibold text-reading-charcoal">
                        Section {sectionIndex + 1}: {section?.title}
                      </h4>
                      <p className="text-sm text-subtle-gray">
                        {section?.lessons?.length} lessons • {section?.duration}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-accent h-2 rounded-full academic-transition"
                          style={{ width: `${sectionProgress}%` }}
                        />
                      </div>
                      <span className="text-sm text-subtle-gray">{sectionProgress}%</span>
                    </div>
                  </div>
                </button>
                {isExpanded && (
                  <div className="bg-white">
                    {section?.lessons?.map((lesson, lessonIndex) => {
                      const isCompleted = isLessonCompleted(sectionIndex, lessonIndex);
                      
                      return (
                        <div 
                          key={lessonIndex}
                          className="px-6 py-4 border-t border-gray-100 hover:bg-gray-50 academic-transition cursor-pointer"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                isCompleted 
                                  ? 'bg-accent text-white' :'bg-gray-200 text-gray-500'
                              }`}>
                                {isCompleted ? (
                                  <Icon name="Check" size={14} color="white" />
                                ) : (
                                  <Icon name="Play" size={12} color="#6B7280" />
                                )}
                              </div>
                              
                              <div className="flex items-center space-x-2">
                                <Icon 
                                  name={lesson?.type === 'video' ? 'Play' : lesson?.type === 'quiz' ? 'HelpCircle' : 'FileText'} 
                                  size={16} 
                                  color="#6B7280" 
                                />
                                <span className={`font-medium ${
                                  isCompleted ? 'text-reading-charcoal' : 'text-reading-charcoal'
                                }`}>
                                  {lesson?.title}
                                </span>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                              <span className="text-sm text-subtle-gray">{lesson?.duration}</span>
                              {lesson?.isPreview && (
                                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                                  Preview
                                </span>
                              )}
                              {lesson?.type === 'quiz' && (
                                <span className="px-2 py-1 bg-achievement-orange/10 text-achievement-orange text-xs rounded-full font-medium">
                                  Quiz
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseCurriculum;