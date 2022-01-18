import axios from 'axios';

//옷 전체 가져오기
function getClothes(){
    const url = 'http://localhost:3000/closet'
    return axios.get(url);
}

//옷 추천 하기
function recoClothes(){
    const url = 'http://localhost:3000/reco'
    return axios.get(url);
}

//옷 등록하기 
function addCloth(cloth){
    const url = 'http://localhost:3000/closet/edit'
    return axios.post(url, cloth);
}

//옷 삭제하기 
function delCloth(cloth){
    const url = 'http://localhost:3000/closet/edit'
    return axios.delete(url, {
        data:{
            cloName : cloth
        }
    });
}

//옷 수정하기  
function editCloth(cloth){
    const url = 'http://localhost:3000/closet/edit'
    return axios.put(url, cloth);
}

//날씨 테스트 
function getWeather(url){
    return axios.get(url);
}

export { getClothes,recoClothes,addCloth, delCloth,editCloth,getWeather };