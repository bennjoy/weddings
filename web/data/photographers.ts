export interface Photographer {
  id: number;
  name: string;
  specialties: string[];
  priceRange: string;
  rating: number;
  image: string;
  description: string;
}

export const photographers: Photographer[] = [
  {
    id: 1,
    name: "Elena Rose Studios",
    specialties: ["Portraits", "Candids", "Ceremonies"],
    priceRange: "$2,500 - $4,500",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1502329592943-5d8ab5649b1e?w=400&h=300&fit=crop",
    description: "Award-winning photographer specializing in romantic, artistic wedding photography.",
  },
  {
    id: 2,
    name: "Luxe Moments Photography",
    specialties: ["Cinematic", "Editorial", "Receptions"],
    priceRange: "$3,000 - $5,500",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop",
    description: "Cinematic wedding films and photography capturing every precious moment.",
  },
  {
    id: 3,
    name: "Grace & Light Photography",
    specialties: ["Natural Light", "Engagement", "Detail Shots"],
    priceRange: "$2,000 - $3,800",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
    description: "Specializing in natural light photography that brings elegance and emotion.",
  },
  {
    id: 4,
    name: "Timeless Elegance Weddings",
    specialties: ["Formal Portraits", "Ceremonies", "Album Design"],
    priceRange: "$2,200 - $4,200",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    description: "Creating heirloom-quality wedding photography and professionally designed albums.",
  },
];
