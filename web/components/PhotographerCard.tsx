import { Photographer } from "@/data/photographers";
import Link from "next/link";

export default function PhotographerCard({ photographer }: { photographer: Photographer }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gold-200 hover:border-gold-500 hover:shadow-xl transition duration-300">
      <div className="h-48 overflow-hidden bg-cream-100">
        <img
          src={photographer.image}
          alt={photographer.name}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl font-bold text-gold-800 mb-2">{photographer.name}</h3>
        <p className="font-display text-gray-600 mb-4 min-h-12 leading-relaxed">{photographer.description}</p>
        
        <div className="mb-4">
          <div className="flex items-center mb-3">
            <span className="text-gold-600">★★★★★</span>
            <span className="font-display ml-2 text-gray-700">{photographer.rating}</span>
          </div>
        </div>

        <div className="mb-4">
          <p className="font-display text-sm text-gray-600 mb-2">
            <span className="font-semibold">Specialties:</span> {photographer.specialties.join(", ")}
          </p>
          <p className="font-display text-lg text-gold-700 font-semibold">{photographer.priceRange}</p>
        </div>

        <button className="w-full bg-gold-700 text-white font-display py-2 rounded hover:bg-gold-800 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}
