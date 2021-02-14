<script>
import ChatIcon from '../../components/icons/ChatIcon.vue'
import ArrowRightIcon from '@/components/icons/ArrowRightIcon.vue'
import useStore from '@/hooks/useStore'
import { computed, defineComponent, reactive, toRefs } from 'vue'
import colors from 'tailwindcss/colors'
import { brand } from '../../../palette'
import CloseIcon from '@/components/icons/CloseIcon.vue'

export default defineComponent({
  components: { ArrowRightIcon, CloseIcon, ChatIcon },
  setup() {
    const state = reactive({})
    const store = useStore()
    return {
      ...toRefs(state),
      colors,
      brand,
      label: computed(() => {
        switch (store.feedbackType) {
          case 'ISSUE':
            return 'Reporte um problema'
          case 'IDEA':
            return 'Nos fale a sua ideia'
          case 'OTHER':
            return 'Abra sua mente'
          default:
            return 'O que você tem em mente?'
        }
      }),
      canGoBack: computed(
        () => store.currentComponent === 'SelectFeedbackType',
      ),
      canShowAdditionalControlAndInfo: computed(
        () =>
          store.currentComponent !== 'Success' &&
          store.currentComponent !== 'Error',
      ),
    }
  },
})
</script>

<template>
  <div class="box animate__animated animate__fadeInUp animate__faster">
    <div
      class="relative w-full flex"
      :class="
        canShowAdditionalControlAndInfo ? 'justify-between' : 'justify-end'
      "
    >
      <button
        v-if="canShowAdditionalControlAndInfo"
        @click="() => $emit('onClose')"
        :disabled="canGoBack"
        :class="{ invisible: canGoBack }"
        class="text-xl text-gray-800 focus:outline-none"
      >
        <arrow-right-icon :color="colors.gray[800]" />
      </button>
      <p class="text-xl font-black text-center text-brand-main">
        {{ label }}
      </p>
      <button class="text-xl text-gray-800 focus:outline-none">
        <close-icon
          @click="() => $emit('onClose')"
          :size="14"
          :color="colors.gray[800]"
        />
      </button>
    </div>

    wizard

    <div
      class="text-gray-800 text-sm flex"
      v-if="canShowAdditionalControlAndInfo"
    >
      <ChatIcon class="mr-1" :color="brand.graydark" />
      widget by
      <span class="ml-1 font-bold">
        feedbacker
      </span>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.box {
  @apply fixed z-50 bottom-0 right-0 mb-5 mr-5 bg-white rounded-xl
    p-5 flex flex-col items-center shadow-xl select-none;
  width: 400px;
}
</style>
