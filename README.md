<div align="center">
  <h1>💼 Lucas Brandi — Developer Portfolio</h1>
  <p>
    <b>Fullstack Developer | Passionate about turning coffee into efficient code ☕️💻</b>
  </p>
  <p>
    <img src="https://img.shields.io/badge/React-19-blue?logo=react" />
    <img src="https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript" />
    <img src="https://img.shields.io/badge/Vite-8-purple?logo=vite" />
    <img src="https://img.shields.io/badge/TailwindCSS-4-teal?logo=tailwindcss" />
  </p>
</div>

---

## 📖 About the Project

This is a personal **developer portfolio** built with React + TypeScript + Vite. It showcases my skills, tech stack, and GitHub projects in a clean, animated, and responsive interface — with dark mode support.

> **Highlights:**
>
> - 🌗 Light/Dark mode toggle
> - ✨ Smooth animations powered by Framer Motion
> - 🐙 GitHub integration — projects fetched live from the GitHub API
> - 🧩 Fully modular component architecture
> - 📱 Responsive design for all screen sizes
> - ⚡ Blazing fast with Vite

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Landing section with name, tagline & social links
│   ├── About.tsx         # Bio and current goals
│   ├── TechStack.tsx     # Frontend & backend skill cards
│   ├── Projects.tsx      # GitHub repos fetched via API
│   ├── Footer.tsx        # Footer with contact info
│   └── ThemeToggle.tsx   # Dark/light mode button
├── data/
│   └── portfolioConfig.ts  # Central config — name, bio, skills, social links
├── hooks/
│   ├── useDarkMode.ts      # Dark mode state hook
│   └── useGitHubRepos.ts   # Hook to fetch GitHub repos
├── types/
│   └── index.ts            # Shared TypeScript types
├── App.tsx
└── main.tsx
```

---

## 🛠️ Tech Stack

| Category      | Technologies                         |
| ------------- | ------------------------------------ |
| **Frontend**  | React 19, TypeScript 5.9, Vite 8     |
| **Styling**   | Tailwind CSS 4, PostCSS              |
| **Animation** | Framer Motion                        |
| **Icons**     | Lucide React, React Icons            |
| **Data**      | GitHub REST API (live repo fetching) |

---

## 🚀 Getting Started

```sh
# 1. Clone the repository
git clone https://github.com/Lucas-Brandi/meu-website.git
cd meu-website

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Other available scripts:

```sh
npm run build    # Production build (TypeScript check + Vite build)
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

---

## ⚙️ Configuration

All personal information is centralized in `src/data/portfolioConfig.ts`. To customize the portfolio for yourself, just update that file:

```ts
export const portfolioConfig = {
  personal: {
    name: 'Your Name',
    tagline: 'Your tagline here',
    bio: 'A short bio about yourself.',
    currentGoals: "What you're focused on right now.",
  },
  social: {
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-profile',
    instagram: 'https://instagram.com/your-handle',
  },
  github: {
    username: 'your-github-username',
    apiUrl: 'https://api.github.com/users/your-github-username/repos',
  },
  skills: {
    frontend: [
      /* ... */
    ],
    backend: [
      /* ... */
    ],
  },
};
```

---

## 🔗 Social Links

- **GitHub:** [github.com/Lucas-Brandi](https://github.com/Lucas-Brandi)
- **LinkedIn:** [linkedin.com/in/lucas-gabriel-brandi-dantas](https://www.linkedin.com/in/lucas-gabriel-brandi-dantas-1b358224b/)
- **Instagram:** [@lucasgb_dantas](https://www.instagram.com/lucasgb_dantas)

---

## 👨‍💻 Author

Made with 💙 by **Lucas Brandi** — a fullstack developer focused on building complete, efficient, and modern solutions.
