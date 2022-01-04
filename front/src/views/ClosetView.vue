<template>
  <div class="wrapAll">
    <Top></Top>
    <List></List>
    <Explan></Explan>
    <Preview></Preview>
  </div>
</template>

<script>
import Top from '@/components/common/Top.vue';
import List from '@/components/closet/List_closet.vue';
import Explan from '@/components/closet/Explan.vue';
import Preview from '@/components/closet/Preview.vue';
export default {
  components: {
    Top, List, Explan, Preview
  },
}
</script>

<style scoped>
.wrapAll {overflow: hidden;}
</style>