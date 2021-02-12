<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import Widget from '../Widget/Widget.vue'
import Card from './Card.vue'

export default defineComponent({
  components: { Card, Widget },
  setup() {
    const state = reactive({})
    return {
      ...toRefs(state),
    }
  },
})
</script>

<template>
  <card title="Playground" background="bg-brand-main">
    <p class="text-2xl mt3 font-regular text-brand-gray">
      Este é o playground, use para testar o Widget
    </p>
  </card>
  <card title="👀" />
  <card title="🚨" background="bg-brand-main" />
  <card title="🚀" />
  <widget />
</template>
