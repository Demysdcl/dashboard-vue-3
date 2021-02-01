import router from '@/router'
import { setGlobalLoading } from '@/store/global'
import axios from 'axios'
import AuthService from './auth'
import Feedbacks from './feedbacks'
import UsersService from './users'

const API_ENVS = {
  local: 'http://localhost:4040',
}

const httpClient = axios.create({
  baseURL: API_ENVS.local,
})

httpClient.interceptors.request.use((config) => {
  setGlobalLoading(true)
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.common.Authorization = `Bearer ${token}`
  }
  return config
})

httpClient.interceptors.response.use(
  (response) => {
    setGlobalLoading(false)
    return response
  },
  (error) => {
    setGlobalLoading(false)
    if (error.response.status === 401) {
      router.push({ name: 'Home' })
    }
  },
)

export default {
  auth: AuthService(httpClient),
  users: UsersService(httpClient),
  feedbacks: Feedbacks(httpClient),
}
