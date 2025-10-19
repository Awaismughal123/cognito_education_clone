import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CourseHeader = ({ course, onEnroll, isEnrolled }) => {
  return (
    <div className="bg-gradient-to-br from-academic-navy to-professional-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Course Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Icon name="BookOpen" size={16} color="white" />
                <span className="text-sm font-medium">{course?.category}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Star" size={16} color="#F59E0B" fill="#F59E0B" />
                <span className="text-sm font-medium">{course?.rating}</span>
                <span className="text-sm opacity-80">({course?.reviewCount} reviews)</span>
              </div>
            </div>

            <div>
              {/* ✅ Title color changed to pure white */}
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white">
                {course?.title}
              </h1>

              {/* ✅ Description made slightly dimmer for contrast */}
              <p className="text-xl text-white/80 leading-relaxed">
                {course?.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} color="white" />
                <span>{course?.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} color="white" />
                <span>{course?.enrolledCount} students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="BarChart3" size={16} color="white" />
                <span>{course?.level}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Globe" size={16} color="white" />
                <span>{course?.language}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <Image
                  src={course?.instructor?.avatar}
                  alt={course?.instructor?.avatarAlt}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                />
                <div>
                  <p className="font-semibold">{course?.instructor?.name}</p>
                  <p className="text-sm opacity-80">{course?.instructor?.title}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {!isEnrolled ? (
                <>
                  <Button
                    variant="default"
                    size="lg"
                    onClick={onEnroll}
                    className="bg-enrollment-orange hover:bg-achievement-orange text-white px-8"
                    iconName="Play"
                    iconPosition="left"
                  >
                    Enroll Now - ${course?.price}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10"
                    iconName="Heart"
                    iconPosition="left"
                  >
                    Add to Wishlist
                  </Button>
                </>
              ) : (
                <Button
                  variant="default"
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white px-8"
                  iconName="PlayCircle"
                  iconPosition="left"
                >
                  Continue Learning
                </Button>
              )}
            </div>
          </div>

          {/* Course Preview */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden academic-shadow">
              <Image
                src={course?.previewImage}
                alt={course?.previewImageAlt}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white academic-transition group">
                  <Icon
                    name="Play"
                    size={32}
                    color="#1F2937"
                    className="ml-1 group-hover:scale-110 academic-transition"
                  />
                </button>
              </div>
            </div>

            {/* Course Stats */}
            <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl p-6 academic-shadow">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">{course?.lessons}</div>
                  <div className="text-sm text-subtle-gray">Lessons</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">{course?.projects}</div>
                  <div className="text-sm text-subtle-gray">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-achievement-orange">{course?.quizzes}</div>
                  <div className="text-sm text-subtle-gray">Quizzes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
