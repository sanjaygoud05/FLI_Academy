function Hero() {
    try {
        return (
            <section id="home" className="relative bg-premium-black pt-12 pb-6 sm:pt-16 sm:pb-10 md:pt-20 md:pb-14 lg:pt-24 lg:pb-16 overflow-hidden min-h-[70vh] flex items-center" data-name="Hero" data-file="components/Hero.js">
                {/* Grid Background */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundSize: '40px 40px',
                        backgroundImage: 'linear-gradient(to_right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to_bottom, rgba(255,255,255,0.15) 1px, transparent 1px)',
                    }}
                />
                
                {/* Radial gradient for faded look */}
                <div className="absolute inset-0 bg-premium-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
                
                {/* Blue Glow Accent */}
                <div className="absolute top-1/4 right-0 w-48 h-48 sm:w-72 sm:h-72 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-primary/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
                
                {/* Yellow Glow Accent */}
                <div className="absolute bottom-1/4 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-yellow-400/10 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                        {/* Left Content */}
                        <div className="lg:col-span-7 max-w-3xl mx-auto lg:mx-0 order-1 lg:order-1">
                            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/5 border border-white/10 mb-6 sm:mb-8 md:mb-10 backdrop-blur-md">
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                                <span className="text-[10px] sm:text-xs font-semibold text-white/90 uppercase tracking-wider sm:tracking-widest">A Division of The Polyglot Academy</span>
                            </div>
                            
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.1] sm:leading-[1.15] mb-6 sm:mb-8">
                                Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">Global</span> Journey.
                            </h1>
                            
                            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-10 md:mb-12 leading-relaxed font-light max-w-2xl">
                                Prepare for IELTS, PTE, TOEFL, and Duolingo with elite mentorship, daily mock tests, and hyper-personalized guidance for international success.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5">
                                <a href="#courses" className="btn-primary text-sm sm:text-base py-3 sm:py-3.5 px-6 sm:px-8 text-center">
                                    Start Your Journey
                                    <i data-lucide="arrow-right"></i>
                                </a>
                                <a href="#contact" className="btn-outline text-sm sm:text-base py-3 sm:py-3.5 px-6 sm:px-8 text-center">
                                    Book Free Demo
                                </a>
                            </div>

                            <div className="mt-10 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 md:gap-10 text-white/60 text-xs sm:text-sm font-medium">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                        <i data-lucide="award" className="text-primary text-xs sm:text-sm"></i>
                                    </div>
                                    <span className="tracking-wide">Expert Mentors</span>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                        <i data-lucide="target" className="text-primary text-xs sm:text-sm"></i>
                                    </div>
                                    <span className="tracking-wide">Band 8+ Focus</span>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                        <i data-lucide="globe" className="text-primary text-xs sm:text-sm"></i>
                                    </div>
                                    <span className="tracking-wide">Global Standards</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Image Container */}
                        <div className="lg:col-span-5 relative hidden lg:block order-2 lg:order-2">
                            <div className="relative rounded-[2rem] xl:rounded-[2.5rem] overflow-hidden aspect-[4/5] border-4 border-white/5 shadow-2xl group">
                                <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-transparent to-transparent z-10"></div>
                                <img 
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                                    alt="Premium Education"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        return null;
    }
}