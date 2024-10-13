"use client";

import { useState } from "react";

const NavBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleSearch = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <header className="bg-rose-50 z-[100] w-full fixed top-0 left-0 transition-all duration-200">
                <div className="max-w-[1400px] mx-auto p-4 grid grid-cols-8 gap-4">

                    <div className="col-span-2 flex items-center">
                        <img
                            src="/images/back-2-heal.png"
                            alt="Back to Heal logo"
                            className="w-24 rounded-full"
                        />
                    </div>

                    <div className="col-span-6 flex items-center justify-between">
                        <nav className="px-4 md:px-2">
                            {/* <div className="flex items-center space-x-4 relative">
                                <button onClick={toggleSearch} aria-label="Toggle search" className="p-2 text-gray-600 hover:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search">
                                        <circle cx="11" cy="11" r="8" />
                                        <path d="m21 21-4.3-4.3" />
                                    </svg>
                                </button>

                                <button className="flex items-center bg-rose-200 p-2 rounded-xl hover:bg-pink-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    <span className="ml-2 text-gray-700">(+91) 7678635395</span>
                                </button>

                                {isVisible && (
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="absolute top-0 left-12 p-2 border border-gray-300 rounded-md transition-transform duration-300 ease-in-out transform"
                                    />
                                )}
                            </div> */}

                            <ul className="hidden relative py-0 mt-4 xl:flex items-center justify-between text-black font-semibold text-sm bg-rose-200 backdrop-blur-xl px-5 rounded-lg backdrop-contrast-125">
                                <li className="relative group">
                                    <button className="relative px-3 py-3  focus:outline-none text-white font-novaBold text-lg max-[1600px]:text-sm flex items-center gap-1">
                                        ABOUT
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="relative group">
                                    <button className="relative px-3 py-3  focus:outline-none text-white font-novaBold text-lg max-[1600px]:text-sm flex items-center gap-1">
                                        Weight Loss
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="relative group">
                                    <button className="relative px-3 py-3  focus:outline-none text-white font-novaBold text-lg max-[1600px]:text-sm flex items-center gap-1">
                                        Personal Training
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="relative group">
                                    <button className="relative px-3 py-3  focus:outline-none text-white font-novaBold text-lg max-[1600px]:text-sm flex items-center gap-1">
                                        Offerings
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="relative group">
                                    <button className="relative px-3 py-3  focus:outline-none text-white font-novaBold text-lg max-[1600px]:text-sm flex items-center gap-1">
                                        Resources
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="relative group">
                                    <button className="relative px-3 py-3  focus:outline-none text-white font-novaBold text-lg max-[1600px]:text-sm flex items-center gap-1">
                                        Fitness Checkers
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default NavBar;
