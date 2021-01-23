<script>
import { defineAsyncComponent, onMounted, reactive } from 'vue'
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

    const it = {
      st: reactive({
        isActive: false,
        component: {},
        props: {},
        width: DEFAULT_WIDTH,
      }),

      handleModalToggle({ status, props, width, component }) {
        if (status) {
          it.st.isActive = status
          it.st.props = props
          it.st.component = component
          it.st.width = width || DEFAULT_WIDTH
        } else {
          it.st.isActive = status
          it.st.component = {}
          it.st.props = {}
          it.st.width = DEFAULT_WIDTH
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
      v-if="st.isActive"
      class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
      @click="handleModalToggle({ status: false })"
    >
      <div @click.stop class="fixed mx-10" :class="st.width">
        <div
          class="flex flex-col overflow-hidden bg-white rounded-lg animate__animated animate__fadeInDown animate__fast"
        >
          <div class="flex flex-col px-12 py-10 bg-white">
            <component :is="st.component" />
          </div>
        </div>
      </div>
    </section>
  </teleport>
</template>

<style scoped></style>
