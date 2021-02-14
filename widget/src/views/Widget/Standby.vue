<script lang="ts">
import ChatIcon from '@/components/icons/ChatIcon.vue'
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  components: { ChatIcon },
  setup() {
    const state = reactive({})
    return {
      ...toRefs(state),
    }
  },
})
</script>

<template>
  <div
    @click="() => $emit('onOpen')"
    class="fixed z-50 right-0 bottom-0 mb-5 mr-5 bg-brand-main rounded-full py-3 px-5 flex items-center shadow-xl cursor-pointer select-none animate__animated animate__fadeInUp animate__faster"
  >
    <chat-icon size="27" />
    <span class="ml-3 font-black text-white text-xl">
      Deixe um feedback
    </span>
  </div>
</template>
