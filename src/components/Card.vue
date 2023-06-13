<script>
    export default {
      name: 'Card',
        data(){
            return{
            }
        },
        props:{
            cardTitle: String,
            cardText: String,
            image: String,
            shortImg: String,
            class: String,

        }
       
    }
</script>

<template>
    <div class="col">
        <div class="card p-0">
            <div class="img-card-container">
                <img class="img-fluid" :class="shortImg"  :height="height" :src="`./../public/${image}`"  alt="">
            </div>
            <div class="card-body text-start ">
                <h5 class="card-title">{{ cardTitle }}</h5>
                <p class="card-text text-secondary">{{ cardText }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variable.scss' as *;

.card{
    background-color: $grey;
}

h5{
    color: $red;
}

</style>