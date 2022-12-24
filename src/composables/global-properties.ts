import type { ComponentCustomProperties } from 'vue'

export function useGlobalProperties () {
  return getCurrentInstance()?.appContext.config.globalProperties as ComponentCustomProperties
}
