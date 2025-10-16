import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickActions = () => {
  const quickActions = [
    {
      title: "Take Practice Quiz",
      description: "Test your knowledge with quick quizzes",
      icon: "HelpCircle",
      color: "bg-secondary",
      link: "/individual-course-pages"
    },
    {
      title: "Join Study Group",
      description: "Connect with fellow learners",
      icon: "Users",
      color: "bg-scholarly-teal",
      link: "/student-dashboard"
    },
    {
      title: "Browse Courses",
      description: "Discover new learning opportunities",
      icon: "Search",
      color: "bg-primary",
      link: "/course-catalog"
    },
    {
      title: "Download Materials",
      description: "Access offline study resources",
      icon: "Download",
      color: "bg-achievement-orange",
      link: "/student-dashboard"
    }
  ];

  return (
    <div className="bg-white rounded-lg academic-shadow p-6">
      <h2 className="text-xl font-bold text-reading-charcoal mb-6">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quickActions?.map((action, index) => (
          <Link key={index} to={action?.link} className="group">
            <div className="border border-gray-100 rounded-lg p-4 hover:border-primary/20 hover:shadow-md academic-transition group-hover:scale-105">
              <div className="flex items-center space-x-3 mb-3">
                <div className={`w-10 h-10 ${action?.color} rounded-lg flex items-center justify-center`}>
                  <Icon name={action?.icon} size={20} color="white" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-reading-charcoal text-sm group-hover:text-primary academic-transition">
                    {action?.title}
                  </h3>
                  <p className="text-xs text-subtle-gray">{action?.description}</p>
                </div>
                <Icon 
                  name="ArrowRight" 
                  size={16} 
                  className="text-subtle-gray group-hover:text-primary academic-transition" 
                  strokeWidth={2} 
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-gray-100">
        <Button
          variant="outline"
          fullWidth
          iconName="MessageCircle"
          iconPosition="left"
          iconSize={16}
          className="text-primary border-primary hover:bg-primary hover:text-white"
        >
          Need Help? Contact Support
        </Button>
      </div>
    </div>
  );
};

export default QuickActions;