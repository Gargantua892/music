<script>
import { store } from "./../store.js"
    export default {
      name: 'PageFooter',
        data(){
            return{
                store
            }
        },
       
    }
</script>

<template>
    <section>
        <div class="navbar navbar-expand-lg px-2 py-4 greyBkg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="./../assets/images/avada-music-logo-retina.png" alt="" width="140">
                </a>
                <div class="justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav flex-row gap-2">
                    <a v-for="item in store.menu" class="nav-link text-white" aria-current="page" href="#">{{item}}</a>
                </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="navbar navbar-expand-lg px-2 py-4 darkGreyBkg">
            <div class="container-fluid text-white">
                <ul class="navbar-nav flex-row copyright">
                    <li>© Copyright 2012 - 2023 </li>
                    <li> Avada Website Builder by ThemeFusion </li>
                    <li> All Rights Reserved </li>
                    <li> Powered by WordPress </li>
                </ul>
                <ul class="navbar-nav flex-row gap-3 social">
                    <li class="greyBkg" v-for="socialIcon in store.icons">
                        <a href=""><i :class="`bi ${socialIcon}`"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

.copyright li{
    font-size: 12px;
}

.copyright li:after{
    content: "|";
    color: aliceblue;
    padding: 0px 4px;
}

.social li{
    padding: 8px 12px;
    border-radius: 4px;

    a{
        color: #fff;
    }
}

</style>