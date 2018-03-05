import axios from 'axios';

const prod = false;

export const config = prod ? {
  api: 'http://admin.tsgcasting.com'
} : {
  api: 'http://localhost:8081/api'
};

export const apiInstance = axios.create({
  baseURL: 'http://localhost:8081/api',
});
