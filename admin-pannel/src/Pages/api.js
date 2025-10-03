import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const createTest = (data) => API.post('/tests/create', data);
export const getTests = (params) => API.get('/tests', { params });

export const uploadPYQ = (data, isFile = false) => {
  if (isFile) {
    // data is FormData
    return API.post('/pyq/upload', data, { headers: { 'Content-Type': 'multipart/form-data' }});
  } else {
    return API.post('/pyq/upload', data);
  }
};

export const getPYQs = (params) => API.get('/pyq', { params });

export default API;
