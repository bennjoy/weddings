import { Venue } from "@/data/venues";

export default function VenueCard({ venue }: { venue: Venue }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gold-200 hover:border-gold-500 hover:shadow-xl transition duration-300">
      <div className="h-48 overflow-hidden bg-cream-100">
        <img
          src={venue.image}
          alt={venue.name}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl font-bold text-gold-800 mb-1">{venue.name}</h3>
        <p className="font-display text-gray-500 text-sm mb-3">{venue.location}</p>
        <p className="font-display text-gray-600 mb-4 min-h-12 leading-relaxed">{venue.description}</p>
        
        <div className="mb-4">
          <div className="flex items-center mb-3">
            <span className="text-gold-600">★★★★★</span>
            <span className="font-display ml-2 text-gray-700">{venue.rating}</span>
          </div>
        </div>

        <div className="mb-4 text-sm">
          <p className="font-display text-gray-700 mb-2">
            <span className="font-semibold">Capacity:</span> {venue.capacity}
          </p>
          <p className="font-display text-gray-700 mb-2">
            <span className="font-semibold">Amenities:</span> {venue.amenities.join(", ")}
          </p>
          <p className="font-display text-lg text-gold-700 font-semibold">{venue.priceRange}</p>
        </div>

        <button className="w-full bg-gold-700 text-white font-display py-2 rounded hover:bg-gold-800 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}
