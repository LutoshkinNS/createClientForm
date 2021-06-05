import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import './assets/style.sass';
import './directive';

Vue.use(Vuelidate);

Vue.config.productionTip = true;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
