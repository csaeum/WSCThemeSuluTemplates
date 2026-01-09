# WSC CTA Block - Documentation

## Overview

The **WSC CTA Block** (Call-to-Action) is a universal, extremely flexible block for Sulu CMS that combines **7 different CTA types** in a single block. From simple text links through buttons and button groups to complex hero banners - this block is your "Swiss Army Knife" for all link and CTA requirements.

## The 7 CTA Types

### 1. 🔗 Text Link
Simple text link with optional icon and badge.
```
Ideal for: Inline links, "Learn more →", footer links
```

### 2. 🎯 Button
Bootstrap button with extensive styling options.
```
Ideal for: Primary actions, downloads, forms
```

### 3. 🎯🎯 Button Group
Multiple buttons side by side (e.g., Primary + Secondary action).
```
Ideal for: "Buy now" + "Learn more", multiple CTAs
```

### 4. 🖼️ Image Link
Fully clickable image with optional badge.
```
Ideal for: Promo banners, product images, teaser images
```

### 5. 🖼️➕🎯 Image + Button
Image with title, description, and button below.
```
Ideal for: Product teasers, feature highlights
```

### 6. 🃏 Card with CTA
Complete Bootstrap card with image, title, text, and button.
```
Ideal for: Product cards, service cards, team member cards
```

### 7. 🦸 Hero / Banner
Large banner with background image, overlay, title, text, and button.
```
Ideal for: Landing pages, header areas, campaigns
```

## Features

### 📝 Content
- **Title** (optional) - For card, hero, image+button
- **Description** (text_area, optional) - Multi-line text
- **Image** (media, optional) - For all types except text link/button
- **Link URL** (mandatory) - Where the link leads
- **Link Text / Button Text** (mandatory) - The displayed text
- **Open in New Window** (checkbox) - target="_blank"

### 🎨 Icon & Badge
- **Icon** (FontAwesome) - e.g., fa-download, fa-arrow-right
- **Icon Position** - Before or after text
- **Badge Text** - e.g., "NEW", "SALE", "HOT"
- **Badge Color** - 7 Bootstrap colors

### 🎯 Button Styling
**For types: Button and Image+Button**
- **Button Color**: 12 options
  - 8 Solid: Primary, Secondary, Success, Danger, Warning, Info, Dark, Light
  - 4 Outline: Outline-Primary, Outline-Secondary, Outline-Success, Outline-Danger
- **Button Size**: Small, Normal, Large
- **Full Width**: Block button (100% width)
- **Button CSS Class**: Individual class only for the button

### 👥 Button Group
**For type: Button Group**
- Repeater for multiple buttons
- Per button:
  - Text, URL, target
  - Color (10 options + outline)
  - Size
  - Icon
  - CSS class

### 🎨 Layout
- **Image Position**: Top, Left, Right, Background
- **Text Alignment**: Left, Center, Right
- **Container Width**: Auto, Container, Container-Fluid, Full-Width

### 🃏 Card Styling
**For type: Card**
- **Card Style**: Border, Shadow, Shadow-SM, None
- **Card Background**: Default, Primary, Secondary, Light, Dark

### 🦸 Hero Styling
**For type: Hero/Banner**
- **Minimum Height**: 300px, 400px, 500px, 600px, 100vh (full viewport height)
- **Overlay**: None, Dark, Light, Primary color
- **Overlay Opacity**: 20% - 80%
- **Text Color**: White, Dark, Primary

### 📏 Spacing & Advanced
- **Margin & Padding**: All 4 sides individually (0-5, Auto)
- **CSS Class**: For the entire block
- **HTML ID**: For anchor links
- **Button CSS Class**: Separately only for the button

## Installation

### 1. Files

```
config/templates/blocks/
└── wsc-cta.xml                     # Block configuration

templates/wsc/blocks/
└── wsc-cta.html.twig               # Template

assets/css/
└── wsc-cta.css                     # Styling & animations
```

### 2. Include Assets

```twig
{# In your base.html.twig or layout template #}

{# CSS in <head> #}
<link rel="stylesheet" href="{{ asset('assets/css/wsc-cta.css') }}">
```

### 3. Clear Cache

```bash
bin/console cache:clear
```

The block should now be available in the Sulu backend under "Call-to-Action / Link / Button".

## Usage

### Adding the Block

1. Open a page in the Sulu backend
2. Click "Add Block"
3. Select "Call-to-Action / Link / Button"
4. **Important:** First choose the **CTA type**!
5. Fill in the relevant fields depending on the type

### Choosing CTA Type

The CTA type determines how the block is rendered. Choose the appropriate type for your use case:

| Type | When to use? |
|------|--------------|
| Text Link | Simple links in body text, footer links |
| Button | Standard call-to-actions, downloads, forms |
| Button Group | Multiple actions (Primary + Secondary) |
| Image Link | Clickable banners, promo images |
| Image + Button | Product teasers, feature highlights |
| Card with CTA | Structured content with CTA |
| Hero / Banner | Large header areas, landing pages |

## Detailed Examples

### Example 1: Text Link with Icon and Badge

**Configuration:**
```
CTA Type: Text Link
Link Text: "Learn more"
Link URL: /info
Icon: fa-arrow-right
Icon Position: After text
Badge Text: "NEW"
Badge Color: Danger (Red)
```

**Result:**
```
Learn more → [NEW]
```

**Usage:** In body text, footer, sidebar

---

### Example 2: Primary Button with Icon

**Configuration:**
```
CTA Type: Button
Link Text: "Download now"
Link URL: /download.pdf
Icon: fa-download
Icon Position: Before text
Button Color: Primary
Button Size: Large
New Window: Yes
```

**Result:**
```
[⬇ Download now] (large blue button)
```

**Usage:** Downloads, important actions

---

### Example 3: Button Group (Primary + Secondary)

**Configuration:**
```
CTA Type: Button Group

Button 1:
  Text: "Buy now"
  URL: /checkout
  Color: Primary
  Size: Normal
  Icon: fa-shopping-cart

Button 2:
  Text: "More info"
  URL: /product-details
  Color: Outline-Secondary
  Size: Normal
```

**Result:**
```
[🛒 Buy now] [More info]
```

**Usage:** E-commerce, landing pages with multiple actions

---

### Example 4: Image Link with Badge

**Configuration:**
```
CTA Type: Image Link
Image: promo-banner.jpg
Link URL: /sale
Badge Text: "SALE"
Badge Color: Danger
```

**Result:**
```
[Clickable image with "SALE" badge in top right]
```

**Usage:** Promo banners, campaigns, teasers

---

### Example 5: Product Card

**Configuration:**
```
CTA Type: Card with CTA
Title: "Premium Package"
Description: "All features included\n100 GB storage\n24/7 support"
Image: product-premium.jpg
Image Position: Top
Link Text: "Order now"
Link URL: /checkout?plan=premium
Button Color: Success
Card Style: Shadow
Badge Text: "BESTSELLER"
Badge Color: Warning
```

**Result:**
```
┌──────────────────┐
│  [Product image] │
├──────────────────┤
│ [BESTSELLER]     │
│ Premium Package  │
│                  │
│ All features...  │
│                  │
│ [Order now]      │
└──────────────────┘
```

**Usage:** Pricing tables, product overviews, service cards

---

### Example 6: Hero Banner for Landing Page

**Configuration:**
```
CTA Type: Hero / Banner
Title: "Welcome to our service"
Description: "The best solution for your business. Start today!"
Image: hero-background.jpg
Link Text: "Try for free"
Link URL: /signup
Button Color: Primary
Button Size: Large
Icon: fa-rocket
Icon Position: Before text

Hero Settings:
  Minimum Height: 500px
  Overlay: Dark
  Overlay Opacity: 50%
  Text Color: White
  Text Alignment: Center
```

**Result:**
```
╔════════════════════════════════════╗
║   [Background image with overlay]  ║
║                                    ║
║  Welcome to our service            ║
║  The best solution for your        ║
║  business. Start today!            ║
║                                    ║
║   [🚀 Try for free]                ║
║                                    ║
╚════════════════════════════════════╝
```

**Usage:** Landing page headers, campaigns, website homepage

---

### Example 7: Image + Button Teaser

**Configuration:**
```
CTA Type: Image + Button
Title: "New Collection 2024"
Description: "Discover the latest trends of the season"
Image: collection-2024.jpg
Link Text: "View collection"
Link URL: /collection/2024
Button Color: Dark
Icon: fa-arrow-right
Icon Position: After text
Text Alignment: Center
```

**Result:**
```
      [Collection image]

   New Collection 2024

   Discover the latest
   trends of the season

   [View collection →]
```

**Usage:** Blog teasers, product highlights, content teasers

## Icon Usage

### Available Icon Library
The block supports **FontAwesome Icons**. Make sure FontAwesome is included in your project.

### Icon Examples

**Commonly used icons:**
```
fa-arrow-right      → Arrow right (for "Learn more")
fa-download         ↓ Download
fa-shopping-cart    🛒 Shopping cart
fa-rocket           🚀 Start / Launch
fa-check            ✓ Confirmation
fa-heart            ♥ Favorite / Like
fa-star             ★ Rating
fa-envelope         ✉ Email / Contact
fa-phone            ☎ Phone
fa-play             ▶ Play video
fa-external-link    ↗ External link
```

### Icon Position

**Before text:**
```
[Icon] Text
⬇ Download now
```

**After text:**
```
Text [Icon]
Learn more →
```

## Badge Usage

### When to Use Badges?

Badges are perfect for:
- ✅ New markings ("NEW")
- ✅ Sales & discounts ("SALE", "-20%")
- ✅ Highlights ("HOT", "BESTSELLER")
- ✅ Status ("BETA", "COMING SOON")
- ✅ Urgency ("LIMITED", "LAST CHANCE")

### Badge Colors and Meaning

| Color | Usage | Example |
|-------|-------|---------|
| Primary (Blue) | Neutral, info | "INFO" |
| Secondary (Gray) | Subtle | "UPDATED" |
| Success (Green) | Positive, available | "AVAILABLE" |
| Danger (Red) | Urgent, sale | "SALE", "NEW" |
| Warning (Yellow) | Warning, limited | "LIMITED" |
| Info (Cyan) | Information | "TIP" |
| Dark (Dark) | Premium, exclusive | "PREMIUM" |

### Badge Animation

Badges have a subtle **pulse animation** by default, which stops on hover. This draws attention to the CTA.

## Button Group Best Practices

### Recommended Combinations

**1. Primary + Secondary:**
```
Button 1: "Buy now" (btn-primary)
Button 2: "Learn more" (btn-outline-secondary)
```
→ Clear hierarchy: Primary action + Alternative

**2. Action + Cancel:**
```
Button 1: "Save" (btn-success)
Button 2: "Cancel" (btn-outline-secondary)
```
→ For forms and dialogs

**3. Multiple equal actions:**
```
Button 1: "Option A" (btn-outline-primary)
Button 2: "Option B" (btn-outline-primary)
Button 3: "Option C" (btn-outline-primary)
```
→ When no action should be preferred

### Responsive Behavior

On **mobile** (< 576px), buttons automatically stack vertically:
```
Desktop:  [Button 1] [Button 2] [Button 3]
Mobile:   [Button 1]
          [Button 2]
          [Button 3]
```

## CSS Customizations & Special Effects

### Default Animations (always active)

All animations are already built-in:
- ✅ Smooth hover effects
- ✅ Button: Lift + shadow
- ✅ Card: Image zoom on hover
- ✅ Hero: FadeInUp animation
- ✅ Badge: Pulse animation
- ✅ Icon: Individual movements (arrows, downloads)

### Optional Special Effects

Activate these via **CSS Class** in the block or button:

#### 1. Ripple Effect
```
Button CSS Class: btn-ripple
```
**Effect:** Ripple wave on click (like Material Design)

#### 2. Glassmorphism
```
CSS Class: glass-effect
```
**Effect:** Transparent blur effect (modern, elegant)

#### 3. Gradient Button
```
Button CSS Class: btn-gradient
```
**Effect:** Color gradient with shine animation on hover

#### 4. Neon Button
```
Button CSS Class: btn-neon
```
**Effect:** Neon glow effect (futuristic, gaming style)

#### 5. 3D Button
```
Button CSS Class: btn-3d
```
**Effect:** 3D shadow, button presses in on click

#### 6. Arrow Animation
```
CSS Class: cta-arrow
```
**Effect:** Arrow moves to the right on hover

### Combined Effects

You can combine multiple effects:
```
Button CSS Class: btn-gradient btn-ripple btn-3d
```

### Custom Styling

Override your own CSS variables:
```css
/* In your custom CSS */
.wsc-cta-wrapper.my-custom-cta .btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
}
```

## Best Practices

### ✅ Recommendations

**1. Respect CTA hierarchy**
- One primary CTA per page/section
- Secondary CTAs more subtle (outline buttons)
- Not too many CTAs at once (max. 2-3)

**2. Clear button texts**
- ✅ "Buy now" instead of "Click here"
- ✅ "Try for free" instead of "More"
- ✅ "Start download" instead of "Download"
- Use action verbs

**3. Use icons strategically**
- Support the meaning (download icon for downloads)
- Don't overdo it (not an icon on every link)
- Maintain consistency (always same icons for same actions)

**4. Use badges sparingly**
- Only for really important highlights
- Too many badges = no more attention
- Time-limited badges ("SALE", "NEW") remove regularly

**5. Test responsive**
- Check hero banners on mobile (height, readability)
- Test button groups on small screens
- Consider text lengths on mobile

**6. Accessibility**
- Descriptive link texts (no "Click here")
- Pay attention to contrasts (especially hero with overlay)
- Use external links with target="_blank"

### ❌ Avoid

1. **Too many CTAs**
   - Not 5 buttons on one page
   - Confuses users, reduces conversion

2. **Unclear button texts**
   - ❌ "Click me"
   - ❌ "Here"
   - ❌ "More"

3. **Badge inflation**
   - Not every button needs a "NEW" badge
   - Badges lose effect if everywhere

4. **Too many animations**
   - Not all special effects at once
   - Can be distracting

5. **Ignoring contrasts**
   - Hero with light overlay + light text = unreadable
   - Button with too little contrast

## Common Use Cases

### E-Commerce

**Product page:**
```
- Button: "Add to cart" (Primary, with fa-shopping-cart)
- Button: "Add to wishlist" (Outline-Secondary, with fa-heart)
```

**Category overview:**
```
- Card with CTA for each product
- Badge "SALE" for discounts
- Badge "NEW" for new products
```

### Landing Page

**Hero area:**
```
- Hero with large background
- Title + short text
- Primary button: "Get started"
```

**Feature section:**
```
- 3x Card with CTA
- Each card explains a feature
- Button: "Learn more"
```

### Corporate Website

**Header:**
```
- Button group:
  - "Contact us" (Primary)
  - "References" (Outline-Secondary)
```

**Content areas:**
```
- Text links for "Read more →"
- Image + Button for product teasers
```

### Blog

**Article teaser:**
```
- Image + Button
- Title + excerpt
- Button: "Continue reading →"
```

**Call-to-Subscribe:**
```
- Card with CTA
- Title: "Subscribe to newsletter"
- Button: "Sign up now"
- Badge: "Free" (Success)
```

## Troubleshooting

### Button not displaying
- Cache cleared? `bin/console cache:clear`
- Link URL filled in?
- Link text filled in?
- CTA type correctly chosen?

### Icon not appearing
- FontAwesome included?
- Icon name correct? (with `fa-` prefix)
- Browser cache cleared?

### Badge not showing
- Badge text filled in?
- Only available for compatible CTA types

### Hero image not displaying
- Image uploaded and selected?
- Image URL correct?
- Browser cache cleared?
- Image position set to "Background"?

### Button group not stacking on mobile
- CSS file included?
- Browser cache cleared?
- Check responsive breakpoint (< 576px)

### Animations not working
- CSS file included?
- CSS included after Bootstrap?
- Browser supports animations?

### Special effects (Gradient, Neon, etc.) not working
- CSS class spelled correctly?
- CSS file included?
- Check browser compatibility

## Browser Compatibility

### Supported Browsers
- Chrome/Edge (88+)
- Firefox (78+)
- Safari (14+)
- Opera (75+)

### CSS Effects
- **Glassmorphism** (backdrop-filter): Safari 14+, Chrome 76+
- **Gradient**: All modern browsers
- **Animations**: All modern browsers

### Fallback
If browsers don't support certain effects, the block still works - just without the special effect.

## Performance

### Optimizations
- ✅ Pure CSS animations (GPU-accelerated)
- ✅ No JavaScript required
- ✅ Lazy loading for images (via browser)
- ✅ Responsive images supported

### Best Practices
- Optimize images (WebP, compressed)
- Hero images: Max. 1920px width
- Don't combine too many special effects

## Changelog

### Version 1.0.0 (2024)
- ✨ Initial Release
- ✅ 7 CTA types (Text Link, Button, Button Group, Image Link, Image+Button, Card, Hero)
- ✅ Icon support (FontAwesome)
- ✅ Badge feature with 7 colors
- ✅ Button group with repeater
- ✅ 12 button colors (8 solid + 4 outline)
- ✅ Hero with overlay and height options
- ✅ Card with 3 image positions
- ✅ 6 optional special effects (Ripple, Glass, Gradient, Neon, 3D, Arrow)
- ✅ Margin/padding control
- ✅ CSS classes at block and button level
- ✅ Responsive design
- ✅ Accessibility features
- ✅ Print styles

## Credits

Developed for Sulu CMS with Bootstrap 5 and FontAwesome Icons.

**Technology Stack:**
- Sulu CMS
- Bootstrap 5
- FontAwesome Icons
- Twig Templating
- CSS3 Animations

## License

This project is part of the WSC Theme Sulu Templates.

---

**Questions or Issues?** Create an issue in the repository or contact support.
