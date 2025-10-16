import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressOverview = ({ progressData }) => {
  const progressCards = [
    {
      title: "Overall Progress",
      value: `${progressData?.overallProgress}%`,
      icon: "TrendingUp",
      color: "bg-primary",
      change: "+12% this week"
    },
    {
      title: "Active Courses",
      value: progressData?.activeCourses,
      icon: "BookOpen",
      color: "bg-secondary",
      change: "2 new enrolled"
    },
    {
      title: "Certificates Earned",
      value: progressData?.certificates,
      icon: "Award",
      color: "bg-achievement-orange",
      change: "1 this month"
    },
    {
      title: "Study Hours",
      value: `${progressData?.studyHours}h`,
      icon: "Clock",
      color: "bg-scholarly-teal",
      change: "+5h this week"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {progressCards?.map((card, index) => (
        <div key={index} className="bg-white rounded-lg academic-shadow p-6 hover:shadow-lg academic-transition">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 ${card?.color} rounded-lg flex items-center justify-center`}>
              <Icon name={card?.icon} size={24} color="white" strokeWidth={2} />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-reading-charcoal">{card?.value}</div>
              <div className="text-xs text-subtle-gray">{card?.title}</div>
            </div>
          </div>
          <div className="flex items-center text-xs text-success">
            <Icon name="ArrowUp" size={12} strokeWidth={2} />
            <span className="ml-1">{card?.change}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressOverview;