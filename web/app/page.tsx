'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const basePath = "/weddings";

export default function Home() {
  const router = useRouter();
  const [expandingIndex, setExpandingIndex] = useState<number | null>(null);

  const handleMobileClick = (index: number, href: string) => {
    // Only expand on mobile
    if (window.innerWidth < 768) {
      setExpandingIndex(index);
      setTimeout(() => {
        router.push(href);
      }, 600);
    }
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
        expandingIndex={expandingIndex}
        onMobileClick={() => handleMobileClick(0, "/photographers")}
      />

      {/* Venue Column */}
      <ExpandLink 
        href="/venues" 
        imageSrc={`${basePath}/venuebg.jpg`} 
        title="VENUE" 
        index={1}
        expandingIndex={expandingIndex}
        onMobileClick={() => handleMobileClick(1, "/venues")}
      />

      {/* Music Column */}
      <ExpandLink 
        href="/bands" 
        imageSrc={`${basePath}/musicbg.jpg`} 
        title="MUSIC" 
        index={2}
        expandingIndex={expandingIndex}
        onMobileClick={() => handleMobileClick(2, "/bands")}
      />
    </div>
  );
}

interface ExpandLinkProps {
  href: string;
  imageSrc: string;
  title: string;
  index: number;
  expandingIndex: number | null;
  onMobileClick: () => void;
}

function ExpandLink({ href, imageSrc, title, index, expandingIndex, onMobileClick }: ExpandLinkProps) {
  const isExpanding = expandingIndex === index;
  const isHidden = expandingIndex !== null && expandingIndex !== index;

  return (
    <Link 
      href={href}
      onClick={(e) => {
        // On mobile, prevent default and use expand animation
        if (window.innerWidth < 768) {
          e.preventDefault();
          onMobileClick();
        }
      }}
      style={{
        animation: isExpanding 
          ? 'expandFull 0.6s ease-out forwards'
          : isHidden
          ? 'collapseZero 0.6s ease-out forwards'
          : 'none'
      }}
      className={`flex-1 group relative overflow-hidden transition-none ${
        isExpanding 
          ? 'fixed top-0 left-0 right-0 bottom-0 z-50 h-screen w-screen flex-1' 
          : isHidden 
          ? 'h-0 md:h-auto md:h-screen overflow-hidden' 
          : 'h-56 md:h-auto md:h-screen'
      }`}
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
        <h1 className="playfair text-4xl md:text-5xl font-bold text-white drop-shadow-2xl tracking-widest">
          {title}
        </h1>
      </div>
    </Link>
  );
}
