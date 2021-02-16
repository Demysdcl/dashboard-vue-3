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
    viewBox="0 0 8 8"
    d="M8 0.805714L7.19429 0L4 3.19429L0.805714 0L0 0.805714L3.19429 4L0 7.19429L0.805714 8L4 4.80571L7.19429 8L8 7.19429L4.80571 4L8 0.805714Z"
  />
</template>
