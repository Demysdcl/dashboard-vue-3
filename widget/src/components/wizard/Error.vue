<script>
import { defineComponent } from 'vue'
import Message from './Message.vue'

export default defineComponent({
  components: { Message },
})
</script>

<template>
  <message
    title="Droga! Aconteceu algum erro."
    buttonTitle="Tentar novamente"
    color="danger"
    icon="attention"
  />
</template>
