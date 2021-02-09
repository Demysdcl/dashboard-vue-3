<script>
export default {
  props: {
    size: { type: [String, Number], default: 22 },
    color: { type: String, default: 'white' },
    d: String,
  },
}
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 22 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path :d="d" :fill="color" />
  </svg>
</template>
