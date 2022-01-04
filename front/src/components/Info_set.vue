<template>
    <div>
        <p class="sub">SET INFO</p>
        <ul class="infoWrap">
            <li>
                <div class="imgBox">
                    <img src="@/assets/images/melting.png" alt="">
                </div>
                <p>Rainy / 19</p>
            </li>
            <li>
                <div class="imgBox">
                    <img src="@/assets/images/melting.png" alt="">
                </div>
                <p>Convenience</p>    
            </li>
            <li>
                <div class="imgBox">
                    <img src="@/assets/images/melting.png" alt="">
                </div>
                <p>Keep wram</p> 
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .sub {font-size: 65px; font-weight: bold;}
    .infoWrap {overflow: hidden; margin: 400px 0 0;}
    .infoWrap li {float: left; margin: 0 40px 0 0; width: 100px; height: 200px; font-size: 15px;}
    .infoWrap li p {text-align: center;}
    .infoWrap .imgBox {width: 100px; padding: 0 0 10px 25px;}
    .infoWrap img {display:inline-block; width: 50px;}
</style>