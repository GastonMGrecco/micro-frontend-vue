
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';


// Mount function to start up the app
const mount = (el) => {
    const app = createApp(App);
    app.use(router);
    app.mount(el);
  
}


if (process.env.NODE_ENV === 'development') {
    const selector = document.getElementById('rootv');
 
    if (selector) {
        mount(selector);
    }

  }

export { mount } ;
