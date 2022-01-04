<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>


<script>
import Nav from '@/components/common/Nav.vue';
export default {
  components: {
    Nav,
  },
}
</script>

<style>
@import './assets/css/reset.css';
@import './assets/css/common.css';
</style>
