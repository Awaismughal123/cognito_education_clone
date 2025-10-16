import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RecentActivity = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'course_completed': return 'CheckCircle';
      case 'quiz_passed': return 'Award';
      case 'assignment_submitted': return 'FileCheck';
      case 'discussion_posted': return 'MessageCircle';
      case 'badge_earned': return 'Star';
      case 'video_watched': return 'Play';
      default: return 'Activity';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'course_completed': return 'text-success bg-success/10';
      case 'quiz_passed': return 'text-achievement-orange bg-achievement-orange/10';
      case 'assignment_submitted': return 'text-primary bg-primary/10';
      case 'discussion_posted': return 'text-secondary bg-secondary/10';
      case 'badge_earned': return 'text-warning bg-warning/10';
      case 'video_watched': return 'text-scholarly-teal bg-scholarly-teal/10';
      default: return 'text-subtle-gray bg-gray-100';
    }
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const activityTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - activityTime) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h ago`;
    } else {
      return `${Math.floor(diffInMinutes / 1440)}d ago`;
    }
  };

  return (
    <div className="bg-white rounded-lg academic-shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-reading-charcoal">Recent Activity</h2>
        <button className="text-primary hover:text-secondary text-sm font-medium academic-transition">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {activities?.map((activity) => (
          <div key={activity?.id} className="flex items-start space-x-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${getActivityColor(activity?.type)}`}>
              <Icon name={getActivityIcon(activity?.type)} size={16} strokeWidth={2} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <p className="text-sm text-reading-charcoal">{activity?.description}</p>
                {activity?.points && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-achievement-orange/10 text-achievement-orange">
                    +{activity?.points} XP
                  </span>
                )}
              </div>
              
              <div className="flex items-center space-x-2 text-xs text-subtle-gray">
                <span>{activity?.course}</span>
                <span>•</span>
                <span>{formatTimeAgo(activity?.timestamp)}</span>
              </div>
            </div>

            {activity?.thumbnail && (
              <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={activity?.thumbnail}
                  alt={activity?.thumbnailAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-gray-100 text-center">
        <p className="text-sm text-subtle-gray">
          You've earned <span className="font-semibold text-achievement-orange">245 XP</span> this week!
        </p>
      </div>
    </div>
  );
};

export default RecentActivity;