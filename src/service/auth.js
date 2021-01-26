export default (httpClient) => ({
  async register(name, email, password) {
    return await httpClient.post('auth/register', { name, email, password })
  },
  async login(email, password) {
    return await httpClient.post('auth/login', { email, password })
  },
})
