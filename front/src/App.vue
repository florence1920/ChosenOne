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
    Nav
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
@import './assets/css/reset.css';
@import './assets/css/common.css';
</style>
