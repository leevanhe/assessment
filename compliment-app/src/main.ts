import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Unicon from 'vue-unicons'
import { uniThumbsUp, uniSmile, uniFrown, uniGrin, uniLaughing, uniSmileBeam, uniSmileWink } from 'vue-unicons/dist/icons'
import App from './App.vue'
import router from './router'

Unicon.add([uniThumbsUp, uniSmile, uniFrown, uniGrin, uniLaughing, uniSmileBeam, uniSmileWink])

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Unicon)

app.mount('#app')
