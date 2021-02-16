<script lang="ts">
import useStore from '@/hooks/useStore'
import { computed, defineComponent, reactive, toRefs } from 'vue'
import colors from 'tailwindcss/colors'
import { brand } from '../../../palette'

import useNavigation from '@/hooks/navigation'
import Wizard from '@/components/wizard/Wizard.vue'
import Chat from '@/components/icons/Chat.vue'
import ArrowRight from '@/components/icons/ArrowRight.vue'
import Close from '@/components/icons/Close.vue'

export default defineComponent({
  components: { Wizard, Chat, ArrowRight, Close },
  setup() {
    const state = reactive({})
    const store = useStore()
    return {
      ...toRefs(state),
      colors,
      brand,
      back: useNavigation().back,
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
        @click="back"
        :disabled="canGoBack"
        :class="{ invisible: canGoBack }"
        class="text-xl text-gray-800 focus:outline-none"
      >
        <arrow-right :size="20" :color="colors.gray[800]" />
      </button>
      <p
        v-if="canShowAdditionalControlAndInfo"
        class="text-xl font-black text-center text-brand-main"
      >
        {{ label }}
      </p>
      <button class="text-xl text-gray-800 focus:outline-none">
        <close
          @click="() => $emit('onClose')"
          :size="14"
          :color="colors.gray[800]"
        />
      </button>
    </div>

    <wizard />

    <div
      class="text-gray-800 text-sm flex"
      v-if="canShowAdditionalControlAndInfo"
    >
      <chat class="mr-1" :color="brand.graydark" />
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
