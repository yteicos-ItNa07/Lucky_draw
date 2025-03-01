import './assets/main.css'

import { createApp } from 'vue'
import main from './main.vue'
import participantslist from './participantslist.vue'
import luckydraw from './luckydraw.vue'
import navbar from "./navbar.vue"

createApp(main).mount('#main')
createApp(participantslist).mount('#participantslist')
createApp(luckydraw).mount('#luckydraw')
createApp(navbar).mount('#navbar')

