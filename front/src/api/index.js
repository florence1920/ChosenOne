import axios from 'axios';

//옷 전체 가져오기
function getClothes(){
    const url = 'http://localhost:3000/mycloset'
    return axios.get(url);
}

//옷 추천 하기
function recoClothes(){
    const url = 'http://localhost:3000/reco'
    return axios.get(url);
}

export { getClothes,recoClothes };