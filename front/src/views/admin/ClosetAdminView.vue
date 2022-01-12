<template>
    <div class="wrapAll">
        <Top>
            <p class="tit">Edit Closet</p>
        </Top>
        <Closet></Closet>
    </div>
</template>

<script>
import Top from '@/components/common/Top.vue';
import Closet from '@/components/admin/Closet.vue';
export default {
    components: {
        Top,
        Closet
    }
}
</script>

<style>

</style>