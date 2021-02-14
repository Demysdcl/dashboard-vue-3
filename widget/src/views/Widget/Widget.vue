<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import Box from './Box.vue'
import Standby from './Standby.vue'

export default defineComponent({
  components: { Standby, Box },
  setup() {
    const state = reactive({
      isOpen: false,
    })
    return {
      ...toRefs(state),
    }
  },
})
</script>

<template>
  <teleport to="body">
    <div>
      <box v-if="isOpen" @onClose="() => (isOpen = false)" />
      <standby v-else @onOpen="() => (isOpen = true)" />
    </div>
  </teleport>
</template>
