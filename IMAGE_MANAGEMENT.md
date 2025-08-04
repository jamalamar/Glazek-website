# Image Management Guide - Glazek LLC Website

## Quick Image URL Updates

This website uses a smart image placeholder system that makes updating images simple and professional.

### How It Works
- All images have fallback placeholders with professional Glazek LLC branding
- If an image URL fails to load, visitors see a branded placeholder instead of broken images
- You can update image URLs without worrying about breaking the site

### Image Locations to Update

#### 1. Homepage Hero Background
**File**: `src/app/page.tsx`
**Line**: ~8
**Current**: Uses gradient background
**To Add**: Background image URL in the section className
```tsx
// Add background image like this:
className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white"
// Change to:
className="relative bg-gradient-to-r from-blue-600/80 to-blue-800/80 text-white bg-cover bg-center"
style={{backgroundImage: 'url("YOUR_IMAGE_URL_HERE")'}}
```

#### 2. About Page Team/Office Images
**File**: `src/app/about/page.tsx`
**Search for**: `ImagePlaceholder` components
**Update**: The `src` prop with your image URLs

#### 3. Project Portfolio Images
**File**: `src/app/projects/page.tsx`
**Search for**: `ImagePlaceholder` components
**Update**: Each project's `src` prop

#### 4. Services Page Process Images
**File**: `src/app/services/page.tsx`
**Add**: Process step images using ImagePlaceholder component

### Image Requirements

#### Recommended Dimensions:
- **Hero Background**: 1920x1080px (landscape)
- **Project Images**: 800x600px (4:3 ratio)
- **Team Photos**: 400x400px (square)
- **Process Images**: 600x400px (3:2 ratio)

#### File Formats:
- JPG for photos
- PNG for graphics with transparency
- WebP for best performance (if supported)

#### File Size:
- Keep under 500KB per image for fast loading
- Use compression tools like TinyPNG

### Easy Update Process

1. **Upload your images** to your preferred hosting (AWS S3, Cloudinary, etc.)
2. **Copy the full URL** of each image
3. **Find the ImagePlaceholder** component in the relevant file
4. **Replace the src prop**:
   ```tsx
   // Before:
   <ImagePlaceholder
     src="" // Empty or old URL
     alt="Project description"
     fallbackText="Featured Project"
   />
   
   // After:
   <ImagePlaceholder
     src="https://your-domain.com/images/project1.jpg"
     alt="Project description"
     fallbackText="Featured Project"
   />
   ```

### ImagePlaceholder Component Props

```tsx
<ImagePlaceholder
  src="YOUR_IMAGE_URL"           // Optional - leave empty to show placeholder
  alt="Description for accessibility"
  fallbackText="What shows in placeholder"
  aspectRatio="video"            // square, video, wide, tall
  className="additional-styles"   // Optional custom styles
/>
```

### Aspect Ratios Available:
- `square` - 1:1 ratio (perfect squares)
- `video` - 16:9 ratio (default, good for most images)
- `wide` - 3:1 ratio (very wide banners)
- `tall` - 3:4 ratio (portrait orientation)

### Professional Tips

1. **Test on mobile** - Always check how images look on phones
2. **Use descriptive alt text** - Important for accessibility and SEO
3. **Consistent quality** - Use similar lighting/style across all images
4. **Load speed matters** - Optimize file sizes before uploading

### Troubleshooting

**Image not showing?**
- Check the URL is publicly accessible
- Verify the image file exists
- Ensure no typos in the URL
- Check browser developer tools for error messages

**Placeholder shows instead of image?**
- This is normal if no src URL is provided
- Update the src prop with your image URL
- Professional placeholder ensures site always looks good

### Quick Reference

**Most Common Updates:**
1. Hero background: `src/app/page.tsx` - add background image style
2. Project photos: `src/app/projects/page.tsx` - update ImagePlaceholder src props
3. Team photos: `src/app/about/page.tsx` - update ImagePlaceholder src props

**Need Help?**
- All ImagePlaceholder components have branded fallbacks
- Site will never show "broken image" icons
- Safe to experiment with different URLs