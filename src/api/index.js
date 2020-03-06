import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gateway.marvel.com:443/',
  timeout: 60000,
});

export default instance;
