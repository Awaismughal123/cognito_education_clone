import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const InstructorProfile = ({ instructor }) => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl p-8 academic-shadow">
        <h3 className="text-2xl font-bold text-reading-charcoal mb-8 flex items-center">
          <Icon name="User" size={24} color="#2563EB" className="mr-3" />
          Meet Your Instructor
        </h3>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Instructor Info */}
          <div className="lg:col-span-1">
            <div className="text-center">
              <Image
                src={instructor?.avatar}
                alt={instructor?.avatarAlt}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-primary/10"
              />
              <h4 className="text-xl font-bold text-reading-charcoal mb-2">
                {instructor?.name}
              </h4>
              <p className="text-primary font-medium mb-4">{instructor?.title}</p>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Icon name="Star" size={16} color="#F59E0B" fill="#F59E0B" />
                  <span className="font-medium">{instructor?.rating} Instructor Rating</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Icon name="MessageSquare" size={16} color="#6B7280" />
                  <span>{instructor?.reviewCount} Reviews</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Icon name="Users" size={16} color="#6B7280" />
                  <span>{instructor?.studentCount} Students</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Icon name="PlayCircle" size={16} color="#6B7280" />
                  <span>{instructor?.courseCount} Courses</span>
                </div>
              </div>
              
              <div className="mt-6">
                <Button
                  variant="outline"
                  className="w-full"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Message Instructor
                </Button>
              </div>
            </div>
          </div>
          
          {/* Instructor Details */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h5 className="text-lg font-semibold text-reading-charcoal mb-3">About</h5>
              <p className="text-reading-charcoal leading-relaxed">
                {instructor?.bio}
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold text-reading-charcoal mb-3">Experience</h5>
              <div className="space-y-4">
                {instructor?.experience?.map((exp, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Briefcase" size={20} color="#2563EB" />
                    </div>
                    <div>
                      <h6 className="font-semibold text-reading-charcoal">{exp?.position}</h6>
                      <p className="text-primary font-medium">{exp?.company}</p>
                      <p className="text-sm text-subtle-gray">{exp?.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold text-reading-charcoal mb-3">Expertise</h5>
              <div className="flex flex-wrap gap-2">
                {instructor?.expertise?.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Other Courses */}
      <div className="bg-white rounded-xl p-8 academic-shadow">
        <h4 className="text-xl font-bold text-reading-charcoal mb-6 flex items-center">
          <Icon name="BookOpen" size={20} color="#7C3AED" className="mr-3" />
          More Courses by {instructor?.name}
        </h4>
        
        <div className="grid md:grid-cols-2 gap-6">
          {instructor?.otherCourses?.map((course, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-primary/30 academic-transition cursor-pointer">
              <div className="flex items-start space-x-4">
                <Image
                  src={course?.thumbnail}
                  alt={course?.thumbnailAlt}
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <h6 className="font-semibold text-reading-charcoal mb-1 line-clamp-2">
                    {course?.title}
                  </h6>
                  <div className="flex items-center space-x-4 text-sm text-subtle-gray">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={14} color="#F59E0B" fill="#F59E0B" />
                      <span>{course?.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={14} color="#6B7280" />
                      <span>{course?.students}</span>
                    </div>
                  </div>
                  <p className="text-primary font-semibold mt-2">${course?.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;