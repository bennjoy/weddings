export interface Band {
  id: number;
  name: string;
  genre: string;
  size: string;
  priceRange: string;
  rating: number;
  image: string;
  description: string;
  specialties: string[];
}

export const bands: Band[] = [
  {
    id: 1,
    name: "Harmony Collective",
    genre: "Jazz & Soul",
    size: "5 - 8 piece",
    priceRange: "$2,000 - $4,000",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1516449360631-18bdf38b1d6d?w=400&h=300&fit=crop",
    description: "Sophisticated jazz ensemble perfect for elegant receptions and cocktail hours.",
    specialties: ["Jazz Standards", "Soul Classics", "Contemporary Jazz"],
  },
  {
    id: 2,
    name: "Golden String Quartet",
    genre: "Classical & Modern",
    size: "4 piece",
    priceRange: "$1,500 - $3,500",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
    description: "String quartet offering classical elegance and modern arrangements.",
    specialties: ["Ceremonies", "Cocktail Hours", "Dinner Music"],
  },
  {
    id: 3,
    name: "The Retro Revue",
    genre: "Vintage & Swing",
    size: "6 - 10 piece",
    priceRange: "$2,500 - $5,000",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    description: "Full band delivering vintage swing and contemporary hits that get guests dancing.",
    specialties: ["Swing Music", "Classic Rock", "Big Band Sound"],
  },
  {
    id: 4,
    name: "Acoustic Dreams",
    genre: "Acoustic & Soul",
    size: "2 - 4 piece",
    priceRange: "$1,200 - $2,800",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop",
    description: "Intimate acoustic performances with soulful vocals perfect for ceremonies and cocktails.",
    specialties: ["Acoustic Guitar", "Vocal-led", "Intimate Settings"],
  },
];
