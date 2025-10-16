import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AchievementsBadges = ({ achievements, recentBadges }) => {
  const badgeColors = {
    'bronze': 'bg-gradient-to-br from-amber-600 to-amber-700',
    'silver': 'bg-gradient-to-br from-gray-400 to-gray-500',
    'gold': 'bg-gradient-to-br from-yellow-400 to-yellow-500',
    'platinum': 'bg-gradient-to-br from-purple-400 to-purple-500'
  };

  return (
    <div className="bg-white rounded-lg academic-shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-reading-charcoal">Achievements & Badges</h2>
        <Button
          variant="ghost"
          size="sm"
          iconName="Trophy"
          iconPosition="left"
          iconSize={16}
          className="text-achievement-orange"
        >
          View All
        </Button>
      </div>
      {/* Achievement Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-achievement-orange">{achievements?.totalBadges}</div>
          <div className="text-xs text-subtle-gray">Total Badges</div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-success">{achievements?.certificates}</div>
          <div className="text-xs text-subtle-gray">Certificates</div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-primary">{achievements?.currentLevel}</div>
          <div className="text-xs text-subtle-gray">Current Level</div>
        </div>
      </div>
      {/* Recent Badges */}
      <div className="mb-6">
        <h3 className="font-semibold text-reading-charcoal mb-3">Recent Badges</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {recentBadges?.map((badge) => (
            <div key={badge?.id} className="text-center group cursor-pointer">
              <div className={`w-16 h-16 mx-auto rounded-full ${badgeColors?.[badge?.tier]} flex items-center justify-center mb-2 group-hover:scale-110 academic-transition shadow-lg`}>
                <Icon name={badge?.icon} size={24} color="white" strokeWidth={2} />
              </div>
              <div className="text-xs font-medium text-reading-charcoal mb-1">{badge?.name}</div>
              <div className="text-xs text-subtle-gray">{badge?.earnedDate}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Progress to Next Level */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-reading-charcoal">Progress to Level {achievements?.nextLevel}</span>
          <span className="text-sm text-subtle-gray">{achievements?.currentXP}/{achievements?.nextLevelXP} XP</span>
        </div>
        <div className="w-full bg-white rounded-full h-3 mb-2">
          <div 
            className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full academic-transition"
            style={{ width: `${(achievements?.currentXP / achievements?.nextLevelXP) * 100}%` }}
          ></div>
        </div>
        <p className="text-xs text-subtle-gray">
          {achievements?.nextLevelXP - achievements?.currentXP} XP needed for next level
        </p>
      </div>
      {/* Quick Actions */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            size="sm"
            iconName="Target"
            iconPosition="left"
            iconSize={14}
            className="text-primary border-primary hover:bg-primary hover:text-white"
          >
            Set Goals
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="Share2"
            iconPosition="left"
            iconSize={14}
            className="text-secondary border-secondary hover:bg-secondary hover:text-white"
          >
            Share Progress
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AchievementsBadges;