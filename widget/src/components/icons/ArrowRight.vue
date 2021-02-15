<script>
import Icon from './Icon.vue'
export default {
  components: {
    Icon,
  },
  props: {
    size: [String, Number],
    color: String,
  },
}
</script>

<template>
  <Icon
    :color="color"
    :size="size"
    d="M3.07415 3.21819L12.3158 3.23798L12.3183 2.06329L3.07666 2.04351L3.08044 0.281483L0.00512019 2.62427L3.07038 4.98021L3.07415 3.21819Z"
  />
</template>
