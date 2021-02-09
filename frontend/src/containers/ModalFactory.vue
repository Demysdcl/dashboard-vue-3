<script>
import { defineAsyncComponent, onMounted, reactive, toRefs } from 'vue'
import useModal from '@/hooks/useModal'

const DEFAULT_WIDTH = 'w-3/4 lg:w-1/3'

const ModalLogin = defineAsyncComponent(() =>
  import('../views/Home/ModalLogin'),
)
const ModalAccountCreate = defineAsyncComponent(() =>
  import('../views/Home/ModalAccountCreate'),
)

export default {
  components: { ModalLogin, ModalAccountCreate },
  setup() {
    const modal = useModal()

    onMounted(() => {
      modal.listen(it.handleModalToggle)

      return () => modal.off(it.handleModalToggle)
    })

    const state = reactive({
      isActive: false,
      component: {},
      props: {},
      width: DEFAULT_WIDTH,
    })

    const it = {
      ...toRefs(state),

      handleModalToggle({ status, props, width, component }) {
        if (status) {
          state.isActive = status
          state.props = props
          state.component = component
          state.width = width || DEFAULT_WIDTH
        } else {
          state.isActive = status
          state.component = {}
          state.props = {}
          state.width = DEFAULT_WIDTH
        }
      },
    }

    return it
  },
}
</script>

<template>
  <teleport to="body">
    <section
      v-if="isActive"
      class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
      @click="handleModalToggle({ status: false })"
    >
      <div @click.stop class="fixed mx-10" :class="width">
        <div
          class="flex flex-col overflow-hidden bg-white rounded-lg animate__animated animate__fadeInDown animate__fast"
        >
          <div class="flex flex-col px-12 py-10 bg-white">
            <component :is="component" />
          </div>
        </div>
      </div>
    </section>
  </teleport>
</template>

<style scoped></style>
