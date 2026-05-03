import type { Project, Experience, ContactLink } from '../types'

export const SKILLS = [
  'React', 'TypeScript', 'Redux Toolkit', 'Next.js', 'Tailwind CSS',
  'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'GraphQL',
  'Docker', 'AWS', 'Redis', 'Figma', 'Git',
]

export const STATS = [
  { label: 'YEARS EXP', value: 4, suffix: '+' },
  { label: 'PROJECTS', value: 23, suffix: '' },
  { label: 'CLIENTS', value: 12, suffix: '' },
  { label: 'UPTIME %', value: 99, suffix: '%' },
]

export const PROJECTS: Project[] = [
  { id: 1, category: 'web', icon: '🛒', title: 'E-Commerce Dashboard', description: 'Admin panel with real-time order tracking, inventory management, and revenue analytics via WebSocket.', tags: ['React', 'TypeScript', 'Redux', 'Tailwind'], year: '2024' },
  { id: 2, category: 'web', icon: '💰', title: 'FinTrack SaaS', description: 'AI-powered personal finance tracker with multi-currency support, budgeting goals, and interactive charts.', tags: ['Next.js', 'Prisma', 'PostgreSQL', 'OpenAI'], year: '2024' },
  { id: 3, category: 'mobile', icon: '📱', title: 'GoShop React Native', description: 'Cross-platform shopping app with offline-first architecture, AR product preview, and push notifications.', tags: ['React Native', 'Redux', 'Firebase', 'Expo'], year: '2023' },
  { id: 4, category: 'backend', icon: '⚡', title: 'API Gateway Service', description: 'High-performance REST API handling 50k+ req/min with rate limiting, JWT auth, and Redis caching.', tags: ['Node.js', 'Express', 'Redis', 'Docker'], year: '2023' },
  { id: 5, category: 'web', icon: '🎨', title: 'Collab Board', description: 'Real-time collaborative whiteboard using Canvas API and CRDT algorithm for conflict-free multi-user sync.', tags: ['React', 'WebSocket', 'TypeScript', 'CRDT'], year: '2023' },
  { id: 6, category: 'backend', icon: '🏗️', title: 'Microservices Template', description: 'Production-ready boilerplate with Kafka event bus, Docker Compose, health monitoring, and CI/CD pipeline.', tags: ['Node.js', 'Kafka', 'Docker', 'K8s'], year: '2022' },
]

export const EXPERIENCES: Experience[] = [
  { id: 1, role: 'Senior Frontend Developer', company: 'Tokopedia', type: 'Full-time', period: '2023 — now', description: 'Led the seller dashboard rebuild with React + TypeScript, reducing initial load by 40%. Architected a Redux Toolkit store managing complex e-commerce state for 10M+ daily users. Mentored 5 junior developers.', techs: ['React', 'TypeScript', 'Redux Toolkit', 'Next.js', 'Jest'] },
  { id: 2, role: 'Frontend Developer', company: 'Gojek', type: 'Contract', period: '2022 — 2023', description: "Built real-time driver tracking UI with WebSocket and integrated it into Gojek's micro-frontend architecture. Reduced re-render overhead by 60% using React.memo and custom hooks.", techs: ['React', 'WebSocket', 'MobX', 'Micro-frontend'] },
  { id: 3, role: 'Full-Stack Developer', company: 'Freelance', type: '', period: '2020 — 2022', description: 'Designed and shipped 8 full-stack products for clients in fintech, e-commerce, and SaaS. Sole developer on 5 projects from scoping to production deployment.', techs: ['Next.js', 'Supabase', 'Stripe', 'Tailwind', 'Node.js'] },
]

export const CONTACT_LINKS: ContactLink[] = [
  { id: 1, icon: '✉️', title: 'Email', value: 'arya@pratama.dev', href: 'mailto:arya@pratama.dev' },
  { id: 2, icon: '💼', title: 'LinkedIn', value: 'linkedin.com/in/aryapratama', href: 'https://linkedin.com/in/aryapratama' },
  { id: 3, icon: '🐙', title: 'GitHub', value: 'github.com/aryapratama', href: 'https://github.com/aryapratama' },
  { id: 4, icon: '🐦', title: 'Twitter', value: '@aryapratama_dev', href: 'https://twitter.com/aryapratama_dev' },
]
