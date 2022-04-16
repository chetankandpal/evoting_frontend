import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a7a1932c = () => interopDefault(import('../pages/Blockerpage.vue' /* webpackChunkName: "pages/Blockerpage" */))
const _268ff5c4 = () => interopDefault(import('../pages/candidate.vue' /* webpackChunkName: "pages/candidate" */))
const _1c9ff7f2 = () => interopDefault(import('../pages/Notified.vue' /* webpackChunkName: "pages/Notified" */))
const _8b565d36 = () => interopDefault(import('../pages/start_election.vue' /* webpackChunkName: "pages/start_election" */))
const _7e1c053a = () => interopDefault(import('../pages/voters.vue' /* webpackChunkName: "pages/voters" */))
const _51e573da = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Blockerpage",
    component: _a7a1932c,
    name: "Blockerpage"
  }, {
    path: "/candidate",
    component: _268ff5c4,
    name: "candidate"
  }, {
    path: "/Notified",
    component: _1c9ff7f2,
    name: "Notified"
  }, {
    path: "/start_election",
    component: _8b565d36,
    name: "start_election"
  }, {
    path: "/voters",
    component: _7e1c053a,
    name: "voters"
  }, {
    path: "/",
    component: _51e573da,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
