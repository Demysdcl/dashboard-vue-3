<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Contact from './Contact.vue'
import CustomHeader from './CustomHeader.vue'
import useModal from '@/hooks/useModal'

export default {
  components: { Contact, CustomHeader },

  setup() {
    const router = useRouter()
    const modal = useModal()

    onMounted(() => {
      const token = localStorage.getItem('token')
      token && router.push({ name: 'Feedbacks' })
    })

    return {
      handleLogin() {
        modal.open({ component: 'ModalLogin' })
      },
      handleAccountCreate() {
        modal.open({ component: 'ModalAccountCreate' })
      },
    }
  },
}
</script>

<template>
  <custom-header @login="handleLogin" @create-account="handleAccountCreate" />
  <contact />
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">feedbacker © 2021</p>
  </div>
</template>
