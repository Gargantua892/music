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
        <a href="#">
            <div class="card p-0">
                <div class="img-card-container">
                    <img class="img-fluid" :class="shortImg"  :height="height" :src="`./../public/${image}`"  alt="">
                </div>
                <div class="card-body text-start ">
                    <h5 class="card-title">{{ cardTitle }}</h5>
                    <p class="card-text text-secondary">{{ cardText }}</p>
                </div>
                <div class="overlay d-flex align-items-center justify-content-center">
                    <h5 class="text-white">{{ cardTitle }}</h5>
                </div>
            </div>
        </a>
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

.card{
    position: relative;
    transition: 1s;
    overflow: hidden;
}

.card-body{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: $grey;
    transition: 1.5s;
}

.card:hover .card-body{
    bottom: -100%;
}
// .overlay{
//     display: none;
//     background-color: $red;
//     opacity: 0.8;
//     position: absolute;
//     height: 100%;
//     width: 100%;
// }
.card .overlay h5{
    display: none;

}

.overlay{
    transition: 0.4s;
    margin-left: -100%;
    transition: 1s;
}
.card:hover .overlay{
    opacity: 1;
    display: block;
    background-color: RGBA(236, 72, 87, 0.9);
    position: absolute;
    height: 100%;
    width: 100%;
    margin-left: 0%;
    transition: 1s;
}

.card:hover .overlay h5{
    display: block;
}

</style>