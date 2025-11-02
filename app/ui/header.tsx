"use client";

import Link from "next/link";
import React, {useState} from "react";


export function Header() {
    const logo = "public/logo.png";
    const navItems = [
        { label: "Features", href: "#features" },
        { label: "Developers", href: "#capabilities" },
        { label: "Company", href: "#testimonials" },
        { label: "Waitlist", href: "#waitlist" },
        { label: "Pricing", href: "#pricing" },
        { label: "Listing", href: "/listing" },
    ];
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-30 border-b border-white/10 bg-[#05000f]/70 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 gap-2">
                <img src={logo.replace(/^public\//, "/")} alt="AI Startup Kit Logo" />
                <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex border rounded-full border-white/10 py-4 px-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="transition-colors hover:text-white"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <div className="p-1 rounded-md border border-white/10 inline-block">
                        <button
                            className="px-8 py-2 rounded-md text-white font-medium 
                                    bg-[linear-gradient(180deg,#7c3aed_0%,#4c1d95_100%)]
                                    shadow-[inset_0_2px_6px_rgba(255,255,255,0.3)]
                                    hover:shadow-[0_0_20px_rgba(124,58,237,0.6)]
                                    transition-all duration-300"
                        >
                            Join waitlist
                        </button>
                    </div>
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-sm text-white/70 transition-colors hover:border-purple-400/80 hover:text-white md:hidden"
                    >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    
                    {isMenuOpen && (
                        <div className="absolute right-6 top-18 bg-black rounded-lg p-4 border border-white/50 backdrop-blur min-w-[200px]">
                            <nav className="flex flex-col gap-4">
                                {navItems.map(item => (
                                    <a key={item.label} href={item.href} className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
