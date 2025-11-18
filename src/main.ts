import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import { createPinia } from "pinia"

const pinia = createPinia() 

// Components
import App from './App.vue'
import router from "./router/index.ts";
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})
pinia.use(piniaPluginPersistedstate);
createApp(App).use(vuetify).use(router).use(pinia).mount('#app')