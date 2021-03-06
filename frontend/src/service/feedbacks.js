export default (httpClient) => ({
  async getAll({ type, limit = 5, offset = 0 }) {
    const params = { type: type || null, limit, offset }
    return await httpClient.get('/feedbacks', { params })
  },
  getSummary: async () => await httpClient.get('/feedbacks/summary'),
})
