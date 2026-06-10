function Features() {
    const featuresList = [
        {
            icon: 'icon-award',
            title: 'Certified Mentors',
            desc: 'Train under elite professionals with proven track records in global standardized tests.',
            image: 'assets/certified-mentors.png',
            noOverlay: true
        },
        {
            icon: 'icon-laptop',
            title: 'Daily Assessments',
            desc: 'Experience real-exam conditions with our rigorous daily mock test infrastructure.',
            image: 'assets/daily-assignments.png',
            noOverlay: true
        },
        {
            icon: 'icon-mic',
            title: 'Speaking Labs',
            desc: 'Exclusive 1-on-1 speaking sessions tailored to perfect your pronunciation and fluency.',
            image: 'assets/speaking-labs.png',
            noOverlay: true
        },
        {
            icon: 'icon-chart-line',
            title: 'Deep Analytics',
            desc: 'Granular performance tracking to identify and eliminate your specific weak points.',
            image: 'assets/deep-analytics.png',
            noOverlay: true
        },
        {
            icon: 'icon-clock',
            title: 'Adaptive Scheduling',
            desc: 'Premium flexibility with batch timings designed around your professional commitments.',
            image: 'assets/adaptive-scheduling.png',
            noOverlay: true
        },
        {
            icon: 'icon-layers',
            title: 'Hybrid Learning',
            desc: 'Flawless transition between our luxury physical centers and premium digital platform.',
            image: 'assets/hybrid-learning.png',
            noOverlay: true
        }
    ];

    try {
        return (
            <section id="about" className="py-8 sm:py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-light relative min-h-[50vh] flex items-center" data-name="Features" data-file="components/Features.js">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        {/* Sticky Left Column */}
                        <div className="lg:col-span-5 lg:sticky lg:top-32 mb-12 lg:mb-0">
                            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-primary/10 text-primary mb-4 sm:mb-6">
                                <i data-lucide="graduation-cap" className="text-sm"></i>
                                <h2 className="text-xs sm:text-sm font-semibold tracking-wide">The FLI Advantage</h2>
                            </div>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-premium-black mt-4 mb-4 sm:mb-6 leading-normal text-left">
                                Designed for Excellence
                            </h3>
                            <p className="text-base sm:text-lg text-muted font-light mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                                We don't just teach; we engineer your success through modern methodologies, premium infrastructure, and hyper-personalized learning paths designed for high achievers.
                            </p>
                            
                            <a href="#courses" className="inline-flex items-center gap-2 text-premium-black font-semibold hover:text-primary transition-colors group">
                                Explore our approach
                                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:translate-x-1 transition-transform border border-border">
                                    <i data-lucide="arrow-right" className="text-sm"></i>
                                </div>
                            </a>
                        </div>

                        {/* Scrolling Right Column */}
                        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-6">
                            {featuresList.map((feature, idx) => (
                                <div 
                                    key={idx} 
                                    className={`bg-white p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-gray-300 hover:border-primary/40 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(245,196,0,0.15)] transition-all duration-300 group ${idx % 2 !== 0 ? 'sm:mt-12' : ''}`}
                                >
                                    <div className="relative mb-6 sm:mb-8 rounded-2xl overflow-hidden aspect-[4/3]">
                                        <img 
                                            src={feature.image} 
                                            alt={feature.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {!feature.noOverlay && <div className="absolute inset-0 bg-gradient-to-t from-premium-black/50 to-transparent"></div>}
                                        <div className="absolute bottom-4 left-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                                <i data-lucide={feature.icon.replace('icon-', '')} className="text-lg sm:text-xl text-premium-dark"></i>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <h4 className="text-lg sm:text-xl font-semibold font-heading text-premium-black mb-2 sm:mb-3">
                                        {feature.title}
                                    </h4>
                                    
                                    <p className="text-muted leading-relaxed text-sm sm:text-[15px]">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Features component error:', error);
        return null;
    }
}