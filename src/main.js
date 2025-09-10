import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
// Dark mode composable
import './composables/useSimpleDarkMode'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Add icons to library
library.add(fas, fab)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

// Register Font Awesome component globally
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
