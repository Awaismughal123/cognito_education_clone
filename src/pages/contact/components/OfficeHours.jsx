import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OfficeHours = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const officeHoursSchedule = [
  {
    day: 'Monday',
    date: '2024-10-21',
    sessions: [
    { time: '10:00 AM - 11:00 AM', specialist: 'Dr. Sarah Chen', topic: 'Mathematics & Physics', available: true },
    { time: '2:00 PM - 3:00 PM', specialist: 'Prof. Marcus Johnson', topic: 'Computer Science', available: true },
    { time: '4:00 PM - 5:00 PM', specialist: 'Dr. Elena Rodriguez', topic: 'Chemistry & Biology', available: false }]

  },
  {
    day: 'Tuesday',
    date: '2024-10-22',
    sessions: [
    { time: '9:00 AM - 10:00 AM', specialist: 'Dr. David Kim', topic: 'Engineering & Technology', available: true },
    { time: '1:00 PM - 2:00 PM', specialist: 'Prof. Lisa Wang', topic: 'Business & Economics', available: true },
    { time: '3:00 PM - 4:00 PM', specialist: 'Dr. Sarah Chen', topic: 'Mathematics & Physics', available: true }]

  },
  {
    day: 'Wednesday',
    date: '2024-10-23',
    sessions: [
    { time: '11:00 AM - 12:00 PM', specialist: 'Prof. Anderson', topic: 'Study Skills & Learning', available: true },
    { time: '2:00 PM - 3:00 PM', specialist: 'Dr. Martinez', topic: 'Psychology & Mental Health', available: true },
    { time: '4:00 PM - 5:00 PM', specialist: 'Prof. Marcus Johnson', topic: 'Computer Science', available: false }]

  },
  {
    day: 'Thursday',
    date: '2024-10-24',
    sessions: [
    { time: '10:00 AM - 11:00 AM', specialist: 'Dr. Elena Rodriguez', topic: 'Chemistry & Biology', available: true },
    { time: '1:00 PM - 2:00 PM', specialist: 'Dr. David Kim', topic: 'Engineering & Technology', available: true },
    { time: '3:00 PM - 4:00 PM', specialist: 'Prof. Lisa Wang', topic: 'Business & Economics', available: true }]

  },
  {
    day: 'Friday',
    date: '2024-10-25',
    sessions: [
    { time: '9:00 AM - 10:00 AM', specialist: 'Prof. Anderson', topic: 'Study Skills & Learning', available: true },
    { time: '11:00 AM - 12:00 PM', specialist: 'Dr. Martinez', topic: 'Psychology & Mental Health', available: true },
    { time: '2:00 PM - 3:00 PM', specialist: 'Dr. Sarah Chen', topic: 'Mathematics & Physics', available: true }]

  }];


  const specialists = [
  {
    name: 'Dr. Sarah Chen',
    title: 'Mathematics & Physics Specialist',
    avatar: "https://images.unsplash.com/photo-1560859389-c4fb2bd88016",
    avatarAlt: 'Professional headshot of Asian woman with shoulder-length black hair in white blouse',
    expertise: ['Calculus', 'Linear Algebra', 'Quantum Physics', 'Thermodynamics'],
    rating: 4.9,
    sessions: 234
  },
  {
    name: 'Prof. Marcus Johnson',
    title: 'Computer Science Expert',
    avatar: "https://images.unsplash.com/photo-1588178457501-31b7688a41a0",
    avatarAlt: 'Professional headshot of African American man with short hair in navy blazer',
    expertise: ['Programming', 'Data Structures', 'Machine Learning', 'Web Development'],
    rating: 4.8,
    sessions: 189
  },
  {
    name: 'Dr. Elena Rodriguez',
    title: 'Chemistry & Biology Specialist',
    avatar: "https://images.unsplash.com/photo-1628013663808-25ef6a3b28b4",
    avatarAlt: 'Professional headshot of Hispanic woman with long brown hair in blue shirt',
    expertise: ['Organic Chemistry', 'Molecular Biology', 'Biochemistry', 'Genetics'],
    rating: 4.9,
    sessions: 156
  }];


  const handleBookSession = (day, session) => {
    setSelectedDate(day);
    setSelectedTime(session);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-academic-navy mb-4">
            Live Office Hours
          </h2>
          <p className="text-lg text-subtle-gray max-w-2xl mx-auto">
            Get personalized help from our expert instructors during scheduled office hours. 
            Book a one-on-one session or join group discussions.
          </p>
        </div>

        {/* Featured Specialists */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-academic-navy mb-6">Meet Our Specialists</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialists?.map((specialist, index) =>
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <img
                src={specialist?.avatar}
                alt={specialist?.avatarAlt}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4" />

                <h4 className="text-lg font-semibold text-academic-navy mb-1">
                  {specialist?.name}
                </h4>
                <p className="text-sm text-primary mb-3">{specialist?.title}</p>
                
                <div className="flex items-center justify-center space-x-4 mb-3 text-xs text-subtle-gray">
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={12} className="text-yellow-500" strokeWidth={2} />
                    <span>{specialist?.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Users" size={12} strokeWidth={2} />
                    <span>{specialist?.sessions} sessions</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 justify-center">
                  {specialist?.expertise?.slice(0, 3)?.map((skill, skillIndex) =>
                <span key={skillIndex} className="bg-white text-subtle-gray px-2 py-1 rounded-full text-xs">
                      {skill}
                    </span>
                )}
                  {specialist?.expertise?.length > 3 &&
                <span className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                      +{specialist?.expertise?.length - 3}
                    </span>
                }
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Schedule */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-academic-navy mb-6">This Week's Schedule</h3>
          <div className="space-y-6">
            {officeHoursSchedule?.map((day, dayIndex) =>
            <div key={dayIndex} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Calendar" size={24} color="white" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-academic-navy">{day?.day}</h4>
                    <p className="text-sm text-subtle-gray">{new Date(day.date)?.toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {day?.sessions?.map((session, sessionIndex) =>
                <div key={sessionIndex} className={`bg-white rounded-lg p-4 border-2 ${
                session?.available ? 'border-green-200 hover:border-green-300' : 'border-gray-200'} academic-transition`
                }>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-academic-navy">{session?.time}</span>
                        <div className={`w-3 h-3 rounded-full ${
                    session?.available ? 'bg-green-500' : 'bg-red-500'}`
                    }></div>
                      </div>
                      
                      <h5 className="font-semibold text-academic-navy mb-1">{session?.specialist}</h5>
                      <p className="text-xs text-subtle-gray mb-3">{session?.topic}</p>
                      
                      <Button
                    variant={session?.available ? "default" : "outline"}
                    size="sm"
                    fullWidth
                    disabled={!session?.available}
                    onClick={() => session?.available && handleBookSession(day, session)}
                    iconName={session?.available ? "Calendar" : "X"}
                    iconPosition="left"
                    iconSize={14}>

                        {session?.available ? 'Book Session' : 'Fully Booked'}
                      </Button>
                    </div>
                )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Booking Confirmation Modal */}
        {selectedDate && selectedTime &&
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Calendar" size={32} color="#10B981" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold text-academic-navy mb-2">
                  Confirm Your Booking
                </h3>
                <p className="text-subtle-gray">
                  You're about to book a session with {selectedTime?.specialist}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-subtle-gray">Date:</span>
                  <span className="font-medium text-academic-navy">{selectedDate?.day}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-subtle-gray">Time:</span>
                  <span className="font-medium text-academic-navy">{selectedTime?.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-subtle-gray">Specialist:</span>
                  <span className="font-medium text-academic-navy">{selectedTime?.specialist}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-subtle-gray">Topic:</span>
                  <span className="font-medium text-academic-navy">{selectedTime?.topic}</span>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button
                variant="outline"
                fullWidth
                onClick={() => {
                  setSelectedDate(null);
                  setSelectedTime(null);
                }}>

                  Cancel
                </Button>
                <Button
                variant="default"
                fullWidth
                iconName="Check"
                iconPosition="left"
                onClick={() => {
                  // Handle booking confirmation
                  setSelectedDate(null);
                  setSelectedTime(null);
                }}>

                  Confirm Booking
                </Button>
              </div>
            </div>
          </div>
        }

        {/* How It Works */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-academic-navy mb-6 text-center">
            How Office Hours Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" size={32} color="white" strokeWidth={2} />
              </div>
              <h4 className="font-semibold text-academic-navy mb-2">1. Book Your Slot</h4>
              <p className="text-sm text-subtle-gray">
                Choose from available time slots with your preferred specialist
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Video" size={32} color="white" strokeWidth={2} />
              </div>
              <h4 className="font-semibold text-academic-navy mb-2">2. Join the Session</h4>
              <p className="text-sm text-subtle-gray">
                Connect via video call at your scheduled time
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageSquare" size={32} color="white" strokeWidth={2} />
              </div>
              <h4 className="font-semibold text-academic-navy mb-2">3. Get Help</h4>
              <p className="text-sm text-subtle-gray">
                Ask questions, get explanations, and clarify concepts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default OfficeHours;