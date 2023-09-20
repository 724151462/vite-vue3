import { defineComponent } from "vue";

import "./styles/index.css"

import { a } from './test'

export default defineComponent({
    setup() {
        return () => {
            return <div class="root">Hellow Vue3 {a.name}</div>
        }
    }
})