import axios from 'axios';
import {MD5} from 'crypto-js';

const PRIVATE_KEY = '9bfbef9fc01f7f2c6c04d8d3eec9f13ce0c0619b';
const PUBLIC_KEY = 'fa354f5328f5ac398ff8b25bf3c7a0c2';

const ts = new Date().getTime();
const hash = MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();

const instance = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public',
  timeout: 60000,
});

instance.interceptors.request.use(config => {
  config.params = {
    apikey: PUBLIC_KEY,
    ts,
    hash,
  };
  return config;
});

export default instance;
