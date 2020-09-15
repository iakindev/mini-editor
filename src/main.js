import Vue from 'vue';
import App from './App.vue';
import TextareaAutosize from 'vue-textarea-autosize';
import { MdButton, MdIcon, MdSpeedDial } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(TextareaAutosize);
Vue.use(MdButton);
Vue.use(MdIcon);
Vue.use(MdSpeedDial);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
