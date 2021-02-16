import axios, { AxiosError, AxiosResponse } from 'axios'
import FeedbacksService from './feedbacks'

const API_ENVS = {
  local: 'http://localhost:4040',
  development: '',
  production: 'https://backend-treinamento-vue3.vercel.app',
}

const httpClient = axios.create({
  baseURL: API_ENVS[process.env.NODE_ENV] || API_ENVS.local,
})

httpClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    const canThrowAnError =
      error.request.status === 0 || error.request.status === 500
    canThrowAnError && new Error(error.message)
    return error
  },
)

export default {
  feedbacks: FeedbacksService(httpClient),
}
