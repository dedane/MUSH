    import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import register from './views/Register.vue';
import Login from './views/Login.vue';
import Dashboard from './views/Dashboard/Dashboard.vue';
import statistics from './components/Statistics.vue';
import personal from './components/Personal.vue';
import farmhouse from './components/Farmhouse.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/About',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/Register',
      name: 'register',
      component: register,
          children : [
            {
              path: 'Farmhouse',
                name: 'farmhouse',
              component: farmhouse,
          
            },
            {
                path: 'Personal',
              name:'personal',
              component: personal,
        },
        {
          path: 'Statistics',
          name: 'statistics',
          component: statistics
        }
      ]
      
    },
    {
      path: '/Login',
      name: 'login',
      component: Login
    },
    {
      path: './Dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
});
