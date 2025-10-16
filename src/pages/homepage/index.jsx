import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FeaturedCourses from './components/FeaturedCourses';
import ValueProposition from './components/ValueProposition';
import SuccessStories from './components/SuccessStories';
import Footer from './components/Footer';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cognito Education - Master Any Subject At Your Own Pace</title>
        <meta
          name="description"
          content="Transform your potential into achievement with Cognito Education. Quality education for everyone through personalized learning paths, expert instructors, and proven results. Start your free trial today." />

        <meta name="keywords" content="online education, personalized learning, academic excellence, course catalog, student success, expert instructors" />
        <meta property="og:title" content="Cognito Education - Master Any Subject At Your Own Pace" />
        <meta property="og:description" content="Quality education for everyone. Transform your potential into achievement with our comprehensive learning platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cognito-education.com/homepage" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cognito Education - Master Any Subject At Your Own Pace" />
        <meta name="twitter:description" content="Quality education for everyone. Transform your potential into achievement." />
        <link rel="canonical" href="https://cognito-education.com/homepage" />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Cognito Education",
            "description": "Online learning platform offering personalized education with expert instructors",
            "url": "https://cognito-education.com",
            "logo": "https://images.unsplash.com/photo-1716769111014-14c6ce5fd004",
            "sameAs": [
            "https://facebook.com/cognitoeducation",
            "https://twitter.com/cognitoeducation",
            "https://linkedin.com/company/cognitoeducation"],

            "offers": {
              "@type": "Offer",
              "category": "Education",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <HeroSection />

          {/* Featured Courses */}
          <FeaturedCourses />

          {/* Value Proposition */}
          <ValueProposition />

          {/* Success Stories */}
          <SuccessStories />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>);

};

export default Homepage;