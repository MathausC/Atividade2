import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(''),
        meta: {
            title: ''
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

/**
 * Function to set the title to the page.
 * @param {Route} to - where the router is going.
 * @param {Route} from - where the router is.
 * @private
 */
 function _setTitleToPage (to, from) {
    document.title = `Shop${to.meta.title ? ` | ${to.meta.title}` : ''}`
  }
  
  router.beforeEach((to, from, next) => {
    _setTitleToPage(to, from)
    next()
  })
  
  export default router
  