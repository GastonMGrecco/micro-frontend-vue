import { createRouter, createWebHistory } from 'vue-router'
import  Home from '../views/Home.vue'
import  List from '../views/List.vue'
import  News from '../views/News.vue'
import  Graph from '../views/Graph.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'home',
        component:Home
      },
    {
      path: '/list',
      name: 'list',
      component:List
    },
    {
        path: '/news',
        name: 'news',
        component:News
      },
      {
        path: '/graph',
        name: 'graph',
        component:Graph
      },
 
  ]
})

export default router