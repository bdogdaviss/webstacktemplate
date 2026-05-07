export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  href: string
  featured: boolean
}

export const projects: Project[] = [
  { slug: 'placeholder-1', title: '', description: '', tags: [], href: '#', featured: true },
  { slug: 'placeholder-2', title: '', description: '', tags: [], href: '#', featured: true },
  { slug: 'placeholder-3', title: '', description: '', tags: [], href: '#', featured: true },
  { slug: 'placeholder-4', title: '', description: '', tags: [], href: '#', featured: false },
  { slug: 'placeholder-5', title: '', description: '', tags: [], href: '#', featured: false },
]
