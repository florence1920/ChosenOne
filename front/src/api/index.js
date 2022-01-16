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
function testWea(){
    const url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=N1Boimqw71nVaE5QDo%2F%2FooL%2BfgtmpfZE8elUvJX5zPHx%2Bb7dzKKixvJJ4lDn2TodqPwYNH3AzE4RSiabt6%2F9kQ%3D%3D&numOfRows=10&pageNo=1&base_date=20220116&base_time=1800&nx=55&ny=127'
    return axios.get(url,{ withCredentials: true, headers:{
        'Access-Control-Allow-Origin': '*',
    }});
}

export { getClothes,recoClothes,addCloth, delCloth,editCloth,testWea };