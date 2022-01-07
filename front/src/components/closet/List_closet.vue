<template>
    <div class="list">
        <ul class="category">
            <li class="on">
                <p class="tit">OUTER</p>
                <p class="ico"></p>
            </li>
            <li>
                <p class="tit">TOP</p>
                <p class="ico"></p>
            </li>
            <li>
                <p class="tit">PANTS</p>
                <p class="ico"></p>
            </li>
            <li>
                <p class="tit">SOCKS</p>
                <p class="ico"></p>
            </li>
            <li>
                <p class="tit">SHOES</p>
                <p class="ico"></p>
            </li>
        </ul>
        <ul class="items">
            <li v-for="cloth in this.$store.state.clothes" v-bind:key="cloth.id">
                <div class="cover">
                    <p class="sel">CHANGE</p>
                </div>
                <div class="img"></div>
                <p class="tit"> {{cloth.cloName}}</p>
            </li>
            <!-- <li class="on">
                <div class="cover">
                    <p class="sel">MOUNTED</p>
                </div>
                <div class="img"></div>
                <p class="tit">OVERFIT LONG-ARM</p>
            </li>
            <li>
                <div class="cover">
                    <p class="sel">CHANGE</p>
                </div>
                <div class="img"></div>
                <p class="tit">ITEM NAME</p>
            </li>
            <li>
                <div class="cover">
                    <p class="sel">CHANGE</p>
                </div>
                <div class="img"></div>
                <p class="tit">ITEM NAME</p>
            </li>
            <li>
                <div class="cover">
                    <p class="sel">CHANGE</p>
                </div>
                <div class="img"></div>
                <p class="tit">ITEM NAME</p>
            </li>
            <li>
                <div class="cover">
                    <p class="sel">CHANGE</p>
                </div>
                <div class="img"></div>
                <p class="tit">ITEM NAME</p>
            </li>
            <li>
                <div class="cover">
                    <p class="sel">CHANGE</p>
                </div>
                <div class="img"></div>
                <p class="tit">ITEM NAME</p>
            </li>
            <li>
                <div class="cover">
                    <p class="sel">CHANGE</p>
                </div>
                <div class="img"></div>
                <p class="tit">ITEM NAME</p>
            </li>
            <li>
                <div class="cover">
                    <p class="sel">CHANGE</p>
                </div>
                <div class="img"></div>
                <p class="tit">ITEM NAME</p>
            </li>
            <li>
                <div class="cover">
                    <p class="sel">CHANGE</p>
                </div>
                <div class="img"></div>
                <p class="tit">ITEM NAME</p>
            </li>
            <li>
                <div class="cover">
                    <p class="sel">CHANGE</p>
                </div>
                <div class="img"></div>
                <p class="tit">ITEM NAME</p>
            </li>
            <li>
                <div class="cover">
                    <p class="sel">CHANGE</p>
                </div>
                <div class="img"></div>
                <p class="tit">ITEM NAME</p>
            </li> -->
        </ul>

        <div class="cover"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .list {float: left; overflow: hidden; position: relative;}

    .list .category {float: left; padding: 5px;}
    .list .category li {width: 110px; height: 110px; background: #ccc; border: 1px solid #bbb; border-radius: 3px; transition: .2s; padding: 23px; margin: 0 0 8px; position: relative;}
    .list .category li .tit {text-align: center; font-size: 11px; font-weight: 600;}
    .list .category li .ico {width: 43px; height: 43px; background: #222; border-radius: 100%; position: absolute;bottom: 23px;left: 50%; transform: translateX(-50%);}
    .list .category li.on {background: #222; border: 1px solid #222;}
    .list .category li.on .tit {color:#fff;}
    .list .category li.on .ico {background: #fff;}
    .list .category li:hover {border: 1px solid #fec715; box-shadow: 0px 0px 5px 2px rgba(254, 199, 21, 0.45); cursor: pointer;}
    .list .category li.on:hover {cursor: default;}

    .list .items {float: left; width: 580px; height: calc(100vh - 230px); overflow: auto; padding: 5px 5px 150px; margin: 0 40px 0 30px;}
    .list .items::-webkit-scrollbar {width: 6px;}
    .list .items::-webkit-scrollbar-thumb {background: #222; border-radius: 3px;}
    .list .items::-webkit-scrollbar-track {background: #ccc; border-radius: 3px;}
    .list .items li {float: left; width: 180px; height: 180px; background: #ccc; border: 1px solid #bbb; border-radius: 5px; transition: .2s; padding: 28px; margin: 0 8px 8px 0; position: relative;}
    .list .items li .cover {opacity: 0; width: calc(100% + 1px); height: calc(100% + 1px); background: rgba(0,0,0,.5); border-radius: 5px; transition: .2s; position: absolute;top: 0;left: 0;}
    .list .items li .cover .sel {width: 60px; background: #fec715; border-radius: 15px; line-height: 25px; text-align: center; letter-spacing: -0.3px; font-size:10px; font-weight: 600; position: absolute;top: 50%;left: 50%; transform: translate(-50%,-50%);}
    .list .items li .img {width: 70px; height: 100px; background: #222; border-radius: 3px; transition:.2s; margin: 0 auto;}
    .list .items li .tit {width: 100%; text-align: center; font-size:13px; font-weight: 600; position: absolute;bottom: 28px;left: 50%; transform: translateX(-50%);}
    .list .items li.on {border: 1px solid #fec715; box-shadow: 0px 0px 5px 2px rgba(254, 199, 21, 0.45);}
    .list .items li.on .cover {opacity: 1;}
    .list .items li:hover {border: 1px solid #fec715; box-shadow: 0px 0px 5px 2px rgba(254, 199, 21, 0.45); cursor: pointer;}
    .list .items li:hover .cover {opacity: 1;}
    .list .items li:hover .img {background: #999;}
    .list .items li:hover .tit {color:#444;}
    .list .items li.on:hover .img {background: #222;}
    .list .items li.on:hover .tit {color:#000;}

    .list > .cover {width: 580px; height: 150px; background: linear-gradient(transparent, #f1f1f1); pointer-events: none; position: absolute;bottom: 0;right: 46px; z-index:1;}
</style>