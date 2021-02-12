<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: String,
    background: String,
  },
})
</script>

<template>
  <div
    class="w-full h-3/4 flex flex-col justify-center items-center"
    :class="background"
  >
    <h1 class="text-6xl font-black text-brand-gray">{{ title }}</h1>
    <slot />
  </div>
</template>
