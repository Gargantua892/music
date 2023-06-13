<script>
import { store } from "./../store.js"
    export default {
      name: 'PageHeader',
        data(){
            return{
              store
            }
        },
       
    }
</script>

<!-- data-bs-toggle="offcanvas" role="button" aria-controls="sidebar -->

<template>
<nav class="navbar px-2">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="./../assets/images/avada-music-logo-retina.png" alt="" width="180">
    </a>
    <i class="bi bi-list fs-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation"></i>
    <div class="offcanvas offcanvas-end w-100 redBkg" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <img src="./../assets/images/avada-music-logo-retina.png" alt="" width="180">
        <button type="button" class="btn-close text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item display-6 py-3" v-for="item in store.menu">
            <a class="nav-link active text-white " aria-current="page" href="#">{{item}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</template>

<style lang="scss" scoped>

</style>