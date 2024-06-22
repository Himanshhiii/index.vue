import { createApp } from 'vue';
import App from './App.vue';

// Dynamically create a div element to mount the Vue app
const appDiv = document.createElement('div');
appDiv.id = 'app';
document.body.appendChild(appDiv);

createApp(App).mount('#app');
