import axios from "axios";


export const makeRequest = axios.create({
  baseURL: import.meta.env.VITE_REACT_API_URL,
  headers: {
    Authorization: "bearer " + import.meta.env.VITE_REACT_API_TOKEN,
  },
});


export const makeRequestWithToken = (token) =>{
  return axios.create({
    baseURL: import.meta.env.VITE_REACT_API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
 