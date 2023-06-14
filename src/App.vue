<script>
import PageMain from "./components/PageMain.vue";
import PageFooter from "./components/PageFooter.vue"
import { store } from "./store.js"


export default{
  components: { PageMain, PageFooter },

  data(){
    return{
      store
    }
  }
}

</script>

<template>
    <PageMain />
    <PageFooter />
</template>



<style lang="scss">
@use './styles/partials/variable.scss';

.prova{
  position: fixed;
  top: 50px;
  right: 10px;
  background-color: #fff;
  padding: 24px;
}
</style>
