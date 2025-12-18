# First Interior Designs - Portfolio Website

A luxury interior design portfolio website for **First Interior Designs**, a Nairobi-based design studio. Built with modern web technologies for exceptional performance and visual elegance.

## Features

✨ **Luxury Aesthetic**
- Warm light theme (cream & terracotta) and dark luxury theme (charcoal & gold)
- Glassmorphism effects with smooth animations
- Premium typography (Outfit headings + Inter body)
- High-end responsive design

📱 **Responsive Design**
- Full mobile, tablet, and desktop support
- Icon-only logo on mobile, full branding on desktop
- Touch-friendly navigation and interactions

🎨 **Portfolio Showcase**
- Featured projects only on hero section
- Elegant project gallery with masonry layout
- Light-box image viewer for detailed project exploration
- Smart "View All" button for galleries with 3+ images
- Category-based image organization

🌓 **Theme Toggle**
- Switch between light and dark modes
- User preference persistence
- Smooth theme transitions

📄 **Pages**
- **Home** — Hero, featured projects, testimonials
- **Projects** — Master-detail portfolio view with sidebar navigation
- **Contact** — Inquiry form with project details
- **Privacy Policy** — Legal documentation
- **Terms of Service** — Service terms
- **Credits** — Attribution and libraries

## Tech Stack

**Frontend**
- React 19 with TypeScript
- Vite (fast build & dev server)
- Tailwind CSS 4 for styling
- Framer Motion for animations
- Next-themes for dark mode

**UI Components**
- Radix UI (accessible component library)
- Lucide React (icons)
- React Hook Form (form handling)
- Sonner (toast notifications)

**Routing & Data**
- Wouter (lightweight router)
- Static JSON data (no backend required)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev:client
```

The app will run on `http://localhost:5000`

### Build

```bash
npm run build
```

## Project Structure

```
client/
├── src/
│   ├── pages/              # Page components
│   ├── components/
│   │   ├── layout/        # Navbar, Footer, Logo
│   │   ├── home/          # Hero, Contact Form, Recent Work
│   │   ├── project/       # Project Detail, Sidebar
│   │   └── ui/            # Radix UI components
│   ├── lib/               # Utilities & data
│   ├── App.tsx            # Router setup
│   └── index.css          # Global styles & theme vars
├── public/
│   └── projects.json      # Project data
└── index.html
```

## Data Structure

### projects.json

Projects are stored in `/client/public/projects.json`:

```json
[
  {
    "id": "unique-id",
    "title": "Project Name",
    "category": "Residential",
    "description": "Project description...",
    "location": "City, Country",
    "year": "2024",
    "timeline": "12 Months",
    "featured": true,
    "image": "https://images.unsplash.com/...",
    "gallery": [
      {
        "category": "Living Room",
        "images": ["url1", "url2", "url3"]
      }
    ]
  }
]
```

**Fields:**
- `featured` — Show on hero section (true/false)
- `gallery` — Organized by category, auto-shows "View All" for 3+ images
- All images use external Unsplash URLs (no file uploads)

## Performance

✅ **Optimized for Speed**
- Lightweight JSON data (~50KB for 300 images)
- External CDN image URLs (Unsplash)
- Lazy image loading with viewport detection
- Smart pagination (3 images per category default)
- No backend overhead

**With 300 total images:**
- JSON loads instantly
- Images load on-demand
- Zero performance impact

## Customization

### Changing Colors

Edit `/client/src/index.css` to modify theme colors:

```css
:root {
  /* Light theme */
  --background: 40 20% 96%;
  --primary: 15 70% 52%;
}

.dark {
  /* Dark theme */
  --background: 240 5% 6%;
  --primary: 45 30% 60%;
}
```

### Adding Projects

1. Add new project to `/client/public/projects.json`
2. Set `featured: true` to show on hero
3. Add gallery images (external URLs only)
4. Save — changes appear instantly

### Company Info

Update in components:
- **Navbar** — Email link in inquiry button
- **ContactForm** — Email, phone, location
- **Footer** — Copyright year, contact links

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- CSS Grid & Flexbox required

## Deployment

This is a static frontend app. Deploy to:
- Replit (automatic with `npm run dev:client`)
- Vercel
- Netlify
- GitHub Pages
- Any static hosting

No backend required — just serve the built files.

## License

MIT License — feel free to modify for your own use.

## Contact

**First Interior Designs**  
📧 hello@firstinteriordesigns.ke  
📍 Westlands, Nairobi, Kenya  
☎️ +254 (0) 712 345 678

---

Built with ❤️ for luxury interior design in Nairobi.
