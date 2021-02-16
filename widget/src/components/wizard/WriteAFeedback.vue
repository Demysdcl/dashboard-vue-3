<script lang="ts">
import useNavigation from '@/hooks/navigation'
// import service from '@/service'
import store, { setValueToField } from '@/store'
import { computed, defineComponent, reactive, toRefs } from 'vue'
import Loading from '../icons/Loading.vue'

type State = {
  feedback: string
  isLoading: boolean
  hasError: null | Error
}

const service = {
  feedbacks: {
    create(params: unknown) {
      return { errors: [], params }
    },
  },
}

export default defineComponent({
  components: { Loading },
  setup() {
    const { setErrorState, setSuccessState } = useNavigation()

    const state = reactive<State>({
      feedback: '',
      isLoading: false,
      hasError: null,
    })

    function handleError(error: Error) {
      state.hasError = error
      state.isLoading = false
      setErrorState()
    }

    return {
      ...toRefs(state),
      submitButtonIsDisabled: computed<boolean>(() => !state.feedback.length),
      async submitAFeedback() {
        setValueToField('message', state.feedback)
        try {
          state.isLoading = true
          const response = await service.feedbacks.create({
            type: store.feedbackType,
            text: store.message,
            page: store.currentPage,
            apikey: store.apikey,
            device: navigator.userAgent,
            fingerprint: store.fingerprint,
          })

          if (!response.errors) {
            setSuccessState()
          } else {
            setErrorState()
          }

          setSuccessState()
        } catch (error) {
          handleError(error)
        }
      },
    }
  },
})
</script>

<template>
  <div class="flex flex-col items-center justify-center w-full my-5">
    <textarea
      v-model="feedback"
      class="w-full rounded-lg border-2 border-gray-300 border-solid h-24 p-2 resize-none focus:outline-none"
    />
    <button
      @click="submitAFeedback"
      :disabled="submitButtonIsDisabled"
      :class="{
        'opacity-50': isLoading,
        'opacty-50 bg-gray-100 text-gray-500': submitButtonIsDisabled,
        'bg-brand-main text-white': !submitButtonIsDisabled,
      }"
      class="rounded-lg font-black mt-3 flex flex-col justify-center items-center py-2 w-full cursor-pointer focus:outline-none transition-all duration-20"
    >
      <loading v-if="isLoading" class="animate-spin" color="white" />
      <template v-else>
        Enviar feedback
      </template>
    </button>
  </div>
</template>
