# Images Directory

## Uploaded Images

You've uploaded three excellent images that need to be saved to this directory:

### 1. **hero-image.jpg** (First uploaded image)
- **Purpose:** Main hero section background on homepage
- **Current:** Indoor table tennis hall with players in action
- **Specs:** Recommended 1920x1080px minimum
- **Alt text:** "Table tennis players at PCYC Broadmeadow Newcastle"
- **File location:** `/claude/images/hero-image.jpg`

### 2. **logo.svg or logo.png** (Second uploaded image)
- **Purpose:** Site logo to replace the 🏓 emoji in header
- **Current:** Circular logo with Newcastle cityscape and "Table Tennis" text
- **Specs:** Works at 40x40px minimum, vector (SVG) preferred
- **File location:** `/claude/images/logo.svg` (or logo.png)
- **Usage:** In header, footer, and schema markup

### 3. **group-photo.jpg** (Third uploaded image)
- **Purpose:** Social proof section showing club members
- **Current:** Group photo with medals at competition
- **Specs:** 600x400px works well
- **Alt text:** "Newcastle Table Tennis Club members at competition"
- **File location:** `/claude/images/group-photo.jpg`

## Additional Image Needed

### 4. **og-image.jpg** (Open Graph Image)
- **Purpose:** Social media preview image (Facebook, Twitter, LinkedIn)
- **When needed:** When someone shares your website link on social media
- **Specs:** **1200x630px** (Facebook/Twitter standard)
- **Recommendation:** You can use:
  - Option A: Crop/resize the hero image to 1200x630px
  - Option B: Create a custom graphic with logo + "First Session Free" text
  - Option C: Use the group photo resized to 1200x630px
- **File location:** `/claude/images/og-image.jpg`

## How to Add Images

### Option 1: Manual Upload
1. Save each uploaded image with the correct filename
2. Upload to `/workspaces/client-newcastlett-web/claude/images/`
3. The website will automatically use them

### Option 2: Using the images you've already uploaded
The three images you uploaded need to be saved as:
- First image → `hero-image.jpg`
- Second image → `logo.png` or `logo.svg`
- Third image → `group-photo.jpg`

## Image Optimization Tips

For best performance, optimize images before upload:

1. **Compress JPGs:** Use tools like TinyJPG or Squoosh (target: <200KB for hero)
2. **Use WebP format:** Modern browsers support it (smaller file size)
3. **Keep logo as SVG:** Vector format scales perfectly at any size
4. **Lazy loading:** Already implemented in the code
5. **Responsive images:** Consider multiple sizes for different devices

## Current Status

✅ Directory created: `/claude/images/`
📸 Hero image: **Ready to upload** (you've provided this)
🎨 Logo: **Ready to upload** (you've provided this)  
👥 Group photo: **Ready to upload** (you've provided this)
📱 OG image: **Needs creation** (crop hero or group photo to 1200x630px)

## Next Steps

1. Save the three uploaded images to this directory with correct filenames
2. Create an OG image (1200x630px) from one of the photos
3. The website will automatically use them (paths are already configured)
4. Test the site to ensure images load correctly
