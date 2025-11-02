export interface Venue {
  id: number;
  name: string;
  location: string;
  capacity: string;
  priceRange: string;
  amenities: string[];
  rating: number;
  image: string;
  description: string;
}

export const venues: Venue[] = [
  {
    id: 1,
    name: "Grand Ballroom at Palazzo",
    location: "Downtown, Historic District",
    capacity: "150 - 300 guests",
    priceRange: "$3,000 - $6,000",
    amenities: ["Chandelier Lighting", "Marble Floors", "Private Entrance", "Catering Available"],
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1519167758993-ddc77dcf0cbf?w=400&h=300&fit=crop",
    description: "Elegant historic ballroom with ornate details and timeless sophistication.",
  },
  {
    id: 2,
    name: "Sunset Garden Estate",
    location: "Vineyard District",
    capacity: "100 - 250 guests",
    priceRange: "$2,500 - $5,500",
    amenities: ["Outdoor Gardens", "Indoor Reception Hall", "Bridal Suite", "Parking"],
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
    description: "Charming estate with manicured gardens and rustic-elegant architecture.",
  },
  {
    id: 3,
    name: "Crystal Pavilion Events",
    location: "Waterfront",
    capacity: "80 - 200 guests",
    priceRange: "$2,000 - $4,500",
    amenities: ["Water Views", "Climate Controlled", "Modern Design", "Full Bar"],
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=400&h=300&fit=crop",
    description: "Contemporary venue with stunning water views and sophisticated ambiance.",
  },
  {
    id: 4,
    name: "Rosewood Manor",
    location: "Historic Estates",
    capacity: "120 - 280 guests",
    priceRange: "$2,800 - $5,800",
    amenities: ["Grand Staircase", "Period Furnishings", "Library Lounge", "Terrace"],
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
    description: "Luxurious manor with timeless elegance and refined architectural details.",
  },
];
