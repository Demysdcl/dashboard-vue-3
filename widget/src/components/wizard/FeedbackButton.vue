<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  props: {
    title: String,
  },
  setup() {
    const state = reactive({})
    return {
      ...toRefs(state),
    }
  },
})
</script>

<template>
  <button
    @click="$emit('select')"
    class="justify-center items-center p-5 w-28 cursor-pointer focus:outline-none rounded-xl hover:bg-gray-100 bg-brand-gray flex flex-col"
  >
    <div class="w-12">
      <slot />
    </div>
    <p class="font-medium mt-1 text-gray-800">
      {{ title }}
    </p>
  </button>
</template>
