import { reactive } from "vue"

export const store = reactive({
    //Array con voci del menù
    menu: [ "Home", "Meet the band", "Live Dates", "Latest news", "Albums", "Fans" ],

    //Array con voci del menù
    icons: [ "bi-facebook", "bi-twitter", "bi-instagram", "bi-youtube"],

});