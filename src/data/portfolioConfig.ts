export const portfolioConfig = {
  personal: {
    name: "Lucas Brandi",
    tagline: "Fullstack Developer | Passionate about turning coffee into efficient code ☕️💻",
    bio: "Fullstack Developer focused on creating complete and efficient solutions. Currently dividing time between improving skills and focusing on modern architectures.",
    currentGoals: "Mastering robust microservices creation and deepening knowledge in the NestJS ecosystem for high-performance deliveries."
  },
  skills: {
    frontend: [
      { name: "React", level: "advanced" },
      { name: "Vite", level: "advanced" },
      { name: "Tailwind CSS", level: "advanced" },
      { name: "HTML5", level: "advanced" },
      { name: "CSS3", level: "advanced" }
    ],
    backend: [
      { name: "JavaScript", level: "advanced" },
      { name: "TypeScript", level: "advanced" },
      { name: "Java", level: "intermediate" },
      { name: "Spring", level: "intermediate" },
      { name: "Python", level: "intermediate" }
    ]
  },
  social: {
    linkedin: "https://www.linkedin.com/in/lucas-gabriel-brandi-dantas-1b358224b/",
    instagram: "https://www.instagram.com/lucasgb_dantas?igsh=MWVkcW9odTJpN3Bmbg==",
    github: "https://github.com/Lucas-Brandi"
  },
  github: {
    username: "Lucas-Brandi",
    apiUrl: "https://api.github.com/users/Lucas-Brandi/repos"
  }
};

export type PortfolioConfig = typeof portfolioConfig;
