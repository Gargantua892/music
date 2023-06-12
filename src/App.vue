<script>
import PageMain from "./components/PageMain.vue";
import PageFooter from "./components/PageFooter.vue"


export default{
  components: { PageMain, PageFooter }
}
</script>

<template>
  <PageMain />
  <PageFooter />
</template>

<style lang="scss">
@use './styles/partials/variable.scss';
</style>
