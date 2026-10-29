import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-between bg-cover bg-center text-white" 
                 style={{ 
                     backgroundImage: "url('/images/Banner.png')",
                 }}>
            
            {/* HERO CONTENT (CENTER) */}
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto mt-12 md:mt-20">
                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight leading-tight mb-4 text-white drop-shadow-md">
                    Discover Your <br className="hidden sm:inline" /> Next Adventure
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mb-8 font-light leading-relaxed">
                    Explore breathtaking destinations and create unforgettable memories with our curated travel experiences.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <button className="w-full sm:w-auto px-7 py-3 bg-[#00a8cc] hover:bg-[#0091b0] text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
                        EXPLORE NOW 
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                    
                    <button className="w-full sm:w-auto px-7 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold text-xs tracking-wider uppercase backdrop-blur-md transition-all duration-300 border border-white/20">
                        VIEW DESTINATION
                    </button>
                </div>
            </div>

            {/* BOTTOM SEARCH BAR CONTAINER */}
            <div className="w-full bg-black/40 backdrop-blur-md border-t border-white/10 mt-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 text-left">
                    
                    {/* Location Field */}
                    <div className="p-4 md:p-6 border-b sm:border-b-0 border-r border-white/10 hover:bg-white/5 transition">
                        <label className="block text-sm font-medium text-white mb-1">Location</label>
                        <input 
                            type="text" 
                            placeholder="Address, City Or Zip" 
                            className="w-full bg-transparent text-xs text-gray-300 placeholder-gray-400 focus:outline-none"
                        />
                    </div>

                    {/* Date / Duration Field */}
                    <div className="p-4 md:p-6 border-b sm:border-b-0 border-r border-white/10 hover:bg-white/5 transition">
                        <label className="block text-sm font-medium text-white mb-1">Date/Duration</label>
                        <input 
                            type="text" 
                            placeholder="Anytime/3 Days" 
                            className="w-full bg-transparent text-xs text-gray-300 placeholder-gray-400 focus:outline-none"
                        />
                    </div>

                    {/* Budget Field */}
                    <div className="p-4 md:p-6 border-b sm:border-b-0 border-r border-white/10 hover:bg-white/5 transition">
                        <label className="block text-sm font-medium text-white mb-1">Budget</label>
                        <input 
                            type="text" 
                            placeholder="$0-$3000" 
                            className="w-full bg-transparent text-xs text-gray-300 placeholder-gray-400 focus:outline-none"
                        />
                    </div>

                    {/* People Field */}
                    <div className="p-4 md:p-6 border-b sm:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition">
                        <label className="block text-sm font-medium text-white mb-1">People</label>
                        <input 
                            type="text" 
                            placeholder="5-10" 
                            className="w-full bg-transparent text-xs text-gray-300 placeholder-gray-400 focus:outline-none"
                        />
                    </div>

                    {/* Search Button */}
                    <div className="col-span-1 sm:col-span-2 md:col-span-1">
                        <button className="w-full h-full min-h-[60px] bg-[#00a8cc] hover:bg-[#0091b0] text-white font-medium text-base transition-colors flex items-center justify-center">
                            Search
                        </button>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Hero;