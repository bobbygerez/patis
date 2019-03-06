
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/catalog',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/catalog/index.vue') }
    ]
  },
  {
    path: '/catalog/:id/:category',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/category/products.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/login.vue') }
    ]
  },
  {
    path: '/products/:category/:id/:product',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/products/view.vue') }
    ]
  },
  {
    path: '/cart',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/cart/view.vue') }
    ]
  },
  {
    path: '/checkout',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/checkout/index.vue') }
    ]
  },
  {
    path: '/dashboard',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/index.vue') }
    ]
  },
  {
    path: '/dashboard/profile/:id',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/profile.vue') }
    ]
  },
  {
    path: '/dashboard/users',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/users/index.vue') }
    ]
  },
  {
    path: '/dashboard/user/:id',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/users/edit.vue') }
    ]
  },
  {
    path: '/dashboard/roles',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/roles/index.vue') }
    ]
  },
  {
    path: '/dashboard/role/:id',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/roles/edit.vue') }
    ]
  },
  {
    path: '/dashboard/categories',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/categories.vue') }
    ]
  },
  {
    path: '/dashboard/category/:id',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/category/index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
