import { defineStore } from 'pinia'

export const useRequests = defineStore('requests', {
    state: ()=>({
        requests: []
    })
})