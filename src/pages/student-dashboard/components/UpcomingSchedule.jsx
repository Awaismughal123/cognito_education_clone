import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const UpcomingSchedule = ({ schedule }) => {
  const getEventTypeIcon = (type) => {
    switch (type) {
      case 'assignment': return 'FileText';
      case 'quiz': return 'HelpCircle';
      case 'live_session': return 'Video';
      case 'deadline': return 'AlertTriangle';
      default: return 'Calendar';
    }
  };

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'assignment': return 'text-primary';
      case 'quiz': return 'text-secondary';
      case 'live_session': return 'text-success';
      case 'deadline': return 'text-error';
      default: return 'text-subtle-gray';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow?.setDate(tomorrow?.getDate() + 1);

    if (date?.toDateString() === today?.toDateString()) {
      return 'Today';
    } else if (date?.toDateString() === tomorrow?.toDateString()) {
      return 'Tomorrow';
    } else {
      return date?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  return (
    <div className="bg-white rounded-lg academic-shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-reading-charcoal">Upcoming Schedule</h2>
        <Button
          variant="ghost"
          size="sm"
          iconName="Calendar"
          iconPosition="left"
          iconSize={16}
          className="text-primary"
        >
          View Calendar
        </Button>
      </div>
      <div className="space-y-4">
        {schedule?.map((item) => (
          <div key={item?.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 academic-transition">
            <div className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center ${getEventTypeColor(item?.type)}`}>
              <Icon name={getEventTypeIcon(item?.type)} size={20} strokeWidth={2} />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-reading-charcoal truncate">{item?.title}</h3>
              <p className="text-sm text-subtle-gray">{item?.course}</p>
            </div>
            
            <div className="text-right">
              <div className="text-sm font-medium text-reading-charcoal">
                {formatDate(item?.date)}
              </div>
              <div className="text-xs text-subtle-gray">{item?.time}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-gray-100">
        <Button
          variant="outline"
          fullWidth
          iconName="Plus"
          iconPosition="left"
          iconSize={16}
          className="text-primary border-primary hover:bg-primary hover:text-white"
        >
          Add Study Session
        </Button>
      </div>
    </div>
  );
};

export default UpcomingSchedule;