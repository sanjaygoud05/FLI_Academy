function Hero() {
    try {
        return (
            <section id="home" className="relative bg-premium-black pt-16 pb-8 sm:pt-20 sm:pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20 overflow-hidden min-h-screen flex items-center" data-name="Hero" data-file="components/Hero.js">
                {/* ── Backgrounds ── */}
                {/* Dot grid */}
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)',
                    backgroundSize: '28px 28px'
                }} />

                {/* Large yellow glow — right */}
                <div className="absolute -top-20 right-0 w-[600px] h-[600px] bg-primary/25 rounded-full blur-[120px] pointer-events-none" />
                {/* Small yellow glow — left bottom */}
                <div className="absolute bottom-0 -left-20 w-[350px] h-[350px] bg-primary/15 rounded-full blur-[90px] pointer-events-none" />
                {/* Diagonal accent stripe */}
                <div className="absolute inset-0 pointer-events-none" style={{
                    background: 'linear-gradient(135deg, transparent 60%, rgba(245,196,0,0.04) 100%)'
                }} />
                {/* Vignette edges */}
                <div className="absolute inset-0 pointer-events-none" style={{
                    background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)'
                }} />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Left Content */}
                        <div className="lg:col-span-7 max-w-3xl mx-auto lg:mx-0 order-1 lg:order-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-6 md:mb-8 backdrop-blur-md">
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                                <span className="text-[9px] sm:text-[10px] font-semibold text-white/90 uppercase tracking-wider">A Division of The Polyglot Academy</span>
                            </div>
                            
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-6 md:mb-8">
                                Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">Global</span> Journey.
                            </h1>
                            
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 mb-6 sm:mb-8 md:mb-10 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                                Prepare for IELTS, PTE, TOEFL, and Duolingo with elite mentorship, daily mock tests, and hyper-personalized guidance for international success.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center lg:justify-start">
                                <a href="#courses" className="btn-primary text-xs sm:text-sm md:text-base py-2.5 sm:py-3 px-5 sm:px-6 md:px-8 text-center">
                                    Start Your Journey
                                    <i data-lucide="arrow-right"></i>
                                </a>
                                <a href="#contact" className="btn-outline text-xs sm:text-sm md:text-base py-2.5 sm:py-3 px-5 sm:px-6 md:px-8 text-center">
                                    Book Free Demo
                                </a>
                            </div>

                            <div className="mt-8 sm:mt-10 md:mt-12 pt-4 sm:pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 text-white/60 text-[10px] sm:text-xs font-medium">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center">
                                        <i data-lucide="award" className="text-primary text-[10px] sm:text-xs"></i>
                                    </div>
                                    <span className="tracking-wide">Expert Mentors</span>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center">
                                        <i data-lucide="target" className="text-primary text-[10px] sm:text-xs"></i>
                                    </div>
                                    <span className="tracking-wide">Band 8+ Focus</span>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center">
                                        <i data-lucide="globe" className="text-primary text-[10px] sm:text-xs"></i>
                                    </div>
                                    <span className="tracking-wide">Global Standards</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Image Container */}
                        <div className="lg:col-span-5 relative hidden lg:block order-2 lg:order-2">
                            <div className="relative flex items-end justify-center h-full">
                                {/* Glowing ring behind image */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-[380px] h-[380px] rounded-full"
                                        style={{ background: 'radial-gradient(circle, rgba(245,196,0,0.08) 0%, transparent 70%)' }} />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-[420px] h-[420px] rounded-full border border-primary/10" />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-[500px] h-[500px] rounded-full border border-primary/5" />
                                </div>
                                {/* Yellow glow behind image */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-primary/10 rounded-full blur-[60px] pointer-events-none z-0"></div>
                                {/* Image */}
                                <img
                                    src="assets/hero-image.png"
                                    alt="Premium Education"
                                    className="relative z-10 w-full h-auto object-contain max-h-[520px]"
                                    style={{
                                        mixBlendMode: 'lighten',
                                        filter: 'brightness(0.9) contrast(1.0)',
                                        maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                                        WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                                    }}
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