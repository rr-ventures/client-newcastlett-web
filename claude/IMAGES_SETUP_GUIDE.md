# Images Setup Guide

## 📸 You've Uploaded 3 Great Images!

### What You Need to Do

The website is **already configured** to use your images. You just need to save them to the correct location with the correct filenames.

## Step-by-Step Instructions

### 1. Save Your Hero Image (First Image)
**The indoor table tennis hall photo**

- **Save as:** `hero-image.jpg`
- **Location:** `/workspaces/client-newcastlett-web/claude/images/hero-image.jpg`
- **Used on:** Homepage hero section (top banner)
- **Why it's perfect:** Shows the actual venue, creates immediate connection

### 2. Save Your Logo (Second Image)  
**The circular Newcastle Table Tennis logo**

- **Save as:** `logo.png` (or `logo.svg` if you have vector version)
- **Location:** `/workspaces/client-newcastlett-web/claude/images/logo.png`
- **Used on:** Header on every page (replaces the 🏓 emoji)
- **Why it's perfect:** Professional branding, includes Newcastle skyline

### 3. Save Your Group Photo (Third Image)
**The team photo with medals**

- **Save as:** `group-photo.jpg`
- **Location:** `/workspaces/client-newcastlett-web/claude/images/group-photo.jpg`
- **Used on:** Homepage "Social Proof" section
- **Why it's perfect:** Shows real people, community feel, success (medals!)

### 4. Create an OG Image (For Social Media)
**What is an OG Image?**

When someone shares your website on Facebook, Twitter, or LinkedIn, the **OG (Open Graph) image** is the preview image that appears. It needs to be **1200x630 pixels**.

**How to create it:**

**Option A - Use Hero Image (Recommended)**
1. Open your hero image in an image editor
2. Crop/resize to 1200x630px (landscape)
3. Ensure the table tennis action is visible
4. Save as `og-image.jpg`

**Option B - Use Group Photo**
1. Resize your group photo to 1200x630px
2. Add text overlay: "Newcastle Table Tennis Club"
3. Add text: "First Session Free"
4. Save as `og-image.jpg`

**Option C - Create Custom Graphic**
1. Use Canva (free) with 1200x630px template
2. Add your logo
3. Add text: "Table Tennis in Newcastle | First Session Free"
4. Export as `og-image.jpg`

- **Save as:** `og-image.jpg`
- **Location:** `/workspaces/client-newcastlett-web/claude/images/og-image.jpg`
- **Used on:** Social media shares (Facebook, Twitter, LinkedIn)

## Quick Command to Save Images

If you're working in the terminal:

```bash
cd /workspaces/client-newcastlett-web/claude/images

# If images are in your downloads or current directory:
cp /path/to/your/hero-photo.jpg hero-image.jpg
cp /path/to/your/logo.png logo.png
cp /path/to/your/group-photo.jpg group-photo.jpg
cp /path/to/your/og-image.jpg og-image.jpg
```

## ✅ What's Already Done

The website code has been updated to use these images:

1. ✅ **Hero section** configured to use `hero-image.jpg` as background
2. ✅ **Logo** in header will display `logo.png`
3. ✅ **Group photo** will show in social proof section
4. ✅ **OG image** configured in meta tags for social sharing
5. ✅ **Preload directive** added for hero image (prevents layout shift)
6. ✅ **Alt text** written for accessibility
7. ✅ **Lazy loading** enabled for performance
8. ✅ **CSS styling** applied for proper display

## After Saving Images

Once you save the images to the `/claude/images/` folder, the website will automatically:

- Display the hero image as a full-width background on homepage
- Show your logo in the header (replacing the 🏓 emoji)
- Display the group photo in the "Since 1996" section
- Use the OG image when people share your site on social media

## Testing

After saving images, open `index.html` in a browser to verify:

1. ✅ Hero section shows table tennis hall photo
2. ✅ Logo appears in top-left header
3. ✅ Group photo visible in social proof section
4. ✅ No broken image icons

## Image Optimization (Optional but Recommended)

For best performance, compress images before uploading:

### Tools:
- **TinyJPG.com** - Free online compression
- **Squoosh.app** - Google's image optimizer
- **ImageOptim** (Mac) or **FileOptimizer** (Windows)

### Targets:
- Hero image: < 200KB
- Logo: < 50KB (or use SVG for perfect scaling)
- Group photo: < 100KB
- OG image: < 100KB

## Need Help?

The images you've uploaded are perfect! They show:
- ✅ The actual venue (builds trust)
- ✅ Real people playing (social proof)
- ✅ Professional branding (Newcastle skyline logo)
- ✅ Success and community (medals, group photo)

Just save them with the correct filenames and the site will look amazing! 🎉
