import { reactive, readonly } from 'vue'

export type StoreState = {
  currentComponent: string
  message: string
  feedbackType: string
  fingerprint: string
  apikey: string
  currentPage: string
}

type FieldType =
  | 'currentComponent'
  | 'message'
  | 'feedbackType'
  | 'fingerprint'
  | 'apikey'
  | 'currentPage'

const initialState: StoreState = {
  currentComponent: 'SelectFeedbackType',
  message: '',
  feedbackType: '',
  fingerprint: '',
  apikey: '',
  currentPage: '',
}

const state = reactive<StoreState>({ ...initialState })

export function setValueToField(field: FieldType, value: string) {
  state[field] = value
}

export function resetStore(): void {
  const values = Object.values(initialState)
  Object.keys(initialState).forEach((field, index) => {
    setValueToField(field as FieldType, values[index])
  })
}

export default readonly(state)
