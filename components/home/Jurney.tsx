import React from 'react';

const Journey = () => {
    return (
        <section 
            className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 text-white bg-cover bg-center text-center overflow-hidden"
            style={{
                backgroundImage: "url('/images/CTA.png')",
            }}
        >
            <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center">
                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight mb-4 text-white font-normal">
                    Ready To Start Your Journey?
                </h2>

                {/* Subtitle */}
                <p className="text-gray-300 text-sm sm:text-base font-light mb-8 max-w-xl">
                    Join thousands of travelers who have discovered the world with us
                </p>

                {/* Action Button */}
                <button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded-none transition duration-300 flex items-center gap-2 shadow-lg">
                    BOOK YOUR TRIP TODAY
                    <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Journey;