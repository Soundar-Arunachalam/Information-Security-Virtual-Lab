# Virtual Lab Color Palette

---

## Brand Colors

| Name | Color Code | Usage |
|------|-------------|--------|
| **Primary** | `#3498db` | Brand accent, active elements |
| **Primary Hover** | `#2980b9` | Button hover, link hover |
| **Secondary** | `#2ecc71` | Secondary highlights, success states |
| **Accent (Warning)** | `#e67e22` | Warnings, highlights |
| **Danger (Error)** | `#e74c3c` | Error messages, delete buttons |

---

## Base UI Colors

| Element | Color Code | Usage |
|----------|-------------|--------|
| **Background** | `#f5f7fa` | Global background color |
| **Card / Container** | `#ffffff` | Cards, panels, forms |
| **Card Shadow** | `rgba(0, 0, 0, 0.08)` | Soft shadow for elevation |
| **Navbar / Header** | `#ffffff` | Top header background |
| **Sidebar Background** | `#2c3e50` | Sidebar base color |
| **Sidebar Hover** | `rgba(255, 255, 255, 0.1)` | Hover effect in sidebar |
| **Sidebar Active Border** | `#3498db` | Active sidebar indicator |

---

## Buttons

| Button Type | Background | Text | Hover | Border |
|--------------|-------------|------|--------|--------|
| **Primary** | `#3498db` | `#ffffff` | `#2980b9` | none |
| **Secondary** | `#ffffff` | `#3498db` | `#f0f4f8` | `#3498db` |
| **Success** | `#2ecc71` | `#ffffff` | `#27ae60` | none |
| **Danger** | `#e74c3c` | `#ffffff` | `#c0392b` | none |
| **Disabled** | `#dfe6e9` | `#b2bec3` | `#dfe6e9` | none |

---

## Text Colors

| Type | Color Code | Usage |
|------|-------------|--------|
| **Heading Text** | `#2c3e50` | Titles, section headers |
| **Body Text** | `#34495e` | Main paragraph text |
| **Muted Text** | `#7f8c8d` | Subtle labels, descriptions |
| **Link Text** | `#3498db` | Anchor tags, CTAs |
| **Link Hover** | `#2980b9` | Hovered links |

---

## Inputs & Forms

| Element | Color Code | Usage |
|----------|-------------|--------|
| **Input Background** | `#ffffff` | Form inputs, text areas |
| **Input Border** | `#dce1e6` | Default border |
| **Input Focus Border** | `#3498db` | On focus border highlight |
| **Input Placeholder** | `#95a5a6` | Placeholder text color |

---

## Status & Accent Backgrounds

| Type | Color Code | Usage |
|------|-------------|--------|
| **Highlight (Info)** | `#ecf5fd` | Info boxes, tooltips |
| **Table Row Hover** | `#f9fbfd` | Subtle hover backgrounds |
| **Success Background** | `#eafaf1` | Success badges, banners |
| **Warning Background** | `#fef5e7` | Warning states |
| **Error Background** | `#fdecea` | Error notifications |

---

## CSS Variables Example

```css
:root {
  --color-primary: #3498db;
  --color-primary-hover: #2980b9;
  --color-secondary: #2ecc71;
  --color-accent: #e67e22;
  --color-danger: #e74c3c;

  --color-background: #f5f7fa;
  --color-card: #ffffff;
  --color-border: #e1e5e9;

  --color-text: #2c3e50;
  --color-muted: #7f8c8d;
  --color-link: #3498db;
  --color-link-hover: #2980b9;

  --color-input-bg: #ffffff;
  --color-input-border: #dce1e6;
  --color-input-focus: #3498db;
  --color-placeholder: #95a5a6;
}
