<script>
import useModal from '@/hooks/useModal'
import InputForm from '@/components/InputForm.vue'
import { reactive } from 'vue'
export default {
  components: { InputForm },
  setup() {
    const modal = useModal()

    const it = {
      st: reactive({
        hasError: false,
        isLoading: false,
        email: {
          value: 'demysdcl@gmail.com',
          errorMessage: '',
        },
        password: {
          value: '',
          errorMessage: '',
        },
      }),
      close: modal.close,
      handleSubmit() {},
    }
    return it
  },
}
</script>

<template>
  <div class="flex justify-between">
    <h1 class="text-4xl font-black text-gray-800">
      Entre na sua conta
    </h1>

    <button @click="close" class="text-4xl text-gray-800 focus:outline-none">
      &times;
    </button>
  </div>

  <div class="mt-16">
    <form @submit.prevent="handleSubmit">
      <input-form
        v-model:value="st.email.value"
        :errorMessage="st.email.errorMessage"
        title="E-mail"
        type="email"
        placeholder="youremail@provider.com"
      />
      <input-form
        v-model:value="st.password.value"
        :errorMessage="st.password.errorMessage"
        title="Password"
        type="password"
        position="mt-8"
      />

      <button
        :disabled="st.isLoading"
        type="submit"
        :class="{ 'opacity-50': st.isLoading }"
        class="px-8 py-3 mt-10 font-bold text-white rounded-full bg-brand-main focus:outline-none transition-all duration-50"
      ></button>
    </form>
  </div>
</template>

<style scoped></style>
