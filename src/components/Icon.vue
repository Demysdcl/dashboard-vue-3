<script>
import Loading from './Loading'

export default {
  components: { Loading },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <component :is="name" v-bind="$props" />
</template>
