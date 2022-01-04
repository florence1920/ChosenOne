<template>
    <div id="top">
        <p class="tit">MY CLOSET</p>
        <ul class="point">
            <li><span></span>123,000</li>
            <li><span></span>2222</li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#top {overflow: hidden; margin: 25px 0 20px; position: relative;}
#top .tit {float: left; font-size:65px; font-weight: 500;}
#top .point {overflow: hidden; padding: 3px 0; position: absolute;right: 0;top: 50%; transform: translateY(-50%);}
#top .point li {float: left; line-height: 20px; font-size:18px; padding: 0 0 0 26px; margin: 0 0 0 30px; position: relative;}
#top .point li span {display: inline-block; width: 20px; height: 20px; background: #222; border-radius: 100%; position: absolute;left: 0;top: 52%; transform: translateY(-50%);}
</style>