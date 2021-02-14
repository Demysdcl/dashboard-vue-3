<script lang="ts">
import useStore from '@/hooks/useStore'
import { setStoreStateField } from '@/store'
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({})
    return {
      ...toRefs(state),
      store: useStore(),
      handleSelectFeedback(type: string) {
        setStoreStateField('feedbackType', type)
      },
    }
  },
})
</script>

<template>
  <component :is="store.currentComponent" />
</template>
