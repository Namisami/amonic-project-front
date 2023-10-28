import { createApp } from 'vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import router from './router'
import './index.css'

import vant, { Notify, Toast } from 'vant'
import '@vant/touch-emulator'

import 'vant/lib/index.css'
import { store } from '@/store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()
const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App)

app.use(store)

app.use(router)

app.use(vuetify)
app.use(vant)
app.use(vant.Lazyload)
app.use(Toast)
app.use(Notify)

app.use(ElementPlus)

app.mount('#app')
