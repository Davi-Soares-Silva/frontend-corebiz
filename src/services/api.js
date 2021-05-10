import axios from 'axios';

const api = axios.create({ baseURL: "https://corebiz-test.herokuapp.com/api/v1" });

export const products = {
  findAll: () => api.get('/products'),
}

export const news = {
  createUser: (user) => api.post('/newsletter', user),
}