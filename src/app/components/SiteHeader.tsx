'use client';

import Link from 'next/link';
import Image from 'next/image';
// Optional: import HeaderToggle if you want a theme toggle
// import HeaderToggle from './HeaderToggle';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 flex flex-col md:flex-row items-center justify-center border-b border-gray-200 bg-white px-6 py-5 shadow-sm w-full">
      <div className="flex flex-col md:flex-row items-center gap-3 pl-2">
        <Image
          src="/final-250.png"
          alt="ZeroToOne logo"
          width={130}
          height={23}
          className="w-auto"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-3">
        {/* If you have a HeaderToggle or user menu, put it here */}
        {/* <HeaderToggle /> */}
      </div>


    </header>
  );
}
