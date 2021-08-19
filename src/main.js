import Vue from 'vue';
import App from './App.vue'; // 根组件
import router from './router';
import store from './store';
import ElementUI from 'element-ui'; // 导入element组件库
import 'element-ui/lib/theme-chalk/index.css'; // 导入element组件库样式
Vue.use(ElementUI); // 注册组件库: 全局导入

import formCreate from '@form-create/element-ui';
import FcDesigner from '@form-create/designer';

Vue.use(formCreate);
Vue.use(FcDesigner);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
