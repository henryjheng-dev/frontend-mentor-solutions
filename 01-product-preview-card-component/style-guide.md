# Front-end Style Guide

## Layout

- Design widths: Mobile 375px, Desktop 1440px
- Breakpoint: 600px (card switches from vertical to horizontal layout)
- Mobile card: 20rem × 42rem (vertical)
- Desktop card: 35rem × 25rem (horizontal)

## Colors

### Primary

- Green: hsl(158, 36%, 37%) — used for CTA button and discount price

### Neutral

- Dark text: hsl(212, 21%, 14%)
- Cream background: hsl(28, 38%, 93%)
- White: hsl(0, 0%, 100%)

## Typography

### Fonts

- Body: Montserrat (weights: 500, 700)
- Headings: Fraunces (weight: 700)
- [Google Fonts Import](https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Montserrat:wght@500;700&display=swap)

### Font Sizes

- Base: 0.8rem
- Title: 1.85rem
- Discount price: 1.8rem

## Components

- Card: flex column (mobile) / row (desktop), white background, border-radius 10px
- Button: green background, white text, border-radius 8px, full width
- Images: object-fit cover

## Responsive Design

- Mobile-first approach
- Breakpoint at 600px: card layout switches to horizontal

## Accessibility

- Add `:hover` and `:focus` states to button
- Ensure color contrast meets WCAG AA
- Provide descriptive `alt` text for images
- Support keyboard navigation

---
