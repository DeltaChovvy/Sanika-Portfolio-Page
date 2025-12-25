# 🚀 Quick Start Guide

## Step 1: Start the Development Server

Open your terminal in the `sanika-portfolio` folder and run:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Step 2: Add Your Images

1. Place all your images in the `public/` folder
2. Follow the `IMAGE-GUIDE.md` for detailed instructions on updating each component

### Quick Image List:
- `hero-image.jpg` - Your main portrait
- `travel.jpg` - Travel interest image
- `painting.jpg` - Oil painting interest image  
- `project-yonder.jpg` - Yonder Wonder project screenshot
- `project-academic.jpg` - Academic Outreach project screenshot
- `resume.pdf` - Your resume (optional)

## Step 3: Customize Content

### Update Contact Email
In `components/Contact.tsx`, replace:
```tsx
href="mailto:contact@example.com"
```
With your actual email.

### Update Project Links
In `components/Projects.tsx`, replace the `#` links with actual case study URLs when ready.

### Update Social Links (Optional)
Add social media links to the Footer component if desired.

## 📱 Test Mobile Responsiveness

1. Open the site in your browser
2. Press `F12` to open Developer Tools
3. Click the device toolbar icon (or `Ctrl+Shift+M`)
4. Test different screen sizes:
   - Mobile: 375px, 414px
   - Tablet: 768px, 1024px
   - Desktop: 1440px, 1920px

## 🎨 Customization Tips

### Change Colors
The site uses Tailwind CSS. Common color classes used:
- `bg-gray-900` - Dark backgrounds
- `text-gray-700` - Body text
- `bg-gray-50` - Light section backgrounds

Replace `gray` with other Tailwind colors: `blue`, `purple`, `indigo`, etc.

### Adjust Spacing
- `py-20` - Vertical padding (sections)
- `px-4` - Horizontal padding
- `gap-8` - Grid gaps

Change the numbers (4, 8, 12, 16, 20) to adjust spacing.

### Font Sizes
- `text-xl` - Large text
- `text-2xl` - Heading text
- `text-5xl` - Large headings

Tailwind sizes: `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
npm run dev -- -p 3001
```

### Module Not Found
```bash
npm install
```

### Clear Cache
```bash
rm -rf .next
npm run dev
```

## 📦 Build for Production

When ready to deploy:
```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel (Free)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! Your site will be live with automatic SSL and global CDN.

---

**Need Help?** Check out:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

