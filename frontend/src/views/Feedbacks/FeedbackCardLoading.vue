<script>
import ContentLoading from '@/containers/ContentLoading.vue'

export default {
  components: { ContentLoading },
}
</script>

<template>
  <content-loading
    class="flex flex-col items-center rounded"
    height="300px"
    width="100%"
  >
    <content-loading
      class="mt-3 rounded"
      width="90%"
      height="90px"
      animationDuration="2s"
    />

    <content-loading
      class="mt-3 rounded"
      width="90%"
      height="90px"
      animationDuration="2.3s"
    />

    <content-loading
      class="mt-3 rounded"
      width="90%"
      height="90px"
      animationDuration="2.7s"
    />
  </content-loading>
</template>
