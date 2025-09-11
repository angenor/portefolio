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


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjWmehsTq17Adza31k1SvqTQnvLZ0m9TE",
  authDomain: "angenor.firebaseapp.com",
  projectId: "angenor",
  storageBucket: "angenor.firebasestorage.app",
  messagingSenderId: "408793678615",
  appId: "1:408793678615:web:3deeca834b199e75792d52",
  measurementId: "G-HY9FGQGJTG"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);
const db = getFirestore(appFirebase);

// Export Firestore instance for use in components
export { db };


// Add icons to library
library.add(fas, fab)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

// Register Font Awesome component globally
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
