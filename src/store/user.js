const { reactive } = require('vue')

const state = reactive({
  currentUser: {},
})

export default state

export function cleanCurrentUser() {
  state.currentUser = {}
}

export function setCurrentUser(user) {
  state.currentUser = user
}

export function setApiKey(apiKey) {
  state.currentUser = { ...state.currentUser, apiKey }
}
