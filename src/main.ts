import { createApp } from "vue";
//import VueRouter from 'vue-router'

import App from "./App.vue";
import Map from "./components/Map.vue";
import HelloWorld from "./components/HelloWorld.vue"
import StrategySetting from './components/StrategySetting.vue'
import SystemSetting from './components/SystemSetting.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

// import "~/styles/element/index.scss";

 import ElementPlus from "element-plus";
 import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import "~/styles/index.scss";
import "element-plus/dist/index.css";
import 'element-plus/theme-chalk/dark/css-vars.css'//暗黑主题
import 'uno.css'

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss"


//定义路由
const routes=[
    {path:'/Map',component:Map},
    // {path:'/HelloWorld',component:HelloWorld},
    {path:'/StrategySetting',component:StrategySetting},
    {path:'/SystemSetting',component:SystemSetting}
]

export const router=createRouter({
    history:createWebHashHistory(),
    routes
})



const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(router);
app.use(ElementPlus);
app.mount("#app");
