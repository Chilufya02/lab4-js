# Lab 3: CSS3 & Responsive Web Design

## Group Members

- Chilufya Chulu
- Lawrence Chitandula

## Project Description

This project is a responsive multi-page website for a fictional technology company called "CC Tech Solutions." The website consists of three main pages:

1. **Home Page (index.html)**: Features a hero banner, main content section with company introduction, and a sidebar with news and testimonials. Uses Flexbox for the layout.

2. **Services Page (services.html)**: Displays service offerings in a card format using CSS Grid. Each card has icons, descriptions, and hover effects.

3. **Contact Page (contact.html)**: Contains a responsive contact form with validation, alongside company information and a map placeholder.

## Features Implemented

### CSS Selectors

- Element selectors (e.g., `body`, `header`, `nav`)
- Class selectors (e.g., `.container`, `.nav-links`, `.service-card`)
- ID selectors (e.g., `#name`, `#email`, `#message`)
- Pseudo-classes (e.g., `:hover`, `:focus`, `:active`)
- Pseudo-elements (e.g., `a:after` for navigation link underlines)
- Attribute selectors (e.g., `[type="email"]`, `[required]`)
- Combinators (e.g., `.form-group label`, `.feature i`)

### Layout Systems

- **Flexbox**: Used for navigation bar, header layout, feature cards, and home page main content with sidebar
- **CSS Grid**: Implemented in the services page to display service cards in a responsive grid layout

### Media Queries

Three breakpoints implemented for responsive design:

- `max-width: 1024px`: Adjustments for smaller desktop/laptop screens
- `max-width: 768px`: Tablet layout with mobile navigation menu
- `max-width: 480px`: Mobile phone layout with stacked elements

### Animations and Transitions

- CSS transitions on navigation links, buttons, and card hover effects
- `@keyframes` animation for the submit button pulse effect
- Smooth hover transitions for service cards
- Mobile menu toggle animation

### Responsive Features

- Fluid container with percentage-based widths
- Responsive images with `max-width: 100%`
- Mobile navigation menu with hamburger icon
- Layouts that adapt to different screen sizes
- Form controls that resize appropriately
