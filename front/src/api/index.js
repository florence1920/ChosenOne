import axios from 'axios';

//연결 test
function getTest(){
    const url = 'http://localhost:3000/test'
    console.log(2);
    return axios.get(url);
}

export { getTest };