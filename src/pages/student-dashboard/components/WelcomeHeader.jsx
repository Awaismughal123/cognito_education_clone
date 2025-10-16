import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const WelcomeHeader = ({ user }) => {
  const currentHour = new Date()?.getHours();
  const getGreeting = () => {
    if (currentHour < 12) return 'Good morning';
    if (currentHour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-white/20">
              <Image
                src={user?.avatar}
                alt={user?.avatarAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-white flex items-center justify-center">
              <Icon name="Check" size={12} color="white" strokeWidth={3} />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              {getGreeting()}, {user?.firstName}!
            </h1>
            <p className="text-white/80 text-sm">
              Ready to continue your learning journey?
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold">{user?.stats?.coursesCompleted}</div>
            <div className="text-white/80 text-xs">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{user?.stats?.currentStreak}</div>
            <div className="text-white/80 text-xs">Day Streak</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{user?.stats?.totalHours}</div>
            <div className="text-white/80 text-xs">Hours Learned</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;