# Thinh Dinh — Portfolio

Personal portfolio website for **Thinh Dinh**, a software engineer from Ho Chi Minh City, Vietnam.

**Live site:** [dinhphucthinh.vercel.app](https://dinhphucthinh.vercel.app)

---

## About

I'm a software engineer born in 2004, currently studying Software Engineering at Saigon University. I build AI products, web platforms, and blockchain experiences with a strong focus on practical impact.

This portfolio showcases my hackathon-winning projects — things that started as ideas and turned into shipped systems with real workflows, practical UX, and enough technical depth to be useful beyond the demo stage.

---

## Featured Projects

| Project | Recognition | Description |
|---|---|---|
| **CodeForgeAI** | 🏆 ADK-TS Hackathon Winner | Multi-agent developer platform with intelligent routing, code generation, and GitHub MCP integration |
| **RogueAgent** | 🏆 Agent Arena Hackathon Winner | Autonomous multi-agent crypto intelligence and 24/7 trading oracle |
| **KaspaClash** | 🏆 Kaspathon Winner | Blockchain-powered PvP fighting game with wallet, matchmaking, and live betting |
| **LegalEagle** | 🏆 Abysshub Hackathon Winner | Contract risk scanner with clause-level heatmaps and AI-generated redlines |
| **Narrato** | 🏆 Shov's Coding Challenge Winner | Prompt-to-story pipeline with illustrations, narration, and PDF export |

---

## Tech Stack

- **Framework**: Next.js (App Router)
- **UI System**: Once UI
- **Content**: MDX (projects & blog posts)
- **Styling**: CSS custom properties via Once UI tokens
- **Fonts**: Geist / Geist Mono
- **Deployment**: GitHub Pages (`zaikaman.github.io`)

---

## Getting Started

**1. Clone the repository**
```bash
git clone https://github.com/zaikaman/magic-portfolio.git
```

**2. Install dependencies**
```bash
npm install
```

**3. Set up environment variables**
```bash
cp .env.example .env
```

**4. Run the dev server**
```bash
npm run dev
```

**5. Edit personal info & config**
```
src/resources/content.tsx        # Name, bio, projects, skills, social links
src/resources/once-ui.config.ts  # Theme, colors, routes, SEO base URL
```

**6. Add or edit projects**
```
src/app/work/projects/your-project.mdx
```

---

## Project Structure

```
src/
├── app/
│   ├── work/projects/    # MDX project write-ups
│   ├── blog/posts/       # MDX blog posts (optional)
│   ├── about/            # CV / about page
│   └── gallery/          # Photo gallery (optional)
├── resources/
│   ├── content.tsx       # All personal content
│   └── once-ui.config.ts # Theme & site config
└── components/           # Custom UI components
```

---

## Customization

All personal content lives in **`src/resources/content.tsx`** — name, role, bio, social links, work experience entries, skills, and education.

Site-wide config (theme colors, fonts, routes, base URL for SEO) lives in **`src/resources/once-ui.config.ts`**.

Projects are written as `.mdx` files under `src/app/work/projects/`. Each file supports frontmatter for title, date, summary, tags, and images.

---

## Socials

- **GitHub**: [github.com/zaikaman](https://github.com/zaikaman)
- **LinkedIn**: [linkedin.com/in/thịnh-đình](https://www.linkedin.com/in/th%E1%BB%8Bnh-%C4%91inh-aa8727395)
- **X**: [x.com/ThinhDinh1706](https://x.com/ThinhDinh1706)
- **Instagram**: [@dinfucthin](https://www.instagram.com/dinfucthin)
- **Email**: zaikaman123@gmail.com