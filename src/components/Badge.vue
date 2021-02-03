<script>
import { computed, reactive, toRefs } from 'vue'

export default {
  props: { type: { type: String, required: true } },
  setup(props) {
    const state = reactive({})
    return {
      ...toRefs(state),
      label: computed(() => {
        switch (props.type) {
          case 'ISSUE':
            return 'problema'
          case 'IDEA':
            return 'idea'
          default:
            return 'outros'
        }
      }),
      classColor: computed(() => {
        switch (props.type) {
          case 'ISSUE':
            return 'brand-danger'
          case 'IDEA':
            return 'brand-warning'
          default:
            return 'brand-graydark'
        }
      }),
    }
  },
}
</script>

<template>
  <div
    :class="`bg-${classColor}`"
    class="p-2 text-xs font-black text-white uppercase rounded-full"
  >
    {{ label }}
  </div>
</template>
