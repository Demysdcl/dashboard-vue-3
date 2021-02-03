<script>
import HeaderMain from '@/containers/HeaderMain.vue'
import Filters from './Filters.vue'
import FiltersLoading from './FiltersLoading.vue'
import { onMounted, reactive, toRefs } from 'vue'
import FeedbackCardLoading from './FeedbackCardLoading.vue'
import FeedbackCard from './FeedbackCard.vue'
import services from '@/service/index'

export default {
  components: {
    HeaderMain,
    Filters,
    FiltersLoading,
    FeedbackCardLoading,
    FeedbackCard,
  },
  setup() {
    const state = reactive({
      hasError: false,
      isLoading: false,
      currentFeedbackType: '',
      feedbacks: [],
      pagination: { limit: 5, offset: 0 },
    })

    onMounted(async () => {
      await it.fetchFeedbacks()
    })

    function handleErrors(error) {
      state.isLoading = false
      state.hasError = !!error
    }

    const it = {
      ...toRefs(state),
      async fetchFeedbacks() {
        try {
          state.isLoading = true
          const { data } = await services.feedbacks.getAll({
            ...state.pagination,
            type: state.currentFeedbackType,
          })
          state.feedbacks = data.results
          state.pagination = data.pagination
          state.isLoading = false
        } catch (error) {
          handleErrors(error)
        }
      },
    }

    return it
  },
}
</script>

<template>
  <header-main
    title="Feedbacks"
    description="Detalhe de todos os feedbacks recebidos"
  />
  <div class="flex flex-col w-full pb-20">
    <div class="grid grid-cols-4 gap-2 w-4/5 max-w-6xl py-10">
      <div>
        <h1 class="text-3xl font-black text-brand-darkgray">
          Listagem
        </h1>
        <suspense>
          <template #default>
            <filters
              class="mt-8 animate__animated animate__fadeIn animate__faster"
            />
          </template>
          <template #fallback>
            <filters-loading class="mt-8" />
          </template>
        </suspense>
      </div>
      <div class="px-10 pt-20 col-span-3">
        <p
          v-if="hasError"
          class="text-lg text-center text-gray-800 font-regular"
        >
          Aconteceu um erro ao carregar os feedbacks 🤕
        </p>
        <p
          v-if="feedbacks.length === 0 && !isLoading"
          class="text-lg text-center text-gray-800 font-regular"
        >
          Nenhum feedback recebido
        </p>

        <feedback-card-loading v-if="isLoading" />

        <feedback-card
          v-else
          v-for="(feedback, index) in feedbacks"
          :key="feedback.id"
          :is-opened="index === 0"
          :feedback="feedback"
          class="mb-8"
        />
      </div>
    </div>
  </div>
</template>
