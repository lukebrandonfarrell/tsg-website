import axios from 'axios';

export const instagramFeedUrl = 'https://www.instagram.com/talentstatus';
const prod = true;

const config = prod ? {
  api: 'https://talentstatus.co.uk/api'
} : {
  api: 'http://127.0.0.1:8000/api'
};

export const apiInstance = axios.create({
  baseURL: config.api,
});

export const instagramFeedInstance = axios.create({
  baseUrl: instagramFeedUrl,
});
