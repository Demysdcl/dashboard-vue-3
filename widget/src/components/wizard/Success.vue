<script>
import { defineComponent } from 'vue'
import Message from './Message.vue'

export default defineComponent({
  components: { Message },
})
</script>

<template>
  <message
    title="Obrigado! Recebemos o seu feedback"
    buttonTitle="Envie mais feedbacks"
    color="success"
    icon="check"
  />
</template>
