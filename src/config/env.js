import axios from 'axios';

const prod = true;

const config = prod ? {
  api: 'https://talentstatus.com/api'
} : {
  api: 'http://127.0.0.1:8000/api'
};

export const apiInstance = axios.create({
  baseURL: config.api,
});
