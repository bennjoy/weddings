# Elegance Events - Wedding Services Marketplace

A sophisticated Next.js + Tailwind CSS web application for a wedding services marketplace, featuring photographers, venues, and live entertainment.

## 🎨 Design Philosophy

This marketplace features an elegant **white/gold color palette** with calligraphic and serif fonts for a refined, sophisticated aesthetic:

- **Color Palette**: Cream backgrounds (#fafbf8), Gold accents (#d4af37), with dark gray text (#2c2c2c)
- **Typography**: 
  - **Playfair Display** - Elegant serif font for headings and display text
  - **Cormorant Garamond** - Calligraphic serif font for body text and general UI
- **Design**: Modern, clean layout with hover effects and smooth transitions

## 📁 Project Structure

```
web/
├── app/
│   ├── page.tsx                 # Home page with hero section
│   ├── photographers/page.tsx   # Photographers listing
│   ├── venues/page.tsx          # Venues listing
│   ├── bands/page.tsx           # Bands & entertainment listing
│   └── globals.css              # Global styles with color palette
├── components/
│   ├── PhotographerCard.tsx     # Photographer service card
│   ├── VenueCard.tsx            # Venue service card
│   └── BandCard.tsx             # Band/entertainment card
├── data/
│   ├── photographers.ts         # Mock photographer data
│   ├── venues.ts                # Mock venue data
│   └── bands.ts                 # Mock band data
├── tailwind.config.ts           # Tailwind configuration with custom colors
└── package.json                 # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm installed

### Installation

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the marketplace.

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server (http://localhost:3000)

# Production
npm run build        # Build for production
npm start           # Start production server
```

## 🎯 Features

### Home Page (`/`)
- Hero section with call-to-action buttons
- Service category cards linking to each marketplace section
- Elegant navigation bar with links to all services

### Photographers (`/photographers`)
- Grid of photographer profiles with ratings and specialties
- Price ranges and detailed descriptions

### Venues (`/venues`)
- Comprehensive venue listings with capacity and amenities
- Location information and pricing

### Bands & Entertainment (`/bands`)
- Band profiles with genre and ensemble size
- Musical specialties and entertainment options

## 🎨 Customization Guide

### Adding a New Service Type

1. **Create mock data** in `data/yourservice.ts`
2. **Create a card component** in `components/YourServiceCard.tsx`
3. **Create a page** in `app/yourservice/page.tsx`

### Updating Color Palette

Edit `tailwind.config.ts` to customize the gold colors and themes.

### Changing Fonts

Fonts are imported in `app/globals.css`. Update the Google Fonts import to change typefaces.

## 📊 Mock Data

All service data uses TypeScript interfaces and is stored in the `data/` directory. To integrate real data:
1. Create a backend API
2. Replace data imports with API calls
3. Update types as needed

## 🛠️ Tech Stack

- **Framework**: Next.js 16+ with TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Google Fonts (Playfair Display, Cormorant Garamond)

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

---

Refer to `.github/copilot-instructions.md` for AI agent development guidelines.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
