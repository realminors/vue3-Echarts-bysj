import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
    {
      path:'/index',
      name: 'index',
      component:()=>import(`../views/index/index.vue`)
    },
    {
      path:'/',
      redirect: '/index'
    },
    {
      path:'/Liver',
      name: 'Liver',
      component:()=>import(`../views/Liver/index.vue`)
    },
    {
      path:'/Leukemia',
      name: 'Leukemia',
      component:()=>import(`../views/Leukemia/index.vue`)
    },
    {
      path:'/Brain',
      name: 'Brain',
      component:()=>import(`../views/Brain/index.vue`)
    },
    {
      path:'/Breast',
      name: 'Breast',
      component:()=>import(`../views/Breast/index.vue`)
    },
    {
      path:'/humor11',
      name: 'humor11',
      component:()=>import(`../views/humor11/index.vue`)
    },
    {
      path:'/Lung',
      name: 'Lung',
      component:()=>import(`../views/Lung/index.vue`)
    },
    {
      path:'/MFD',
      name: 'MFD',
      component:()=>import(`../views/MFD/index.vue`)
    },
    {
      path:'/humor5',
      name: 'humor5',
      component:()=>import(`../views/humor5/index.vue`)
    },
    {
      path:'/HAPT',
      name: 'HAPT',
      component:()=>import(`../views/HAPT/index.vue`)
    },
    {
      path:'/METABRIC',
      name: 'METABRIC',
      component:()=>import(`../views/METABRIC/index.vue`)
    },
    {
      path:'/Pancancer',
      name: 'Pancancer',
      component:()=>import(`../views/Pancancer/index.vue`)
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router