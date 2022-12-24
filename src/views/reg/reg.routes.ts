import type { RouteRecordRaw } from 'vue-router'
import Registration from '@/views/reg/Registration.vue'

export const registrationRoutesNames = {
  registration: 'registration'
}

export const registrationRoutes: RouteRecordRaw[] = [
  {
    path: '/registration',
    name: registrationRoutesNames.registration,
    component: Registration
  }
]
