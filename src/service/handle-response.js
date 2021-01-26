import { useToast } from 'vue-toastification'

export default {
  handleResponse(response) {
    try {
      return response.data
    } catch (error) {
      useToast().error(error.data)
      return null
    }
  },
}
