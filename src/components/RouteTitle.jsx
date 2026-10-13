import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects'

const SITE = 'Ankush Chaudhary'
const HOME_TITLE = `${SITE} | Full-Stack Software Engineer (AI)`

const TITLES = {
  '/projects': 'Projects',
  '/experience': 'Experience',
  '/research': 'Research',
  '/contact': 'Contact',
  '/resume': 'Résumé',
}

// Gives every route its own browser tab title.
const RouteTitle = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const clean = pathname.replace(/\/+$/, '') || '/'
    let page = TITLES[clean]

    if (clean.startsWith('/projects/')) {
      const project = getProjectBySlug(clean.replace('/projects/', ''))
      if (project) page = project.title
    }

    document.title = page ? `${page} | ${SITE}` : HOME_TITLE
  }, [pathname])

  return null
}

export default RouteTitle
