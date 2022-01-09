<template>
    <div class="preview">
        {{this.$store.state.select_cloth.cloName}}
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.preview {float: right; width: 500px; height: 500px; background: #222; line-height: 500px; text-align: center; color:#fff; border-radius:5px;}
</style>