function CTA() {
    try {
        return (
            <section className="py-6 sm:py-8 md:py-12 lg:py-14 xl:py-16 relative overflow-hidden bg-premium-black min-h-[45vh] flex items-center" data-name="CTA" data-file="components/CTA.js">
                {/* Global Map Background */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-90"></div>
                
                {/* Gradient Overlays for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-premium-black via-premium-black/20 to-premium-black"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-premium-black/80 via-transparent to-premium-black/80"></div>
                
                {/* Glowing Accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px] bg-primary/10 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none"></div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center w-full">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-semibold text-white mb-6 sm:mb-8 leading-[1.1]">
                        Your Global Future <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">Begins Here.</span>
                    </h2>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 mb-8 sm:mb-10 md:mb-14 font-light max-w-3xl mx-auto leading-relaxed">
                        Join thousands of students who have crossed borders and achieved their dreams with our premium standard of international test preparation.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                        <button className="btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 w-full sm:w-auto">
                            Book a Free Consultation
                            <i data-lucide="arrow-right" className="ml-2"></i>
                        </button>
                        <button className="btn-outline text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 w-full sm:w-auto border-white/30 hover:border-white">
                            Explore Programs
                        </button>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('CTA component error:', error);
        return null;
    }
}