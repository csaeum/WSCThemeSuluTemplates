# WSC Accordion Block - Documentation

## Overview

The **WSC Accordion Block** is a **Meta-Accordion** for Sulu CMS - a universal container block that can contain **all other blocks**. Unlike a normal accordion with only text content, you can place complete block structures in each accordion item: timelines, tables, CTAs, cards, even additional column layouts!

**What makes this block unique:**
- 🎯 Each accordion entry is a **container for any other blocks**
- 📦 **All your WSC blocks** are available (Timeline, Table, CTA, Columns, etc.)
- 🔄 Two modes: **Accordion** (only one open) vs. **Collapse** (multiple open)
- 🎨 Icon & badge support in header
- 🆔 **Automatic ID generation** (optional custom IDs)

## The Concept: Meta-Accordion

### Normal Accordion (Text-Only)
```
┌─ Question 1 ─────────┐
│ Answer as text...    │
└──────────────────────┘
```

### WSC Meta-Accordion (Block Container)
```
┌─ Section 1 ──────────────────────┐
│ ┌─ Timeline Block ──────────┐   │
│ │ • Event 1                  │   │
│ │ • Event 2                  │   │
│ └────────────────────────────┘   │
│                                   │
│ ┌─ CTA Block ───────────────┐   │
│ │ [Buy now]                  │   │
│ └────────────────────────────┘   │
└───────────────────────────────────┘
```

## Features

### 📋 Accordion Items (Repeater)
**Per Item:**
- **Title** (mandatory) - Header text
- **Icon** (optional) - FontAwesome icon before title
- **Badge** (optional) - "NEW", "HOT", etc. with 7 colors
- **Content** - **All your blocks!**
  - Timeline, Table, CTA, Columns
  - Text-Image, List-Group, Smart-Content
  - Image-Gallery, Headline
  - Even nested Columns!
- **CSS Class** - Individual class per item
- **HTML ID** - Optional custom ID (otherwise automatic)

### ⚙️ Accordion Settings
- **First Element Open** - Initial state
- **Multiple Open at Once** - Accordion vs. Collapse mode
- **Flush** - Without outer border (minimalist)

### 🎨 Styling
- **Accordion Style**: Default, Bordered (with border), Shadow (with shadow)
- **Header Background Color**: Default, Primary, Secondary, Light, Dark

### 📏 Spacing & Advanced
- **Margin & Padding**: All 4 sides (0-5, Auto)
- **CSS Class**: For the entire accordion
- **HTML ID**: For the entire accordion (optional, otherwise automatic)

## Installation

### 1. Files

```
config/templates/blocks/
└── wsc-accordion.xml               # Block configuration

templates/wsc/blocks/
└── wsc-accordion.html.twig         # Template

assets/css/
└── wsc-accordion.css               # Styling & enhancements
```

### 2. Include Assets

```twig
{# In your base.html.twig or layout template #}

{# CSS in <head> #}
<link rel="stylesheet" href="{{ asset('assets/css/wsc-accordion.css') }}">
```

**Important:** Bootstrap 5 JavaScript must be included for accordion functionality!

### 3. Clear Cache

```bash
bin/console cache:clear
```

The block should now be available in the Sulu backend under "Accordion (with nested blocks)".

## Usage

### Adding the Block

1. Open a page in the Sulu backend
2. Click "Add Block"
3. Select "Accordion (with nested blocks)"
4. Add accordion entries
5. Per entry: Title + add any other blocks

### Creating an Accordion Item

**Step 1: Add Entry**
- Enter title (e.g., "Product Details")
- Optional: Icon (e.g., `fa-info-circle`)
- Optional: Badge ("NEW")

**Step 2: Add Blocks**
- In "Content" area: Click "Add Block"
- Select any blocks (Timeline, CTA, Table, etc.)
- Multiple blocks per item possible!

**Step 3: Optional CSS/ID**
- Custom CSS class for this item
- Custom HTML ID (if not set → automatically generated)

## The Two Modes

### 🎯 Accordion Mode (Default)
**"Only one item open"**

```
Setting: "Multiple open at once" = OFF (disabled)
```

**Behavior:**
- ✅ Only one item can be open
- ✅ Opening an item closes the previous one
- ✅ Classic accordion behavior
- ✅ Saves space, clear overview

**Ideal for:**
- FAQs (only one answer visible)
- Product features (focused display)
- Long lists (less scrolling)

---

### 🔄 Collapse Mode
**"Multiple items open"**

```
Setting: "Multiple open at once" = ON (enabled)
```

**Behavior:**
- ✅ Multiple items can be open simultaneously
- ✅ Each item functions independently
- ✅ Behaves like multiple collapse elements
- ✅ More content visible at once

**Ideal for:**
- Comparisons (multiple sections side by side)
- Extensive content
- When users should see multiple areas simultaneously

---

**Technical Difference:**
```html
<!-- Accordion Mode (only one open) -->
<div class="accordion-collapse" data-bs-parent="#accordion-123">

<!-- Collapse Mode (multiple open) -->
<div class="accordion-collapse">  <!-- NO data-bs-parent -->
```

## Automatic ID Generation

### Why IDs are Important

Bootstrap Accordion requires **unique IDs** for:
- The accordion itself (`data-bs-parent`)
- Each header (`id` for `aria-labelledby`)
- Each collapse area (`id` for `data-bs-target`)

### How It Works

**Main Accordion:**
```
User provides HTML ID: "my-accordion"
→ Template uses: "my-accordion"

User provides NO HTML ID:
→ Template generates: "accordion-1234567890"
```

**Per Item:**
```
User provides HTML ID: "item-products"
→ Template uses: "item-products"
→ Collapse ID: "item-products-collapse"
→ Header ID: "item-products-header"

User provides NO HTML ID:
→ Template generates: "accordion-1234567890-item-1"
→ Collapse ID: "accordion-1234567890-item-1-collapse"
→ Header ID: "accordion-1234567890-item-1-header"
```

**Advantage:**
- ✅ You don't need to enter IDs (automatic)
- ✅ But you can set custom IDs (e.g., for anchor links)
- ✅ No ID conflicts possible

## Examples

### Example 1: FAQ Accordion

**Configuration:**
```
Accordion Settings:
  - First element open: Yes
  - Multiple open at once: No (Accordion mode)
  - Accordion style: Default
```

**Items:**

**Item 1: "How do I register?"**
```
Icon: fa-user-plus
Content:
  - Text-Image Block (screenshot with instructions)
  - CTA Block (button "To Registration")
```

**Item 2: "What does the service cost?"**
```
Icon: fa-euro-sign
Badge: "NEW"
Content:
  - Table Block (price table with 3 packages)
  - CTA Block (button "Buy Now")
```

**Item 3: "Is there support?"**
```
Icon: fa-headset
Content:
  - List-Group Block (contact options)
  - CTA Block (button group: "Email" + "Phone")
```

---

### Example 2: Product Features Accordion

**Configuration:**
```
Accordion Settings:
  - First element open: Yes
  - Multiple open at once: Yes (Collapse mode)
  - Accordion style: Shadow
  - Header background: Primary
```

**Items:**

**Item 1: "Feature Timeline"**
```
Icon: fa-timeline
Content:
  - Timeline Block (vertical, alternating)
    • 2020: First Version
    • 2022: Major Update
    • 2024: AI Integration
```

**Item 2: "Technical Details"**
```
Icon: fa-cog
Content:
  - Columns Block (2 columns)
    Column 1:
      - Headline "Server"
      - List-Group (Specs)
    Column 2:
      - Headline "Client"
      - List-Group (Requirements)
```

**Item 3: "Prices & Packages"**
```
Icon: fa-tag
Badge: "SALE" (Danger)
Content:
  - Smart-Content Block (Cards, 3 columns)
    → Shows product pages as cards
  - CTA Block (Hero with discount banner)
```

---

### Example 3: Landing Page Sections

**Configuration:**
```
Accordion Settings:
  - First element open: No (all closed)
  - Multiple open at once: Yes
  - Accordion style: Bordered
  - Flush: Yes
```

**Items:**

**Item 1: "About Us"**
```
Icon: fa-building
Content:
  - Text-Image Block (image left, text right)
  - CTA Block (button "Learn More")
```

**Item 2: "Our Services"**
```
Icon: fa-briefcase
Content:
  - Columns Block (3 columns)
    Each column:
      - Image-Gallery Block
      - CTA Block (button)
```

**Item 3: "Portfolio"**
```
Icon: fa-images
Content:
  - Smart-Content Block (Grid, 4 columns)
    → Shows portfolio entries
```

**Item 4: "Contact"**
```
Icon: fa-envelope
Content:
  - Columns Block (2 columns)
    Column 1: CTA Block (contact form link)
    Column 2: Text-Image (address + map)
```

---

### Example 4: Nested Layout

**Item: "Complex Section"**
```
Icon: fa-layer-group
Content:
  1. Headline Block ("Our Solutions")

  2. Columns Block (2 columns)
     Column 1:
       - Timeline Block
       - CTA Block
     Column 2:
       - Table Block
       - Image-Gallery Block

  3. CTA Block (Hero banner)

  4. Smart-Content Block (Slider)
```

→ A single accordion item can contain a complete layout!

## Best Practices

### ✅ Recommendations

**1. Plan Structure**
- Think about accordion structure before creating
- Group related content in items
- Not too many items (max. 10-15)

**2. Choose Descriptive Titles**
- ✅ "Product Details & Specifications"
- ✅ "Frequently Asked Questions"
- ❌ "Section 1"
- ❌ "Info"

**3. Use Icons Strategically**
- Support the meaning
- Consistent icon family (all solid or all regular)
- Not every item needs an icon (can be overwhelming)

**4. Use Badges Sparingly**
- Only for really important highlights
- Time-limited ("NEW" remove after 2 weeks)
- Max. 1-2 badges per accordion

**5. Organize Nested Blocks**
- No more than 5-6 blocks per item
- Logical order (e.g., text first, then CTA)
- Consider spacing (nested blocks have their own margins)

**6. Choose Modes Correctly**
- **FAQ:** Accordion mode (only one open)
- **Feature Comparison:** Collapse mode (multiple open)
- **Long Pages:** Accordion mode (less scrolling)

**7. Consider Performance**
- Not too many heavy blocks per item (e.g., 10 image galleries)
- Use Smart-Content with pagination for many items
- Optimize images

**8. Accessibility**
- Descriptive titles (screen readers)
- Logical order of items
- Test with keyboard navigation (Tab, Enter, Space)

### ❌ Avoid

1. **Too Many Items**
   - Not 50 accordion items on one page
   - Better split or display differently

2. **Empty Items**
   - Each item should contain at least one block
   - Empty items confuse users

3. **Too Nested**
   - Accordion → Columns → Accordion → Columns = too complex
   - Max. 2-3 levels deep

4. **Inconsistent Structure**
   - Not: Item 1 has CTA, Item 2 has Timeline, Item 3 has Text
   - Better: All items have similar structure

5. **Title as Content**
   - Don't put all text in the title
   - Title = Heading, Content = Details

## Styling Options

### Standard Styles

**Default:**
```
Normal Bootstrap Accordion
White headers, gray borders
```

**Bordered:**
```
CSS class automatically set
Additional outer border
Rounded corners
```

**Shadow:**
```
CSS class automatically set
Shadow around entire accordion
No outer border
```

**Flush:**
```
Bootstrap class: accordion-flush
No outer border
Items connect directly
Minimalist look
```

### Header Colors

**Primary (Blue):**
```
Blue header, white text
Automatically white arrow icon
```

**Secondary (Gray):**
```
Gray header, white text
```

**Light:**
```
Light header, dark text
```

**Dark:**
```
Dark header, white text
```

### Optional: Custom Styles (via CSS Class)

**Gradient Header:**
```
CSS Class (on main accordion): wsc-accordion-gradient
Effect: Gradient from Primary to Info
```

**Minimal Style:**
```
CSS Class (on main accordion): wsc-accordion-minimal
Effect: Minimalist without borders
```

## Nested Blocks: Spacing

### Automatic Spacing

The accordion template automatically removes `margin-top` from the first nested block:

```css
.accordion-body .mt-3:first-child { margin-top: 0 !important; }
```

**Why?** Otherwise the first block would have unnecessary top spacing.

### Recommended Spacing Settings

**For blocks in accordion:**
```
Margin-Top: 0 (overridden anyway)
Margin-Bottom: 3 (1rem spacing to next block)
```

**For the last block:**
```
Template automatically sets margin-bottom: 0 for last block
```

## Anchor Links to Accordion Items

You can link directly to a specific accordion item and open it automatically:

### Step 1: Set Item ID
```
In backend:
  Item HTML ID: "pricing"
```

### Step 2: Create Link
```html
<a href="#pricing" data-bs-toggle="collapse" data-bs-target="#pricing-collapse">
  To Pricing
</a>
```

### Step 3: Auto-open with JavaScript (optional)
```javascript
// URL: page#pricing
if (window.location.hash) {
  const target = document.querySelector(window.location.hash + '-collapse');
  if (target) {
    const collapse = new bootstrap.Collapse(target, { show: true });
  }
}
```

## Troubleshooting

### Accordion doesn't open/close
- Bootstrap 5 JavaScript included?
- Check browser console for errors
- IDs unique? (normally automatic)

### First item not open
- "First element open" enabled?
- Cache cleared?
- Browser cache cleared?

### Multiple items don't close each other
- "Multiple open at once" disabled?
- If enabled = intended behavior (Collapse mode)

### Nested blocks not displaying
- At least one block added to item?
- Block template exists?
- Cache cleared?
- Twig errors in browser console?

### Icon not showing
- FontAwesome included?
- Icon name correct? (with `fa-` prefix)
- Icon available in FontAwesome version?

### Badge not showing
- Badge text filled in?
- Only badge color without text → won't display

### Styling not working
- CSS file included?
- Included after Bootstrap?
- Browser cache cleared?

### Items have too much/little spacing
- Check margin/padding settings
- Nested blocks have their own margins
- Use CSS class for custom spacing

## Performance Tips

### Optimizations

**1. Lazy Loading for Images**
```
In Image blocks: use loading="lazy" attribute
→ Images in closed items only load when needed
```

**2. Smart-Content with Pagination**
```
Don't load 100 items at once
→ Activate pagination (12 items per page)
```

**3. Load Videos on Demand**
```
Don't embed YouTube videos directly
→ Use CTA block with preview image + link
```

**4. Not Too Many Items**
```
Max. 15-20 accordion items
For more → Pagination or different structure
```

### Best Practices
- Compress images (WebP)
- Not 10 timelines in one accordion
- Smart-Content instead of manual block repetitions
- Test with DevTools (Performance tab)

## Browser Compatibility

### Supported Browsers
- Chrome/Edge (all current versions)
- Firefox (all current versions)
- Safari (all current versions)
- Opera (all current versions)

### Requirements
- **Bootstrap 5** (Accordion functionality)
- **Bootstrap 5 JavaScript** (Collapse plugin)

## Accessibility

### Accessibility Features

- ✅ Semantic HTML (`<h2>`, `button`, ARIA attributes)
- ✅ Keyboard navigation (Tab, Enter, Space)
- ✅ Screen reader friendly (aria-expanded, aria-controls)
- ✅ Focus states for keyboard users
- ✅ Reduced motion support (for motion-sensitive users)

### Recommendations

- Descriptive titles (screen readers read these)
- Logical order of items
- No purely decorative icons (except aria-hidden)
- Pay attention to contrasts (especially with colored headers)

## Changelog

### Version 1.0.0 (2024)
- ✨ Initial Release
- ✅ Meta-accordion with nested blocks
- ✅ All WSC blocks available (Timeline, Table, CTA, Columns, etc.)
- ✅ Two modes: Accordion vs. Collapse
- ✅ Icon & badge support in header
- ✅ Automatic ID generation
- ✅ 3 styling variants (Default, Bordered, Shadow)
- ✅ 5 header colors
- ✅ CSS classes on both levels (Accordion + Items)
- ✅ Margin/padding control
- ✅ Responsive design
- ✅ Accessibility features
- ✅ Print styles
- ✅ Optional: Gradient & Minimal styles

## Credits

Developed for Sulu CMS with Bootstrap 5.

**Technology Stack:**
- Sulu CMS
- Bootstrap 5 (Accordion Component)
- FontAwesome Icons
- Twig Templating
- Nested Block Structure

## License

This project is part of the WSC Theme Sulu Templates.

---

**Questions or Issues?** Create an issue in the repository or contact support.
