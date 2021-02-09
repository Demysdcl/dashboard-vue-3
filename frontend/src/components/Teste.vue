<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({})
    return {
      ...toRefs(state),
    }
  },
}
</script>

<template>
  <div></div>
</template>
