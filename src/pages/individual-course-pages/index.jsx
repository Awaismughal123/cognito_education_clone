import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/ui/Header';
import CourseHeader from './components/CourseHeader';
import CourseNavigation from './components/CourseNavigation';
import CourseOverview from './components/CourseOverview';
import CourseCurriculum from './components/CourseCurriculum';
import InstructorProfile from './components/InstructorProfile';
import CourseReviews from './components/CourseReviews';
import CourseResources from './components/CourseResources';
import RelatedCourses from './components/RelatedCourses';

const IndividualCoursePage = () => {
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  // Mock course data
  const courseData = {
    id: "react-advanced-2024",
    title: "Advanced React Development: Building Production-Ready Applications",
    description: "Master advanced React concepts, state management, performance optimization, and modern development patterns to build scalable, production-ready applications.",
    fullDescription: `This comprehensive course takes you beyond the basics of React development into advanced concepts and real-world application building. You'll learn to architect scalable applications, implement complex state management solutions, optimize performance, and follow industry best practices used by top tech companies.

Through hands-on projects and real-world scenarios, you'll gain the expertise needed to build production-ready React applications that can handle complex business requirements and scale effectively.`,
    category: "Web Development",
    level: "Advanced",
    rating: 4.8,
    reviewCount: 2847,
    enrolledCount: "12,450",
    duration: "42 hours",
    lessons: 156,
    projects: 8,
    quizzes: 24,
    language: "English",
    price: 89.99,
    originalPrice: 149.99,
    previewImage: "https://images.unsplash.com/photo-1635114332743-719b5e0702b9",
    previewImageAlt: "Modern computer setup showing React code on multiple monitors with clean workspace",
    instructor: {
      name: "Sarah Chen",
      title: "Senior React Developer at Meta",
      avatar: "https://images.unsplash.com/photo-1597621969117-1a305d3e0c68",
      avatarAlt: "Professional headshot of Asian woman with shoulder-length black hair in navy blazer",
      rating: 4.9,
      reviewCount: 15420,
      studentCount: "89,000+",
      courseCount: 12,
      bio: `Sarah is a Senior React Developer at Meta with over 8 years of experience building large-scale web applications. She has contributed to React core and is passionate about teaching modern development practices. Her courses have helped thousands of developers advance their careers in frontend development.`,
      experience: [
      {
        position: "Senior React Developer",
        company: "Meta (Facebook)",
        duration: "2020 - Present"
      },
      {
        position: "Frontend Tech Lead",
        company: "Airbnb",
        duration: "2018 - 2020"
      },
      {
        position: "React Developer",
        company: "Netflix",
        duration: "2016 - 2018"
      }],

      expertise: ["React", "TypeScript", "GraphQL", "Node.js", "AWS", "Performance Optimization", "Testing"],
      otherCourses: [
      {
        title: "React Testing Masterclass with Jest and React Testing Library",
        thumbnail: "https://images.unsplash.com/photo-1536703528217-c4cb4f7b8402",
        thumbnailAlt: "Computer screen showing testing code with green checkmarks indicating passed tests",
        rating: 4.7,
        students: "8,200",
        price: 79.99
      },
      {
        title: "TypeScript for React Developers: Complete Guide",
        thumbnail: "https://images.unsplash.com/photo-1732017968601-f46d9badf229",
        thumbnailAlt: "Code editor displaying TypeScript syntax with React components",
        rating: 4.6,
        students: "6,800",
        price: 69.99
      }]

    },
    learningObjectives: [
    "Build complex React applications with advanced patterns and architectures",
    "Implement efficient state management using Redux Toolkit and Context API",
    "Optimize React applications for performance and scalability",
    "Master React hooks including custom hooks development",
    "Implement server-side rendering with Next.js",
    "Write comprehensive tests for React components and applications",
    "Deploy React applications to production environments",
    "Debug and profile React applications effectively"],

    requirements: [
    "Solid understanding of JavaScript ES6+ features",
    "Basic knowledge of React fundamentals (components, props, state)",
    "Familiarity with HTML, CSS, and modern web development",
    "Node.js and npm installed on your computer",
    "Code editor (VS Code recommended)",
    "Basic understanding of Git version control"],

    skills: [
    "Advanced React",
    "Redux Toolkit",
    "React Router",
    "Next.js",
    "TypeScript",
    "Testing",
    "Performance Optimization",
    "State Management",
    "Custom Hooks",
    "Context API"]

  };

  const curriculum = [
  {
    title: "Advanced React Fundamentals",
    duration: "6 hours",
    lessons: [
    { title: "React 18 New Features and Concurrent Mode", duration: "45 min", type: "video", isPreview: true },
    { title: "Advanced Component Patterns", duration: "52 min", type: "video" },
    { title: "Render Props and Higher-Order Components", duration: "38 min", type: "video" },
    { title: "React Fiber Architecture Deep Dive", duration: "41 min", type: "video" },
    { title: "Knowledge Check: React Fundamentals", duration: "15 min", type: "quiz" }]

  },
  {
    title: "State Management Mastery",
    duration: "8 hours",
    lessons: [
    { title: "Redux Toolkit Setup and Configuration", duration: "35 min", type: "video" },
    { title: "Creating Slices and Async Thunks", duration: "48 min", type: "video" },
    { title: "RTK Query for Data Fetching", duration: "55 min", type: "video" },
    { title: "Context API vs Redux: When to Use What", duration: "32 min", type: "video" },
    { title: "State Management Project", duration: "2 hours", type: "project" },
    { title: "State Management Quiz", duration: "20 min", type: "quiz" }]

  },
  {
    title: "Performance Optimization",
    duration: "7 hours",
    lessons: [
    { title: "React DevTools Profiler", duration: "28 min", type: "video" },
    { title: "Memoization with useMemo and useCallback", duration: "42 min", type: "video" },
    { title: "Code Splitting and Lazy Loading", duration: "36 min", type: "video" },
    { title: "Virtual Scrolling for Large Lists", duration: "44 min", type: "video" },
    { title: "Bundle Analysis and Optimization", duration: "33 min", type: "video" },
    { title: "Performance Optimization Challenge", duration: "1.5 hours", type: "project" }]

  },
  {
    title: "Testing React Applications",
    duration: "6 hours",
    lessons: [
    { title: "Jest and React Testing Library Setup", duration: "25 min", type: "video" },
    { title: "Testing Components and User Interactions", duration: "45 min", type: "video" },
    { title: "Mocking API Calls and External Dependencies", duration: "38 min", type: "video" },
    { title: "Integration Testing Strategies", duration: "41 min", type: "video" },
    { title: "Testing Best Practices", duration: "22 min", type: "video" },
    { title: "Testing Knowledge Assessment", duration: "25 min", type: "quiz" }]

  }];


  const userProgress = {
    "0-0": true,
    "0-1": true,
    "0-2": false,
    "1-0": true,
    "1-1": false
  };

  const reviews = [
  {
    name: "Michael Rodriguez",
    title: "Frontend Developer at Google",
    avatar: "https://images.unsplash.com/photo-1675784206080-4e928963cc8e",
    avatarAlt: "Professional headshot of Hispanic man with short black hair and beard in dark suit",
    rating: 5,
    date: "2024-10-10",
    comment: `This course exceeded my expectations! Sarah's teaching style is exceptional, and the projects are incredibly practical. The advanced patterns section helped me refactor our production code at work, resulting in significant performance improvements. Highly recommended for anyone serious about React development.`,
    helpful: true,
    helpfulCount: 127
  },
  {
    name: "Emily Watson",
    title: "Full Stack Developer",
    avatar: "https://images.unsplash.com/photo-1600451210793-418b806816ac",
    avatarAlt: "Professional headshot of blonde woman with blue eyes in white blouse",
    rating: 5,
    date: "2024-10-08",
    comment: `The depth of content in this course is amazing. I particularly loved the state management section with Redux Toolkit. The real-world examples and best practices shared throughout the course have made me a much more confident React developer. Worth every penny!`,
    helpful: true,
    helpfulCount: 89
  },
  {
    name: "David Kim",
    title: "Senior Software Engineer",
    avatar: "https://images.unsplash.com/photo-1687256457585-3608dfa736c5",
    avatarAlt: "Professional headshot of Asian man with glasses and dark hair in navy shirt",
    rating: 4,
    date: "2024-10-05",
    comment: `Great course with comprehensive coverage of advanced React topics. The performance optimization section was particularly valuable. My only minor complaint is that some sections could use more hands-on exercises, but overall it's an excellent learning resource.`,
    helpful: true,
    helpfulCount: 64
  },
  {
    name: "Lisa Thompson",
    title: "React Developer at Spotify",
    avatar: "https://images.unsplash.com/photo-1656792941334-66f8e5e184a0",
    avatarAlt: "Professional headshot of woman with curly brown hair in professional attire",
    rating: 5,
    date: "2024-10-02",
    comment: `Sarah's expertise really shines through in this course. The testing section alone was worth the price. I've implemented many of the patterns and practices from this course in our production applications. Excellent investment in my career development.`,
    helpful: true,
    helpfulCount: 156
  }];


  const ratingDistribution = [
  { stars: 5, percentage: 78 },
  { stars: 4, percentage: 18 },
  { stars: 3, percentage: 3 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 0 }];


  const resources = [
  {
    title: "Complete Course Source Code",
    description: "All project files, components, and examples used throughout the course",
    type: "code",
    size: 15728640,
    previewUrl: "#"
  },
  {
    title: "React Best Practices Cheat Sheet",
    description: "Quick reference guide for React development best practices and patterns",
    type: "pdf",
    size: 2097152
  },
  {
    title: "Performance Optimization Checklist",
    description: "Step-by-step checklist for optimizing React application performance",
    type: "pdf",
    size: 1048576
  },
  {
    title: "Redux Toolkit Boilerplate",
    description: "Ready-to-use Redux Toolkit setup with common patterns and configurations",
    type: "template",
    size: 5242880,
    previewUrl: "#"
  },
  {
    title: "Testing Utilities Library",
    description: "Custom testing utilities and helpers for React component testing",
    type: "code",
    size: 3145728
  },
  {
    title: "Deployment Configuration Files",
    description: "Docker, CI/CD, and deployment configurations for various platforms",
    type: "template",
    size: 1572864
  }];


  const relatedCourses = [
  {
    title: "Node.js Backend Development for React Apps",
    description: "Build robust backend APIs that perfectly complement your React applications",
    thumbnail: "https://images.unsplash.com/photo-1695070541574-10881ada30ba",
    thumbnailAlt: "Computer screen showing Node.js server code with API endpoints and database connections",
    category: "Backend",
    level: "Intermediate",
    rating: 4.7,
    reviewCount: 1823,
    duration: "28 hours",
    students: "8,400",
    price: 79.99,
    originalPrice: 129.99,
    instructor: {
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1688247428578-3a2946ff9fdf",
      avatarAlt: "Professional headshot of man with brown hair and beard in casual shirt"
    }
  },
  {
    title: "GraphQL with React: Modern Data Fetching",
    description: "Learn to implement efficient data fetching with GraphQL and Apollo Client",
    thumbnail: "https://images.unsplash.com/photo-1651990892631-723da6447d7d",
    thumbnailAlt: "Multiple computer monitors displaying GraphQL schema and React components with data flow diagrams",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.6,
    reviewCount: 956,
    duration: "18 hours",
    students: "5,200",
    price: 69.99,
    instructor: {
      name: "Maria Garcia",
      avatar: "https://images.unsplash.com/photo-1734456611474-13245d164868",
      avatarAlt: "Professional headshot of woman with dark hair in business attire"
    }
  },
  {
    title: "React Native: Cross-Platform Mobile Development",
    description: "Leverage your React skills to build native mobile applications for iOS and Android",
    thumbnail: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec",
    thumbnailAlt: "Smartphone and tablet displaying mobile app interfaces built with React Native",
    category: "Mobile",
    level: "Intermediate",
    rating: 4.5,
    reviewCount: 2156,
    duration: "35 hours",
    students: "11,800",
    price: 94.99,
    originalPrice: 159.99,
    instructor: {
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1695830209166-161b6297541d",
      avatarAlt: "Professional headshot of man with short hair and friendly smile in polo shirt"
    }
  }];


  useEffect(() => {
    // Simulate checking enrollment status
    const checkEnrollment = () => {
      const enrolled = localStorage.getItem(`enrolled_${courseId}`) === 'true';
      setIsEnrolled(enrolled);
      if (enrolled) {
        const savedProgress = localStorage.getItem(`progress_${courseId}`);
        setProgress(savedProgress ? parseInt(savedProgress) : 25);
      }
    };

    checkEnrollment();
  }, [courseId]);

  const handleEnroll = () => {
    setIsEnrolled(true);
    setProgress(0);
    localStorage.setItem(`enrolled_${courseId}`, 'true');
    localStorage.setItem(`progress_${courseId}`, '0');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <CourseOverview course={courseData} />;
      case 'curriculum':
        return <CourseCurriculum curriculum={curriculum} userProgress={userProgress} />;
      case 'instructor':
        return <InstructorProfile instructor={courseData?.instructor} />;
      case 'reviews':
        return (
          <CourseReviews
            reviews={reviews}
            overallRating={courseData?.rating}
            ratingDistribution={ratingDistribution} />);


      case 'resources':
        return <CourseResources resources={resources} />;
      default:
        return <CourseOverview course={courseData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-16">
        <CourseHeader
          course={courseData}
          onEnroll={handleEnroll}
          isEnrolled={isEnrolled} />

        
        <CourseNavigation
          activeTab={activeTab}
          onTabChange={setActiveTab}
          progress={progress} />

        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {renderTabContent()}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <RelatedCourses courses={relatedCourses} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>);

};

export default IndividualCoursePage;