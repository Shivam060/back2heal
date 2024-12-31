"use client";

import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleSearch = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <header className="bg-rose-50 z-[100] w-full fixed top-0 left-0 transition-all duration-200">
                <div className="max-w-[1400px] mx-auto py-4 grid grid-cols-8 gap-4">

                    <div className="col-span-2 flex items-center">
                        <Link href="/">
                            <img
                                src="/images/back-2-heal.png"
                                alt="Back to Heal logo"
                                className="w-24 rounded-full"
                            />
                        </Link>
                    </div>

                    <div className="col-span-6 flex items-center justify-between">
                        <nav className="px-4 md:px-2">
                            <ul className="hidden relative py-0 xl:flex items-center justify-between text-black font-semibold text-sm bg-rose-200 backdrop-blur-xl px-5 rounded-lg backdrop-contrast-125">
                                {[
                                    { label: "ABOUT", items: ["Team", "Mission", "Vision"] },
                                    { label: "Weight Loss", items: ["Plans", "FAQs", "Testimonials"] },
                                    { label: "Personal Training", items: ["One-on-One", "Group Sessions", "Custom Plans"] },
                                    { label: "Offerings", items: ["Workshops", "Nutrition Plans", "Online Coaching"] },
                                    { label: "Resources", items: ["Blog", "Guides", "eBooks"] },
                                ].map((menu, index) => (
                                    <li key={index} className="relative group">
                                        <button className="relative px-3 py-3 focus:outline-none text-white font-novaBold text-lg max-[1600px]:text-sm flex items-center gap-1">
                                            {menu.label}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </button>
                                        <ul className="absolute bg-white text-gray-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                                            {menu.items.map((item, subIndex) => (
                                                <li key={subIndex} className="px-4 py-2 hover:bg-rose-50 w-72">
                                                    <Link href={`/${menu.label.toLowerCase()}/${item.toLowerCase().replace(/ /g, "-")}`}>
                                                        {item}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default NavBar;
