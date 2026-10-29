import React from 'react';
import { ShieldCheck, Map, Headset } from 'lucide-react';

const Choose = () => {
    return (
        <section className="bg-[#f0f9ff] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* HEADER SECTION */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 tracking-tight mb-3">
                        Why Choose Wanderlust
                    </h2>
                    <p className="text-gray-500 text-base sm:text-lg font-light">
                        Your trusted partner for exceptional travel experiences
                    </p>
                </div>

                {/* CARDS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* CARD 1: Safe & Secure */}
                    <div className="bg-white p-8 md:p-10 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-start">
                        <div className="mb-6">
                            <ShieldCheck className="w-8 h-8 text-[#00a8cc]" strokeWidth={1.8} />
                        </div>
                        <h3 className="text-2xl font-serif text-gray-900 mb-3 font-normal">
                            Safe & Secure
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-light">
                            Your safety is our priority with comprehensive travel insurance and 24/7 support.
                        </p>
                    </div>

                    {/* CARD 2: Expert Guides */}
                    <div className="bg-white p-8 md:p-10 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-start">
                        <div className="mb-6">
                            <Map className="w-8 h-8 text-[#00a8cc]" strokeWidth={1.8} />
                        </div>
                        <h3 className="text-2xl font-serif text-gray-900 mb-3 font-normal">
                            Expert Guides
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-light">
                            Local experts who bring destinations to life with authentic cultural insights.
                        </p>
                    </div>

                    {/* CARD 3: 24/7 Support */}
                    <div className="bg-white p-8 md:p-10 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-start">
                        <div className="mb-6">
                            <Headset className="w-8 h-8 text-[#00a8cc]" strokeWidth={1.8} />
                        </div>
                        <h3 className="text-2xl font-serif text-gray-900 mb-3 font-normal">
                            24/7 Support
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-light">
                            Round-the-clock customer service to assist you wherever your journey takes you.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Choose;