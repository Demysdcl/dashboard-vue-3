<script>
import useModal from '@/hooks/useModal'
import InputForm from '@/components/InputForm.vue'
import { reactive } from 'vue'
import { useField } from 'vee-validate'
import {
  validateEmptyAndEmail,
  validateEmptyAndMinLength,
} from '@/utils/validators'
import service from '@/service'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import Icon from '@/components/Icon.vue'

export default {
  components: { InputForm, Icon },
  setup() {
    const modal = useModal()
    const router = useRouter()
    const toast = useToast()

    const { value: emailValue, errorMessage: emailError } = useField(
      'email',
      validateEmptyAndEmail,
    )
    const {
      value: passwordValue,
      errorMessage: passwordError,
    } = useField('password', (e) => validateEmptyAndMinLength(e, 3))

    const getError = (status = '') => {
      switch (status) {
        case 404:
          return 'E-mail não encontrado'
        case 401:
          return 'E-mail ou senha inválidos'
        default:
          return 'Ocorreu um error ao realizar o login'
      }
    }

    const it = {
      st: reactive({
        hasError: false,
        isLoading: false,
        email: {
          value: emailValue,
          errorMessage: emailError,
        },
        password: {
          value: passwordValue,
          errorMessage: passwordError,
        },
      }),
      close: modal.close,
      async handleSubmit() {
        try {
          toast.clear()
          it.st.isLoading = true
          const { data } = await service.auth.login(
            it.st.email.value,
            it.st.password.value,
          )
          localStorage.setItem('token', data.totken)
          router.push({ name: 'Feedbacks' })
          modal.close()
        } catch (error) {
          it.st.isLoading = false
          it.st.hasError = !!error
          toast.error(getError(error.response.status))
        }
      },
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
    <form class="flex flex-col" @submit.prevent="handleSubmit">
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
        class="flex justify-center px-8 py-3 mt-10 font-bold text-white rounded-full bg-brand-main focus:outline-none transition-all duration-50"
      >
        <icon v-if="st.isLoading" name="loading" class="animate-spin" />
        <span v-else>Entrar</span>
      </button>
    </form>
  </div>
</template>

<style scoped></style>
