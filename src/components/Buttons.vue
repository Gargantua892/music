<script>
    export default {
        name: 'Buttons',
        data(){
            return{
            }
        },
        props:{
            primaryButtonTxt: String,
            secondaryButtonTxt: String,
        }
    }
</script>

<template>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center text-uppercase">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3 rounded-0 text-uppercase">{{ primaryButtonTxt }}</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4 rounded-0 text-uppercase">{{ secondaryButtonTxt }}</button>
    </div>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variable.scss' as *;

.btn-primary{
    background-color: $red;
    border-color: $red;
}

.btn-outline-secondary{
    border-color: $white;
    color: $white;
}

</style>