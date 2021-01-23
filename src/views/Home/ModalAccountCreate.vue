<script>
import { reactive } from 'vue'

export default {
  setup() {
    const it = {
      st: reactive({}),
    }
    return it
  },
}
</script>

<template>
  <div>Modal de criação de conta</div>
</template>

<style scoped></style>
