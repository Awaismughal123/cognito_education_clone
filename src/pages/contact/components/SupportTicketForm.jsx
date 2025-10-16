import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const SupportTicketForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    priority: '',
    description: '',
    attachments: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categoryOptions = [
    { value: 'technical', label: 'Technical Issue' },
    { value: 'account', label: 'Account & Billing' },
    { value: 'course', label: 'Course Content' },
    { value: 'mobile', label: 'Mobile App' },
    { value: 'feature', label: 'Feature Request' },
    { value: 'other', label: 'Other' }
  ];

  const priorityOptions = [
    { value: 'low', label: 'Low - General inquiry' },
    { value: 'medium', label: 'Medium - Affecting my learning' },
    { value: 'high', label: 'High - Cannot access courses' },
    { value: 'urgent', label: 'Urgent - Payment/billing issue' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e?.target?.files);
    setFormData(prev => ({
      ...prev,
      attachments: [...prev?.attachments, ...files]
    }));
  };

  const removeAttachment = (index) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev?.attachments?.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={40} color="#10B981" strokeWidth={2} />
            </div>
            <h2 className="text-3xl font-bold text-academic-navy mb-4">
              Ticket Submitted Successfully!
            </h2>
            <p className="text-lg text-subtle-gray mb-6">
              Your support ticket #CED-{Math.floor(Math.random() * 10000)} has been created. 
              We'll respond within 4 hours during business hours.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-academic-navy mb-4">What happens next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={16} className="text-primary" strokeWidth={2} />
                  <span className="text-sm text-subtle-gray">You'll receive a confirmation email shortly</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="User" size={16} className="text-primary" strokeWidth={2} />
                  <span className="text-sm text-subtle-gray">A support specialist will be assigned to your case</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MessageSquare" size={16} className="text-primary" strokeWidth={2} />
                  <span className="text-sm text-subtle-gray">We'll contact you with updates and solutions</span>
                </div>
              </div>
            </div>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  subject: '',
                  category: '',
                  priority: '',
                  description: '',
                  attachments: []
                });
              }}
              variant="outline"
            >
              Submit Another Ticket
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-academic-navy mb-4">
            Submit a Support Ticket
          </h2>
          <p className="text-lg text-subtle-gray">
            Provide detailed information about your issue and we'll get back to you quickly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Full Name"
              type="text"
              required
              value={formData?.name}
              onChange={(e) => handleInputChange('name', e?.target?.value)}
              placeholder="Enter your full name"
            />
            
            <Input
              label="Email Address"
              type="email"
              required
              value={formData?.email}
              onChange={(e) => handleInputChange('email', e?.target?.value)}
              placeholder="your.email@example.com"
            />
          </div>

          <Input
            label="Subject"
            type="text"
            required
            value={formData?.subject}
            onChange={(e) => handleInputChange('subject', e?.target?.value)}
            placeholder="Brief description of your issue"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Select
              label="Category"
              required
              options={categoryOptions}
              value={formData?.category}
              onChange={(value) => handleInputChange('category', value)}
              placeholder="Select issue category"
            />
            
            <Select
              label="Priority"
              required
              options={priorityOptions}
              value={formData?.priority}
              onChange={(value) => handleInputChange('priority', value)}
              placeholder="Select priority level"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-academic-navy mb-2">
              Description *
            </label>
            <textarea
              required
              value={formData?.description}
              onChange={(e) => handleInputChange('description', e?.target?.value)}
              placeholder="Please provide detailed information about your issue, including steps to reproduce if applicable..."
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            />
            <p className="text-xs text-subtle-gray mt-1">
              The more details you provide, the faster we can help you.
            </p>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-academic-navy mb-2">
              Attachments (Optional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary academic-transition">
              <input
                type="file"
                multiple
                accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.txt"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <Icon name="Upload" size={32} className="mx-auto text-subtle-gray mb-2" strokeWidth={1} />
                <p className="text-sm text-subtle-gray">
                  Click to upload files or drag and drop
                </p>
                <p className="text-xs text-subtle-gray mt-1">
                  PNG, JPG, PDF, DOC up to 10MB each
                </p>
              </label>
            </div>

            {/* Attachment List */}
            {formData?.attachments?.length > 0 && (
              <div className="mt-4 space-y-2">
                {formData?.attachments?.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center space-x-3">
                      <Icon name="Paperclip" size={16} className="text-subtle-gray" strokeWidth={2} />
                      <span className="text-sm text-academic-navy">{file?.name}</span>
                      <span className="text-xs text-subtle-gray">
                        ({(file?.size / 1024 / 1024)?.toFixed(2)} MB)
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeAttachment(index)}
                      className="text-red-500 hover:text-red-700 academic-transition"
                    >
                      <Icon name="X" size={16} strokeWidth={2} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Expected Response Time */}
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Icon name="Info" size={20} className="text-blue-600 mt-0.5" strokeWidth={2} />
              <div>
                <h4 className="font-medium text-blue-900 mb-1">Expected Response Times</h4>
                <div className="text-sm text-blue-800 space-y-1">
                  <p>• <strong>Urgent:</strong> Within 1 hour</p>
                  <p>• <strong>High:</strong> Within 2 hours</p>
                  <p>• <strong>Medium:</strong> Within 4 hours</p>
                  <p>• <strong>Low:</strong> Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            fullWidth
            loading={isSubmitting}
            disabled={!formData?.name || !formData?.email || !formData?.subject || !formData?.category || !formData?.priority || !formData?.description}
            iconName="Send"
            iconPosition="right"
          >
            {isSubmitting ? 'Submitting Ticket...' : 'Submit Support Ticket'}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SupportTicketForm;