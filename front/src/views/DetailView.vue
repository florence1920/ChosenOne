<template>
  <div class="wrapAll">
      <Top>
        <p class="tit">DETAIL</p>
      </Top>
      <ul class="contWrap">
        <li>
          <list_detail></list_detail>
        </li>
        <li>
          <info_set></info_set>
        </li>
        <li>
           <avatar></avatar>
        </li>
      </ul>
      <div class="box" v-on:click="recoClo()">
        옷 추천 받기 
      </div>
  </div>
</template>

<script>
import Avatar from '../components/Avatar.vue'
import Info_set from '../components/Info_set.vue'
import List_detail from '../components/List_detail.vue'
import Top from '../components/common/Top.vue'
export default {
  components: {
    List_detail,
    Info_set,
    Avatar,
    Top
    
  },
  methods: {
    recoClo() {
      this.$store.dispatch('GET_WEATHER');
    }
  },
}
</script>

<style scoped>
  .sub {margin:50px 0 30px; font-size: 25px; font-weight: bold;}
  .contWrap li {float: left; margin:0 45px 0 0;}
  .box {width: 120px; height: 80px; line-height: 80px; padding: 0 0 0 15px; background: rgb(255, 230, 0); color: rgb(109, 109, 109); font-weight: 500; position: absolute; bottom: 200px; right: 300px; cursor: pointer;}
</style>