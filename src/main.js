import './assets/main.css'

import { createApp } from 'vue'
import main from './main_components/main.vue'
import participantslist from './main_components/participantslist.vue'
import luckydraw from './main_components/luckydraw.vue'
import navbar from "./general_components/navbar.vue"

createApp(main).mount('#main')
createApp(participantslist).mount('#participantslist')
createApp(luckydraw).mount('#luckydraw')
createApp(navbar).mount('#navbar')

