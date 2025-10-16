import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const teamMembers = [
  {
    name: "Dr. Jennifer Walsh",
    role: "Head of Curriculum",
    image: "https://images.unsplash.com/photo-1684262855358-88f296a2cfc2",
    imageAlt: "Professional woman with blonde hair wearing navy blazer smiling confidently in modern office setting",
    expertise: "Educational Psychology",
    experience: "12 years",
    background: "Former curriculum director at top-tier universities with expertise in learning design.",
    specialties: ["Curriculum Design", "Learning Analytics", "Student Assessment"]
  },
  {
    name: "Marcus Johnson",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1657448678974-432841050acd",
    imageAlt: "African American man with short hair wearing casual button-up shirt in modern tech office environment",
    expertise: "Full-Stack Development",
    experience: "10 years",
    background: "Senior engineer with experience building scalable educational platforms at major tech companies.",
    specialties: ["Platform Architecture", "AI Integration", "Performance Optimization"]
  },
  {
    name: "Dr. Priya Patel",
    role: "Research Director",
    image: "https://images.unsplash.com/photo-1598451837273-20ce95ada519",
    imageAlt: "Indian woman with long dark hair wearing professional white blazer in university research laboratory",
    expertise: "Cognitive Science",
    experience: "15 years",
    background: "Leading researcher in learning sciences with published work on adaptive learning systems.",
    specialties: ["Learning Research", "Data Science", "Behavioral Analytics"]
  },
  {
    name: "Alex Rivera",
    role: "UX Design Lead",
    image: "https://images.unsplash.com/photo-1600630242764-41cf7d951ac4",
    imageAlt: "Hispanic man with beard wearing casual gray sweater working on design mockups in creative studio",
    expertise: "User Experience Design",
    experience: "8 years",
    background: "Award-winning designer specializing in educational interfaces and accessibility.",
    specialties: ["User Research", "Interface Design", "Accessibility"]
  },
  {
    name: "Dr. Lisa Chen",
    role: "Content Strategy",
    image: "https://images.unsplash.com/photo-1734456611474-13245d164868",
    imageAlt: "Asian woman with shoulder-length black hair wearing professional navy suit in modern conference room",
    expertise: "Educational Content",
    experience: "11 years",
    background: "Former textbook author and educational consultant with expertise in digital content creation.",
    specialties: ["Content Development", "Instructional Design", "Quality Assurance"]
  },
  {
    name: "Robert Thompson",
    role: "Student Success Manager",
    image: "https://images.unsplash.com/photo-1714974528889-d51109fb6ae9",
    imageAlt: "Middle-aged man with graying hair wearing professional dark suit jacket in corporate office setting",
    expertise: "Student Support",
    experience: "9 years",
    background: "Dedicated to student success with background in academic counseling and support services.",
    specialties: ["Student Engagement", "Academic Support", "Success Analytics"]
  }];


  const departments = [
  {
    name: "Engineering",
    count: 25,
    icon: "Code",
    color: "primary"
  },
  {
    name: "Education",
    count: 18,
    icon: "BookOpen",
    color: "secondary"
  },
  {
    name: "Design",
    count: 12,
    icon: "Palette",
    color: "achievement-orange"
  },
  {
    name: "Research",
    count: 8,
    icon: "Microscope",
    color: "success"
  },
  {
    name: "Support",
    count: 15,
    icon: "HeadphonesIcon",
    color: "scholarly-teal"
  }];


  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-professional-charcoal/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Users" size={20} color="var(--color-professional-charcoal)" strokeWidth={2} />
            <span className="text-professional-charcoal font-medium">Our Team</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-academic-navy mb-6">
            Educational Experts &
            <span className="block text-professional-charcoal">Innovation Leaders</span>
          </h2>
          
          <p className="text-xl text-reading-charcoal max-w-3xl mx-auto leading-relaxed">
            Meet the passionate educators, researchers, and technologists who are dedicated to transforming education and empowering learners worldwide.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers?.map((member, index) =>
          <div key={index} className="group">
              <div className="bg-white rounded-3xl p-6 academic-shadow hover:shadow-xl academic-transition">
                {/* Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto overflow-hidden rounded-2xl">
                    <Image
                    src={member?.image}
                    alt={member?.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 academic-transition" />

                  </div>
                  
                  {/* Experience Badge */}
                  <div className="absolute -top-2 -right-2 bg-professional-charcoal rounded-full px-3 py-1">
                    <span className="text-white text-xs font-bold">{member?.experience}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-academic-navy mb-1">{member?.name}</h3>
                  <p className="text-professional-charcoal font-medium mb-2">{member?.role}</p>
                  <p className="text-sm text-subtle-gray mb-4">{member?.expertise}</p>
                  
                  <p className="text-sm text-reading-charcoal leading-relaxed mb-4">{member?.background}</p>
                  
                  {/* Specialties */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {member?.specialties?.map((specialty, specIndex) =>
                  <span key={specIndex} className="text-xs bg-professional-charcoal/10 text-professional-charcoal px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                  )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Department Overview */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 academic-shadow">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-academic-navy mb-4">Team by Department</h3>
            <p className="text-reading-charcoal">Diverse expertise across all areas of educational technology</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {departments?.map((dept, index) =>
            <div key={index} className="group text-center">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-gray-100 hover:border-primary/20 academic-transition">
                  <div className={`w-16 h-16 bg-${dept?.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 academic-transition`}>
                    <Icon name={dept?.icon} size={24} color={`var(--color-${dept?.color})`} strokeWidth={2.5} />
                  </div>
                  
                  <div className="text-2xl font-bold text-academic-navy mb-1">{dept?.count}</div>
                  <div className="text-sm text-reading-charcoal">{dept?.name}</div>
                </div>
              </div>
            )}
          </div>

          {/* Team Culture */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={24} color="white" strokeWidth={2.5} />
              </div>
              <h4 className="text-lg font-bold text-academic-navy mb-2">Passion for Education</h4>
              <p className="text-reading-charcoal text-sm">Every team member shares a deep commitment to improving education</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-achievement-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Lightbulb" size={24} color="white" strokeWidth={2.5} />
              </div>
              <h4 className="text-lg font-bold text-academic-navy mb-2">Innovation Mindset</h4>
              <p className="text-reading-charcoal text-sm">Constantly exploring new ways to enhance learning experiences</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-achievement-orange to-success rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} color="white" strokeWidth={2.5} />
              </div>
              <h4 className="text-lg font-bold text-academic-navy mb-2">Collaborative Spirit</h4>
              <p className="text-reading-charcoal text-sm">Working together to create the best possible learning platform</p>
            </div>
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-professional-charcoal to-academic-navy rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for passionate educators, developers, and innovators to join our team in transforming education.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-professional-charcoal px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 academic-transition flex items-center justify-center space-x-2">
                <Icon name="Users" size={20} strokeWidth={2.5} />
                <span>View Open Positions</span>
              </button>
              <button className="bg-achievement-orange text-white px-8 py-3 rounded-xl font-semibold hover:bg-enrollment-orange academic-transition flex items-center justify-center space-x-2">
                <Icon name="Mail" size={20} strokeWidth={2.5} />
                <span>Contact HR</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TeamSection;