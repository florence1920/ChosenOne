<template>
    <div class="explan">
        <p class="tit">{{this.$store.state.select_cloth.cloName}}</p>
        <ul class="stat">
            <li>                
                <p class="name down">THICKNESS</p>
                <div class="thumb">
                    <p class="name up">THICKNESS</p>
                </div>
            </li>
            <li>                
                <p class="name down">CONVENIENCE</p>
                <div class="thumb">
                    <p class="name up">CONVENIENCE</p>
                </div>
            </li>
            <li>                
                <p class="name down">SPLENDOR</p>
                <div class="thumb">
                    <p class="name up">SPLENDOR</p>
                </div>
            </li>
            <li>                
                <p class="name down">TEXTURE</p>
                <div class="thumb">
                    <p class="name up">TEXTURE</p>
                </div>
            </li>
        </ul>
        <p class="txt">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.explan {float: left; width: 280px; margin: 0 50px 0 0;}
.explan .tit {line-height: 55px; letter-spacing: -0.3px; font-size:45px; font-weight: 500;}
.explan .stat {margin: 18px 0 20px;}
.explan .stat li {width: 100%; height: 22px; background: #ccc; border-radius: 15px; margin: 0 0 10px; position: relative;}
.explan .stat li:last-child {margin: 0;}
.explan .stat li .name.down {font-size:12px; font-weight: 500; position: absolute;top: 50%;left: 10px; transform: translateY(-50%); z-index: 1;}
.explan .stat li .thumb {overflow: hidden; height: 100%; background: #222; border-radius: 15px 0 0 15px; position: absolute;top: 0;left: 0; z-index: 2;}
.explan .stat li:nth-child(1) .thumb {width: 10%;}
.explan .stat li:nth-child(2) .thumb {width: 20%;}
.explan .stat li:nth-child(3) .thumb {width: 15%;}
.explan .stat li:nth-child(4) .thumb {width: 95%;}
.explan .stat li .thumb .name.up {color:#fff; font-size:12px; font-weight: 300; position: absolute;top: 50%;left: 10px; transform: translateY(-50%); z-index: 3;}
.explan .txt {color:#222; line-height: 21px; font-size:13px; font-weight: 400;}
</style>