<script>
    export default {
      name: 'TextCenter',
        data(){
            return{

            }
        },
        
        props: {
            title: String,
            text: String,
        }
       
    }
</script>

<template>

    <!-- Below Hero section -->
    <div class="row text-center my-5">
        <h2 class="display-5 fw-bold">{{ title }}</h2>
        <div class="col-lg-6 mx-auto">
            <p class="text-secondary">{{ text }}</p>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use './../styles/partials/variable.scss' as *;

.below-hero{
    background-color: $grey;
}

h2:after{
    display: block;
    content: "";
    height: 2px;
    text-align: center;
    width: 180px;
    background-color: #6a737b;
    margin: 24px auto;
}

</style>