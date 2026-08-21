# Tripona ✈️

A modern and responsive travel platform frontend built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

Tripona is designed to help users discover destinations, explore travel experiences, and interact with a simple travel-assistant chat interface through a clean, engaging, and responsive user interface.

> **Project status:** Frontend development in progress.  
> Backend services, authentication, bookings, and real AI chat responses are planned for future releases.

---

## ✨ Features

- Responsive travel landing page for desktop, tablet, and mobile devices
- Modern hero section with travel-focused visuals
- Destination discovery sections
- Popular destinations and trip cards
- Travel stories section
- Newsletter subscription UI
- Reusable UI components
- Navigation header, mega menu, and footer
- Interactive chat widget
- Chat history persistence using `localStorage`
- Smooth UI interactions and transitions
- Optimized image handling with Next.js `<Image />`

---

## 🛠 Tech Stack

| Technology                                    | Purpose                                     |
| --------------------------------------------- | ------------------------------------------- |
| [Next.js](https://nextjs.org/)                | React framework and application structure   |
| [React](https://react.dev/)                   | Building interactive user interfaces        |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development                       |
| [Tailwind CSS](https://tailwindcss.com/)      | Utility-first styling and responsive design |
| `localStorage`                                | Persisting chat messages in the browser     |
| ESLint                                        | Maintaining code quality and consistency    |

---

## 📁 Project Structure

```text
frontend/
│
├── public/
│   ├── images/                 # Static images used throughout the website
│   └── Thumbnail LinkedIn.jpg
│
├── src/
│   ├── app/                    # Next.js App Router pages and layouts
│   │
│   ├── components/
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   ├── Destinations.tsx
│   │   │   ├── PopularDestinations.tsx
│   │   │   ├── TripSection.tsx
│   │   │   ├── TripCard.tsx
│   │   │   ├── GoodStoriesSection.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Newsletter.tsx
│   │   │   └── ChatWidget.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MegaMenu.tsx
│   │   │
│   │   └── ui/
│   │       └── Button.tsx
│   │
│   ├── constants/
│   │   └── index.ts
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   └── types/
│       └── index.ts
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```
