# Airbnb Clone

A responsive Airbnb clone built with React.

## Tech Stack
- React (Vite)
- Plain CSS (no Tailwind)
- React Hooks: `useState`, `useEffect`

## React Concepts Used (as per syllabus)
- JSX, Components & Props
- State management with `useState`
- Side effects with `useEffect` (fetch)
- Controlled components (search inputs)
- Sharing state between components
- Event handling (`onClick`, `onChange`)

## Team
| Name: Stark and Spellbound | 
| Contribution |
|------|-------------|
| Aryan | Navbar, SearchBar, HeroSection |
| Jayraj | PropertyCard, PropertyList, CategoryFilter |
| Varad | Footer, Modal/Detail View, useEffect fetch |

## Project Structure
```
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── SearchBar/
│   │   ├── SearchBar.jsx
│   │   └── SearchBar.css
│   ├── HeroSection/
│   │   ├── HeroSection.jsx
│   │   └── HeroSection.css
│   ├── CategoryFilter/
│   │   ├── CategoryFilter.jsx
│   │   └── CategoryFilter.css
│   ├── PropertyCard/
│   │   ├── PropertyCard.jsx
│   │   └── PropertyCard.css
│   ├── PropertyList/
│   │   ├── PropertyList.jsx
│   │   └── PropertyList.css
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   └── Modal/
│       ├── Modal.jsx
│       └── Modal.css
├── data/
│   └── properties.js
├── App.jsx
├── App.css
└── main.jsx
```

## Roadmap
- [x] Project setup (Vite + React)
- [x] Navbar with logo and auth buttons
- [x] Search bar (controlled component)
- [x] Hero section
- [x] Category filter tabs
- [x] Property listing cards with images
- [x] Property detail modal
- [x] Responsive design (mobile-first)
- [x] Footer
