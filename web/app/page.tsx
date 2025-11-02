import Link from "next/link";

export default function Home() {
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

      {/* Center Text */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none">
        <p className="text-xl text-white" style={{ fontFamily: "'Crimson Text', serif", letterSpacing: '0.25em', filter: 'blur(0.5px) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.6))' }}>
          Find your perfect...
        </p>
      </div>

      {/* Photography Column */}
      <Link href="/photographers" className="flex-1 group relative overflow-hidden h-screen md:h-auto">
        <img
          src="/photobg.jpg"
          alt="Photography"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
          <h1 className="playfair text-5xl font-bold text-white drop-shadow-2xl tracking-widest">
            PHOTO
          </h1>
        </div>
      </Link>

      {/* Venue Column */}
      <Link href="/venues" className="flex-1 group relative overflow-hidden h-screen md:h-auto">
        <img
          src="/venuebg.jpg"
          alt="Venue"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
          <h1 className="playfair text-5xl font-bold text-white drop-shadow-2xl tracking-widest">
            VENUE
          </h1>
        </div>
      </Link>

      {/* Music Column */}
      <Link href="/bands" className="flex-1 group relative overflow-hidden h-screen md:h-auto">
        <img
          src="/musicbg.jpg"
          alt="Music"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
          <h1 className="playfair text-5xl font-bold text-white drop-shadow-2xl tracking-widest">
            MUSIC
          </h1>
        </div>
      </Link>
    </div>
  );
}
