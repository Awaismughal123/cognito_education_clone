import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import LoginForm from './components/LoginForm';
import SocialLoginButton from './components/SocialLoginButton';
import TrustSignals from './components/TrustSignals';
import WelcomeSection from './components/WelcomeSection';
import Icon from '../../components/AppIcon';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginMethod, setLoginMethod] = useState('email'); // 'email' or 'social'

  // Mock credentials for demonstration
  const mockCredentials = {
    email: "student@cognito.edu",
    password: "password123"
  };

  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/student-dashboard');
    }
  }, [navigate]);

  const handleEmailLogin = async (formData) => {
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Check mock credentials
      if (formData?.email === mockCredentials?.email && formData?.password === mockCredentials?.password) {
        // Successful login
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', formData?.email);
        localStorage.setItem('rememberMe', formData?.rememberMe?.toString());
        
        // Simulate user data
        const userData = {
          id: 1,
          name: "Alex Johnson",
          email: formData?.email,
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
          role: "student",
          joinDate: "2024-01-15",
          coursesEnrolled: 3,
          coursesCompleted: 1
        };
        
        localStorage.setItem('userData', JSON.stringify(userData));
        
        // Redirect to dashboard
        navigate('/student-dashboard');
      } else {
        // Invalid credentials
        alert(`Invalid credentials. Please use:\nEmail: ${mockCredentials?.email}\nPassword: ${mockCredentials?.password}`);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setLoading(true);
    setLoginMethod('social');
    
    try {
      // Simulate social login API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Successful social login
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('loginMethod', provider);
      
      // Simulate social user data
      const socialUserData = {
        id: 2,
        name: provider === 'Google' ? "Sarah Chen" : provider === 'Facebook' ? "Marcus Johnson" : "Emily Rodriguez",
        email: `user@${provider?.toLowerCase()}.com`,
        avatar: provider === 'Google' 
          ? "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
          : provider === 'Facebook'
          ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
          : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        role: "student",
        provider: provider,
        joinDate: new Date()?.toISOString()?.split('T')?.[0],
        coursesEnrolled: 0,
        coursesCompleted: 0
      };
      
      localStorage.setItem('userData', JSON.stringify(socialUserData));
      
      // Redirect to dashboard
      navigate('/student-dashboard');
    } catch (error) {
      console.error('Social login error:', error);
      alert(`${provider} login failed. Please try again.`);
    } finally {
      setLoading(false);
      setLoginMethod('email');
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign In - Cognito Education | Access Your Learning Dashboard</title>
        <meta name="description" content="Sign in to your Cognito Education account to access personalized courses, track progress, and continue your learning journey. Secure authentication with social login options." />
        <meta name="keywords" content="login, sign in, student portal, learning dashboard, education platform, online courses" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="pt-16">
          <div className="min-h-screen flex">
            {/* Left Side - Welcome Section (Hidden on mobile) */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 lg:p-12">
              <div className="w-full max-w-md mx-auto my-auto">
                <WelcomeSection />
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8">
              <div className="w-full max-w-md space-y-8">
                {/* Header */}
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <Icon name="GraduationCap" size={24} color="white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold text-academic-navy">Welcome Back</h1>
                      <p className="text-sm text-subtle-gray">Sign in to continue learning</p>
                    </div>
                  </div>
                </div>

                {/* Social Login Buttons */}
                <div className="space-y-3">
                  <SocialLoginButton
                    provider="Google"
                    icon="Chrome"
                    onClick={() => handleSocialLogin('Google')}
                    disabled={loading}
                  />
                  <SocialLoginButton
                    provider="Facebook"
                    icon="Facebook"
                    onClick={() => handleSocialLogin('Facebook')}
                    disabled={loading}
                  />
                  <SocialLoginButton
                    provider="LinkedIn"
                    icon="Linkedin"
                    onClick={() => handleSocialLogin('LinkedIn')}
                    disabled={loading}
                  />
                </div>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-subtle-gray">Or continue with email</span>
                  </div>
                </div>

                {/* Email Login Form */}
                <LoginForm onSubmit={handleEmailLogin} loading={loading && loginMethod === 'email'} />

                {/* Sign Up Link */}
                <div className="text-center">
                  <p className="text-sm text-subtle-gray">
                    Don't have an account?{' '}
                    <Link
                      to="/register"
                      className="font-medium text-primary hover:text-secondary academic-transition"
                    >
                      Sign up for free
                    </Link>
                  </p>
                </div>

                {/* Trust Signals - Mobile Only */}
                <div className="lg:hidden">
                  <TrustSignals />
                </div>

                {/* Demo Credentials Notice */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Info" size={20} color="var(--color-primary)" strokeWidth={2} />
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-1">Demo Credentials</h4>
                      <p className="text-xs text-blue-700 mb-2">
                        Use these credentials to explore the platform:
                      </p>
                      <div className="text-xs font-mono bg-white p-2 rounded border">
                        <div>Email: {mockCredentials?.email}</div>
                        <div>Password: {mockCredentials?.password}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;