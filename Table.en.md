# WSC Table Block - Documentation

## Overview

The **WSC Table Block** is a flexible HTML table block for Sulu CMS with intelligent column normalization. The block ensures that your tables always maintain a consistent structure, even when you add or remove columns afterwards.

## What Makes It Special: "Header is Master"

**The number of columns in the header row determines the entire table structure.**

- Header has 5 columns → **All rows are rendered with 5 columns**
- You add a 6th header column → **All rows automatically have a 6th (empty) column**
- You delete a header column → **The corresponding column disappears from all rows**

**Your table is never "broken"** - the template normalizes automatically!

## Features

### 🎯 Intelligent Column Management
- **Header defines structure**: Column count in header is leading
- **Automatic normalization**: Missing cells are rendered empty
- **Excess cells ignored**: Too many cells are trimmed
- **Flexible adjustment**: Columns can be added/removed at any time
- **Never broken**: Template guarantees consistent table structure

### 📝 Cell Content
- **text_area** for multi-line content
- **Optional HTML support**: Activatable via checkbox
- **Alignment per cell**: Left, center, right
- **Line breaks**: Automatic with `nl2br` (when HTML disabled)

### 🎨 Bootstrap 5 Table Styles
**Multiple selection possible:**
- Striped (zebra pattern)
- Bordered (with borders)
- Borderless (no borders)
- Hover (row highlight)
- Small (compact)

### 🌈 Styling Options
- **Table Color**: 8 Bootstrap colors (Primary, Secondary, Success, etc.)
- **Row Color**: 10 colors per row individually
- **Dark Header**: Header with dark background
- **Caption**: Optional table caption
- **Responsive**: Horizontal scroll on mobile
- **CSS Class & HTML ID**: For table and individual rows

### 📱 Responsive & Accessibility
- **Table-Responsive Wrapper**: Horizontal scroll on small devices
- **Semantic HTML**: `<table>`, `<thead>`, `<tbody>`
- **Screen-reader friendly**: Proper table markup
- **Print-optimized**: Special styles for printing
- **Keyboard navigation**: Fully keyboard accessible

## Installation

### 1. Files

The table block consists of the following files:

```
config/templates/blocks/
└── wsc-table.xml                   # Block configuration

templates/wsc/blocks/
└── wsc-table.html.twig             # Template with normalization logic

assets/css/
└── wsc-table.css                   # Optional: Additional enhancements
```

### 2. Include Assets (optional)

The CSS file is optional - Bootstrap 5 tables work without it:

```twig
{# In your base.html.twig or layout template #}

{# CSS in <head> - OPTIONAL #}
<link rel="stylesheet" href="{{ asset('assets/css/wsc-table.css') }}">
```

### 3. Clear Cache

After installation, clear the Sulu cache:

```bash
bin/console cache:clear
```

The block should now be available in the Sulu backend under "Table".

## Usage

### Creating a Table

1. Open a page in the Sulu backend
2. Click "Add Block"
3. Select "Tabelle" / "Table"
4. First create **header cells** (defines column count!)
5. Then add **rows** with cells

### Creating the Header (IMPORTANT!)

The header defines the column count for the entire table:

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| Content | Text Area | Column heading | Yes |
| Alignment | Select | Left / Center / Right | No |

**Example:**
```
Column 1: "Name"        (Alignment: Left)
Column 2: "Email"       (Alignment: Left)
Column 3: "Age"         (Alignment: Center)
Column 4: "Status"      (Alignment: Center)
Column 5: "Actions"     (Alignment: Right)
```
→ Your table now has **5 columns**

### Adding Rows

For each row:

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| Cells | Repeater | Cell contents | No |
| Row Color | Select | Bootstrap color for this row | No |
| CSS Class | Text | Individual CSS class | No |

**Per cell:**
- **Content**: Text or HTML (depending on settings)
- **Alignment**: Left / Center / Right

## The "Header is Master" Logic

### Scenario 1: Row has fewer cells than header

```
Header:    ["Name", "Email", "Age", "Status", "Actions"]  → 5 columns
Row 1:     ["John Doe", "john@test.com", "30"]           → 3 cells

Template renders:
┌───────────┬───────────────┬─────┬────────┬─────────┐
│ Name      │ Email         │ Age │ Status │ Actions │
├───────────┼───────────────┼─────┼────────┼─────────┤
│ John Doe  │ john@test.com │ 30  │ (empty)│ (empty) │
└───────────┴───────────────┴─────┴────────┴─────────┘
```

**Result:** Missing cells are rendered as empty `<td>`. The table is not broken!

### Scenario 2: Row has more cells than header

```
Header:    ["Name", "Email", "Age"]                          → 3 columns
Row 1:     ["John", "john@test.com", "30", "Active", "NY"]  → 5 cells

Template renders:
┌──────┬───────────────┬─────┐
│ Name │ Email         │ Age │
├──────┼───────────────┼─────┤
│ John │ john@test.com │ 30  │
└──────┴───────────────┴─────┘
```

**Result:** Excess cells 4+5 ("Active", "NY") are ignored. The table is not broken!

### Scenario 3: Adding a header column

```
Before:
Header:    ["Name", "Email", "Age"]     → 3 columns
Row 1:     ["John", "john@test.com", "30"]

You add:
Header:    ["Name", "Email", "Age", "Status"]  → 4 columns
Row 1:     Remains unchanged with 3 cells

Template renders:
┌──────┬───────────────┬─────┬────────┐
│ Name │ Email         │ Age │ Status │
├──────┼───────────────┼─────┼────────┤
│ John │ john@test.com │ 30  │ (empty)│
└──────┴───────────────┴─────┴────────┘
```

**Result:** The new column is empty initially. You can later go into the rows and manually add and fill the 4th cell.

### Scenario 4: Deleting a header column

```
Before:
Header:    ["Name", "Email", "Age", "Status"]  → 4 columns
Row 1:     ["John", "john@test.com", "30", "Active"]

You delete "Email":
Header:    ["Name", "Age", "Status"]           → 3 columns
Row 1:     Still has all 4 cells in backend

Template renders:
┌──────┬─────┬────────┐
│ Name │ Age │ Status │
├──────┼─────┼────────┤
│ John │ 30  │ Active │
└──────┴─────┴────────┘
```

**Important:** The email data is **not actually deleted** in the backend - it's just not rendered anymore! If you re-add "Email" as a header, the data will reappear.

**But beware:** The cells are used sequentially. If you delete the 2nd column, the 3rd cell becomes the new 2nd column!

## Configuration

### Layout Options

#### Table Style (Multiple Selection)
Combine multiple styles:
- **Striped**: Zebra pattern (alternating light/dark rows)
- **Bordered**: With borders around all cells
- **Borderless**: Without borders
- **Hover**: Row highlight on hover
- **Small**: Compact table with reduced spacing

**Example Combinations:**
```
Striped + Hover           → Striped table with hover effect
Bordered + Small          → Compact table with borders
Borderless + Hover        → Borderless table with hover
```

#### Table Color
Color the entire table (8 Bootstrap colors):
- Primary, Secondary, Success, Danger, Warning, Info, Dark

#### Other Options
- **Responsive**: Horizontal scroll on mobile (Default: enabled)
- **Allow HTML in cells**: Enables HTML code in cells (Default: disabled)
- **Dark Header**: Header with dark background
- **Table Caption**: Optional caption above the table

### Row Options

For each row individually:
- **Row Color**: 10 colors (Primary, Secondary, Success, Danger, Warning, Info, Light, Dark, Active)
- **CSS Class**: Custom CSS class for this row

### HTML in Cells

When "Allow HTML in cells" is enabled, you can use HTML code:

```html
<!-- In a cell -->
<strong>Bold text</strong>

<a href="/contact">Link</a>

<span class="badge bg-success">Active</span>

<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

**Security Note:** Only give HTML access to trusted editors!

### Margin & Padding

Like all WSC blocks:
- **Margin** (outer spacing): Top, Bottom, Left, Right (0-5, Auto)
- **Padding** (inner spacing): Top, Bottom, Left, Right (0-5)

### Advanced Options

- **CSS Class**: Additional CSS class for the wrapper
- **HTML ID**: ID attribute for the wrapper (e.g., for anchor links)

## Examples

### Example 1: Simple Employee List

**Configuration:**
- Table Style: Striped + Hover
- Responsive: Yes
- Allow HTML: No

**Header:**
```
Name | Department | Email | Phone
```

**Rows:**
```
John Doe          | IT           | john@company.com  | 0123-456789
Jane Smith        | Marketing    | jane@company.com  | 0123-456790
Tom Brown         | Sales        | tom@company.com   | 0123-456791
```

### Example 2: Product Comparison Table

**Configuration:**
- Table Style: Bordered + Small
- Dark Header: Yes
- Allow HTML: Yes

**Header:**
```
Feature | Basic | Professional | Enterprise
```

**Rows:**
```
Users                   | 5          | 25                        | Unlimited
Storage                 | 10 GB      | 100 GB                    | 1 TB
Support                 | Email      | Email + Phone             | 24/7 Premium
Price                   | $9/month   | $29/month                 | $99/month
```

With HTML in the price row:
```
Row "Price":
  Cell 2: <strong>$9</strong>/month
  Cell 3: <strong>$29</strong>/month
  Cell 4: <span class="badge bg-primary">$99/month</span>
```

### Example 3: Status Table with Colors

**Configuration:**
- Table Style: Hover
- Allow HTML: Yes

**Header:**
```
Project | Status | Progress | Deadline
```

**Rows with Colors:**
```
Row 1 (Row Color: Success):
  Website Relaunch | Completed | 100% | 01.01.2024

Row 2 (Row Color: Warning):
  Mobile App | In Progress | 75% | 15.02.2024

Row 3 (Row Color: Danger):
  API Integration | Delayed | 30% | 31.01.2024
```

### Example 4: Responsive Table with Many Columns

**Configuration:**
- Responsive: Yes (important!)
- Table Style: Bordered + Small

**Header:**
```
ID | Name | Email | Phone | Address | ZIP | City | Country | Status
```

On Desktop: Normal display
On Mobile: Horizontal scrollbar appears automatically

## Best Practices

### ✅ Recommendations

1. **Plan the header first**
   - Think about the column structure before creating
   - Header changes affect the entire table

2. **Consistent cell count**
   - Add the same number of cells for each row as in the header
   - Use auto-normalization as a safety net, not as standard

3. **Use HTML sparingly**
   - Only enable HTML when really needed
   - Use HTML only for formatting, not for layout

4. **Responsive for many columns**
   - From 6+ columns: Always enable responsive
   - Test the table on mobile devices

5. **Use alignment**
   - Numbers: Right align
   - Text: Left align
   - Status/Badges: Center

6. **Use row colors strategically**
   - Don't color every row (becomes confusing)
   - Only for important rows (totals, warnings, highlights)

### ❌ Avoid

1. **Too many columns**
   - Maximum: 10 columns (on desktop)
   - Better split data or display differently

2. **Too long cell contents**
   - Keep texts short and concise
   - Long texts break the layout

3. **Mixed cell counts**
   - Avoid intentionally different cell counts per row
   - Use colspan only via custom CSS (not possible in backend)

4. **Nested tables**
   - No tables within tables
   - Leads to accessibility issues

## CSS Customizations

### Sticky Header

For long tables with fixed header:

```css
.table-sticky-header thead th {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: white;
    box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.1);
}
```

In block settings: CSS Class = `table-sticky-header`

### Fixed First Column

Fix first column during horizontal scrolling:

```css
.table-fixed-first-col th:first-child,
.table-fixed-first-col td:first-child {
    position: sticky;
    left: 0;
    background-color: white;
    z-index: 5;
}
```

In block settings: CSS Class = `table-fixed-first-col`

### Custom Table Variant

```css
/* Custom color variant */
.table-custom {
    background-color: #f8f9fa;
}

.table-custom thead {
    background-color: #343a40;
    color: white;
}

.table-custom tbody tr:hover {
    background-color: #e9ecef;
}
```

In block settings: CSS Class = `table-custom`

## Browser Compatibility

### Supported Browsers
- Chrome/Edge (all current versions)
- Firefox (all current versions)
- Safari (all current versions)
- Opera (all current versions)

### Bootstrap 5 Requirement
The table styles are based on Bootstrap 5. Make sure Bootstrap 5 is included in your project.

## Accessibility

### Accessibility Features
- ✅ Semantic HTML table (`<table>`, `<thead>`, `<tbody>`)
- ✅ Screen readers can recognize table structure
- ✅ Keyboard navigation through cells
- ✅ Optional: Caption for table description

### Recommendations
- Use caption for complex tables
- First row should always be header (no data row as first)
- Keep table structure simple and logical
- For very large tables: Consider alternative display for screen readers

## Troubleshooting

### Table Not Displaying
- Cache cleared? `bin/console cache:clear`
- At least one header cell present?
- Block added in backend?

### Column Count Incorrect
- **Check the header**: The header defines the column count
- Count the header cells: That's the number of columns
- Body rows are normalized to this count

### HTML Not Rendering
- "Allow HTML in cells" enabled?
- Check HTML syntax (must be valid)

### Responsive Scrollbar Missing
- "Responsive" enabled in settings?
- Browser cache cleared?

### Styling Not Working
- Bootstrap 5 included?
- Optional: wsc-table.css included?
- Check CSS specificity

### Row Has Too Many/Few Columns

**This is not a bug - it's a feature!**

The template normalizes automatically:
- Too few cells → Rest is displayed empty
- Too many cells → Excess cells are ignored

If you don't want this:
1. Go into the row in the backend
2. Adjust the cell count to match the header count

## Performance

### Optimizations
- ✅ Pure HTML/CSS (no JavaScript required)
- ✅ No external dependencies (except Bootstrap 5)
- ✅ Lean markup
- ✅ Responsive images possible (for images in cells)

### Best Practices
- No more than 100 rows per table
- For large datasets: Consider pagination
- Images in cells: Upload compressed and optimized

## Changelog

### Version 1.0.0 (2024)
- ✨ Initial Release
- ✅ Flexible header/body structure
- ✅ "Header is Master" normalization
- ✅ Bootstrap 5 table styles
- ✅ HTML in cells (optional)
- ✅ Responsive wrapper
- ✅ Row colors
- ✅ Dark header
- ✅ Caption support
- ✅ CSS classes on both levels (table + rows)
- ✅ Margin/padding control
- ✅ Print styles
- ✅ Accessibility features

## Credits

Developed for Sulu CMS with Bootstrap 5.

**Technology Stack:**
- Sulu CMS
- Bootstrap 5
- Twig Templating
- Modern HTML5 Tables

## License

This project is part of the WSC Theme Sulu Templates.

---

**Questions or Issues?** Create an issue in the repository or contact support.
