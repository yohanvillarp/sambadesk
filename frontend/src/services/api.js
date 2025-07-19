import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api', // Cambia si backend usa otro puerto
});

export default api;
