// ---------------------------------------------------------
//                    router/routes.ts
// ---------------------------------------------------------
import { createRouter, createWebHistory } from 'vue-router';
// ---------------------------------------------------------

// Lazy load pages
const routes = [
  { path: '/', component: () => import('../pages/home/home.page.vue') },
  { path: '/about', component: () => import('../pages/about/about.page.vue') },
  { path: '/register', component: () => import('../pages/auth/login.page.vue') },
  { path: '/our-journey', component: () => import('../pages/our-journey/our-journey.page.vue') },
];
// ____________________________________________________________________

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  // Scroll to top of the page on route change
  scrollBehavior() {
    return { top: 0 };
  }
});
// ____________________________________________________________________