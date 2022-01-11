import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/VRP',
    name: 'VRP',
    component: () => import('../views/VRP.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../views/PRHome.vue'),
        children: [
          {
            path: ':id',
            component: () => import('../views/DinamicView.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/VXP',
    name: 'VXP',
    component: () => import('../views/VXP.vue'),
  },
  {
    path: '/FormsView',
    name: 'FormsView',
    component: () => import('../views/FormsView.vue'),
  },
  {
    path: '/Auth',
    name: 'Auth',
    component: () => import('../views/Auth.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
