# Sanika Stalavdekar - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
sanika-portfolio/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles
├── components/
│   ├── Navigation.tsx    # Header navigation (mobile responsive)
│   ├── Hero.tsx          # Hero section with intro
│   ├── About.tsx         # About/interests section
│   ├── Projects.tsx      # Projects showcase
│   ├── ProjectCard.tsx   # Reusable project card
│   ├── Contact.tsx       # Contact CTA section
│   └── Footer.tsx        # Footer component
└── public/               # Static assets (add images here)
```

## 🖼️ Adding Images

Place your images in the `public/` folder and update the components:

### Hero Section Image
In `components/Hero.tsx`, replace the placeholder div with:
```tsx
<img 
  src="/your-hero-image.jpg" 
  alt="Sanika Talavdekar"
  className="w-full h-full object-cover"
/>
```

### About Section Images
In `components/About.tsx`, update the interest cards:
```tsx
<img 
  src="/travel-image.jpg" 
  alt="Travel"
  className="w-full h-full object-cover"
/>
```

### Project Images
In `components/Projects.tsx`, update the projects array with image paths:
```tsx
const projects = [
  {
    title: "Yonder Wonder LLC",
    description: "...",
    imagePath: "/project-yonder.jpg",
    imageAlt: "Yonder Wonder Project",
    link: "#",
  },
  // ...
];
```

Then update `ProjectCard.tsx` to use the image:
```tsx
<img 
  src={imagePath} 
  alt={imageAlt}
  className="w-full h-full object-cover"
/>
```

## 📱 Mobile Responsive Features

- ✅ Responsive navigation with mobile hamburger menu
- ✅ Fluid typography that scales with screen size
- ✅ Flexible grid layouts (1 column mobile, 2 columns desktop)
- ✅ Touch-friendly buttons and spacing
- ✅ Optimized for all screen sizes (mobile, tablet, desktop)

## 🎨 Customization

### Colors
Update Tailwind colors in components or add custom colors to `tailwind.config.ts`.

### Fonts
The project uses Geist Sans and Geist Mono fonts. You can change fonts in `app/layout.tsx`.

### Content
- Update text content directly in each component
- Update metadata in `app/layout.tsx`
- Update contact email in `components/Contact.tsx`

## 📦 Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## 📝 Next Steps

1. Add your images to the `public/` folder
2. Update image paths in components
3. Update contact email in Contact component
4. Add your resume PDF to `public/resume.pdf`
5. Update project links when case studies are ready
6. Consider adding social media links to Footer

## 🌐 Deployment

Deploy easily on [Vercel](https://vercel.com):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and connect your repository to Vercel for automatic deployments.

---

Built with ❤️ using Next.js
