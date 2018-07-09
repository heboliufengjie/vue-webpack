import App from './App.vue';
import Vue from '../node_modules/vue/dist/vue.min.js';

new Vue({
    el: '#app',
    data: {
        "msg": 'test Vue'
    },
    components: {
        App
    }
});