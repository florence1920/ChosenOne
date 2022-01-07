<template>
  <div>
      메인
  </div>
</template>

<script>
import { getTest } from '@/api/index.js';
export default {
 
  created () {
    this.$store.dispatch('connect');
  },
}
</script>

<style scoped>
    a {margin:20px; font-size: 100px; text-decoration: none; color:brown;}
</style>