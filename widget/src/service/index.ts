import router from '@/router'
import { setGlobalLoading } from '@/store/global'
import axios from 'axios'

const API_ENVS = {
  local: 'http://localhost:4040',
}

const httpClient = axios.create({
  baseURL: API_ENVS.local,
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

export default {}
