<script>
import ContentLoading from '@/containers/ContentLoading.vue'
export default {
  components: { ContentLoading },
}
</script>

<template>
  <content-loading
    width="100%"
    height="300px"
    class="flex flex-col items-center rounded"
  >
    <content-loading
      class="mt-3 rounded"
      width="90%"
      height="50px"
      animationDuration="2s"
    />

    <content-loading
      class="mt-3 rounded"
      width="80%"
      height="50px"
      animationDuration="2.3s"
    />

    <content-loading
      class="mt-3 rounded"
      width="80%"
      height="50px"
      animationDuration="2.7s"
    />

    <content-loading
      class="mt-3 rounded"
      width="80%"
      height="50px"
      animationDuration="2.9s"
    />
  </content-loading>
</template>
