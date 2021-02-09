export default (httpClient) => ({
  getMe: async () => await httpClient.get('users/me'),
  generateApikey: async () => await httpClient.post('users/me/apikey'),
})
