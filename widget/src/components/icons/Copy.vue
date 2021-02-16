<script lang="ts">
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
    d="M14 0H2C0.9 0 0 0.9 0 2V16H2V2H14V0ZM13 4L19 10V20C19 21.1 18.1 22 17 22H5.99C4.89 22 4 21.1 4 20L4.01 6C4.01 4.9 4.9 4 6 4H13ZM12 11H17.5L12 5.5V11Z"
  />
</template>
