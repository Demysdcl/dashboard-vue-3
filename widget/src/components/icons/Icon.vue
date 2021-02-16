<script lang="ts">
export default {
  props: {
    size: { type: [String, Number], default: 22 },
    color: { type: String, default: 'white' },
    viewbox: { type: String, default: '0 0 30 30' },
    d: String,
  },
}
</script>

<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="viewbox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path :d="d" :fill="color" />
  </svg>
</template>
