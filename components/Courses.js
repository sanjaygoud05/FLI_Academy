const { AnimatePresence, motion } = window.Motion;

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const HoverEffect = ({ items, className, onCourseClick }) => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-6 sm:py-8 gap-2 sm:gap-3', className)}>
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group block p-2 h-full w-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => onCourseClick(item)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-br from-primary to-yellow-500 block rounded-[2rem] shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.85, transition: { duration: 0.5, ease: 'easeInOut' } }}
                exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
              />
            )}
          </AnimatePresence>
          <Card hovered={hoveredIndex === idx}>
            <div className="flex items-center justify-between mb-6">
              <div
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300',
                  hoveredIndex === idx ? 'bg-premium-black text-primary' : 'bg-primary/20 text-primary border border-primary/20'
                )}
              >
                <i data-lucide={item.icon.replace('icon-', '')} className="text-xl"></i>
              </div>
              <div
                className={cn(
                  'text-[9px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full transition-colors duration-300',
                  hoveredIndex === idx
                    ? 'bg-premium-black/10 text-premium-black border border-premium-black/20'
                    : 'bg-white/5 border border-white/10 text-white/60'
                )}
              >
                {item.target}
              </div>
            </div>
            <CardTitle hovered={hoveredIndex === idx}>{item.title}</CardTitle>
            <CardDescription hovered={hoveredIndex === idx}>{item.desc}</CardDescription>
            <div className="mt-6 space-y-2">
              {item.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-center gap-2 text-xs">
                  <div
                    className={cn(
                      'w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-300',
                      hoveredIndex === idx ? 'bg-premium-black' : 'bg-primary'
                    )}
                  ></div>
                  <span
                    className={cn(
                      'transition-colors duration-300 font-medium',
                      hoveredIndex === idx ? 'text-premium-black' : 'text-white/80'
                    )}
                  >
                    {feat}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className={cn(
                'mt-6 inline-flex items-center gap-2 text-xs font-semibold transition-colors duration-300',
                hoveredIndex === idx ? 'text-premium-black' : 'text-primary group-hover:text-primary/80'
              )}
            >
              Enroll Now <i data-lucide="arrow-right"></i>
            </a>
          </Card>
        </div>
      ))}
    </div>
  );
};

const Card = ({ className, children, hovered }) => {
  return (
    <div
      className={cn(
        'rounded-[1.75rem] h-full w-full p-2 overflow-hidden relative z-20 transition-all duration-300',
        hovered ? 'bg-transparent border-transparent' : 'bg-premium-black border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]',
        className
      )}
    >
      <div className="relative z-50"><div className="p-4 md:p-6">{children}</div></div>
    </div>
  );
};

const CardTitle = ({ className, children, hovered }) => {
  return (
    <h4
      className={cn(
        'font-semibold font-heading text-2xl tracking-wide transition-colors duration-300',
        hovered ? 'text-premium-black' : 'text-white',
        className
      )}
    >
      {children}
    </h4>
  );
};

const CardDescription = ({ className, children, hovered }) => {
  return (
    <p
      className={cn(
        'mt-4 tracking-wide leading-relaxed text-sm transition-colors duration-300 line-clamp-3',
        hovered ? 'text-premium-black/80 font-medium' : 'text-white/60 font-light',
        className
      )}
    >
      {children}
    </p>
  );
};

function Courses() {
  const [selectedCourse, setSelectedCourse] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
    // Re-initialize Lucide icons after modal opens
    setTimeout(() => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }, 100);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  const courses = [
    {
      title: 'IELTS Academic',
      desc: 'For university admissions. Master academic writing with Band 8+ strategies.',
      target: 'Study Abroad',
      icon: 'icon-book-open',
      features: ['8+ Strategies', 'Daily Essays'],
      details: {
        duration: '8-12 weeks',
        sessions: '60 hours',
        includes: [
          'Personalized study plan based on your current level',
          'Daily mock tests with detailed feedback',
          '1-on-1 speaking sessions with certified trainers',
          'Writing feedback from IELTS examiners',
          'Access to Cambridge study materials',
          'Unlimited practice tests with instant scoring'
        ]
      }
    },
    {
      title: 'IELTS General',
      desc: 'For global migration. Focus on real-world context and fluency drills.',
      target: 'Immigration',
      icon: 'icon-globe',
      features: ['Letter Writing', 'Fluency Drills'],
      details: {
        duration: '6-10 weeks',
        sessions: '50 hours',
        includes: [
          'Letter writing templates for various scenarios',
          'Fluency building exercises with native speakers',
          'Real-world context practice sessions',
          'Immigration-focused vocabulary and content',
          'Flexible scheduling for working professionals',
          'Career guidance and visa consultation support'
        ]
      }
    },
    {
      title: 'PTE Academic',
      desc: 'Intensive computer‑based coaching, mastering AI scoring and templates.',
      target: 'Study / Migrate',
      icon: 'icon-monitor',
      features: ['AI Scoring', 'Template Mastery'],
      details: {
        duration: '4-8 weeks',
        sessions: '40 hours',
        includes: [
          'AI scoring pattern analysis and strategy',
          'Template-based approach for all sections',
          'Computer-based practice in real test environment',
          'Fast-track preparation for urgent deadlines',
          'Score prediction tools and progress tracking',
          'Mock tests with AI-powered feedback'
        ]
      }
    },
    {
      title: 'TOEFL Prep',
      desc: 'Strategies tailored for North American admissions and integrated tasks.',
      target: 'US / Canada',
      icon: 'icon-award',
      features: ['Integrated Writing', 'Campus Context'],
      details: {
        duration: '8-12 weeks',
        sessions: '55 hours',
        includes: [
          'North American accent training and practice',
          'Integrated task strategies for all sections',
          'Campus vocabulary and academic language building',
          'University-specific admission guidance',
          'Speaking practice with native English speakers',
          'Application and essay writing support'
        ]
      }
    },
  ];

  try {
    return (
      <section
        id="courses"
        className="pt-4 sm:pt-6 md:pt-10 lg:pt-12 pb-2 sm:pb-3 md:pb-4 lg:pb-6 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden min-h-[35vh] flex flex-col justify-center"
        style={{ backgroundColor: '#111111' }}
        data-name="Courses"
        data-file="components/Courses.js"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://app.trickle.so/storage/public/images/usr_1f04cef398000001/62bc7012-e07b-4752-ad22-5aa0103b7ecc.png')" }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-premium-black via-premium-black/20 to-premium-black/60 pointer-events-none"></div>
        
        {/* Yellow Accent Circle */}
        <div className="absolute top-10 right-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-primary/20 rounded-full blur-[60px] sm:blur-[80px] pointer-events-none"></div>
        
        {/* Theme Gradients */}
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 md:w-[500px] md:h-[500px] bg-primary/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px] bg-primary/5 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none" />
        
        {/* Heading Section */}
        <div className="max-w-7xl mx-auto relative z-10 w-full mb-8 sm:mb-10 md:mb-12">
          <div className="text-center max-w-3xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-primary/10 text-primary mb-4 sm:mb-6">
              <i data-lucide="book-open" className="text-sm"></i>
              <span className="text-xs sm:text-sm font-semibold tracking-wide">Premium Curriculums</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-white mb-4 sm:mb-6 leading-tight">
              Choose Your Pathway
            </h2>
            <p className="text-base sm:text-lg text-white/60 font-light leading-relaxed">
              Select your targeted program and let our experts guide you to your desired score with mathematical precision and personalized coaching.
            </p>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <HoverEffect items={courses} onCourseClick={handleCourseClick} />
        </div>

        {/* Course Detail Modal */}
        {isModalOpen && selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={closeModal}></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
              
              {/* Header with gradient */}
              <div className="relative bg-gradient-to-br from-primary to-yellow-500 p-6 sm:p-8">
                <button onClick={closeModal} className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors">
                  <i data-lucide="x" className="text-xl"></i>
                </button>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <i data-lucide={selectedCourse.icon.replace('icon-', '')} className="text-2xl text-white"></i>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white/90 uppercase tracking-wider">{selectedCourse.target}</span>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">{selectedCourse.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">{selectedCourse.desc}</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="text-xs text-gray-500 mb-1 font-medium">Duration</div>
                    <div className="text-base font-bold text-gray-900">{selectedCourse.details.duration}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="text-xs text-gray-500 mb-1 font-medium">Sessions</div>
                    <div className="text-base font-bold text-gray-900">{selectedCourse.details.sessions}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Program Highlights</h4>
                  <div className="space-y-3">
                    {selectedCourse.details.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a href="#contact" onClick={closeModal} className="flex-1 bg-premium-black text-white text-center py-3 sm:py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors">
                    Get Started
                  </a>
                  <button onClick={closeModal} className="flex-1 border-2 border-gray-200 text-gray-700 text-center py-3 sm:py-3.5 rounded-xl font-semibold text-sm hover:border-gray-300 transition-colors">
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </section>
    );
  } catch (error) {
    console.error('Courses component error:', error);
    return null;
  }
}
