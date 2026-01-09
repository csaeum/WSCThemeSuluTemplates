# WSC Timeline Block - Documentation

## Overview

The **WSC Timeline Block** is an animated timeline block for Sulu CMS that displays events and milestones in a visually appealing timeline. Unlike jQuery-based solutions, this block uses **modern Vanilla JavaScript** with the Intersection Observer API for better performance.

## Features

### 🎨 Flexible Display
- **Vertical Timeline**: Left, right, or alternating positioned
- **Horizontal Timeline**: Scrollable horizontal display
- **Auto-Responsive**: Horizontal on desktop, vertical on mobile devices

### ✨ Animations
- Smooth fadeIn animations on scroll
- Staggered animation of timeline items
- Optionally enable/disable
- Progressive enhancement (works without JavaScript)

### 🎯 Timeline Items
Each timeline item can contain the following elements:
- **Title** (required)
- **Date/Period** (e.g., "2024" or "January 2024")
- **Description** with HTML editor
- **Icon** (FontAwesome)
- **Image** (optional)
- **Badge/Label** (optional)
- **Icon Color** (8 Bootstrap colors)
- **Individual CSS Class**
- **Individual HTML ID**

### 🎨 Styling Options
- **Timeline Line Color**: 8 color variants (Primary, Secondary, Success, Danger, Warning, Info, Dark, Light)
- **Card Style**: With border, with shadow, small shadow, or none
- **Margin & Padding**: Complete control over all sides
- **Individual CSS Class** for the main block
- **Individual HTML ID** for the main block

### 🚀 Technology
- **Vanilla JavaScript** (no jQuery required)
- **Intersection Observer API** for performant scroll detection
- **CSS3 Animations** for smooth transitions
- **Bootstrap 5** compatible
- **Responsive Design**
- **Print-optimized**

## Installation

### 1. Files

The timeline block consists of the following files:

```
config/templates/blocks/
└── wsc-timeline.xml                # Block configuration

templates/wsc/blocks/
└── wsc-timeline.html.twig          # Template

assets/
├── css/
│   └── wsc-timeline.css            # Styling
└── js/
    └── wsc-timeline.js             # Animations
```

### 2. Include Assets

Include the CSS and JavaScript files in your main template:

```twig
{# In your base.html.twig or layout template #}

{# CSS in <head> #}
<link rel="stylesheet" href="{{ asset('assets/css/wsc-timeline.css') }}">

{# JavaScript before </body> #}
<script src="{{ asset('assets/js/wsc-timeline.js') }}"></script>
```

### 3. Clear Cache

After installation, clear the Sulu cache:

```bash
bin/console cache:clear
```

The block should now be available in the Sulu backend under "Timeline".

## Usage

### Adding the Block

1. Open a page in the Sulu backend
2. Click "Add Block"
3. Select "Timeline / Zeitstrahl"
4. Add and configure timeline items

### Creating Timeline Items

For each item, you can fill in the following fields:

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| Title | Text | Item heading | Yes |
| Date/Period | Text | e.g., "2024", "January 2024", "Q1 2024" | No |
| Badge/Label | Text | Small label/tag above the title | No |
| Icon | Text | FontAwesome icon, e.g., "fa-calendar" | No |
| Icon Color | Select | Bootstrap color for the icon | No |
| Description | HTML Editor | Detailed description | No |
| Image | Media | Optional image | No |
| CSS Class | Text | Individual CSS class for this item | No |
| HTML ID | Text | Individual HTML ID for this item | No |

## Configuration

### Layout Options

#### Orientation
- **Vertical**: Classic vertical timeline
- **Horizontal**: Horizontal, scrollable timeline
- **Auto**: Responsive - horizontal on desktop (≥992px), vertical on mobile

#### Position (vertical timeline only)
- **Left**: All items left of the timeline line
- **Right**: All items right of the timeline line
- **Alternate**: Items alternate left/right (from tablet size)

#### Display Options
- **Enable Scroll Animation**: FadeIn effect on scroll
- **Show Dates**: Show/hide date badges
- **Show Images**: Show/hide images in items
- **Show Icons**: Show/hide icons in markers

### Styling

#### Timeline Line Color
Choose from 8 Bootstrap colors:
- Primary (default blue)
- Secondary (gray)
- Success (green)
- Danger (red)
- Warning (yellow)
- Info (cyan)
- Dark (dark)
- Light (light)

#### Card Style
- **With Border**: Border around the card
- **With Shadow**: Subtle shadow (default)
- **With Small Shadow**: More subtle shadow
- **No Border/Shadow**: Minimalist look

### Margin & Padding

Like all WSC blocks, you can define spacing individually for each side (top, bottom, left, right):
- **Margin** (outer spacing): 0-5 and Auto
- **Padding** (inner spacing): 0-5

### Advanced Options

- **CSS Class**: Additional CSS class for the main container
- **HTML ID**: ID attribute for the main container (e.g., for anchor links)

## Examples

### Example 1: Company History (Vertical, Alternating)

**Configuration:**
- Orientation: Vertical
- Position: Alternating
- Animation: Enabled
- Timeline Color: Primary

**Timeline Items:**
```
1. Foundation (2010) - Icon: fa-rocket
2. First Product (2012) - Icon: fa-box
3. Expansion (2015) - Icon: fa-globe
4. 100 Employees (2020) - Icon: fa-users
5. Today (2024) - Icon: fa-star
```

### Example 2: Project Roadmap (Horizontal)

**Configuration:**
- Orientation: Horizontal
- Animation: Enabled
- Timeline Color: Info
- Card Style: With Shadow

**Timeline Items:**
```
Q1 2024 - Planning - Icon: fa-clipboard
Q2 2024 - Development - Icon: fa-code
Q3 2024 - Testing - Icon: fa-flask
Q4 2024 - Launch - Icon: fa-rocket
```

### Example 3: Responsive Timeline (Auto)

**Configuration:**
- Orientation: Auto
- Animation: Enabled
- Timeline Color: Success

Automatically displays horizontal on desktop and vertical on mobile.

## JavaScript API

### Auto-Initialization

The script initializes automatically on page load. All `.wsc-timeline-wrapper` elements are automatically detected.

### Manual Re-Initialization

If you dynamically load timelines (e.g., via AJAX), you can manually trigger initialization:

```javascript
// After loading dynamic content
window.wscTimelineReinit();
```

### Controller Access

Timeline controllers are globally available:

```javascript
// Access all active controllers
console.log(window.wscTimelineControllers);

// Manual cleanup
window.wscTimelineControllers.forEach(ctrl => ctrl.destroy());
```

## CSS Customization

### Define Custom Colors

You can define custom colors for the timeline line via CSS variables:

```css
/* Custom primary color */
:root {
    --bs-primary: #your-color;
}

/* Or specifically for timeline */
.wsc-timeline-primary::before {
    background-color: #your-color;
}
```

### Customize Animations

Animation speed and type can be overridden via CSS:

```css
.wsc-timeline-item.wsc-timeline-visible {
    transition: opacity 1s ease-out, transform 1s ease-out; /* Slower */
}

/* Different animation type */
.wsc-timeline-item.wsc-timeline-animate {
    transform: scale(0.8) translateY(30px); /* Scale + Translate */
}
```

### Adjust Spacing

```css
/* Larger spacing between items */
.wsc-timeline-item {
    margin-bottom: 4rem;
}

/* Thicker timeline line */
.wsc-timeline-vertical::before {
    width: 5px;
}
```

## Browser Compatibility

### Supported Browsers
- Chrome/Edge (88+)
- Firefox (55+)
- Safari (12.1+)
- Opera (75+)

### Fallback for Older Browsers
For browsers without Intersection Observer support, all items are displayed immediately without animation (progressive enhancement).

## Performance

### Optimizations
- ✅ Intersection Observer API (no scroll events)
- ✅ CSS3 Animations (GPU-accelerated)
- ✅ Vanilla JavaScript (no jQuery dependency)
- ✅ Lazy Animation (items are only observed until animated)

### Best Practices
- Don't use more than 20-30 timeline items per block
- For many items: Use horizontal timeline with scrolling
- Optimize images before upload (WebP, compressed)

## Accessibility

### Accessibility Features
- ✅ Semantic HTML
- ✅ Works without JavaScript
- ✅ Keyboard navigation possible
- ✅ Screen reader friendly
- ✅ Print-optimized

### Recommendations
- Use descriptive titles
- Add alt texts for images
- Use HTML IDs for anchor links
- Test with JavaScript disabled

## Troubleshooting

### Timeline Not Displaying
- Cache cleared? `bin/console cache:clear`
- CSS/JS correctly included?
- Block added in backend?
- At least one timeline item present?

### Animations Not Working
- JavaScript file loaded? (check browser console)
- Animation enabled in backend?
- Browser supports Intersection Observer?

### Styling Issues
- Bootstrap 5 present?
- CSS file included after Bootstrap?
- Browser cache cleared?
- Check CSS specificity (use `!important` if needed)

## Changelog

### Version 1.0.0 (2024)
- ✨ Initial Release
- ✅ Vertical, horizontal, and responsive timeline
- ✅ Scroll animations with Intersection Observer
- ✅ 8 color variants
- ✅ Full margin/padding control
- ✅ CSS classes and IDs on both levels
- ✅ FontAwesome icon support
- ✅ Media support for images
- ✅ Responsive design
- ✅ Print styles

## Credits

Developed for Sulu CMS with inspiration from the Contao Animated Timeline Bundle.

**Technology Stack:**
- Sulu CMS
- Bootstrap 5
- FontAwesome Icons
- Vanilla JavaScript (ES6+)
- Intersection Observer API

## License

This project is part of the WSC Theme Sulu Templates.

---

**Questions or Issues?** Create an issue in the repository or contact support.
