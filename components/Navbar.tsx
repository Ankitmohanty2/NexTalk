'use client';
import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './MobileNav';
import { SignedIn, UserButton } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [starCount, setStarCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/Ankitmohanty2/NexTalk')
      .then(res => res.json())
      .then(data => setStarCount(data.stargazers_count))
      .catch(() => setStarCount(0));
  }, []);

  return (
    <nav className="flex-between fixed z-40 w-full backdrop-blur-md bg-dark-1/90 px-6 py-4 lg:px-10 border-b border-gray-800">
      <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <Image
          src="/icons/logo.svg"
          width={40}
          height={40}
          alt="NexTalk logo"
          className="max-sm:size-10 hover:rotate-12 transition-transform duration-300"
        />
        <div className="flex flex-col">
          <p className="text-[28px] font-extrabold text-white max-sm:hidden bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            NexTalk
          </p>
          <p className="text-xs text-gray-400 max-sm:hidden">Connect & Collaborate</p>
        </div>
      </Link>

      <div className="flex-between gap-6">
        <div className="hidden md:flex items-center">
          <Link
            href="https://github.com/Ankitmohanty2/NexTalk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 bg-[#1b1f23] hover:bg-[#24292e] rounded-l-md transition-all duration-200 border border-gray-600/20"
          >
            <svg height="16" viewBox="0 0 16 16" width="16" className="fill-white">
              <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
            </svg>
            <span className="text-sm font-semibold text-white">Star</span>
          </Link>
          <div className="flex items-center px-3 py-1.5 bg-[#1b1f23] rounded-r-md border-t border-r border-b border-gray-600/20">
            <span className="text-sm font-semibold text-white">{starCount ?? 0}</span>
          </div>
        </div>

        <SignedIn>
          <div className="hover:scale-105 transition-transform">
            <UserButton 
              afterSignOutUrl="/sign-in"
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10 rounded-full border-2 border-purple-500/50"
                }
              }}
            />
          </div>
        </SignedIn>

        <div className="border-l border-gray-700/50 h-8 mx-2 hidden lg:block" />
        
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;