<template>
  <div class="list">
      <ul class="category">
          <li class="on">
              <p class="tit">1st</p>
              <div class="ico"></div>
          </li>
          <li>
              <p class="tit">2nd</p>
              <div class="ico"></div>
          </li>
          <li>
              <p class="tit">3rd</p>
              <div class="ico"></div>
          </li>
      </ul>
      <ul class="category items">
          <li>
              <ul class="item_detail">
                  <li><div class="ico_clo"></div></li>
                  <li><p class="tit_sub">와이드 데님 팬츠</p></li>
              </ul>
          </li>
          <li>
              <ul class="item_detail">
                  <li><div class="ico_clo"></div></li>
                  <li><p class="tit_sub">와이드 데님 팬츠</p></li>
              </ul>
          </li>
          <li>
              <ul class="item_detail">
                  <li><div class="ico_clo"></div></li>
                  <li><p class="tit_sub">와이드 데님 팬츠</p></li>
              </ul>
          </li>
          <li>
              <ul class="item_detail">
                  <li><div class="ico_clo"></div></li>
                  <li><p class="tit_sub">와이드 데님 팬츠</p></li>
              </ul>
          </li>
          <li>
              <ul class="item_detail">
                  <li><div class="ico_clo"></div></li>
                  <li><p class="tit_sub">와이드 데님 팬츠</p></li>
              </ul>
          </li>
          <li>
              <ul class="item_detail">
                  <li><div class="ico_clo"></div></li>
                  <li><p class="tit_sub">와이드 데님 팬츠</p></li>
              </ul>
          </li>
          <li>
              <ul class="item_detail">
                  <li><div class="ico_clo"></div></li>
                  <li><p class="tit_sub">와이드 데님 팬츠</p></li>
              </ul>
          </li>
      </ul>
      <div class="cover"></div>
  </div>
</template>

<script>
export default {

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