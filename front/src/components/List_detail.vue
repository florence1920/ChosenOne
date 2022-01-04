<template>
  <div>
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
                  <li><div class="ico"></div></li>
                  <li><p class="tit_sub">와이드 데님 팬츠</p></li>
              </ul>
          </li>
          <li>
              <ul class="item_detail">
                  <li><div class="ico"></div></li>
                  <li><p class="tit_sub">와이드 데님 팬츠</p></li>
              </ul>
          </li>
          <li>
              <ul class="item_detail">
                  <li><div class="ico"></div></li>
                  <li><p class="tit_sub">와이드 데님 팬츠</p></li>
              </ul>
          </li>
          <li>
              <ul class="item_detail">
                  <li><div class="ico"></div></li>
                  <li><p class="tit_sub">와이드 데님 팬츠</p></li>
              </ul>
          </li>
          <li>
              <ul class="item_detail">
                  <li><div class="ico"></div></li>
                  <li><p class="tit_sub">와이드 데님 팬츠</p></li>
              </ul>
          </li>
          <li>
              <ul class="item_detail">
                  <li><div class="ico"></div></li>
                  <li><p class="tit_sub">와이드 데님 팬츠</p></li>
              </ul>
          </li>
          <li>
              <ul class="item_detail">
                  <li><div class="ico"></div></li>
                  <li><p class="tit_sub">와이드 데님 팬츠</p></li>
              </ul>
          </li>
          
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .category {float:left;}
    .category > li {margin:0 0 8px 0; padding: 23px; width: 120px; height: 120px; background: #ccc; border: 1px solid #bbb;  border-radius: 5px; text-align: center; transition: 0.3s;}
    .category > li:hover {background: #000; color:#fff;}
    .category .on {background: #000; color:#fff;}
    .category > li .ico {margin:10px;  height: 30px; background: rgb(85, 85, 85); border-radius: 50px;}
    .items {margin:0 0 0 50px; overflow: auto; height: 600px;}
    .items > li {padding: 10px 23px; width: 400px; height: 120px;}
    .items > li:hover {border: 1px solid #fec715; box-shadow: 0px 0px 5px 2px rgba(254, 199, 21, 0.45);}
    .items > li .ico{width: 50px; height: 50px;}
    .items .item_detail li {float: left;}
    .items .item_detail li .tit_sub {margin:5px 10px; font-size:20px;}

</style>