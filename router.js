import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _13b3aa38 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _f70cd6ca = () => interopDefault(import('../pages/games/index.vue' /* webpackChunkName: "pages/games/index" */))
const _322733a5 = () => interopDefault(import('../pages/games/lights-out.vue' /* webpackChunkName: "pages/games/lights-out" */))
const _8cb6e3ee = () => interopDefault(import('../pages/games/snake.vue' /* webpackChunkName: "pages/games/snake" */))
const _15de05a9 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _13b3aa38,
    name: "about"
  }, {
    path: "/games",
    component: _f70cd6ca,
    name: "games"
  }, {
    path: "/games/lights-out",
    component: _322733a5,
    name: "games-lights-out"
  }, {
    path: "/games/snake",
    component: _8cb6e3ee,
    name: "games-snake"
  }, {
    path: "/",
    component: _15de05a9,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
