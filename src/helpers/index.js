import axios from "axios";

export const api = axios.create({
  timeout: 325000,
  // headers: {
  //   'X-Requested-With': 'XMLHttpRequest',
  // },
  baseURL: "https://aia-assessment-server.herokuapp.com",
});
