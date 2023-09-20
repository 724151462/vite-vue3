import { defineComponent } from "vue";

import "./styles/index.css"

import logo from './assets/vue.svg'

import { a } from './test'

import test from './test?url' // url：路径、raw: 字符串

console.log(test)


export default defineComponent({
    setup() {
        return () => {
            return <div class="root">
                        Hellow Vue3 {a.name}
                        <img src={logo} alt="" />
                    </div>
        }
    }
})