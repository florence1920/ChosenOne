import Vue from 'vue'
import Vuex from 'vuex'
import { getClothes,recoClothes,getWeather } from '@/api/index.js'
import { base } from '../../../back/models/Closet'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clothes_all:[],
    clothes_outer:[],
    clothes_top:[],
    clothes_pants:[],
    clothes_socks:[],
    clothes_shoes:[],
    reco_set1:[],
    reco_set2:[],
    reco_set3 :[],
    select_cloth : {}
  },
  mutations: {
    SET_CLOTHES(state, clothes){
      //filter 함수로 조건에 맞는 배열 생성 
      //0. 전체
      state.clothes_all = clothes;
      //1.outer
      state.clothes_outer = clothes.filter(item => item.cate === "outer");
      //2.top
      state.clothes_top = clothes.filter(item => item.cate === "top");
      //3.pants
      state.clothes_pants = clothes.filter(item => item.cate === "pants");
      //4.socks
      state.clothes_socks = clothes.filter(item => item.cate === "socks");
      //5.shoes
      state.clothes_shoes = clothes.filter(item => item.cate === "shoes");
    },
    SET_RECO(state,set){
      state.reco_set1 = set.arr;
      state.reco_set2 = set.arr1;
      state.reco_set3 = set.arr2;
    },
    SET_CLOTH(state, cloName){
      state.clothes_all.forEach(i => {
        if(cloName == i.cloName){
          state.select_cloth = i;
        }
      });
    },
    SET_WEATHER(state, weathers){
      let test =  weathers.filter(weather => weather.category == 'TMP');
      console.log(test);
      
    }

  },
  actions: {
    //옷장 가져오기
    async GET_CLOTHES(context){
      const response = await getClothes();
      context.commit('SET_CLOTHES', response.data);
    },
    //옷 추천하기 
    async RECO_CLO(context){
      const response = await recoClothes();
      console.log(response);
      context.commit('SET_RECO', response.data);
    },
    //날씨 가져오기 
    async GET_WEATHER(context){
      //api 날짜 세팅
      let baseArr = ['02', '05', '08', '11', '14', '17', '20', '23'];
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth()+1;
      let day = today.getDate();
      //let day = 18;
      let hours = today.getHours();
      //let hours = 23;
      let baseTime = 0;

      //내가 알고 싶은건 다음날 6시 온도임 
      //base Time 02, 05, 08, 11, 14 ,17, 20, 23
      //0~1 / 전날 23시
      //2~4 / 02시 base - 현재시간 =  0, -1, -2  
      //현재 시각이 0이나 1일 때만 date 전날로, baseTime 23으로
      if(hours == 0 || hours == 1){
        baseTime = 23;
        day = day - 1;
        console.log(`baseTime : ${baseTime} day : ${day}`);
      }else {
        baseArr.forEach(base => {
          let h = base - hours;
          if(h == 0 || h == -1 || h == -2){
            baseTime = base;
          }
        });
      }
      
      //시간에 따른 pageNo 조절
      //base Time 02, 05, 08, 11, 14 ,17, 20, 23
      //           4, 1 , 22, 19, 16 ,13, 10, 7
      // 6 - baseTime 
      // 만약에 음수 일시 24 - (baseTime - 6)
      let pageNo = 0;
      if(6 - baseTime > 0){
        pageNo = 6 -baseTime;
        //console.log(`pageNo: ${pageNo}`);
      }else{
        pageNo = 24 - (baseTime - 6);
        //console.log(`pageNo: ${pageNo}`);
      }

      //0 붙이는 작업
      if(month < 10){
        month = '0' + month;
      }if(day < 10){
        day = '0' + day;
      }if(hours < 10){
        hours = '0' + hours;
      }

      baseTime = baseTime + '00';
      let base_date = year + '' + month + '' + day;

      let serviceKey = 'N1Boimqw71nVaE5QDo%2F%2FooL%2BfgtmpfZE8elUvJX5zPHx%2Bb7dzKKixvJJ4lDn2TodqPwYNH3AzE4RSiabt6%2F9kQ%3D%3D';
      let numOfRows = 12;
      //let pageNo = 1;
      let category = 'TMP';
      //관악구 신림동
      let nx = 59;
      let ny = 125;
      let dataType='JSON';
      let url = `1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${serviceKey}&numOfRows=${numOfRows}&pageNo=${pageNo}&base_date=${base_date}&base_time=${baseTime}&category=${category}&nx=${nx}&ny=${ny}&dataType=${dataType}`;
      console.log(url);
      //1360000/VilageFcstInfoService_2.0/getVilageFcst?se
      //rviceKey=N1Boimqw71nVaE5QDo%2F%2FooL%2BfgtmpfZE8elUvJX5zPHx%2Bb7dzKKixvJJ4lDn2TodqPwYNH3AzE4RSiabt6%2F9kQ%3D%3D
      //&numOfRows=12&pageNo=3&base_date=20220118&base_time=2300&category=TMP&nx=55&ny=127&dataType=JSON
      const response = await getWeather(url);
      console.log(response.data.response.body.items.item);
      context.commit('SET_WEATHER', response.data.response.body.items.item);
    }
  },
  modules: {
  }
})
