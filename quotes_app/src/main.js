import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-http-ca0ba.firebaseio.com/data.json';


Vue.directive('highlight', {
  bind(el, binding, vnode){
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value;

    let delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 1000;
    }

    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});


Vue.filter('to-lowercase', (value)=>{
    return value.toLowerCase();
});


new Vue({
  el: '#app',
  render: h => h(App)
})


