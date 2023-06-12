<script>
import PageHeader from "./PageHeader.vue";
    export default {
      name: 'PageMain',
        data(){
            return{

            }
        },
        components: { PageHeader }
       
    }
</script>

<template>
    <section class="main h-100">

        <!-- Hero section -->
        <section class="hero text-white">
            <PageHeader class="text-white"/>
            <div class="px-4 pb-5 pt-4 text-center">
                <h1 class="display-5 fw-bold">Untold stories</h1>
                <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">There is an untold story behind every favourite song</p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" class="btn btn-primary btn-lg px-4 gap-3 rounded-0">Primary button</button>
                        <button type="button" class="btn btn-outline-secondary btn-lg px-4 rounded-0">Secondary</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Hero section -->


    </section>

</template>

<style lang="scss">
@use './../styles/partials/variable.scss' as *;

.hero{
    background-image: url('./../assets/images/home_slider.jpg');
    background-size: cover;
}

.btn-primary{
    background-color: $red;
    border-color: $red;
}


</style>