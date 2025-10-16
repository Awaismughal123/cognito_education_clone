import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';

import Button from '../../components/ui/Button';
import FilterSidebar from './components/FilterSidebar';

import SortingBar from './components/SortingBar';
import CourseGrid from './components/CourseGrid';
import RecommendedSection from './components/RecommendedSection';
import CategoryTabs from './components/CategoryTabs';

const CourseCatalog = () => {
  const [filters, setFilters] = useState({
    subjects: [],
    difficulty: [],
    duration: [],
    format: [],
    rating: []
  });
  const [currentSort, setCurrentSort] = useState('relevance');
  const [viewMode, setViewMode] = useState('grid');
  const [activeCategory, setActiveCategory] = useState('all');
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [wishlistedCourses, setWishlistedCourses] = useState(new Set());
  const [comparedCourses, setComparedCourses] = useState(new Set());

  // Mock course data
  const allCourses = [
  {
    id: 'course-1',
    title: 'Complete JavaScript Mastery: From Beginner to Expert',
    description: `Master JavaScript from fundamentals to advanced concepts including ES6+, async programming, DOM manipulation, and modern frameworks.\nBuild real-world projects and gain the skills needed for professional web development.`,
    category: 'Programming',
    difficulty: 'Beginner',
    duration: 2400, // minutes
    price: 89,
    originalPrice: 199,
    rating: 4.8,
    reviewCount: 12450,
    enrolledCount: 45230,
    thumbnail: "https://images.unsplash.com/photo-1518933165971-611dbc9c412d",
    thumbnailAlt: 'Modern laptop displaying colorful JavaScript code with syntax highlighting in dark development environment',
    instructor: {
      name: 'Dr. Alex Johnson',
      avatar: "https://images.unsplash.com/photo-1724128195747-dd25cba7860f",
      avatarAlt: 'Professional headshot of Caucasian man with brown hair wearing navy blue suit and tie'
    },
    badge: 'Bestseller',
    isWishlisted: false
  },
  {
    id: 'course-2',
    title: 'Advanced Python for Data Science and Machine Learning',
    description: `Deep dive into Python's data science ecosystem with pandas, NumPy, scikit-learn, and TensorFlow.\nLearn statistical analysis, machine learning algorithms, and data visualization techniques.`, category: 'Data Science',
    difficulty: 'Advanced', duration: 3600, price: 129, originalPrice: 249, rating: 4.9, reviewCount: 8930, enrolledCount: 23450, thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3", thumbnailAlt: 'Data visualization dashboard showing colorful charts, graphs, and analytics on computer screen',
    instructor: {
      name: 'Prof. Maria Garcia', avatar: "https://images.unsplash.com/photo-1734821375517-ca34fbe8089d", avatarAlt: 'Professional headshot of Hispanic woman with long dark hair wearing white lab coat'
    },
    badge: 'New',
    isWishlisted: true
  },
  {
    id: 'course-3', title: 'UI/UX Design Fundamentals: Create Beautiful Interfaces', description: `Learn the principles of user interface and user experience design.\nMaster design tools like Figma, create wireframes, prototypes, and conduct user research.`, category: 'Design',
    difficulty: 'Intermediate', duration: 1800, price: 79, originalPrice: 159, rating: 4.7, reviewCount: 15670, enrolledCount: 34560, thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5", thumbnailAlt: 'Designer workspace with sketches, color palettes, and digital tablet showing mobile app interface mockups',
    instructor: {
      name: 'Sarah Kim', avatar: "https://images.unsplash.com/photo-1634295920526-7aaff6dcb066", avatarAlt: 'Professional headshot of Asian woman with short black hair wearing creative patterned blouse'
    },
    badge: 'Popular',
    isWishlisted: false
  },
  {
    id: 'course-4', title: 'Digital Marketing Strategy: SEO, Social Media & Analytics', description: `Comprehensive digital marketing course covering SEO, social media marketing, content strategy, and analytics.\nLearn to create effective marketing campaigns and measure their success.`, category: 'Marketing',
    difficulty: 'Beginner', duration: 2100, price: 69, originalPrice: 139, rating: 4.6, reviewCount: 9840, enrolledCount: 28930, thumbnail: "https://images.unsplash.com/photo-1660732421009-469aba1c2e81", thumbnailAlt: 'Marketing analytics dashboard on laptop screen showing social media metrics and growth charts',
    instructor: {
      name: 'Michael Chen', avatar: "https://images.unsplash.com/photo-1629272039203-7d76fdaf1324", avatarAlt: 'Professional headshot of Asian man with glasses wearing dark business suit and blue tie'
    },
    badge: null,
    isWishlisted: false
  },
  {
    id: 'course-5', title: 'React Development: Build Modern Web Applications',
    description: `Master React.js and build dynamic, interactive web applications.\nLearn hooks, state management, routing, and best practices for modern React development.`,
    category: 'Programming',
    difficulty: 'Intermediate', duration: 2700, price: 99, originalPrice: 199, rating: 4.8, reviewCount: 11230, enrolledCount: 19870, thumbnail: "https://images.unsplash.com/photo-1670057046254-3b5095eb4b66", thumbnailAlt: 'Computer screen displaying React component code with blue syntax highlighting and component tree structure',
    instructor: {
      name: 'Emma Rodriguez', avatar: "https://images.unsplash.com/photo-1645875281279-bc0a952fd42a", avatarAlt: 'Professional headshot of Hispanic woman with curly hair wearing black blazer and white shirt'
    },
    badge: 'Bestseller',
    isWishlisted: true
  },
  {
    id: 'course-6', title: 'Photography Masterclass: From Amateur to Professional', description: `Complete photography course covering composition, lighting, post-processing, and business aspects.\nLearn to capture stunning images and build a photography career.`, category: 'Photography',
    difficulty: 'Beginner', duration: 3000, price: 89, originalPrice: 179, rating: 4.9, reviewCount: 7650, enrolledCount: 15420, thumbnail: "https://images.unsplash.com/photo-1544980888-a57770fe09e8", thumbnailAlt: 'Professional photographer with DSLR camera capturing sunset landscape with mountains in background',
    instructor: {
      name: 'David Thompson', avatar: "https://images.unsplash.com/flagged/photo-1576869817325-2a84aa9b0fe9", avatarAlt: 'Professional headshot of Caucasian man with beard wearing casual denim shirt outdoors'
    },
    badge: null,
    isWishlisted: false
  },
  {
    id: 'course-7', title: 'Business Strategy and Entrepreneurship Essentials', description: `Learn fundamental business concepts, strategic planning, and entrepreneurship skills.\nDevelop business plans, understand market analysis, and learn startup fundamentals.`, category: 'Business',
    difficulty: 'Intermediate', duration: 2400, price: 109, originalPrice: 219, rating: 4.7, reviewCount: 6890, enrolledCount: 12340, thumbnail: "https://images.unsplash.com/photo-1672917187338-7f81ecac3d3f", thumbnailAlt: 'Business meeting with professionals discussing strategy around conference table with charts and documents',
    instructor: {
      name: 'Dr. Jennifer Wilson', avatar: "https://images.unsplash.com/photo-1734456611474-13245d164868", avatarAlt: 'Professional headshot of Caucasian woman with blonde hair wearing navy business suit'
    },
    badge: 'New',
    isWishlisted: false
  },
  {
    id: 'course-8', title: 'Music Production: Create Professional Tracks', description: `Learn music production from recording to mixing and mastering.\nUse industry-standard software and techniques to create professional-quality music.`, category: 'Music',
    difficulty: 'Intermediate', duration: 2200, price: 79, originalPrice: 159, rating: 4.8, reviewCount: 4560, enrolledCount: 8930, thumbnail: "https://images.unsplash.com/photo-1712530863897-cbc7523fc739", thumbnailAlt: 'Professional music studio with mixing console, monitors, and digital audio workstation on computer screen',
    instructor: {
      name: 'Marcus Johnson', avatar: "https://images.unsplash.com/photo-1715005881129-266ccdd75e43", avatarAlt: 'Professional headshot of African American man with short hair wearing black t-shirt in recording studio'
    },
    badge: null,
    isWishlisted: false
  },
  {
    id: 'course-9', title: 'Cybersecurity Fundamentals: Protect Digital Assets', description: `Comprehensive cybersecurity course covering threat assessment, network security, and ethical hacking.\nLearn to protect systems and data from cyber threats.`, category: 'Technology',
    difficulty: 'Advanced', duration: 3300, price: 149, originalPrice: 299, rating: 4.9, reviewCount: 5670, enrolledCount: 11230, thumbnail: "https://images.unsplash.com/photo-1654588827084-b6f27735ba7d", thumbnailAlt: 'Cybersecurity concept with digital lock icons and network security visualization on dark computer screen',
    instructor: {
      name: 'Dr. Robert Lee', avatar: "https://images.unsplash.com/photo-1714782521244-3af5b886446c", avatarAlt: 'Professional headshot of Asian man with glasses wearing white shirt and dark suit jacket'
    },
    badge: 'Expert',
    isWishlisted: true
  }];


  const [filteredCourses, setFilteredCourses] = useState(allCourses);

  useEffect(() => {
    // Initialize wishlisted courses
    const initialWishlisted = new Set(
      allCourses.filter((course) => course.isWishlisted).map((course) => course.id)
    );
    setWishlistedCourses(initialWishlisted);
  }, []);

  const handleFilterChange = (category, value, checked) => {
    setFilters((prev) => ({
      ...prev,
      [category]: checked ?
      [...prev?.[category], value] :
      prev?.[category]?.filter((item) => item !== value)
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      subjects: [],
      difficulty: [],
      duration: [],
      format: [],
      rating: []
    });
  };

  const handleSortChange = (sortValue) => {
    setCurrentSort(sortValue);
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      let sorted = [...filteredCourses];

      switch (sortValue) {
        case 'popularity':
          sorted?.sort((a, b) => b?.enrolledCount - a?.enrolledCount);
          break;
        case 'rating':
          sorted?.sort((a, b) => b?.rating - a?.rating);
          break;
        case 'newest':
          sorted?.sort((a, b) => (b?.badge === 'New' ? 1 : 0) - (a?.badge === 'New' ? 1 : 0));
          break;
        case 'price-low':
          sorted?.sort((a, b) => a?.price - b?.price);
          break;
        case 'price-high':
          sorted?.sort((a, b) => b?.price - a?.price);
          break;
        default:
          // relevance - keep original order
          break;
      }

      setFilteredCourses(sorted);
      setLoading(false);
    }, 500);
  };

  const handleWishlistToggle = (courseId, isWishlisted) => {
    setWishlistedCourses((prev) => {
      const newSet = new Set(prev);
      if (isWishlisted) {
        newSet?.add(courseId);
      } else {
        newSet?.delete(courseId);
      }
      return newSet;
    });
  };

  const handleCompare = (courseId) => {
    setComparedCourses((prev) => {
      const newSet = new Set(prev);
      if (newSet?.has(courseId)) {
        newSet?.delete(courseId);
      } else if (newSet?.size < 3) {
        newSet?.add(courseId);
      }
      return newSet;
    });
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setLoading(true);

    setTimeout(() => {
      if (categoryId === 'all') {
        setFilteredCourses(allCourses);
      } else {
        const filtered = allCourses?.filter((course) =>
        course?.category?.toLowerCase()?.replace(/\s+/g, '-') === categoryId ||
        course?.category?.toLowerCase() === categoryId
        );
        setFilteredCourses(filtered);
      }
      setLoading(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-academic-navy via-primary to-secondary pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Discover Your Next
              <span className="block text-achievement-orange">Learning Adventure</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Explore our comprehensive catalog of expert-led courses designed to transform your skills and accelerate your career growth.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Icon
                  name="Search"
                  size={20}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  placeholder="What do you want to learn today?"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-0 text-lg focus:ring-2 focus:ring-achievement-orange focus:outline-none" />

                <Button
                  variant="default"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-achievement-orange hover:bg-enrollment-orange"
                  iconName="Search"
                  iconSize={18}>

                  Search
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-achievement-orange mb-2">214+</div>
                <div className="text-white/80">Expert Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-achievement-orange mb-2">50K+</div>
                <div className="text-white/80">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-achievement-orange mb-2">95%</div>
                <div className="text-white/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-achievement-orange mb-2">4.8★</div>
                <div className="text-white/80">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category Navigation */}
      <CategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Recommended Section */}
        <RecommendedSection />

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
            isOpen={isFilterSidebarOpen}
            onClose={() => setIsFilterSidebarOpen(false)} />


          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {/* Sorting Bar */}
            <SortingBar
              totalCourses={allCourses?.length}
              showingCount={filteredCourses?.length}
              currentSort={currentSort}
              onSortChange={handleSortChange}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              onToggleFilters={() => setIsFilterSidebarOpen(true)} />


            {/* Course Grid */}
            <div className="py-8">
              <CourseGrid
                courses={filteredCourses}
                viewMode={viewMode}
                onWishlistToggle={handleWishlistToggle}
                onCompare={handleCompare}
                loading={loading} />

            </div>

            {/* Load More */}
            {!loading && filteredCourses?.length > 0 &&
            <div className="text-center py-8">
                <Button
                variant="outline"
                size="lg"
                iconName="ChevronDown"
                iconSize={20}
                className="min-w-[200px]">

                  Load More Courses
                </Button>
              </div>
            }
          </div>
        </div>
      </div>
      {/* Comparison Bar */}
      {comparedCourses?.size > 0 &&
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Icon name="GitCompare" size={20} className="text-primary" />
              <span className="font-medium text-reading-charcoal">
                Compare Courses ({comparedCourses?.size}/3)
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
              variant="outline"
              size="sm"
              onClick={() => setComparedCourses(new Set())}>

                Clear All
              </Button>
              <Button
              variant="default"
              size="sm"
              className="bg-primary hover:bg-primary/90"
              disabled={comparedCourses?.size < 2}>

                Compare Now
              </Button>
            </div>
          </div>
        </div>
      }
      {/* Footer */}
      <footer className="bg-academic-navy text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" size={24} color="white" strokeWidth={2.5} />
                </div>
                <div>
                  <span className="text-2xl font-bold">Cognito</span>
                  <span className="block text-sm text-white/70 -mt-1">Education</span>
                </div>
              </div>
              <p className="text-white/80 mb-6 max-w-md">
                Empowering learners worldwide with quality education and expert-led courses. Transform your potential into achievement.
              </p>
              <div className="flex space-x-4">
                <Icon name="Facebook" size={20} className="text-white/60 hover:text-white cursor-pointer academic-transition" />
                <Icon name="Twitter" size={20} className="text-white/60 hover:text-white cursor-pointer academic-transition" />
                <Icon name="Instagram" size={20} className="text-white/60 hover:text-white cursor-pointer academic-transition" />
                <Icon name="Linkedin" size={20} className="text-white/60 hover:text-white cursor-pointer academic-transition" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="/about" className="hover:text-white academic-transition">About Us</a></li>
                <li><a href="/contact" className="hover:text-white academic-transition">Contact</a></li>
                <li><a href="#" className="hover:text-white academic-transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white academic-transition">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white academic-transition">Programming</a></li>
                <li><a href="#" className="hover:text-white academic-transition">Data Science</a></li>
                <li><a href="#" className="hover:text-white academic-transition">Design</a></li>
                <li><a href="#" className="hover:text-white academic-transition">Business</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
            <p>&copy; {new Date()?.getFullYear()} Cognito Education. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>);

};

export default CourseCatalog;