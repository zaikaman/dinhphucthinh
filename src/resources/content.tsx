import { About, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Thinh",
  lastName: "Dinh",
  name: "Thinh Dinh",
  role: "Software Engineer",
  avatar: "/images/thinh-avatar.jpg",
  email: "zaikaman123@gmail.com",
  location: "Asia/Ho_Chi_Minh",
  languages: ["Vietnamese", "English"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: <>Occasional notes about building products and shipping fast.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/zaikaman",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/th%E1%BB%8Bnh-%C4%91inh-aa8727395",
    essential: true,
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/ThinhDinh1706",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/dinfucthin",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>I build ambitious software and ship fast</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">ClashX</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Pacifica Hackathon Grand + Track winner
        </Text>
      </Row>
    ),
    href: "/work/clashx-autonomous-trading-bot-platform",
  },
  subline: (
    <>
      I&apos;m Thinh, a software engineer from Ho Chi Minh City, Vietnam. I build AI products,
      web platforms, and blockchain experiences with a strong focus on practical impact.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I&apos;m a software engineer born in 2004 and currently studying Software Engineering at
        Saigon University. I like building products that feel complete end to end, especially when
        the work combines AI, automation, realtime systems, and strong product design.
        <br />
        <br />
        My favorite projects start as hackathon ideas and turn into shipped systems with clear
        workflows, practical UX, and enough technical depth to be useful beyond the demo stage.
      </>
    ),
  },
  work: {
    display: true,
    title: "Projects & Wins",
    experiences: [
      {
        company: "ClashX",
        timeframe: "2026",
        role: "Grand Prize Winner + Trading Applications & Bots Track Winner - Pacifica Hackathon",
        achievements: [
          <>
            Built an autonomous trading bot platform on Pacifica Perpetuals with delegated wallet
            execution, visual strategy composition, and AI-assisted bot generation.
          </>,
          <>
            Shipped copy trading, portfolio allocation, backtesting, marketplace discovery, and
            live performance analytics into one production-grade workflow.
          </>,
          <>
            Delivered a full-stack system across Next.js frontend, FastAPI services, background
            workers, and Pacifica API integrations to move from demo concept to deployable product.
          </>,
        ],
        images: [],
      },
      {
        company: "Narrato",
        timeframe: "2025",
        role: "Winner - Shov's Coding Challenge",
        achievements: [
          <>
            Built a prompt-to-story pipeline that turns one idea into a complete story with text,
            paragraph-level illustrations, narration, and exportable output.
          </>,
          <>
            Added a character database and style guide analysis stage so visual output stays
            consistent across every generated scene.
          </>,
          <>
            Shipped story history, public story browsing, passwordless login, PDF export, and live
            progress updates for long AI generation flows.
          </>,
        ],
        images: [],
      },
      {
        company: "LegalEagle",
        timeframe: "2025",
        role: "Winner - Abysshub Hackathon",
        achievements: [
          <>
            Built a contract risk scanner that extracts PDF text, classifies clause-level risks, and
            generates color-coded redlines with explanations.
          </>,
          <>
            Designed executive summary pages with heatmaps, top risks, and remediation guidance so
            both legal and non-legal stakeholders can act quickly.
          </>,
          <>
            Added jurisdiction-aware analysis, cached results, and multilingual font support to make
            the output practical for real-world document workflows.
          </>,
        ],
        images: [],
      },
      {
        company: "KaspaClash",
        timeframe: "2026",
        role: "Winner - Kaspathon",
        achievements: [
          <>
            Created a blockchain-powered PvP fighting game with wallet connection, matchmaking,
            live betting, and progression systems.
          </>,
          <>
            Built confirmation-aware game flow so moves, bets, and cosmetic actions align with
            Kaspa&apos;s fast block confirmations instead of relying on fake optimistic UI.
          </>,
          <>
            Shipped battle pass, quests, achievements, prestige, replay, and treasury mechanics to
            make the game feel like a full product rather than a proof of concept.
          </>,
        ],
        images: [],
      },
      {
        company: "CodeForgeAI",
        timeframe: "2025",
        role: "Winner - ADK-TS Hackathon",
        achievements: [
          <>
            Developed a multi-agent developer platform with intelligent routing, code generation,
            review workflows, and GitHub MCP integration.
          </>,
          <>
            Extended the system across web, bot, voice, and background-job channels so the workflow
            works in more than one interaction style.
          </>,
          <>
            Contributed framework improvements while shipping a production-ready developer
            experience with practical automation instead of a demo-only interface.
          </>,
        ],
        images: [],
      },
      {
        company: "RogueAgent",
        timeframe: "2025",
        role: "Winner - Agent Arena Hackathon",
        achievements: [
          <>
            Built an autonomous multi-agent crypto intelligence and trading system that runs
            continuously.
          </>,
          <>
            Combined market scanning, bias-first analysis, signal publication, and execution
            workflows into one unified platform.
          </>,
          <>
            Added signal quality gating, tiered distribution, futures execution, and monitoring so
            the system could operate as a true 24/7 trading oracle.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Saigon University",
        description: (
          <>
            Software Engineering student focused on applied product building, AI systems, and
            shipping ideas into real applications.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Full-Stack Web Engineering",
        description: (
          <>
            Building scalable apps with modern TypeScript stacks, backend integrations, and
            production-grade deployment workflows.
          </>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        images: [],
      },
      {
        title: "AI Product Engineering",
        description: (
          <>
            Designing AI-first products with LLM orchestration, prompt engineering, and agentic
            architecture for practical use cases.
          </>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        images: [],
      },
      {
        title: "Product Design & UX",
        description: (
          <>
            Translating complex technical systems into clear user flows, clean interfaces, and
            onboarding experiences users can understand quickly.
          </>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        images: [],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Products, experiments, and hackathon-winning builds by ${person.name}`,
};

export { person, social, newsletter, home, about, work };
