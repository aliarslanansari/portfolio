import { Redirect } from 'react-router-dom'
import lazyLoader from './utils/lazyLoader'

export const routeConfig = {
  homePage: {
    render: lazyLoader(() => import('./containers/HomePage')),
    exact: true,
    path: '/',
  },
  project: {
    render: lazyLoader(() => import('./containers/ProjectPage')),
    exact: true,
    path: '/project',
  },
  about: {
    render: lazyLoader(() => import('./containers/AboutPage')),
    exact: true,
    path: '/about',
  },
  blog: {
    render: lazyLoader(() => import('./containers/BlogsPage')),
    exact: true,
    path: '/blog',
  },
  contact: {
    render: lazyLoader(() => import('./containers/ContactPage')),
    exact: true,
    path: '/contact',
  },
  notFoundPage: {
    render: () => <Redirect to='/' />,
    path: '/*',
  },
}
