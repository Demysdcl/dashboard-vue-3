<template>
  <widget />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Widget from './views/Widget/Widget.vue'

export default defineComponent({
  components: { Widget },
  name: 'App',
})
</script>
