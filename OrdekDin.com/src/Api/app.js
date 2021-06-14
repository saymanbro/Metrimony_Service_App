import axios from 'axios';

// const url = 'http://localhost:5000/';
const API = axios.create({ baseURL:"https://ordekdin-service.herokuapp.com/"})

export const getBio = () => API.get('/bio'); 

export const postBio = (bio) =>API.post('/bio', bio);
export const searchBio = (search) => API.post(`/bio/search`, search) ;

// log kore dekeh hmmm okk 



