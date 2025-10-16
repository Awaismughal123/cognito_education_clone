import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import WelcomeHeader from './components/WelcomeHeader';
import ProgressOverview from './components/ProgressOverview';
import CurrentCourses from './components/CurrentCourses';
import UpcomingSchedule from './components/UpcomingSchedule';
import RecentActivity from './components/RecentActivity';
import RecommendedCourses from './components/RecommendedCourses';
import AchievementsBadges from './components/AchievementsBadges';
import QuickActions from './components/QuickActions';

const StudentDashboard = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  // Mock user data
  const userData = {
    firstName: "Sarah",
    lastName: "Johnson",
    avatar: "https://images.unsplash.com/photo-1519234302787-f17b7656c7b3",
    avatarAlt: "Professional headshot of young woman with brown hair and friendly smile wearing white blazer",
    stats: {
      coursesCompleted: 12,
      currentStreak: 7,
      totalHours: 156
    }
  };

  // Mock progress data
  const progressData = {
    overallProgress: 78,
    activeCourses: 4,
    certificates: 3,
    studyHours: 24
  };

  // Mock current courses
  const currentCourses = [
  {
    id: 1,
    title: "Advanced JavaScript Concepts",
    instructor: "Dr. Michael Chen",
    thumbnail: "https://images.unsplash.com/photo-1550063873-ab792950096b",
    thumbnailAlt: "Computer screen showing colorful JavaScript code with syntax highlighting",
    progress: 85,
    nextLesson: "Lesson 12: Async/Await",
    timeRemaining: "2h 30m",
    classmates: 1247
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    instructor: "Prof. Lisa Rodriguez",
    thumbnail: "https://images.unsplash.com/photo-1538722823866-938844bbb53f",
    thumbnailAlt: "Whiteboard with complex algorithm diagrams and flowcharts drawn in blue marker",
    progress: 62,
    nextLesson: "Lesson 8: Binary Trees",
    timeRemaining: "4h 15m",
    classmates: 892
  },
  {
    id: 3,
    title: "Machine Learning Fundamentals",
    instructor: "Dr. James Wilson",
    thumbnail: "https://images.unsplash.com/photo-1515408201103-f7a8c194a15c",
    thumbnailAlt: "Laptop displaying colorful data visualization charts and machine learning graphs",
    progress: 34,
    nextLesson: "Lesson 5: Neural Networks",
    timeRemaining: "8h 45m",
    classmates: 2156
  }];


  // Mock upcoming schedule
  const upcomingSchedule = [
  {
    id: 1,
    title: "JavaScript Quiz #3",
    course: "Advanced JavaScript Concepts",
    date: "2025-10-16",
    time: "2:00 PM",
    type: "quiz"
  },
  {
    id: 2,
    title: "Algorithm Assignment Due",
    course: "Data Structures & Algorithms",
    date: "2025-10-17",
    time: "11:59 PM",
    type: "assignment"
  },
  {
    id: 3,
    title: "ML Live Session",
    course: "Machine Learning Fundamentals",
    date: "2025-10-18",
    time: "7:00 PM",
    type: "live_session"
  },
  {
    id: 4,
    title: "Project Submission",
    course: "Advanced JavaScript Concepts",
    date: "2025-10-20",
    time: "11:59 PM",
    type: "deadline"
  }];


  // Mock recent activities
  const recentActivities = [
  {
    id: 1,
    type: "quiz_passed",
    description: "Completed JavaScript Fundamentals Quiz with 92% score",
    course: "Advanced JavaScript Concepts",
    timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
    points: 50,
    thumbnail: "https://images.unsplash.com/photo-1550063873-ab792950096b",
    thumbnailAlt: "JavaScript code on computer screen with colorful syntax highlighting"
  },
  {
    id: 2,
    type: "badge_earned",
    description: "Earned \'Problem Solver\' badge for completing 10 algorithm challenges",
    course: "Data Structures & Algorithms",
    timestamp: new Date(Date.now() - 7200000), // 2 hours ago
    points: 100
  },
  {
    id: 3,
    type: "video_watched",
    description: "Watched \'Introduction to Neural Networks\' video",
    course: "Machine Learning Fundamentals",
    timestamp: new Date(Date.now() - 14400000), // 4 hours ago
    points: 25,
    thumbnail: "https://images.unsplash.com/photo-1663780852957-0e1f8bda3d0d",
    thumbnailAlt: "Data visualization charts and graphs on laptop screen"
  },
  {
    id: 4,
    type: "discussion_posted",
    description: "Posted question in \'Async Programming\' discussion forum",
    course: "Advanced JavaScript Concepts",
    timestamp: new Date(Date.now() - 21600000), // 6 hours ago
    points: 15
  },
  {
    id: 5,
    type: "assignment_submitted",
    description: "Submitted Binary Search Tree implementation",
    course: "Data Structures & Algorithms",
    timestamp: new Date(Date.now() - 86400000), // 1 day ago
    points: 75
  }];


  // Mock recommended courses
  const recommendedCourses = [
  {
    id: 1,
    title: "React.js Complete Guide",
    instructor: "Sarah Thompson",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    thumbnailAlt: "React logo and component code displayed on modern computer monitor",
    duration: "12h 30m",
    rating: "4.9",
    students: "15.2k",
    matchScore: 95,
    tags: ["Frontend", "React", "JavaScript"],
    reason: "Perfect match for your JavaScript skills"
  },
  {
    id: 2,
    title: "Python for Data Science",
    instructor: "Dr. Alex Kumar",
    thumbnail: "https://images.unsplash.com/photo-1730155298936-d7276dbf9140",
    thumbnailAlt: "Python programming code with data analysis libraries and colorful charts",
    duration: "18h 45m",
    rating: "4.8",
    students: "22.1k",
    matchScore: 88,
    tags: ["Python", "Data Science", "Analytics"],
    reason: "Complements your ML fundamentals course"
  },
  {
    id: 3,
    title: "System Design Interview Prep",
    instructor: "Mark Stevens",
    thumbnail: "https://images.unsplash.com/photo-1538722823866-938844bbb53f",
    thumbnailAlt: "System architecture diagrams and flowcharts drawn on whiteboard with markers",
    duration: "8h 20m",
    rating: "4.7",
    students: "8.9k",
    matchScore: 82,
    tags: ["System Design", "Architecture", "Interview"],
    reason: "Next step after algorithms mastery"
  },
  {
    id: 4,
    title: "Cloud Computing with AWS",
    instructor: "Jennifer Lee",
    thumbnail: "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d",
    thumbnailAlt: "Cloud computing infrastructure diagram with servers and network connections",
    duration: "15h 10m",
    rating: "4.6",
    students: "11.7k",
    matchScore: 76,
    tags: ["AWS", "Cloud", "DevOps"],
    reason: "Trending skill in your field"
  }];


  // Mock achievements data
  const achievementsData = {
    totalBadges: 15,
    certificates: 3,
    currentLevel: 8,
    nextLevel: 9,
    currentXP: 2450,
    nextLevelXP: 3000
  };

  // Mock recent badges
  const recentBadges = [
  {
    id: 1,
    name: "Quick Learner",
    icon: "Zap",
    tier: "gold",
    earnedDate: "Oct 15"
  },
  {
    id: 2,
    name: "Problem Solver",
    icon: "Puzzle",
    tier: "silver",
    earnedDate: "Oct 14"
  },
  {
    id: 3,
    name: "Code Master",
    icon: "Code",
    tier: "bronze",
    earnedDate: "Oct 12"
  },
  {
    id: 4,
    name: "Team Player",
    icon: "Users",
    tier: "bronze",
    earnedDate: "Oct 10"
  }];


  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Header */}
          <WelcomeHeader user={userData} />
          
          {/* Progress Overview */}
          <ProgressOverview progressData={progressData} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Current Courses */}
              <CurrentCourses courses={currentCourses} />
              
              {/* Recommended Courses */}
              <RecommendedCourses recommendations={recommendedCourses} />
            </div>
            
            {/* Sidebar - Right Column */}
            <div className="space-y-8">
              {/* Upcoming Schedule */}
              <UpcomingSchedule schedule={upcomingSchedule} />
              
              {/* Recent Activity */}
              <RecentActivity activities={recentActivities} />
              
              {/* Achievements & Badges */}
              <AchievementsBadges
                achievements={achievementsData}
                recentBadges={recentBadges} />

              
              {/* Quick Actions */}
              <QuickActions />
            </div>
          </div>
        </div>
      </main>
    </div>);

};

export default StudentDashboard;