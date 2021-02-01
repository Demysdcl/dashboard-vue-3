const { reactive } = require('vue')

const state = reactive({
  isLoading: false,
})

export default state

export function setGlobalLoading(status) {
  state.isLoading = status
}
