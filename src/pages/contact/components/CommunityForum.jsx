import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommunityForum = () => {
  const [activeTab, setActiveTab] = useState('recent');

  const forumCategories = [
  {
    id: 1,
    name: 'General Discussion',
    description: 'General questions and discussions about learning',
    icon: 'MessageSquare',
    posts: 1247,
    members: 3421,
    color: 'bg-blue-500'
  },
  {
    id: 2,
    name: 'Study Groups',
    description: 'Find study partners and join learning groups',
    icon: 'Users',
    posts: 892,
    members: 2156,
    color: 'bg-green-500'
  },
  {
    id: 3,
    name: 'Course Help',
    description: 'Get help with specific courses and assignments',
    icon: 'BookOpen',
    posts: 2341,
    members: 4567,
    color: 'bg-purple-500'
  },
  {
    id: 4,
    name: 'Technical Support',
    description: 'Platform issues and technical questions',
    icon: 'Settings',
    posts: 567,
    members: 1234,
    color: 'bg-orange-500'
  }];


  const recentDiscussions = [
  {
    id: 1,
    title: 'Best study techniques for mathematics?',
    author: 'Sarah Chen',
    authorAvatar: "https://images.unsplash.com/photo-1560859389-c4fb2bd88016",
    authorAvatarAlt: 'Professional headshot of Asian woman with shoulder-length black hair in white blouse',
    category: 'Study Groups',
    replies: 23,
    views: 156,
    lastActivity: '2 hours ago',
    isAnswered: true,
    tags: ['mathematics', 'study-tips', 'beginner']
  },
  {
    id: 2,
    title: 'Video playback issues on mobile app',
    author: 'Marcus Johnson',
    authorAvatar: "https://images.unsplash.com/photo-1588178457501-31b7688a41a0",
    authorAvatarAlt: 'Professional headshot of African American man with short hair in navy blazer',
    category: 'Technical Support',
    replies: 8,
    views: 89,
    lastActivity: '4 hours ago',
    isAnswered: false,
    tags: ['mobile', 'video', 'technical']
  },
  {
    id: 3,
    title: 'Looking for chemistry study group - Fall 2024',
    author: 'Elena Rodriguez',
    authorAvatar: "https://images.unsplash.com/photo-1628013663808-25ef6a3b28b4",
    authorAvatarAlt: 'Professional headshot of Hispanic woman with long brown hair in blue shirt',
    category: 'Study Groups',
    replies: 15,
    views: 234,
    lastActivity: '6 hours ago',
    isAnswered: false,
    tags: ['chemistry', 'study-group', 'fall-2024']
  },
  {
    id: 4,
    title: 'How to access course certificates?',
    author: 'David Kim',
    authorAvatar: "https://images.unsplash.com/photo-1687256457585-3608dfa736c5",
    authorAvatarAlt: 'Professional headshot of Asian man with glasses in dark suit',
    category: 'Course Help',
    replies: 12,
    views: 178,
    lastActivity: '8 hours ago',
    isAnswered: true,
    tags: ['certificates', 'completion', 'help']
  },
  {
    id: 5,
    title: 'Physics problem-solving strategies',
    author: 'Lisa Wang',
    authorAvatar: "https://images.unsplash.com/photo-1560859389-c4fb2bd88016",
    authorAvatarAlt: 'Professional headshot of Asian woman with long black hair in white top',
    category: 'General Discussion',
    replies: 31,
    views: 445,
    lastActivity: '12 hours ago',
    isAnswered: true,
    tags: ['physics', 'problem-solving', 'strategies']
  }];


  const popularDiscussions = [
  {
    id: 6,
    title: 'Complete guide to effective note-taking',
    author: 'Prof. Anderson',
    authorAvatar: "https://images.unsplash.com/photo-1735181094336-7fa757df9622",
    authorAvatarAlt: 'Professional headshot of middle-aged man with beard in academic attire',
    category: 'Study Groups',
    replies: 89,
    views: 1234,
    lastActivity: '1 day ago',
    isAnswered: true,
    tags: ['note-taking', 'study-tips', 'guide']
  },
  {
    id: 7,
    title: 'Overcoming math anxiety - Tips and resources',
    author: 'Dr. Martinez',
    authorAvatar: "https://images.unsplash.com/photo-1665023024202-4c8671802bf6",
    authorAvatarAlt: 'Professional headshot of Hispanic woman with curly hair in professional attire',
    category: 'General Discussion',
    replies: 67,
    views: 987,
    lastActivity: '2 days ago',
    isAnswered: true,
    tags: ['mathematics', 'anxiety', 'mental-health']
  }];


  const tabs = [
  { id: 'recent', name: 'Recent Discussions', icon: 'Clock' },
  { id: 'popular', name: 'Popular This Week', icon: 'TrendingUp' },
  { id: 'categories', name: 'Browse Categories', icon: 'Grid3X3' }];


  const getDiscussions = () => {
    switch (activeTab) {
      case 'popular':
        return popularDiscussions;
      case 'recent':
      default:
        return recentDiscussions;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-academic-navy mb-4">
            Community Forum
          </h2>
          <p className="text-lg text-subtle-gray max-w-2xl mx-auto">
            Connect with fellow learners, share knowledge, and get help from our vibrant community.
          </p>
        </div>

        {/* Forum Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <div className="text-2xl font-bold text-primary mb-1">12.5K</div>
            <div className="text-sm text-subtle-gray">Active Members</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <div className="text-2xl font-bold text-green-600 mb-1">5.2K</div>
            <div className="text-sm text-subtle-gray">Discussions</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <div className="text-2xl font-bold text-orange-600 mb-1">89%</div>
            <div className="text-sm text-subtle-gray">Questions Answered</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
            <div className="text-sm text-subtle-gray">Community Support</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
          {tabs?.map((tab) =>
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center space-x-2 px-4 py-3 font-medium text-sm academic-transition ${
            activeTab === tab?.id ?
            'text-primary border-b-2 border-primary' : 'text-subtle-gray hover:text-academic-navy'}`
            }>

              <Icon name={tab?.icon} size={16} strokeWidth={2} />
              <span>{tab?.name}</span>
            </button>
          )}
        </div>

        {/* Categories View */}
        {activeTab === 'categories' &&
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {forumCategories?.map((category) =>
          <div key={category?.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg academic-transition group cursor-pointer">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${category?.color} rounded-lg flex items-center justify-center group-hover:scale-110 academic-transition`}>
                    <Icon name={category?.icon} size={24} color="white" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-academic-navy mb-2 group-hover:text-primary academic-transition">
                      {category?.name}
                    </h3>
                    <p className="text-subtle-gray text-sm mb-4">
                      {category?.description}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-subtle-gray">
                      <div className="flex items-center space-x-1">
                        <Icon name="MessageSquare" size={12} strokeWidth={2} />
                        <span>{category?.posts?.toLocaleString()} posts</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Users" size={12} strokeWidth={2} />
                        <span>{category?.members?.toLocaleString()} members</span>
                      </div>
                    </div>
                  </div>
                  <Icon name="ArrowRight" size={20} className="text-subtle-gray group-hover:text-primary academic-transition" strokeWidth={2} />
                </div>
              </div>
          )}
          </div>
        }

        {/* Discussions View */}
        {(activeTab === 'recent' || activeTab === 'popular') &&
        <div className="space-y-4">
            {getDiscussions()?.map((discussion) =>
          <div key={discussion?.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg academic-transition group cursor-pointer">
                <div className="flex items-start space-x-4">
                  <img
                src={discussion?.authorAvatar}
                alt={discussion?.authorAvatarAlt}
                className="w-12 h-12 rounded-full object-cover" />

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-academic-navy group-hover:text-primary academic-transition">
                        {discussion?.title}
                      </h3>
                      {discussion?.isAnswered &&
                  <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          <Icon name="CheckCircle" size={12} strokeWidth={2} />
                          <span>Answered</span>
                        </div>
                  }
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-subtle-gray mb-3">
                      <span>by <strong className="text-academic-navy">{discussion?.author}</strong></span>
                      <span>in <strong className="text-primary">{discussion?.category}</strong></span>
                      <span>{discussion?.lastActivity}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {discussion?.tags?.map((tag, index) =>
                  <span key={index} className="bg-gray-100 text-subtle-gray px-2 py-1 rounded-full text-xs">
                          #{tag}
                        </span>
                  )}
                    </div>

                    <div className="flex items-center space-x-6 text-xs text-subtle-gray">
                      <div className="flex items-center space-x-1">
                        <Icon name="MessageSquare" size={14} strokeWidth={2} />
                        <span>{discussion?.replies} replies</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Eye" size={14} strokeWidth={2} />
                        <span>{discussion?.views} views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          )}
          </div>
        }

        {/* Join Community CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-center text-white">
          <Icon name="Users" size={48} className="mx-auto mb-4" strokeWidth={1} />
          <h3 className="text-2xl font-bold mb-4">
            Join Our Learning Community
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Connect with thousands of learners, share your knowledge, and get help when you need it. 
            Our community is here to support your educational journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100"
              iconName="UserPlus"
              iconPosition="left">

              Create Account
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
              iconName="MessageSquare"
              iconPosition="left">

              Start Discussion
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default CommunityForum;