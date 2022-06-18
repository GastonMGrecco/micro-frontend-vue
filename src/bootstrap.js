
import { createApp } from 'vue';
import App from './App.vue';



// Mount function to start up the app
const mount = (el) => {
    const app = createApp(App);
    app.mount(el);
  
}


if (process.env.NODE_ENV === 'production') {
    const selector = document.getElementById('rootv');
 
    if (selector) {
        mount(selector);
    }

  }

export { mount } ;
