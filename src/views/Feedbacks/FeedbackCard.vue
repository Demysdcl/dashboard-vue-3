<script>
import { reactive, toRefs } from 'vue'
import Badge from '@/components/Badge.vue'
import { getDiffTimeBetweenCurrentDate } from '@/utils/date'
import pallete from '../../../palette'
import ChevronDownIcon from '@/components/ChevronDownIcon.vue'
import { wait } from '@/utils/timeout'

export default {
  components: { Badge, ChevronDownIcon },
  props: {
    feedback: { type: Object, required: true },
    isOpened: { type: Boolean, default: false },
  },
  setup(props) {
    const state = reactive({
      isOpen: props.isOpened,
      isClosing: !props.isOpened,
    })
    return {
      ...toRefs(state),
      getDiffTimeBetweenCurrentDate,
      async handleToggle() {
        state.isClosing = true

        await wait(250)
        state.isOpen = !state.isOpen
        state.isClosing = false
      },
      brandColors: pallete.brand,
    }
  },
}
</script>

<template>
  <div
    @click="handleToggle"
    class="flex flex-col px-8 py-6 rounded cursor-pointer bg-brand-gray"
  >
    <div class="flex items-center justify-between w-full mb-8">
      <badge :type="feedback.type" />

      <span class="font-regular text-brand-graydark">
        {{ getDiffTimeBetweenCurrentDate(feedback.createdAt) }}
      </span>
    </div>

    <div class="text-lg font-medium text-gray-800">
      {{ feedback.text }}
    </div>

    <div
      v-if="isOpen"
      :class="{ animate__fadeOutUp: isClosing }"
      class="flex mt-8 animate__animated animate__fadeInUp animate__faster"
    >
      <div class="flex flex-col w-1/2">
        <div class="flex flex-col">
          <span class="font-bold text-gray-400 uppercase select-none">
            Página
          </span>
          <span class="font-medium text-gray-700">
            {{ feedback.page }}
          </span>
        </div>

        <div class="flex flex-col">
          <span class="font-bold text-gray-400 uppercase select-none">
            Dispositivos
          </span>
          <span class="font-medium text-gray-700">
            {{ feedback.device }}
          </span>
        </div>
      </div>
      <div class="flex flex-col w-1/2">
        <div class="flex flex-col">
          <span class="font-bold text-gray-400 uppercase select-none">
            Usuário
          </span>
          <span class="font-medium text-gray-700">
            {{ feedback.fingerprint }}
          </span>
        </div>
      </div>
    </div>

    <div v-else class="flex justify-end mt-8">
      <chevron-down-icon size="24" :color="brandColors.graydark" />
    </div>
  </div>
</template>
