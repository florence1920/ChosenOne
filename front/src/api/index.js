import axios from 'axios';

//옷 전체 가져오기
function getClothes(){
    const url = 'http://localhost:3000/mycloset'
    return axios.get(url);
}

export { getClothes };