<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import {iShow} from '../composables/eventMouse.js'
import {showPinia} from '../stores/pinia.js'
import { onUnmounted } from '@vue/runtime-core'
let { ishow } = iShow()
let taskPinia = showPinia()
console.log('composable:', ishow)
console.log('pinia:', taskPinia.tasks[0].ishowPinia)
onUnmounted(() => {
  ishow = 'change composable';
  taskPinia.tasks[0].ishowPinia = 'change store'
  console.log('composable:', ishow)
  console.log('pinia:', taskPinia.tasks[0].ishowPinia)
}) 
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
