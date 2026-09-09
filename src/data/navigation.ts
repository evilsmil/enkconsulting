export type PageId = 'home' | 'services' | 'about' | 'projects' | 'trainings' | 'contact'

export const navItems: Array<{ id: PageId; label: string }> = [
  { id: 'home', label: 'Accueil' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'À propos' },
  { id: 'projects', label: 'Nos réalisations' },
  { id: 'trainings', label: 'Nos formations' },
]
