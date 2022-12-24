import { createApp } from 'vue'
import App from '@/App.vue'

import { router } from '@/router'
import { store } from '@/store/create-store'
import { VueGlobalPropertiesPlugin } from '@/plugins'

import '@/assets/styles/main.scss'

const app = createApp(App)

app
  .use(router)
  .use(store)
  .use(VueGlobalPropertiesPlugin)
  .mount('#app')

export {
  app
}
