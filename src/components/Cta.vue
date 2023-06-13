<script>
    export default {
      name: 'Cta',
        data(){
            return{

            }
        },
        props:{
            text: String,
        }
       
    }
</script>

<template>
    <!-- Cta -->
    <section class="container-fluid cta p-4">
        <div class="row text-center my-4">
            <a href="#">
                <h5 class="h6 fw-bold text-uppercase">{{ text }}</h5>
            </a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variable.scss' as *;

    .cta{
        background-color: $red;
        transition: 0.5s;

        a{
            text-decoration: none;
        }

        h5{
            color: $white;
            transition: 0.5s;
        }

        &:hover{
            background-color: $white;
        }
        &:hover h5{
            color: #000;
        }
    }
</style>