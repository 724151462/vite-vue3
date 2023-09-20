import { createApp } from 'vue'
import './style.css'
import App from './App'

// import Worker from './worker?worker' // 静态资源worker 多线程

// const worker = new Worker()

// worker.onmessage = function (e) {
//     console.log(e)
// }

createApp(App).mount('#app')
