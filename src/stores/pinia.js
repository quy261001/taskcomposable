import { defineStore } from 'pinia';
export const showPinia = defineStore('taskPinia', {
    state: () => ({
       tasks: [
        {
            ishowPinia: 'default'
        }
       ]
    })
})