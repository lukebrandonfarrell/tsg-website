import axios from 'axios';

const prod = true;

const config = prod ? {
  api: 'https://talentstatus.com/api'
} : {
  api: 'http://localhost:8081/api'
};

export const apiInstance = axios.create({
  baseURL: config.api,
});
