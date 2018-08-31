import Vue from 'vue'
import App from './App'
//路由
import router from './router'

// 引入axios
import Axios from 'axios'

// 添加请求拦截器
Axios.interceptors.request.use(function(config) {
  MintUI.Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  });
  return config;
}, function(error) {
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function(response) {
  MintUI.Indicator.close()
  return response;
}, function(error) {
  return Promise.reject(error);
});

Vue.prototype.$axios = Axios

//引入Vant
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
Vue.use(Vant);

//引入MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//引入mui的样式
import '../static/MUI/css/mui.css';

//引入时间
import Moment from 'moment'
Moment.locale('zh-cn')
//过滤器
Vue.filter('converDate', function(value) {
  return Moment(value).startOf('hour').fromNow()
})
// 组件
import NavBar from './components/common/navBar'
Vue.component('navBar', NavBar)

//懒加载
import {
  Lazyload
} from 'mint-ui';
Vue.use(Lazyload);

//缩略图
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

Vue.config.productionTip = false;
new Vue({
  router,
  el: "#app",
  components: { App },
  template: '<App/>'
})
