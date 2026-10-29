
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#0b0c0e] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-gray-900">
            <div className="max-w-7xl mx-auto">
                
                {/* BRAND HEADER */}
                <div className="mb-12">
                    <h2 className="text-5xl sm:text-6xl font-serif font-bold tracking-tight mb-3 text-white">
                        Wanderlast
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base font-light">
                        Your gateway to extraordinary travel experiences around the world.
                    </p>
                </div>

                {/* FOOTER COLUMNS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    
                    {/* Newsletter Column */}
                    <div>
                        <h4 className="text-xs uppercase tracking-widest font-medium text-gray-300 mb-2">
                            NEWSLETTER
                        </h4>
                        <p className="text-xs text-gray-400 font-light mb-4">
                            Subscribe for exclusive travel deals and inspiration.
                        </p>
                        <div className="relative flex items-center">
                            <input 
                                type="email" 
                                placeholder="Enter email" 
                                className="w-full bg-[#1e2024] text-sm text-gray-200 placeholder-gray-500 px-4 py-3 pr-10 rounded-none focus:outline-none border border-transparent focus:border-gray-700"
                            />
                            <button 
                                type="button" 
                                aria-label="Subscribe"
                                className="absolute right-3 text-gray-400 hover:text-white transition"
                            >
                                <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h4 className="text-xs uppercase tracking-widest font-medium text-gray-300 mb-4">
                            QUICK LINKS
                        </h4>
                        <ul className="space-y-2.5 text-sm font-light text-gray-400">
                            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                            <li><Link href="/all-destination" className="hover:text-white transition">Destinations</Link></li>
                            <li><Link href="/my-bookings" className="hover:text-white transition">My Bookings</Link></li>
                            <li><Link href="/profile" className="hover:text-white transition">My Profile</Link></li>
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div>
                        <h4 className="text-xs uppercase tracking-widest font-medium text-gray-300 mb-4">
                            SUPPORT
                        </h4>
                        <ul className="space-y-2.5 text-sm font-light text-gray-400">
                            <li><Link href="/help" className="hover:text-white transition">Help Center</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us Column */}
                    <div>
                        <h4 className="text-xs uppercase tracking-widest font-medium text-gray-300 mb-4">
                            CONTACT US
                        </h4>
                        <ul className="space-y-2.5 text-sm font-light text-gray-400">
                            <li>786 901 1622</li>
                            <li><a href="mailto:info@wandarland.com" className="hover:text-white transition">info@wandarland.com</a></li>
                        </ul>
                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-light gap-4">
                    <p>© 2026 Wanderlust. All rights reserved.</p>
                    
                    {/* React Icons (FontAwesome) */}
                    <div className="flex items-center space-x-4 text-gray-400">
                        <a href="#" aria-label="Twitter" className="hover:text-white transition text-base">
                            <FaTwitter />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-white transition text-base">
                            <FaLinkedinIn />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-white transition text-base">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;