<script lang="ts">
import useStore from '@/hooks/useStore'
import { setValueToField } from '@/store'
import { defineComponent, reactive, toRefs } from 'vue'
import useNavigation from '@/hooks/navigation'
import SelectFeedbackType from './SelectFeedbackType.vue'
import WriteAFeedback from './WriteAFeedback.vue'
import Success from './Success.vue'

export default defineComponent({
  components: { SelectFeedbackType, WriteAFeedback, Success },
  setup() {
    const state = reactive({})
    return {
      ...toRefs(state),
      store: useStore(),
      next: useNavigation().next,
      handleSelectFeedback(type: string) {
        setValueToField('feedbackType', type)
      },
    }
  },
})
</script>

<template>
  <component
    @selectFeedbackType="(event) => handleSelectFeedback(event)"
    @next="next"
    :is="store.currentComponent"
  />
</template>
