import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage'
import BlogDetailsPage from '@/pages/BlogDetailsPage'
import BlogPage from '@/pages/BlogPage'
import ProjectPage from '@/pages/ProjectPage'
import ProjectDetailsPage from '@/pages/ProjectDetailsPage'
import NotFound from '@/pages/NotFound'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/blog',
        name: 'blog',
        component: BlogPage,
    },
    {
        path: '/blogdetails',
        name: 'blogdetails',
        component: BlogDetailsPage,
    }, 
    {
        path: '/project',
        name: '/project',
        component: ProjectPage,
    },
    {
        path: '/projectdetails',
        name: 'projectdetails',
        component: ProjectDetailsPage,
    },
    {
        path: '/:CatchAll(.*)',
        name: '404',
        component: NotFound,
      }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router