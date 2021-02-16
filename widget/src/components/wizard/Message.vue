<script>
import { defineComponent, reactive, toRefs } from 'vue'
import Icons from '../icons/Icons.vue'
import palette from '../../../palette'
import { resetStore } from '@/store'

export default defineComponent({
  components: { Icons },
  props: { title: String, buttonTitle: String, color: String, icon: String },
  setup() {
    const state = reactive({})
    return {
      ...toRefs(state),
      palette: palette.brand,
      goBack() {
        resetStore()
      },
    }
  },
})
</script>

<template>
  <div class="flex flex-col items-center justify-between w-full my-5">
    <icons :name="icon" :color="palette[color]" size="70" />

    <p class="text-xl font-black text-center w-full mt-2">
      {{ title }}
    </p>

    <div class="flex justify-center items-center w-full mt-2">
      <button
        @click="goBack"
        class="rounded-full font-regular text-sm flex flex-col justify-center bg-brand-gray items-center py-2 px-5 cursor-pointer focus:outline-none"
      >
        {{ buttonTitle }}
      </button>
    </div>
  </div>
</template>
