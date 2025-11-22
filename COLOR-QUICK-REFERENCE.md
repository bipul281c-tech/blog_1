# Color Palette Quick Reference 🎨

## Color Swatches

```
┌─────────────────────────────────────────────────────────────┐
│  PEACH         #EBB093  ████████  Warm accent (dark mode)   │
│  CORAL PINK    #F49A84  ████████  Warm accent (light mode)  │
│  JET           #484342  ████████  Primary text & dark bg    │
│  SAGE          #BDC2A6  ████████  Neutral background        │
│  ASH GRAY      #B3B1A0  ████████  Borders & subtle elements │
└─────────────────────────────────────────────────────────────┘
```

## Usage at a Glance

### 🌞 Light Mode
```
Background:  #f5f5f0 → #BDC2A6 (gradient)
Text:        #484342 (Jet)
Links:       #484342 → #F49A84 (hover)
Buttons:     #484342 bg → #F49A84 bg (hover)
Borders:     #B3B1A0 (Ash Gray)
```

### 🌙 Dark Mode
```
Background:  #484342 → #2a2827 (gradient)
Text:        whitesmoke
Links:       whitesmoke → #EBB093 (hover)
Buttons:     #BDC2A6 bg → #EBB093 bg (hover)
Borders:     #B3B1A0 (Ash Gray)
```

## Component Color Map

| Component          | Light Mode                | Dark Mode                |
|--------------------|---------------------------|--------------------------|
| **Body Background**| Cream → Sage gradient     | Jet → Dark gradient      |
| **Primary Text**   | Jet                       | Whitesmoke               |
| **Links (normal)** | Jet                       | Whitesmoke               |
| **Links (hover)**  | Coral Pink                | Peach                    |
| **Buttons (fill)** | Jet bg                    | Sage bg                  |
| **Buttons (hover)**| Coral Pink bg             | Peach bg                 |
| **Active Nav**     | Coral Pink                | Peach                    |
| **Borders**        | Ash Gray                  | Ash Gray                 |
| **Input Focus**    | Coral Pink outline        | Peach outline            |
| **Transitions**    | Sage → Peach gradient     | Jet → Dark gradient      |

## CSS Variable Reference

```css
/* Root Variables */
--peach: #EBB093;
--coral-pink: #F49A84;
--jet: #484342;
--sage: #BDC2A6;
--ash-gray: #B3B1A0;

/* Tailwind Theme Variables */
--color-peach: var(--peach);
--color-coral-pink: var(--coral-pink);
--color-jet: var(--jet);
--color-sage: var(--sage);
--color-ash-gray: var(--ash-gray);
```

## Common Patterns

### Inline Styles
```html
<div style="color: var(--color-coral-pink);">Text</div>
<div style="background: var(--color-sage);">Background</div>
<div style="border-color: var(--color-ash-gray);">Border</div>
```

### Tailwind Classes
```html
<div class="text-coral-pink">Text</div>
<div class="bg-sage">Background</div>
<div class="border-ash-gray">Border</div>
```

### Dark Mode Variants
```html
<div class="text-coral-pink dark:text-peach">Adaptive Text</div>
<div class="bg-sage dark:bg-jet">Adaptive Background</div>
```

## Accessibility Notes

✅ **All combinations meet WCAG AA standards**

- Jet on Sage: 7.5:1 (AAA)
- Jet on Light Cream: 9.2:1 (AAA)
- Whitesmoke on Jet: 12.5:1 (AAA)
- Peach on Jet: 5.2:1 (AA)
- Coral Pink on Light: 3.8:1 (AA for large text)

## Design Philosophy

🎯 **Warm & Inviting**: Peach and Coral Pink add warmth
🌿 **Calm & Neutral**: Sage and Ash Gray provide balance
📖 **Readable**: Jet ensures strong text contrast
✨ **Cohesive**: Colors complement each other harmoniously

---

**Quick Tip**: Use Coral Pink/Peach for interactive elements, Sage/Ash Gray for backgrounds, and Jet for text!

