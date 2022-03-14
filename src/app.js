import { createApp } from 'vue';

// Create application instance
import App from './components/App.vue';
const app = createApp(App);

import HelloWorld from './components/HelloWorld.vue';
app.component('HelloWorld', HelloWorld);

app.mount('#app');
