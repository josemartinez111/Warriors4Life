// ---------------------------------------------------------
//                         main.ts
// ---------------------------------------------------------

import { createPinia } from 'pinia';
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { router } from './router/routes.ts';
// ---------------------------------------------------------

const app = createApp(App);
const pinia = createPinia();
// ____________________________________________________________________

app.use(pinia)
app.use(router);
// ____________________________________________________________________
// mount the app
app.mount('#app');
// ____________________________________________________________________