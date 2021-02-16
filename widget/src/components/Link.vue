<script lang="ts">
import { useRouter } from 'vue-router'

export default {
  props: {
    title: String,
    to: String,
  },
  setup() {
    return {
      router: useRouter(),
    }
  },
}
</script>

<template>
  <li
    @click="() => router.push({ name: to })"
    class="px-6 py-2 mr-2 font-bold text-white rounded-full cursor-pointer focus:outline-none"
  >
    {{ title }}
  </li>
</template>
