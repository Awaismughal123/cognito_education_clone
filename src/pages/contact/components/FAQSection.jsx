import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const FAQSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFAQ, setOpenFAQ] = useState(null);

  const categories = [
    { id: 'all', name: 'All Topics', icon: 'Grid3X3' },
    { id: 'account', name: 'Account & Billing', icon: 'User' },
    { id: 'courses', name: 'Courses & Learning', icon: 'BookOpen' },
    { id: 'technical', name: 'Technical Issues', icon: 'Settings' },
    { id: 'mobile', name: 'Mobile App', icon: 'Smartphone' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'account',
      question: 'How do I reset my password?',
      answer: `To reset your password:\n1. Go to the login page and click "Forgot Password"\n2. Enter your email address\n3. Check your email for a reset link\n4. Follow the instructions in the email\n5. Create a new strong password\n\nIf you don't receive the email within 5 minutes, check your spam folder or contact support.`,
      popularity: 95
    },
    {
      id: 2,
      category: 'courses',question: 'Can I access courses offline?',
      answer: `Yes! Our mobile app allows offline access:\n• Download course videos when connected to WiFi\n• Access downloaded content without internet\n• Sync progress when you reconnect\n• Available for iOS and Android\n\nNote: Interactive exercises and live sessions require internet connection.`,
      popularity: 88
    },
    {
      id: 3,
      category: 'account',question: 'How do I cancel my subscription?',answer: `You can cancel your subscription anytime:\n1. Go to Account Settings\n2. Click on "Subscription" tab\n3. Select "Cancel Subscription"\n4. Choose your reason (optional)\n5. Confirm cancellation\n\nYou'll retain access until your current billing period ends. No refunds for partial months.`,
      popularity: 82
    },
    {
      id: 4,
      category: 'technical',
      question: 'Videos won\'t play or keep buffering',
      answer: `Try these troubleshooting steps:\n1. Check your internet connection (minimum 5 Mbps recommended)\n2. Clear your browser cache and cookies\n3. Disable browser extensions temporarily\n4. Try a different browser (Chrome, Firefox, Safari)\n5. Restart your device\n\nIf issues persist, contact our technical support team.`,
      popularity: 76
    },
    {
      id: 5,
      category: 'courses',
      question: 'How do I track my learning progress?',
      answer: `Your progress is automatically tracked:\n• Visit your Student Dashboard\n• View completion percentages for each course\n• See time spent learning\n• Check quiz scores and achievements\n• Download progress reports\n\nProgress syncs across all your devices when you're logged in.`,
      popularity: 71
    },
    {
      id: 6,
      category: 'mobile',question: 'Is there a mobile app available?',
      answer: `Yes! Download our free mobile app:\n• Available on iOS App Store and Google Play\n• Full course access and offline downloads\n• Push notifications for new content\n• Seamless sync with web platform\n• Optimized for mobile learning\n\nSearch "Cognito Education" in your app store.`,
      popularity: 69
    },
    {
      id: 7,
      category: 'account',question: 'Can I share my account with family members?',
      answer: `Account sharing policies:\n• Personal accounts are for individual use only\n• Family plans available for up to 6 members\n• Student discounts available with valid ID\n• Corporate plans for teams and organizations\n\nSharing personal accounts violates our terms of service and may result in account suspension.`,
      popularity: 64
    },
    {
      id: 8,
      category: 'technical',question: 'What browsers are supported?',
      answer: `Supported browsers (latest versions):\n• Google Chrome 90+\n• Mozilla Firefox 88+\n• Safari 14+\n• Microsoft Edge 90+\n\nFor best experience:\n• Enable JavaScript\n• Allow cookies\n• Update to latest browser version\n• Disable ad blockers on our site`,
      popularity: 58
    }
  ];

  const filteredFAQs = faqs?.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq?.category === activeCategory;
    const matchesSearch = faq?.question?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         faq?.answer?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    return matchesCategory && matchesSearch;
  })?.sort((a, b) => b?.popularity - a?.popularity);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-academic-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-subtle-gray max-w-2xl mx-auto">
            Find quick answers to common questions. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <Input
            type="search"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e?.target?.value)}
            className="max-w-md mx-auto"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium academic-transition ${
                activeCategory === category?.id
                  ? 'bg-primary text-white' :'bg-white text-academic-navy hover:bg-primary/5'
              }`}
            >
              <Icon name={category?.icon} size={16} strokeWidth={2} />
              <span>{category?.name}</span>
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs?.length === 0 ? (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="mx-auto text-subtle-gray mb-4" strokeWidth={1} />
              <h3 className="text-xl font-semibold text-academic-navy mb-2">No results found</h3>
              <p className="text-subtle-gray">Try adjusting your search terms or browse different categories.</p>
            </div>
          ) : (
            filteredFAQs?.map((faq) => (
              <div key={faq?.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(faq?.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 academic-transition"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg font-semibold text-academic-navy">{faq?.question}</span>
                    {faq?.popularity > 80 && (
                      <span className="bg-achievement-orange text-white text-xs px-2 py-1 rounded-full font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                  <Icon 
                    name={openFAQ === faq?.id ? "ChevronUp" : "ChevronDown"} 
                    size={20} 
                    strokeWidth={2}
                    className="text-subtle-gray"
                  />
                </button>
                
                {openFAQ === faq?.id && (
                  <div className="px-6 pb-4">
                    <div className="pt-2 border-t border-gray-100">
                      <div className="text-subtle-gray leading-relaxed whitespace-pre-line">
                        {faq?.answer}
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-subtle-gray">
                          <span>Was this helpful?</span>
                          <div className="flex items-center space-x-2">
                            <button className="flex items-center space-x-1 hover:text-green-600 academic-transition">
                              <Icon name="ThumbsUp" size={14} strokeWidth={2} />
                              <span>Yes</span>
                            </button>
                            <button className="flex items-center space-x-1 hover:text-red-600 academic-transition">
                              <Icon name="ThumbsDown" size={14} strokeWidth={2} />
                              <span>No</span>
                            </button>
                          </div>
                        </div>
                        <button className="text-xs text-primary hover:text-primary/80 academic-transition">
                          Contact support about this
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Still Need Help */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <Icon name="HelpCircle" size={48} className="mx-auto text-primary mb-4" strokeWidth={1} />
            <h3 className="text-xl font-semibold text-academic-navy mb-2">
              Still need help?
            </h3>
            <p className="text-subtle-gray mb-6">
              Our support team is here to help you with any questions not covered in our FAQ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 academic-transition">
                <Icon name="MessageCircle" size={18} strokeWidth={2} />
                <span>Start Live Chat</span>
              </button>
              <button className="flex items-center justify-center space-x-2 px-6 py-3 border border-gray-300 text-academic-navy rounded-lg hover:bg-gray-50 academic-transition">
                <Icon name="Mail" size={18} strokeWidth={2} />
                <span>Send Email</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;