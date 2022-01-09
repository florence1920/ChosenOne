<template>
  <div class="list">
      <ul class="category">
          <li v-on:click="changeCate('1st')" v-bind:class="isTrue[0].class">
              <p class="tit">1st</p>
              <div class="ico"></div>
          </li>
          <li v-on:click="changeCate('2nd')" v-bind:class="isTrue[1].class">
              <p class="tit">2nd</p>
              <div class="ico"></div>
          </li>
          <li v-on:click="changeCate('3rd')" v-bind:class="isTrue[2].class">
              <p class="tit">3rd</p>
              <div class="ico"></div>
          </li>
      </ul>
      <ul class="category items" v-show="isTrue[0].is">
          <li v-for="cloth in this.$store.state.reco_set1" v-bind:key="cloth.id">
              <ul class="item_detail">
                  <li><div class="ico_clo"></div></li>
                  <li><p class="tit_sub">{{cloth.cloName}}</p></li>
              </ul>
          </li>
      </ul>
      <ul class="category items" v-show="isTrue[1].is">
          <li v-for="cloth in this.$store.state.reco_set2" v-bind:key="cloth.id">
              <ul class="item_detail">
                  <li><div class="ico_clo"></div></li>
                  <li><p class="tit_sub">{{cloth.cloName}}</p></li>
              </ul>
          </li>
      </ul>
      <ul class="category items" v-show="isTrue[2].is">
          <li v-for="cloth in this.$store.state.reco_set3" v-bind:key="cloth.id">
              <ul class="item_detail">
                  <li><div class="ico_clo"></div></li>
                  <li><p class="tit_sub">{{cloth.cloName}}</p></li>
              </ul>
          </li>
      </ul>
      <div class="cover"></div>
  </div>
</template>

<script>

export default {
    data() {
        return {
            isTrue:[
                {
                    cate: '1st',
                    is : true,
                    class : 'on'
                },
                {
                    cate: '2nd',
                    is : false,
                    class : ''
                },
                {
                    cate: '3rd',
                    is : false,
                    class : ''
                }
            ]
        }
    },   
    methods: {
        changeCate(sel) {
            this.isTrue.forEach(element => {
                if(element.cate != sel){
                    element.is = false;
                    element.class = '';
                }else{
                    element.is = true;
                    element.class = 'on';
                }
            });
        }
    },
 created () {
    //this.$store.dispatch('GET_CLOTHES');
    this.$store.dispatch('RECO_CLO');
 },
}
</script>

<style scoped>
    .list {overflow: hidden; position: relative;}
    .category {float:left; padding: 5px;}
    .category > li {margin: 0 0 8px; padding: 23px; width: 110px; height: 110px; background: #ccc; border: 1px solid #bbb;  border-radius: 3px; transition: 0.2s; position: relative;}
    .category > li .tit {text-align: center; font-size: 11px; font-weight: 600;}
    .category > li:hover {border: 1px solid #fec715; box-shadow: 0px 0px 5px 2px rgba(254, 199, 21, 0.45); cursor: pointer;}
    .category > li.on:hover {cursor: default;}
    .category .on {background: #000; color:#fff;}
    .category > li .ico {width: 43px; height: 43px; background: #222; border-radius: 100%; position: absolute; bottom: 23px; left: 50%; transform: translateX(-50%);}

    .items {overflow: auto; margin:0 0 0 30px; height: calc(100vh - 230px);padding: 5px 13px 150px 5px; }
    .items > li {padding: 10px 23px; width: 400px; height: 100px; position: relative;}
    .items > li:hover {border: 1px solid #fec715; box-shadow: 0px 0px 5px 2px rgba(254, 199, 21, 0.45);}
    .items > li .ico_clo{width: 70px; height: 70px; background: #222; border-radius: 100%; position: absolute; top:50%; transform: translateY(-50%);}
    .items .item_detail li {float: left;}
    .items .item_detail li .tit_sub {font-size:20px; position: absolute; top:25%; left:28%;}

    .items::-webkit-scrollbar {width: 6px;}
    .items::-webkit-scrollbar-thumb {background: #222; border-radius: 3px;}
    .items::-webkit-scrollbar-track {background: #ccc; border-radius: 3px;}

    .list > .cover {width: 424px; height: 150px; background: linear-gradient(transparent, #f1f1f1); pointer-events: none; position: absolute;bottom: 0;right: 0; z-index:1;}
</style>