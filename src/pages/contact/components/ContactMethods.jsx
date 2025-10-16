import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 1,
      title: "Live Chat",
      description: "Get instant help from our support team. Available 24/7 for immediate assistance.",
      icon: "MessageSquare",
      action: "Start Chat",
      availability: "Available Now",
      responseTime: "< 2 minutes",
      color: "bg-green-500"
    },
    {
      id: 2,
      title: "Email Support",
      description: "Send us detailed questions and we\'ll respond with comprehensive solutions.",
      icon: "Mail",
      action: "Send Email",
      availability: "Always Open",
      responseTime: "< 4 hours",
      color: "bg-blue-500"
    },
    {
      id: 3,
      title: "Phone Support",
      description: "Speak directly with our education specialists for personalized assistance.",
      icon: "Phone",
      action: "Call Now",
      availability: "Mon-Fri 8AM-8PM EST",
      responseTime: "Immediate",
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "Video Call",
      description: "Schedule a face-to-face session for complex technical or learning issues.",
      icon: "Video",
      action: "Schedule Call",
      availability: "By Appointment",
      responseTime: "Same Day",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-academic-navy mb-4">
            Choose Your Preferred Contact Method
          </h2>
          <p className="text-lg text-subtle-gray max-w-2xl mx-auto">
            Multiple ways to reach us, ensuring you get the help you need in the format that works best for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods?.map((method) => (
            <div key={method?.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg academic-transition group">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${method?.color} rounded-lg flex items-center justify-center group-hover:scale-110 academic-transition`}>
                  <Icon name={method?.icon} size={24} color="white" strokeWidth={2} />
                </div>
                <div className={`w-3 h-3 ${method?.color} rounded-full animate-pulse`}></div>
              </div>

              <h3 className="text-xl font-semibold text-academic-navy mb-2">
                {method?.title}
              </h3>

              <p className="text-subtle-gray text-sm mb-4 leading-relaxed">
                {method?.description}
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-subtle-gray">Availability:</span>
                  <span className="font-medium text-academic-navy">{method?.availability}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-subtle-gray">Response Time:</span>
                  <span className="font-medium text-green-600">{method?.responseTime}</span>
                </div>
              </div>

              <Button
                variant="outline"
                fullWidth
                className="group-hover:bg-primary group-hover:text-white group-hover:border-primary"
              >
                {method?.action}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;