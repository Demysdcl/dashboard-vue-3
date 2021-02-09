import { reactive } from 'vue'

const state = reactive({
  currentUser: {},
})

export default state

export function cleanCurrentUser() {
  state.currentUser = reactive({})
}

export function setCurrentUser(user) {
  state.currentUser = reactive(user)
}

export function setApiKey(apiKey) {
  state.currentUser = reactive({ ...state.currentUser, apiKey })
}
