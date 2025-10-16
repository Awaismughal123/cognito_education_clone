import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FounderSection = () => {
  const founders = [
  {
    name: "Dr. Sarah Chen",
    role: "Co-Founder & CEO",
    image: "https://images.unsplash.com/photo-1677594333284-68463516a828",
    imageAlt: "Professional headshot of Asian woman with shoulder-length black hair wearing navy blazer in modern office setting",
    bio: "Former Stanford professor with 15 years in educational technology. PhD in Cognitive Science, passionate about making learning accessible.",
    credentials: ["PhD Cognitive Science - MIT", "Former Stanford Professor", "EdTech Innovation Award 2023"]
  },
  {
    name: "Michael Rodriguez",
    role: "Co-Founder & CTO",
    image: "https://images.unsplash.com/photo-1571110767236-ae895b70d280",
    imageAlt: "Professional headshot of Hispanic man with short dark hair wearing gray suit jacket against neutral background",
    bio: "Tech veteran with experience at Google and Microsoft. MS Computer Science, specializes in AI-driven educational platforms.",
    credentials: ["MS Computer Science - Carnegie Mellon", "Former Google Senior Engineer", "AI in Education Pioneer"]
  }];


  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Users" size={20} color="var(--color-secondary)" strokeWidth={2} />
            <span className="text-secondary font-medium">Our Founders</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-academic-navy mb-6">
            Visionaries Behind the
            <span className="block text-secondary">Revolution</span>
          </h2>
          
          <p className="text-xl text-reading-charcoal max-w-3xl mx-auto leading-relaxed">
            Meet the educational innovators who combined their expertise in pedagogy and technology to create a platform that transforms how the world learns.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {founders?.map((founder, index) =>
          <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 academic-shadow hover:shadow-xl academic-transition">
                {/* Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto overflow-hidden rounded-2xl">
                    <Image
                    src={founder?.image}
                    alt={founder?.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 academic-transition" />

                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-achievement-orange rounded-full flex items-center justify-center">
                    <Icon name="Star" size={16} color="white" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-academic-navy mb-2">{founder?.name}</h3>
                  <p className="text-secondary font-medium mb-4">{founder?.role}</p>
                  <p className="text-reading-charcoal mb-6 leading-relaxed">{founder?.bio}</p>
                  
                  {/* Credentials */}
                  <div className="space-y-2">
                    {founder?.credentials?.map((credential, credIndex) =>
                  <div key={credIndex} className="flex items-center justify-center space-x-2 text-sm text-subtle-gray">
                        <Icon name="Award" size={14} color="var(--color-achievement-orange)" strokeWidth={2} />
                        <span>{credential}</span>
                      </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mission Story */}
        <div className="bg-gradient-to-r from-academic-navy to-primary rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Icon name="Lightbulb" size={24} color="white" strokeWidth={2.5} />
                </div>
                <span className="text-lg font-medium text-white/90">Our Story</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-6">From Classroom to Global Platform</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Founded in 2019, Cognito Education began as a simple idea: what if we could combine the rigor of traditional education with the accessibility of modern technology? Our founders, frustrated by the limitations of conventional learning systems, set out to create something revolutionary.
              </p>
              <p className="text-white/90 leading-relaxed">
                Today, we've grown from a small startup to a global platform serving over 500,000 students worldwide, proving that quality education truly can be accessible to everyone.
              </p>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1719978184147-c5bf6b82c6e1"
                alt="Team of diverse professionals collaborating around conference table with laptops and documents in modern office"
                className="w-full h-80 object-cover rounded-2xl" />

              
              {/* Timeline Badge */}
              <div className="absolute -bottom-4 -right-4 bg-achievement-orange rounded-xl p-4 academic-shadow">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">2019</div>
                  <div className="text-sm opacity-90">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default FounderSection;