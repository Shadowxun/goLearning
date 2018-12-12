// 入口文件

//导入 MUI 样式
import './lib/mui/css/mui.min.css'

//按需导入 Mint-UI 中的组件
import  { Header } from  'mint-ui';
Vue.component(Header.name,Header)


//导入App根组件
import  app from './App.vue'
import Vue from "vue";



var vm  = new Vue({
    el: '#app',
    render: c => c(app)
})