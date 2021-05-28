import axios from 'axios';

const instance = axios.create({
 baseURL: "https://tinder-server12.herokuapp.com/",
})

export default instance;
