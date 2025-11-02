# Copilot Instructions for Wedding Services Marketplace

This project is a Next.js + Tailwind CSS web application for a wedding services marketplace, focusing on photographers, venues, and bands.

## Architecture Overview
- **Frameworks:** Next.js (React-based), Tailwind CSS for styling
- **Pages:** `/photographers`, `/venues`, `/bands` for browsing services
- **Components:** Each service type has its own component and page structure
- **Data:** Uses placeholder/mock data for initial setup; replace with real data sources as needed
- **Routing:** Next.js file-based routing in `pages/`
- **Styling:** Tailwind utility classes; custom styles in `styles/`

## Developer Workflows
- **Install dependencies:** `npm install` or `yarn`
- **Run dev server:** `npm run dev` (http://localhost:3000)
- **Build for production:** `npm run build`
- **Preview production build:** `npm run start`
- **Add new service type:** Create a new page/component in `pages/` and `components/`

## Project Conventions
- **Component structure:** Use functional React components, keep files small and focused
- **Styling:** Prefer Tailwind classes; avoid inline styles
- **Data:** Use mock data in `data/` or directly in components for now
- **Naming:** Use singular for components (`PhotographerCard`), plural for pages (`photographers`)
- **No backend integration yet:** All data is static or mock

## Key Files & Directories
- `pages/` — Next.js routes for each service type
- `components/` — Reusable UI components (cards, lists)
- `styles/` — Tailwind config and global styles
- `README.md` — Project overview and setup instructions
- `.github/copilot-instructions.md` — This file

## Example Patterns
- To add a new service (e.g., florists):
  - Create `pages/florists.js` and `components/FloristCard.js`
  - Add mock data and list rendering
- To update styling, edit Tailwind config or use utility classes in JSX

## External Dependencies
- Next.js
- Tailwind CSS
- React

## Getting Started
1. Run `npm install` to install dependencies
2. Run `npm run dev` to start the development server
3. Edit pages/components to customize service listings

---
For questions or unclear conventions, check `README.md` or ask for clarification.