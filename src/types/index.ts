export type ProjectCategory = 'all' | 'web' | 'mobile' | 'backend'

export interface Project {
  id: number
  category: Exclude<ProjectCategory, 'all'>
  icon: string
  title: string
  description: string
  tags: string[]
  year: string
  link?: string
}

export interface Experience {
  id: number
  role: string
  company: string
  type: string
  period: string
  description: string
  techs: string[]
}

export interface ContactLink {
  id: number
  icon: string
  title: string
  value: string
  href: string
}

export type Page = 'home' | 'projects' | 'experience' | 'contact'
