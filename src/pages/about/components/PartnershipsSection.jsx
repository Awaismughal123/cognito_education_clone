import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PartnershipsSection = () => {
  const universities = [
  {
    name: "Stanford University",
    logo: "https://images.unsplash.com/photo-1734711881128-c89493b5df6c",
    logoAlt: "Stanford University campus building with red tile roof and palm trees in California sunshine",
    partnership: "Curriculum Development",
    description: "Collaborative research on adaptive learning technologies"
  },
  {
    name: "MIT",
    logo: "https://images.unsplash.com/photo-1615128497642-2c1a8229ced3",
    logoAlt: "MIT campus dome building with classical architecture and green lawn in foreground",
    partnership: "AI Research",
    description: "Joint development of personalized learning algorithms"
  },
  {
    name: "Harvard University",
    logo: "https://images.unsplash.com/photo-1563284620-3664f353f6c9",
    logoAlt: "Harvard University historic brick buildings with ivy-covered walls and autumn foliage",
    partnership: "Educational Research",
    description: "Studies on learning effectiveness and student outcomes"
  },
  {
    name: "Oxford University",
    logo: "https://images.unsplash.com/photo-1731062897153-b90569ebecef",
    logoAlt: "Oxford University gothic architecture with stone spires and historic quadrangle courtyard",
    partnership: "Global Education",
    description: "International curriculum standards and best practices"
  }];


  const certifications = [
  {
    name: "ISO 27001",
    icon: "Shield",
    description: "Information Security Management",
    color: "primary"
  },
  {
    name: "COPPA Certified",
    icon: "UserCheck",
    description: "Child Online Privacy Protection",
    color: "secondary"
  },
  {
    name: "GDPR Compliant",
    icon: "Lock",
    description: "Data Protection Regulation",
    color: "success"
  },
  {
    name: "WCAG 2.1 AA",
    icon: "Eye",
    description: "Web Accessibility Guidelines",
    color: "achievement-orange"
  }];


  const industryPartners = [
  {
    name: "Google for Education",
    type: "Technology Partner",
    icon: "Laptop"
  },
  {
    name: "Microsoft Education",
    type: "Cloud Infrastructure",
    icon: "Cloud"
  },
  {
    name: "Adobe Creative",
    type: "Content Creation",
    icon: "Palette"
  },
  {
    name: "Coursera",
    type: "Platform Integration",
    icon: "Globe"
  }];


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-scholarly-teal/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Handshake" size={20} color="var(--color-scholarly-teal)" strokeWidth={2} />
            <span className="text-scholarly-teal font-medium">Partnerships & Trust</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-academic-navy mb-6">
            Institutional Partnerships &
            <span className="block text-scholarly-teal">Accreditations</span>
          </h2>
          
          <p className="text-xl text-reading-charcoal max-w-3xl mx-auto leading-relaxed">
            We collaborate with leading educational institutions and maintain the highest standards of security, privacy, and accessibility to ensure trust and quality.
          </p>
        </div>

        {/* University Partnerships */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-academic-navy mb-4">University Collaborations</h3>
            <p className="text-reading-charcoal">Partnering with world-renowned institutions for educational excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {universities?.map((university, index) =>
            <div key={index} className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 academic-shadow hover:shadow-xl academic-transition text-center">
                  <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-xl">
                    <Image
                    src={university?.logo}
                    alt={university?.logoAlt}
                    className="w-full h-full object-cover group-hover:scale-110 academic-transition" />

                  </div>
                  
                  <h4 className="text-lg font-bold text-academic-navy mb-2">{university?.name}</h4>
                  <div className="text-sm font-medium text-scholarly-teal mb-3">{university?.partnership}</div>
                  <p className="text-sm text-reading-charcoal leading-relaxed">{university?.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Certifications & Compliance */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-academic-navy mb-4">Trust & Security Certifications</h3>
            <p className="text-reading-charcoal">Maintaining the highest standards of security, privacy, and accessibility</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) =>
            <div key={index} className="group">
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-primary/20 academic-transition text-center">
                  <div className={`w-16 h-16 bg-${cert?.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 academic-transition`}>
                    <Icon name={cert?.icon} size={24} color={`var(--color-${cert?.color})`} strokeWidth={2.5} />
                  </div>
                  
                  <h4 className="text-lg font-bold text-academic-navy mb-2">{cert?.name}</h4>
                  <p className="text-sm text-reading-charcoal">{cert?.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Industry Partners */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-academic-navy mb-4">Technology & Industry Partners</h3>
            <p className="text-reading-charcoal">Collaborating with leading technology companies to enhance our platform</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {industryPartners?.map((partner, index) =>
            <div key={index} className="group">
                <div className="bg-white rounded-xl p-6 academic-shadow hover:shadow-lg academic-transition text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 academic-transition">
                    <Icon name={partner?.icon} size={20} color="var(--color-primary)" strokeWidth={2.5} />
                  </div>
                  
                  <h4 className="font-bold text-academic-navy mb-1">{partner?.name}</h4>
                  <p className="text-sm text-subtle-gray">{partner?.type}</p>
                </div>
              </div>
            )}
          </div>

          {/* Partnership Benefits */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={24} color="white" strokeWidth={2.5} />
              </div>
              <h4 className="text-lg font-bold text-academic-navy mb-2">Cutting-Edge Technology</h4>
              <p className="text-reading-charcoal text-sm">Access to latest educational technologies and innovations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-achievement-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} color="white" strokeWidth={2.5} />
              </div>
              <h4 className="text-lg font-bold text-academic-navy mb-2">Quality Assurance</h4>
              <p className="text-reading-charcoal text-sm">Rigorous standards maintained through institutional oversight</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-achievement-orange to-success rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Globe" size={24} color="white" strokeWidth={2.5} />
              </div>
              <h4 className="text-lg font-bold text-academic-navy mb-2">Global Reach</h4>
              <p className="text-reading-charcoal text-sm">Worldwide accessibility and localized content delivery</p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl p-6 academic-shadow">
            <div className="flex items-center space-x-3">
              <Icon name="Shield" size={24} color="var(--color-success)" strokeWidth={2.5} />
              <div className="text-left">
                <div className="font-bold text-academic-navy">Secure</div>
                <div className="text-sm text-subtle-gray">Bank-level encryption</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Icon name="Award" size={24} color="var(--color-primary)" strokeWidth={2.5} />
              <div className="text-left">
                <div className="font-bold text-academic-navy">Accredited</div>
                <div className="text-sm text-subtle-gray">Globally recognized</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Icon name="Users" size={24} color="var(--color-secondary)" strokeWidth={2.5} />
              <div className="text-left">
                <div className="font-bold text-academic-navy">Trusted</div>
                <div className="text-sm text-subtle-gray">500K+ students</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default PartnershipsSection;