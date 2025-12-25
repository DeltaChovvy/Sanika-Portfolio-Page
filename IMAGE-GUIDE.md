# 📸 Image Placement Guide

## Images You'll Need to Add

Place all images in the `public/` folder, then follow these instructions:

### 1. Hero Section (Main Portrait)
- **File**: `hero-image.jpg` or `hero-image.png`
- **Recommended size**: 800x800px (square)
- **Location**: `components/Hero.tsx` line 37-41

Replace:
```tsx
<div className="w-full h-full flex items-center justify-center text-gray-400">
  <span className="text-sm">Hero Image Placeholder</span>
</div>
```

With:
```tsx
<img 
  src="/hero-image.jpg" 
  alt="Sanika Stalavdekar"
  className="w-full h-full object-cover"
/>
```

---

### 2. About Section - Travel Image
- **File**: `travel.jpg`
- **Recommended size**: 800x600px (4:3 ratio)
- **Location**: `components/About.tsx` line 31-35

Replace:
```tsx
<div className="w-full h-full flex items-center justify-center text-6xl">
  {interest.icon}
</div>
```

With:
```tsx
<img 
  src="/travel.jpg" 
  alt="Travel"
  className="w-full h-full object-cover"
/>
```

---

### 3. About Section - Painting Image
- **File**: `painting.jpg`
- **Recommended size**: 800x600px (4:3 ratio)
- **Location**: Same as above, but for the second card

Replace with:
```tsx
<img 
  src="/painting.jpg" 
  alt="Oil Painting"
  className="w-full h-full object-cover"
/>
```

---

### 4. Project 1 - Yonder Wonder
- **File**: `project-yonder.jpg`
- **Recommended size**: 1200x675px (16:9 ratio)
- **Location**: `components/ProjectCard.tsx` line 10-14

Update the ProjectCard component to accept an `imagePath` prop, then replace:
```tsx
<div className="w-full h-full flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-300">
  <span className="text-sm">{imageAlt}</span>
</div>
```

With:
```tsx
<img 
  src="/project-yonder.jpg" 
  alt={imageAlt}
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
/>
```

---

### 5. Project 2 - Academic Outreach
- **File**: `project-academic.jpg`
- **Recommended size**: 1200x675px (16:9 ratio)
- **Location**: Same as above

Use:
```tsx
<img 
  src="/project-academic.jpg" 
  alt={imageAlt}
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
/>
```

---

## Quick Copy-Paste Image Names

For easy reference, name your images exactly as shown:
- `hero-image.jpg` (or .png)
- `travel.jpg`
- `painting.jpg`
- `project-yonder.jpg`
- `project-academic.jpg`

Drop them all in the `public/` folder and update the components as shown above!

---

## Optional: Resume PDF
- Place your resume as `public/resume.pdf`
- The "View Resume" button in the Contact section will automatically link to it

