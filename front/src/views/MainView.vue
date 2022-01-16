<template>
  <div class="wrapAll">
      <div class="weatherApi" v-on:click="getWeather()">
        <p>날 씨 확 인</p>
      </div>
  </div>
</template>

<script>
import {testWea} from '@/api/index.js';
export default {
data() {
  return {
    url: 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=N1Boimqw71nVaE5QDo%2F%2FooL%2BfgtmpfZE8elUvJX5zPHx%2Bb7dzKKixvJJ4lDn2TodqPwYNH3AzE4RSiabt6%2F9kQ%3D%3D&numOfRows=10&pageNo=1&base_date=20220116&base_time=0500&nx=55&ny=127'
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