function Contact() {
    try {
        return (
            <section id="contact" className="py-6 sm:py-8 md:py-12 lg:py-14 px-4 sm:px-6 md:px-12 lg:px-24 bg-light min-h-[50vh] flex items-center" data-name="Contact" data-file="components/Contact.js">
                <div className="max-w-7xl mx-auto w-full bg-white rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.05)] border border-border/50 overflow-hidden">
                    <div className="grid lg:grid-cols-5 items-stretch">
                        
                        {/* Contact Info */}
                        <div className="lg:col-span-2 bg-premium-black p-6 sm:p-8 md:p-12 lg:p-16 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-primary/10 rounded-full blur-2xl sm:blur-3xl"></div>
                            
                            <h3 className="text-2xl sm:text-3xl font-heading font-semibold mb-3 sm:mb-4 relative z-10">
                                Connect With Us
                            </h3>
                            <p className="text-white/60 font-light mb-6 sm:mb-8 md:mb-12 relative z-10 text-sm sm:text-base">
                                Reach out to our expert counselors for a personalized assessment of your goals.
                            </p>

                            <div className="space-y-6 sm:space-y-8 relative z-10">
                                <div className="flex items-start gap-3 sm:gap-5 group">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors">
                                        <i data-lucide="map-pin" className="text-lg sm:text-xl text-white group-hover:text-premium-black transition-colors"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1 text-sm sm:text-base">Headquarters</h4>
                                        <p className="text-white/60 text-xs sm:text-sm leading-relaxed">Polyglot Building, Global Ed Avenue<br/>Business District, NY 10001</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 sm:gap-5 group">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors">
                                        <i data-lucide="phone" className="text-lg sm:text-xl text-white group-hover:text-premium-black transition-colors"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1 text-sm sm:text-base">Direct Line</h4>
                                        <p className="text-white/60 text-xs sm:text-sm">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 sm:gap-5 group">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors">
                                        <i data-lucide="mail" className="text-lg sm:text-xl text-white group-hover:text-premium-black transition-colors"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1 text-sm sm:text-base">Admissions</h4>
                                        <p className="text-white/60 text-xs sm:text-sm">admissions@thefli.edu</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3 p-6 sm:p-8 md:p-12 lg:p-16 bg-white">
                            <div className="mb-6 sm:mb-8 md:mb-10">
                                <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-premium-black mb-2 sm:mb-3">Request a Callback</h3>
                                <p className="text-muted text-sm sm:text-base">Fill out the form below and our admissions team will contact you within 24 hours.</p>
                            </div>
                            <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
                                    <div className="space-y-1.5">
                                        <label className="block text-xs sm:text-sm font-semibold text-premium-dark">First Name</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                                                <i data-lucide="user" className="text-muted text-sm sm:text-base"></i>
                                            </div>
                                            <input type="text" className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-3 sm:py-3.5 rounded-xl border border-gray-200 bg-light hover:bg-white focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm text-sm sm:text-base" placeholder="John" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="block text-xs sm:text-sm font-semibold text-premium-dark">Last Name</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                                                <i data-lucide="user" className="text-muted text-sm sm:text-base"></i>
                                            </div>
                                            <input type="text" className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-3 sm:py-3.5 rounded-xl border border-gray-200 bg-light hover:bg-white focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm text-sm sm:text-base" placeholder="Doe" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
                                    <div className="space-y-1.5">
                                        <label className="block text-xs sm:text-sm font-semibold text-premium-dark">Email Address</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                                                <i data-lucide="mail" className="text-muted text-sm sm:text-base"></i>
                                            </div>
                                            <input type="email" className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-3 sm:py-3.5 rounded-xl border border-gray-200 bg-light hover:bg-white focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm text-sm sm:text-base" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="block text-xs sm:text-sm font-semibold text-premium-dark">Target Program</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                                                <i data-lucide="book" className="text-muted text-sm sm:text-base"></i>
                                            </div>
                                            <select className="w-full pl-9 sm:pl-11 pr-8 sm:pr-10 py-3 sm:py-3.5 rounded-xl border border-gray-200 bg-light hover:bg-white focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none shadow-sm font-medium text-premium-dark cursor-pointer text-sm sm:text-base">
                                                <option>IELTS Academic</option>
                                                <option>IELTS General</option>
                                                <option>PTE Coaching</option>
                                                <option>TOEFL Preparation</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center pointer-events-none">
                                                <i data-lucide="chevron-down" className="text-muted text-sm sm:text-base"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="block text-xs sm:text-sm font-semibold text-premium-dark">Your Message</label>
                                    <textarea rows="4" className="w-full p-3 sm:p-4 rounded-xl border border-gray-200 bg-light hover:bg-white focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none shadow-sm text-sm sm:text-base" placeholder="Tell us about your target score and timeline..."></textarea>
                                </div>
                                <button className="btn-primary w-full shadow-lg hover:shadow-primary/30 mt-2 text-sm sm:text-base md:text-lg py-3 sm:py-4">
                                    Submit Request <i data-lucide="send" className="ml-2"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        return null;
    }
}