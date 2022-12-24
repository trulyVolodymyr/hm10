import 'vue-router'
import { routeNames } from '@/router'
import { globalProperties } from '@/plugins'

declare module 'vue-router' {
  interface RouteMeta {
    // todo: this is just an example. Please setup your own route meta params.
    isProtected: boolean
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    // todo: Here you define you global vue definitions.
    $routeNames: typeof routeNames

    $elComponentSize: typeof globalProperties.$elComponentSize
    $elComponentType: typeof globalProperties.$elComponentType
  }
}

export { }