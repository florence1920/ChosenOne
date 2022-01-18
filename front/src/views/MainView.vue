<template>
  <div class="wrapAll">
      <div class="weatherApi" v-on:click="getWeather()">
        <p>날 씨 확 인</p>
      </div>
  </div>
</template>

<script>
import { testWea } from '@/api/index.js';
export default {
data() {
  return {
    
  }
},
methods: {
  async getWeather() {
    const response = await testWea();
    console.log(response);
  }
},
  
}
</script>

<style scoped>
  .weatherApi {padding: 40px; width: 200px; height: 200px; background: rgb(0, 225, 255); cursor:pointer;}
  p {font-weight: bold;}
</style>