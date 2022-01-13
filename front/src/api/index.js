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

export { getClothes,recoClothes,addCloth, delCloth };