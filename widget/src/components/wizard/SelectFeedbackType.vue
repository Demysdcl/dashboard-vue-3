<script lang="ts">
import { defineComponent } from 'vue'
import FeedbackButton from './FeedbackButton.vue'

export default defineComponent({
  components: { FeedbackButton },
  setup(_, { emit }) {
    return {
      handleSelect(type: string) {
        emit('selectFeedbackType', type)
        emit('next')
      },
    }
  },
})
</script>

<template>
  <div class="flex justify-between w-full my-5">
    <feedback-button @select="() => handleSelect('ISSUE')" title="Problema">
      <img class="w-full" src="../../assets/images/issue.png" :alt="title" />
    </feedback-button>

    <feedback-button @select="() => handleSelect('IDEA')" title="Ideia">
      <img class="w-full" src="../../assets/images/lamp.png" :alt="title" />
    </feedback-button>

    <feedback-button @select="() => handleSelect('OTHER')" title="Outro">
      <img class="w-full" src="../../assets/images/fire.png" :alt="title" />
    </feedback-button>
  </div>
</template>
