import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://typescript-ecommerce-api.herokuapp.com',
});

export default instance;
