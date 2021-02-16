<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import Box from './Box.vue'
import Standby from './Standby.vue'
import useIframeControl from '@/hooks/iframe'

export default defineComponent({
  components: { Standby, Box },
  setup() {
    const iframe = useIframeControl()
    const state = reactive({
      isOpen: false,
    })

    onMounted(() => {
      iframe.updateCoreValuesOnStore()
    })

    return {
      ...toRefs(state),
      open() {
        state.isOpen = true
        iframe.notifyOpen()
      },
      close() {
        state.isOpen = false
        iframe.notifyClose()
      },
    }
  },
})
</script>

<template>
  <teleport to="body">
    <div>
      <box v-if="isOpen" @onClose="close" />
      <standby v-else @onOpen="open" />
    </div>
  </teleport>
</template>
