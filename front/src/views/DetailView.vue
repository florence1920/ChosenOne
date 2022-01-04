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
}
</script>

<style scoped>
  .sub {margin:50px 0 30px; font-size: 25px; font-weight: bold;}
  .contWrap li {float: left; margin:0 45px 0 0;}
</style>