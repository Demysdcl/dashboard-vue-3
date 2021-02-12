<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({})
    return {
      ...toRefs(state),
    }
  },
})
</script>

<template>
  <div class="fixed bottom-0 right-0">
    Widget
  </div>
</template>
