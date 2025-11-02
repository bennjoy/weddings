'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

const basePath = "/weddings";

export default function Home() {
  const router = useRouter();
  const [expandingIndex, setExpandingIndex] = useState<number | null>(null);

  const handleClick = (index: number, href: string) => {
    setExpandingIndex(index);
    setTimeout(() => {
      router.push(href);
    }, 600); // Duration matches the animation
  };

  return (
    <div className="relative flex flex-col md:flex-row overflow-hidden h-auto md:h-screen w-full">
      {/* Translucent Top Menu with Fade */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/40 via-black/20 to-transparent pointer-events-none h-32">
        <div className="h-20 flex items-center justify-center">
          <h1 className="playfair-light text-3xl text-white drop-shadow-lg tracking-wide">
            WE DO<span className="text-sm align-super">™</span>
          </h1>
        </div>
      </div>

      {/* Center Text - Hidden on mobile */}
      <div className="hidden md:flex absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none">
        <p className="text-xl text-white" style={{ fontFamily: "'Crimson Text', serif", letterSpacing: '0.25em', filter: 'blur(0.5px) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.6))' }}>
          Find your perfect...
        </p>
      </div>

      {/* Photography Column */}
      <ExpandLink 
        href="/photographers" 
        imageSrc={`${basePath}/photobg.jpg`} 
        title="PHOTO" 
        index={0}
        isExpanding={expandingIndex === 0}
        onClick={() => handleClick(0, "/photographers")}
      />

      {/* Venue Column */}
      <ExpandLink 
        href="/venues" 
        imageSrc={`${basePath}/venuebg.jpg`} 
        title="VENUE" 
        index={1}
        isExpanding={expandingIndex === 1}
        onClick={() => handleClick(1, "/venues")}
      />

      {/* Music Column */}
      <ExpandLink 
        href="/bands" 
        imageSrc={`${basePath}/musicbg.jpg`} 
        title="MUSIC" 
        index={2}
        isExpanding={expandingIndex === 2}
        onClick={() => handleClick(2, "/bands")}
      />
    </div>
  );
}

interface ExpandLinkProps {
  href: string;
  imageSrc: string;
  title: string;
  index: number;
  isExpanding: boolean;
  onClick: () => void;
}

function ExpandLink({ imageSrc, title, isExpanding, onClick }: ExpandLinkProps) {
  return (
    <div 
      className={`flex-1 group relative overflow-hidden h-56 md:h-auto md:h-screen cursor-pointer transition-all duration-600 ${
        isExpanding ? 'flex-1 md:flex-none md:w-full md:h-screen fixed inset-0 z-50' : ''
      }`}
      onClick={onClick}
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
        <h1 className="playfair text-4xl md:text-5xl font-bold text-white drop-shadow-2xl tracking-widest">
          {title}
        </h1>
      </div>
    </div>
  );
}
