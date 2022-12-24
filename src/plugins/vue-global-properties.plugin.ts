import type { Plugin } from 'vue'
import { routeNames } from '@/router'

export const globalProperties = {
  $routeNames: routeNames,

  $elComponentSize: {
    small: 'small',
    default: 'default',
    large: 'large'
  },
  $elComponentType: {
    primary: 'primary',
    success: 'success',
    warning: 'warning',
    danger: 'danger',
    info: 'info'
  }
}

export const VueGlobalPropertiesPlugin: Plugin = {
  install: (app) => {
    for (const i in globalProperties) {
      app.config.globalProperties[i] = globalProperties[i as keyof typeof globalProperties]
    }
  }
}
