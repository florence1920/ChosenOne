<template>
  <div>
    <ul class="clo_list">
        <li v-for="cloth in this.$store.state.clothes_all" v-bind:key="cloth.id">
            <p>{{cloth.cloName}}</p>
            <p>{{cloth.cate}}</p>
            <p>{{cloth.weather}}</p>
            <button v-on:click="deleteCloth(cloth.cloName)">Delete</button>
            <button v-on:click="openEdit(cloth)">Edit</button>
        </li>
        <li v-on:click="openAdd">
            <p>+</p>
        </li>
    </ul>
    <!-- 옷 등록 -->
    <div class="editWrap">
        <p>옷 등록</p>
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
                    <select v-model="weather">
                        <option value="" disabled hidden>Select Weather</option>
                        <option value="cold">cold</option>
                        <option value="cool">cool</option>
                        <option value="warm">warm</option>
                        <option value="hot">hot</option>
                    </select>
                </li>
                <li>
                    <button type="sumbit"> 추가 </button>
                </li>
            </ul>
        </form>
    </div>

    <!-- 옷 수정 -->
    <div class="editWrap">
        <p>옷 수정</p>
        <form v-on:submit.prevent="editCloth">
            <ul>
                <li>
                    <input type="text" v-model="edit.cloName" disabled>
                </li>
                <li>
                <li>
                    <select v-model="edit.cate">
                        <option value="" disabled hidden>Select Cate</option>
                        <option value="outer">outer</option>
                        <option value="top">top</option>
                        <option value="pants">pants</option>
                        <option value="socks">socks</option>
                        <option value="shoes">shoes</option>
                    </select>
                </li>
                <li>
                    <button type="sumbit"> 수정하기 </button>
                </li>
            </ul>
        </form>
    </div>
  </div>
</template>

<script>
import { addCloth, delCloth, editCloth } from '@/api/index.js'
export default {
    data() {
        return {
           cloName : 'Cloth Name',
           cate : '',
           weather : '',
           edit : {
               cloName : '',
               cate : '',
           }, 
        }
    },
    methods: {
        openAdd(){
            console.log('opened');
        },
        openEdit(cloth){
            this.edit.cloName = cloth.cloName;
            this.edit.cate = cloth.cate;
        },
        async addCloset() {
            const cloth = {
                cloName : this.cloName,
                cate : this.cate,
                weather : this.weather
            }
            console.log(cloth);
            await addCloth(cloth);
            this.$store.dispatch('GET_CLOTHES');
            this.clear();
        },
        async deleteCloth(cloName){
            await delCloth(cloName);
            this.$store.dispatch('GET_CLOTHES');
        },
        async editCloth(){
            const cloth = {
                cloName : this.edit.cloName,
                cate : this.edit.cate
            }
            await editCloth(cloth);
            this.$store.dispatch('GET_CLOTHES');
            this.clear();
        },
        clear(){
            this.cloName = '',
            this.cate='',
            this.weather='',
            this.edit.cloName = '',
            this.edit.cate=''
        }
    },
    created () {
        this.$store.dispatch('GET_CLOTHES');
    },
}
</script>

<style scoped>
    .clo_list {overflow: hidden;}
    .clo_list li {float: left; width: 120px; height: 120px; padding: 10px; margin: 0 8px 8px 0; background: #ccc; border: 1px solid #bbb; border-radius: 5px; transition: .2s; cursor: pointer;}
    .clo_list li p {font-size: 14px; font-weight: 600; }
    button {margin: 1px; background: rgb(0, 0, 0); border: none; color: #fff;}
    .editWrap {margin: 20px 0 20px 0; padding: 40px; width: 400px; height: 200px; background: #ccc; border-radius: 5px; transition: .2s}
</style>