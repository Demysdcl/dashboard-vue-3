import { setValueToField } from '@/store'
import useStore from './useStore'

export default function useNavigation() {
  const store = useStore()
  return {
    next() {
      if (store.currentComponent === 'SelectFeedbackType') {
        setValueToField('currentComponent', 'WriteAFeedback')
      }
    },
    back() {
      if (store.currentComponent === 'WriteAFeedback') {
        setValueToField('currentComponent', 'SelectFeedbackType')
        setValueToField('feedbackType', '')
      }
    },

    setErrorState() {
      setValueToField('currentComponent', 'Error')
    },

    setSuccessState() {
      setValueToField('currentComponent', 'Success')
    },
  }
}
