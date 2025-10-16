import React from 'react';
import Icon from '../../../components/AppIcon';

const CourseOverview = ({ course }) => {
  return (
    <div className="space-y-8">
      {/* What You'll Learn */}
      <div className="bg-white rounded-xl p-8 academic-shadow">
        <h3 className="text-2xl font-bold text-reading-charcoal mb-6 flex items-center">
          <Icon name="Target" size={24} color="#2563EB" className="mr-3" />
          What You'll Learn
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {course?.learningObjectives?.map((objective, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Icon name="CheckCircle" size={20} color="#10B981" className="mt-0.5 flex-shrink-0" />
              <span className="text-reading-charcoal">{objective}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Course Requirements */}
      <div className="bg-white rounded-xl p-8 academic-shadow">
        <h3 className="text-2xl font-bold text-reading-charcoal mb-6 flex items-center">
          <Icon name="AlertCircle" size={24} color="#F59E0B" className="mr-3" />
          Requirements
        </h3>
        <ul className="space-y-3">
          {course?.requirements?.map((requirement, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Icon name="Dot" size={20} color="#6B7280" className="mt-0.5 flex-shrink-0" />
              <span className="text-reading-charcoal">{requirement}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Course Description */}
      <div className="bg-white rounded-xl p-8 academic-shadow">
        <h3 className="text-2xl font-bold text-reading-charcoal mb-6 flex items-center">
          <Icon name="FileText" size={24} color="#7C3AED" className="mr-3" />
          Course Description
        </h3>
        <div className="prose max-w-none">
          <p className="text-reading-charcoal leading-relaxed mb-4">
            {course?.fullDescription}
          </p>
          <p className="text-reading-charcoal leading-relaxed">
            This comprehensive course is designed for both beginners and intermediate learners who want to master the fundamentals and advanced concepts. Through hands-on projects, real-world examples, and interactive exercises, you'll gain practical experience that you can immediately apply in your career or personal projects.
          </p>
        </div>
      </div>
      {/* Skills You'll Gain */}
      <div className="bg-white rounded-xl p-8 academic-shadow">
        <h3 className="text-2xl font-bold text-reading-charcoal mb-6 flex items-center">
          <Icon name="Award" size={24} color="#E67E22" className="mr-3" />
          Skills You'll Gain
        </h3>
        <div className="flex flex-wrap gap-3">
          {course?.skills?.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      {/* Certificate */}
      <div className="bg-gradient-to-r from-achievement-orange/10 to-enrollment-orange/10 rounded-xl p-8 border border-achievement-orange/20">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-achievement-orange/20 rounded-full flex items-center justify-center">
            <Icon name="Award" size={32} color="#E67E22" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-reading-charcoal mb-2">
              Earn a Certificate of Completion
            </h3>
            <p className="text-reading-charcoal opacity-80">
              Upon successful completion of this course, you'll receive a verified certificate that you can share on LinkedIn, add to your resume, or showcase in your portfolio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;