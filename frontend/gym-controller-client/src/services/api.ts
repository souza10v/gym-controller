// src/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', 
});

// // Interceptor para adicionar tokens de autenticação, se necessário
// api.interceptors.request.use(config => {
//   const token = localStorage.getItem('token'); // Supondo que você armazena o token no localStorage
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// }, error => {
//   return Promise.reject(error);
// });

// // Interceptor para lidar com erros
// api.interceptors.response.use(response => response, error => {
//   // Aqui você pode lidar com erros globalmente
//   return Promise.reject(error);
// });

// // Funções para chamadas específicas da API
// export const calcularDensidadeCorporal = async (data: any) => {
//   return api.post('/calcular-densidade-corporal', data);
// };

// // Outras funções para chamadas de API podem ser adicionadas aqui

export default api;
