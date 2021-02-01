<script>
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ModalFactory from './containers/ModalFactory.vue'
import service from './service'
import { setCurrentUser } from './store/user'

export default {
  components: { ModalFactory },
  setup() {
    const route = useRoute()
    const router = useRouter()

    watch(
      () => route.path,
      async () => {
        if (route.meta.hasAuth) {
          const token = localStorage.getItem('token')
          if (!token || token === 'undefined') {
            localStorage.removeItem('token')
            router.push({ name: 'Home' })
            return
          }

          const { data } = await service.users.getMe()
          setCurrentUser(data)
        }
      },
    )
  },
}
</script>

<template>
  <modal-factory />
  <router-view />
</template>
