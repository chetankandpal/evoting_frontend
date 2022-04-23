import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _574a69b3 = () => interopDefault(import('../pages/Blockerpage.vue' /* webpackChunkName: "pages/Blockerpage" */))
const _7841674d = () => interopDefault(import('../pages/candidate.vue' /* webpackChunkName: "pages/candidate" */))
const _fe948544 = () => interopDefault(import('../pages/Notified.vue' /* webpackChunkName: "pages/Notified" */))
const _e6ac2508 = () => interopDefault(import('../pages/start_election.vue' /* webpackChunkName: "pages/start_election" */))
const _2b84299c = () => interopDefault(import('../pages/Votedone.vue' /* webpackChunkName: "pages/Votedone" */))
const _75c3af5e = () => interopDefault(import('../pages/voters.vue' /* webpackChunkName: "pages/voters" */))
const _763ee41c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _574a69b3,
    name: "Blockerpage"
  }, {
    path: "/candidate",
    component: _7841674d,
    name: "candidate"
  }, {
    path: "/Notified",
    component: _fe948544,
    name: "Notified"
  }, {
    path: "/start_election",
    component: _e6ac2508,
    name: "start_election"
  }, {
    path: "/Votedone",
    component: _2b84299c,
    name: "Votedone"
  }, {
    path: "/voters",
    component: _75c3af5e,
    name: "voters"
  }, {
    path: "/",
    component: _763ee41c,
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
