<script>
import Link from '@/components/Link'
import { computed, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import useStore from '@/hooks/useStore'
import { cleanCurrentUser } from '@/store/user'

export default {
  components: {
    Link,
  },
  setup() {
    const store = useStore('User')
    const state = reactive({
      links: [
        {
          title: 'Credenciais',
          to: 'Credentials',
        },
        {
          title: 'Feedbacks',
          to: 'Feedbacks',
        },
      ],
    })

    const it = {
      ...toRefs(state),
      router: useRouter(),
      logoutLabel: computed(() =>
        store.currentUser.name ? `${store.currentUser.name} (sair)` : '...',
      ),
      handleLogout() {
        localStorage.removeItem('token')
        cleanCurrentUser()
        it.router.push({ name: 'Home' })
      },
    }
    return it
  },
}
</script>

<template>
  <div class="flex items-center justify-between w-4/5 max-w-6xl py-10">
    <div class="w-28 lg:w-36">
      <img class="w-full" alt="logo" src="../assets/images/logo_white.png" />
    </div>

    <div class="flex">
      <ul class="flex list-none">
        <Link
          v-for="link in links"
          :title="link.title"
          :to="link.to"
          :key="link.title"
        />

        <li
          @click="handleLogout"
          class="px-6 py-2 font-bold bg-white rounded-full cursor-pointer text-brand-main focus:outline-none"
        >
          {{ logoutLabel }}
        </li>
      </ul>
    </div>
  </div>
</template>
