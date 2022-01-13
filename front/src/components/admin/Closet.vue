<template>
  <div>
    <ul class="clo_list">
        <li v-for="cloth in this.$store.state.clothes_all" v-bind:key="cloth.id">
            <p>{{cloth.cloName}}</p>
            <button v-on:click="deleteCloth(cloth.cloName)">Delete</button>
        </li>
        <li v-on:click="openAdd">
            <p>+</p>
        </li>
    </ul>

    <div>
        <form v-on:submit.prevent="addCloset">
            <ul>
                <li>
                    <input type="text" v-model="cloName">
                </li>
                <li>
                    <select v-model="cate">
                        <option value="" disabled hidden>Select Category</option>
                        <option value="outer">outer</option>
                        <option value="top">top</option>
                        <option value="pants">pants</option>
                        <option value="socks">socks</option>
                        <option value="shoes">shoes</option>
                    </select>
                </li>
                <li>
                    <button type="sumbit"> 추가 </button>
                </li>
            </ul>
        </form>
    </div>
  </div>
</template>

<script>
import { addCloth, delCloth } from '@/api/index.js'
export default {
    data() {
        return {
           cloName : '',
           cate : '' 
        }
    },
    methods: {
        openAdd(){
            console.log('opened');
        },
        async addCloset() {
            const cloth = {
                cloName : this.cloName,
                cate : this.cate
            }
            console.log(cloth);
            await addCloth(cloth);
            this.$store.dispatch('GET_CLOTHES');
            this.clear();
        },
        async deleteCloth(cloName){
            console.log(`delete ${cloName}`);
            await delCloth(cloName);
            this.$store.dispatch('GET_CLOTHES');
        },
        clear(){
            this.cloName = '',
            this.cate=''
        }
    },
}
</script>

<style scoped>
    .clo_list {overflow: hidden;}
    .clo_list li {float: left; width: 120px; height: 120px; padding: 10px; margin: 0 8px 8px 0; background: #ccc; border: 1px solid #bbb; border-radius: 5px; transition: .2s; cursor: pointer;}
    .clo_list li p {font-size: 14px; font-weight: 600; line-height: 100px;}
</style>