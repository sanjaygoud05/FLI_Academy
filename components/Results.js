const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  function cn(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((student, idx) => (
          <li
            key={`${student.name}-${idx}`}
            className="relative w-[280px] sm:w-[300px] md:w-[350px] lg:w-[400px] shrink-0 bg-light rounded-[1.5rem] p-5 sm:p-6 lg:p-7 border border-border hover:border-primary/40 hover:bg-white hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500"></div>
            
            <div className="flex justify-between items-start mb-4 sm:mb-5 relative z-10">
                <div className="flex items-center gap-2 sm:gap-3">
                    <img 
                        src={student.img} 
                        alt={student.name}
                        className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full object-cover border-2 border-white group-hover:border-primary/50 transition-colors shadow-sm"
                    />
                    <div>
                        <h4 className="font-semibold text-premium-black text-sm sm:text-base lg:text-lg">{student.name}</h4>
                        <p className="text-[9px] sm:text-[10px] lg:text-xs text-muted uppercase tracking-wider">{student.dest}</p>
                    </div>
                </div>
            </div>

            <div className="mb-3 sm:mb-4 relative z-10">
                <div className="text-xl sm:text-2xl lg:text-3xl font-heading font-semibold text-primary mb-0.5">{student.score}</div>
                <div className="text-[9px] sm:text-[10px] font-semibold text-muted uppercase tracking-widest">{student.test}</div>
            </div>
            
            <p className="text-xs sm:text-sm text-premium-dark leading-relaxed font-light relative z-10">
                "{student.quote}"
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

function Results() {
    const stats = [
        { label: 'Success Rate', value: '98%', desc: 'First Attempt' },
        { label: 'Global Alumni', value: '10k+', desc: 'In 50+ Countries' },
        { label: 'Avg. Band', value: '7.5+', desc: 'Consistent Scores' },
        { label: 'Top Admits', value: '500+', desc: 'Global Universities' }
    ];

    const testimonials = [
        {
            name: 'Sarah Jenkins',
            score: '8.5',
            test: 'IELTS Academic',
            dest: 'Oxford University, UK',
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            quote: "The personalized coaching completely revolutionized my preparation. The rigorous mock test environment gave me the exact edge I needed to hit Band 8.5 effortlessly."
        },
        { 
            name: 'Raj Patel', 
            score: '8.0', 
            test: 'IELTS General', 
            dest: 'Express Entry, Canada', 
            img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            quote: "Exceptional mentors who know the exam inside out. They transformed my writing skills completely in just 4 weeks. Highly recommended for busy professionals."
        },
        { 
            name: 'Elena Rossi', 
            score: '9.0', 
            test: 'IELTS Academic', 
            dest: 'Monash University, AUS', 
            img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            quote: "The adaptive scheduling and specialized template mastery were absolutely perfect for my professional life. Achieved my target score with confidence."
        }
    ];

    try {
        return (
            <section id="results" className="py-8 sm:py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden min-h-[50vh] flex items-center" data-name="Results" data-file="components/Results.js">
                {/* Background Accents */}
                <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-[600px] lg:h-[600px] bg-primary/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-[400px] lg:h-[400px] bg-light rounded-full blur-[60px] sm:blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10 w-full">
                    <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center mb-8 sm:mb-10">
                        {/* Header Content */}
                        <div className="lg:col-span-5 mb-8 lg:mb-0">
                            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-light border border-border text-primary mb-3 sm:mb-4">
                                <i data-lucide="trophy" className="text-xs"></i>
                                <h2 className="text-[10px] sm:text-xs font-semibold tracking-wide uppercase text-premium-dark">Proven Results</h2>
                            </div>
                            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-heading font-semibold text-premium-black mb-3 sm:mb-4 leading-tight">
                                Excellence <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">Delivered.</span>
                            </h3>
                            <p className="text-sm sm:text-base text-muted font-light leading-relaxed mb-4 sm:mb-6">
                                Our data-driven approach consistently produces top-percentile scores, opening doors to global institutions.
                            </p>
                            <button className="btn-primary py-2 sm:py-2.5 px-4 sm:px-6 text-xs sm:text-sm">
                                Join Our Alumni
                                <i data-lucide="arrow-right"></i>
                            </button>
                        </div>

                        {/* Stats Grid */}
                        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="bg-white border border-gray-300 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl hover:border-primary/30 hover:shadow-[0_8px_30px_-10px_rgba(245,196,0,0.15)] transition-all duration-300 group">
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-premium-black mb-1 group-hover:text-primary transition-colors">{stat.value}</div>
                                    <div className="text-[10px] sm:text-xs font-semibold text-premium-dark uppercase tracking-wider mb-0.5">{stat.label}</div>
                                    <div className="text-[10px] sm:text-[11px] text-muted">{stat.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Infinite Moving Testimonial Cards */}
                    <div className="mt-12 sm:mt-16">
                        <InfiniteMovingCards items={testimonials} speed="normal" />
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Results component error:', error);
        return null;
    }
}