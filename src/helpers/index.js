import axios from 'axios'

export const api = axios.create({
  timeout: 325000,
  // headers: {
  //   'X-Requested-With': 'XMLHttpRequest',
  // },
  baseURL: 'http://localhost:3000',
});
