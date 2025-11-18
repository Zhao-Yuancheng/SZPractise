import {defineStore} from 'pinia'

export const useFiguresStore = defineStore("figures",{
    state:()=> {
        return{
            index_now:0,
        }
    },
    persist: true,
})

export default useFiguresStore