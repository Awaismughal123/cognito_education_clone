import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSignals = () => {
  const trustFeatures = [
    {
      icon: "Shield",
      title: "Secure Authentication",
      description: "256-bit SSL encryption protects your data"
    },
    {
      icon: "Lock",
      title: "Privacy Protected",
      description: "We never share your personal information"
    },
    {
      icon: "Award",
      title: "Trusted by 50K+ Students",
      description: "Join thousands of successful learners"
    }
  ];

  return (
    <div className="bg-gray-50 rounded-lg p-6 space-y-4">
      <h3 className="text-lg font-semibold text-academic-navy mb-4">
        Why Choose Cognito Education?
      </h3>
      <div className="space-y-4">
        {trustFeatures?.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon 
                name={feature?.icon} 
                size={16} 
                color="var(--color-primary)" 
                strokeWidth={2.5} 
              />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-reading-charcoal">
                {feature?.title}
              </h4>
              <p className="text-xs text-subtle-gray mt-1">
                {feature?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-4 border-t border-gray-200">
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size={16} color="var(--color-success)" strokeWidth={2} />
            <span className="text-xs text-subtle-gray">SSL Secured</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" size={16} color="var(--color-success)" strokeWidth={2} />
            <span className="text-xs text-subtle-gray">GDPR Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSignals;