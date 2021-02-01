<script>
import useModal from '@/hooks/useModal'
import InputForm from '@/components/InputForm.vue'
import { reactive, toRefs } from 'vue'
import { useField } from 'vee-validate'
import {
  validateEmptyAndEmail,
  validateEmptyAndMinLength,
} from '@/utils/validators'
import service from '@/service'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

import LoadingIcon from '@/components/LoadingIcon.vue'

export default {
  components: { InputForm, LoadingIcon },
  setup() {
    const modal = useModal()
    const router = useRouter()
    const toast = useToast()

    const { value: nameValue, errorMessage: nameError } = useField(
      'name',
      (e) => validateEmptyAndMinLength(e, 2),
    )

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
        case 400:
          return 'Error ao criar a conta'
        default:
          return 'Ocorreu um error ao realizar o login'
      }
    }

    const state = reactive({
      hasError: false,
      isLoadingIcon: false,
      name: {
        value: nameValue,
        errorMessage: nameError,
      },
      email: {
        value: emailValue,
        errorMessage: emailError,
      },
      password: {
        value: passwordValue,
        errorMessage: passwordError,
      },
    })

    const it = {
      ...toRefs(state),
      close: modal.close,
      async handleSubmit() {
        try {
          toast.clear()
          state.isLoadingIcon = true

          await service.auth.register(
            state.name.value,
            state.email.value,
            state.password.value,
          )

          await service.auth.login(state.email.value, state.password.value)

          localStorage.setItem(
            'token',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVhYjc1OWY4LWYyMzgtNGZmOS1hZTkxLWVlMTU1ODk4MjMyOSIsImVtYWlsIjoiaWdvckBpZ29yLm1lIiwibmFtZSI6Iklnb3IgSGFsZmVsZCIsImlhdCI6MTYxMDQyNjg4OH0.88S5YLssZhC_TgotUZFDlcw5Cc3xlQTB0mqsQcQu1dY',
          )
          state.isLoadingIcon = false
          router.push({ name: 'Feedbacks' })
          modal.close()
        } catch (error) {
          state.isLoadingIcon = false
          state.hasError = !!error
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
      Crie uma conta
    </h1>

    <button @click="close" class="text-4xl text-gray-800 focus:outline-none">
      &times;
    </button>
  </div>

  <div class="mt-16">
    <form class="flex flex-col" @submit.prevent="handleSubmit">
      <input-form
        v-model:value="name.value"
        :errorMessage="name.errorMessage"
        title="Nome"
        type="text"
        placeholder="Seu nome"
        position="mt-8"
      />
      <input-form
        v-model:value="email.value"
        :errorMessage="email.errorMessage"
        title="E-mail"
        type="email"
        placeholder="youremail@provider.com"
        position="mt-8"
      />
      <input-form
        v-model:value="password.value"
        :errorMessage="password.errorMessage"
        title="Password"
        type="password"
        position="mt-8"
      />

      <button
        :disabled="isLoadingIcon"
        type="submit"
        :class="{ 'opacity-50': isLoadingIcon }"
        class="flex justify-center px-8 py-3 mt-10 font-bold text-white rounded-full bg-brand-main focus:outline-none transition-all duration-50"
      >
        <loading-icon
          v-if="isLoadingIcon"
          name="loadingIcon"
          class="animate-spin"
        />
        <span v-else>Criar conta</span>
      </button>
    </form>
  </div>
</template>

<style scoped></style>
