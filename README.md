# Portfolio — React + TypeScript + Redux + Tailwind

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 🛠️ Tech Stack

- **React 18** + **TypeScript**
- **Redux Toolkit** — global state (active page, cursor, project filters, accordion)
- **Tailwind CSS v3** — utility-first styling with custom design tokens
- **Vite** — lightning-fast dev server & build tool
- **React Router DOM** — (included, ready to use for multi-page routing)

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx        # Sticky nav, dispatches setPage
│   └── CursorGlow.tsx    # Mouse-tracking glow effect via Redux
│   └── ProjectCard.tsx   # Reusable project card
├── pages/
│   ├── Home.tsx          # Hero, skills, animated stats
│   ├── Projects.tsx      # Filterable project grid
│   ├── Experience.tsx    # Accordion timeline
│   └── Contact.tsx       # Links + availability banner
├── store/
│   ├── index.ts          # configureStore
│   └── slices/
│       ├── uiSlice.ts    # currentPage, cursor position
│       └── projectsSlice.ts # filter, openExperienceId
├── hooks/index.ts        # Typed useAppSelector / useAppDispatch
├── data/index.ts         # All content data (edit here!)
├── types/index.ts        # TypeScript interfaces
└── App.tsx               # Page router based on Redux state
```

## ✏️ Customization

Edit `src/data/index.ts` to update your name, projects, experience, and contact links.
