import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify/lib'
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false

const vuetifyTheme = new Vuetify({
  theme: {
    themes: {
      dark: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        anchor: '#8c9eff',
      },
    },
  },
})


Vue.use(vuetifyTheme)

export default new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
