"use client";

import { useState } from "react";

export const NavBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleSearch = () => {
        setIsVisible(!isVisible);
    };

    return (
        <nav className="p-4 bg-rose-50">
            <div className="flex items-center justify-between">
                <div>
                    <img
                        src="/images/back-2-heal.png"
                        alt="Back to Heal logo"
                        className="w-24 rounded-full"
                    />
                </div>

                <div class="flex space-x-10">
                    <a href="#" class="hover:text-blue-500">Home</a>
                    <a href="#" class="hover:text-blue-500">About</a>
                    <a href="#" class="hover:text-blue-500">Nutrition Programs</a>
                    <a href="#" class="hover:text-blue-500">Testimonials</a>
                    <a href="#" class="hover:text-blue-500">Media</a>
                    <a href="#" class="hover:text-blue-500">Contact</a>
                </div>

                <div className="flex items-center space-x-4 relative">
                    <button
                        onClick={toggleSearch}
                        aria-label="Toggle search"
                        className="p-2 text-gray-600 hover:text-black"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-search"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                    </button>

                    <button className="flex items-center bg-rose-200 p-2 rounded-xl hover:bg-pink-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-phone"
                        >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span className="ml-2 text-gray-700">(+91)9310760925</span>
                    </button>

                    {isVisible && (
                        <input
                            type="text"
                            placeholder="Search..."
                            className="absolute top-0 right-12 p-2 border border-gray-300 rounded-md transition-transform duration-300 ease-in-out transform"
                        />
                    )}
                </div>
            </div>
        </nav>
    );
};
