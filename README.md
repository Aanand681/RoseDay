# 🌹 Beautiful Rose Day Website

A stunning, modern Rose Day website with premium design, smooth animations, and full mobile responsiveness.

## ✨ Features

- **Premium Design**: Modern glassmorphism effects, gradient backgrounds, and elegant typography
- **Interactive Proposal**: Fun "Yes/No" button game with beautiful celebration
- **Celebration Effect**: Stunning fullscreen overlay with floating hearts and custom sound
- **Timeline**: Beautiful love story timeline with animated elements
- **Photo Gallery**: Responsive grid layout with lightbox viewer
- **Mobile Optimized**: Perfect viewing experience on all devices
- **Touch Gestures**: Swipe support for mobile lightbox navigation
- **Base64 Support**: Embed images directly in HTML (optional)
- **Smooth Animations**: Rose petal effects, scroll animations, and transitions
- **Custom Sound**: Play your own celebration sound effect
- **Separated Code**: Clean HTML, CSS, and JavaScript in separate files

## 📁 File Structure

```
RoseDay/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles and responsive design
├── js/
│   ├── script.js          # Main JavaScript functionality
│   └── convertImagesToBase64.js  # Image converter utility
├── images/                # Your photos go here
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── ...
├── sound/                 # Sound effects
│   └── sound1.m4a        # Celebration sound
├── README.md
├── DEPLOYMENT.md
└── .gitignore
```

## 🚀 Quick Start

### Option 1: Using Image Files (Recommended)

1. **Add Your Photos**
   ```bash
   # Place your photos in the images folder
   images/photo1.jpg
   images/photo2.jpg
   images/photo3.jpg
   # etc...
   ```

2. **Update Captions**
   - Open `js/script.js`
   - Find the `photos` array
   - Update captions and dates for each photo

3. **Customize Timeline**
   - In `js/script.js`, find the `timelineData` array
   - Update dates, titles, and descriptions

4. **Open in Browser**
   - Double-click `index.html` or
   - Use a local server: `npx serve`

### Option 2: Using Base64 Encoded Images

1. **Add Photos to Images Folder**
   ```bash
   # Place photos in images/
   ```

2. **Convert to Base64**
   ```bash
   cd js
   node convertImagesToBase64.js
   ```

3. **Copy Base64 Code**
   - Open `js/base64_images.txt`
   - Copy the photos array
   - Replace the photos array in `js/script.js`

4. **Update Captions**
   - Edit the captions in the new photos array

## 🎨 Customization

### Change Colors

Edit `css/style.css` and modify the CSS variables:

```css
:root {
    --rose-primary: #ff1744;
    --rose-secondary: #f50057;
    --gold-accent: #ffd700;
    /* Add your custom colors */
}
```

### Change Fonts

The website uses:
- **Playfair Display** (headings) - Change in `:root` → `--font-heading`
- **Poppins** (body text) - Change in `:root` → `--font-body`

### Add More Photos

In `js/script.js`:

```javascript
const photos = [
    // Add more photo objects
    {
        src: 'images/photo7.jpg',
        caption: 'Your caption here',
        date: 'Day 7'
    }
];
```

### Customize Timeline

In `js/script.js`:

```javascript
const timelineData = [
    {
        date: 'Your Date',
        title: 'Your Title',
        description: 'Your story'
    }
];
```

### Edit Love Message

Open `index.html` and find the `.message-section`. Update the text in the `.message-text` paragraph.

### Change Celebration Sound

1. **Replace the sound file**
   - Add your audio file to the `sound/` folder
   - Rename it to `sound1.m4a` (or update the path in `script.js`)

2. **Update the path** (if using different filename)
   - Open `js/script.js`
   - Find the `playJoySound()` function
   - Update: `const audio = new Audio('sound/your-file.m4a');`

3. **Adjust volume** (optional)
   - In `playJoySound()`, change: `audio.volume = 0.7;` (0.0 to 1.0)

## 📱 Mobile Responsive Breakpoints

- **Desktop**: > 1024px (full layout)
- **Tablet**: 768px - 1024px (adjusted spacing)
- **Large Phones**: 480px - 768px (single column timeline)
- **Small Phones**: < 480px (compact design)
- **Landscape**: Special handling for mobile landscape

## 🎯 Features Breakdown

### Hero Section
- Animated rose icon
- Gradient background
- Shimmer text effect
- Scroll indicator

### Timeline
- Vertical timeline with dots
- Glassmorphism cards
- Responsive layout
- Pulse animations

### Photo Gallery
- Responsive grid
- Hover effects
- Lightbox viewer
- Swipe navigation (mobile)
- Keyboard controls

### Proposal Section
- Interactive "Yes/No" button game
- Escaping "No" button on hover
- Beautiful celebration on "Yes" click

### Celebration Effect
- Fullscreen rose gradient overlay
- Bouncing flower emoji (💐)
- Animated title and subtitle
- Floating hearts from bottom to top
- Custom celebration sound
- Auto-closes after 5 seconds

### Animations
- Falling rose petals background
- Fade-in effects
- Scroll animations
- Heartbeat effect
- Hover transitions

## 🌐 Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions for:
- GitHub Pages
- Netlify
- Vercel
- Other platforms

## 💡 Tips

### Performance
- Optimize images before uploading (use tools like TinyPNG)
- Keep images under 500KB each
- Use WebP format for better compression
- Base64 is convenient but increases file size

### Best Practices
- Use high-quality photos (at least 800x800px)
- Write personal, meaningful captions
- Test on multiple devices
- Check all images load properly

### Testing
```bash
# Use a local server for testing
npx serve

# Or use Python
python -m http.server 8000

# Then open http://localhost:8000
```

## 🔧 Troubleshooting

**Images not showing?**
- Check file paths match exactly
- Ensure images are in the `images/` folder
- Check file extensions (.jpg, .png, etc.)

**Base64 converter not working?**
- Make sure Node.js is installed
- Run from the `js/` folder
- Check images folder exists

**Layout broken on mobile?**
- Clear browser cache
- Check viewport meta tag
- Test in private/incognito mode

## 📦 Dependencies

This website uses minimal dependencies:
- Google Fonts (Playfair Display, Poppins)
- No JavaScript libraries required
- Pure vanilla JavaScript

All external resources load from CDN with fallbacks.

## ❤️ Made With

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Love and dedication

## 📄 License

Free to use for personal projects. Customize and make it your own!

---

**Happy Rose Day! 🌹💖**
