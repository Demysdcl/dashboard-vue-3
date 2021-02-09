<script>
import HeaderLogged from './HeaderLogged.vue'

export default {
  components: { HeaderLogged },
  props: {
    title: String,
    description: String,
  },
}
</script>

<template>
  <div class="flex justify-center w-full h-28 bg-brand-main">
    <header-logged />
  </div>

  <div class="flex flex-col items-center justify-center h-64 bg-brand-gray">
    <h1 class="text-4xl font-black text-center text-gray-800">
      {{ title }}
    </h1>
    <p class="text-lg text-center text-gray-800 font-regular">
      {{ description }}
    </p>
  </div>
</template>
