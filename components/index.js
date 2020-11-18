export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Navigation } from '../../components/Navigation.vue'
export { default as RandomThoughts } from '../../components/RandomThoughts.vue'
export { default as EmphasizableText } from '../../components/atoms/EmphasizableText.vue'
export { default as HeaderChoice } from '../../components/molecule/HeaderChoice.vue'

export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/Header" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyNavigation = import('../../components/Navigation.vue' /* webpackChunkName: "components/Navigation" */).then(c => c.default || c)
export const LazyRandomThoughts = import('../../components/RandomThoughts.vue' /* webpackChunkName: "components/RandomThoughts" */).then(c => c.default || c)
export const LazyEmphasizableText = import('../../components/atoms/EmphasizableText.vue' /* webpackChunkName: "components/atoms/EmphasizableText" */).then(c => c.default || c)
export const LazyHeaderChoice = import('../../components/molecule/HeaderChoice.vue' /* webpackChunkName: "components/molecule/HeaderChoice" */).then(c => c.default || c)
