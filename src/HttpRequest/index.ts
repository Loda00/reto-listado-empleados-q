import axios from "axios";
import { useAuthStore } from '@/stores/auth'

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
});

const getHeaders = () => {
  let headers: any = {};

  const store = useAuthStore()

  instance.defaults.headers.Authorization = `Bearer ${store.userAuth.token}`

  return headers;
}

export const HttpGet = (url: string, options?: any) => {
  let optionsDefault = {
    headers: getHeaders(),
  }
  options = Object.assign({}, optionsDefault, (options || {}))
  return instance.get(url, options);
}

export const HttpPost = (url: string, params: any = {}) => {
  return instance.post(url, params, { headers: getHeaders() })
}
