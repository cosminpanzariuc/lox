Vue.config.productionTip = false;
import Vue from 'vue';
import MovieList from './components/MovieList.vue';
import MovieFilter from './components/MovieFilter.vue';
import './style.scss';

new Vue({
    el: '#app',
    data(){
        return {
            genre: [],
            time: []
        }
    },
    methods: {
        checkFilter(category, title, checked){
            if (checked) {
                this[category].push(title);
            } else {
                let index = this[category].indexOf(title);
                if (index > -1) {
                    this[category].splice(index, 1);
                }
            }
        }
    },
    components: {
        MovieList,
        MovieFilter
    }
});