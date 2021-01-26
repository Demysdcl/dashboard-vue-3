import router from '@/router'
import axios from 'axios'
import AuthService from './auth'

const API_ENVS = {
  local: 'http://localhost:4040',
}

const httpClient = axios.create({
  baseURL: API_ENVS.local,
})

httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.common.Authorization = `Bearer ${token}`
  }
  return config
})

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      router.push({ name: 'Home' })
    }
  },
)

export default {
  auth: AuthService(httpClient),
}
