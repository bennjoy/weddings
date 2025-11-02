import Link from "next/link";

const basePath = "/weddings";

export default function PhotographersPage() {
  // Generate array of photo URLs from photo1.jpg to photo14.jpg
  const photos = Array.from({ length: 14 }, (_, i) => `${basePath}/photo${i + 1}.jpg`);

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#1a1a1a' }}>
      {/* Translucent Top Menu with Fade - Exact same as homepage */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/40 via-black/20 to-transparent pointer-events-auto h-32">
        <div className="h-20 flex items-center justify-center">
          <Link href="/" className="playfair-light text-3xl text-white drop-shadow-lg tracking-wide hover:opacity-80 transition-opacity duration-300 block" style={{ letterSpacing: '2px' }}>
            WE DO<span className="text-sm align-super">™</span>
          </Link>
        </div>
      </div>

      {/* Photo Grid - 3 columns on desktop, 2 on mobile */}
      <section className="max-w-7xl mx-auto px-4 pt-24 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden aspect-square cursor-pointer"
            >
              <img
                src={photo}
                alt={`Photographer ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="playfair text-xl font-bold text-white border-2 border-white px-8 py-2 hover:bg-white hover:text-black transition-all duration-300" style={{ color: 'inherit' }}>
                  SEE MORE
                </button>
                <button className="playfair text-xl font-bold text-white bg-white/20 backdrop-blur-sm px-8 py-2 hover:bg-white hover:text-black transition-all duration-300" style={{ color: 'inherit' }}>
                  BOOK NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
