<script>
import HeaderMain from '../../containers/HeaderMain.vue'
import LoadingIcon from '../../components/LoadingIcon.vue'

import useStore from '@/hooks/useStore'
import palette from '../../../palette'
import CopyIcon from '@/components/CopyIcon.vue'
import { computed, reactive, toRefs, watch } from 'vue'
import ContentLoading from '@/containers/ContentLoading.vue'
import service from '@/service'
import { setApiKey } from '@/store/user'
import { useToast } from 'vue-toastification'

export default {
  components: {
    CopyIcon,
    LoadingIcon,
    ContentLoading,
    HeaderMain,
  },

  setup() {
    const toast = useToast()

    const handleError = (error) => {
      state.hasError = !!error
      state.isLoading = false
    }

    const state = reactive({
      isLoading: false,
      hasError: false,
    })

    const it = {
      ...toRefs(state),
      store: useStore(),
      brandColors: palette.brand,
      code: computed(
        () =>
          `<script
  defer
  async
  onload="init('{{store.User.currentUser.apiKey}}')"
  src="https://igorhalfeld-feedbacker-widget.netlify.app/init.js"
></script>`,
      ),
      async handleGenerateApikey() {
        try {
          state.isLoading = true
          const { data } = await service.users.generateApikey()
          setApiKey(data.apikey)
          state.isLoading = false
        } catch (error) {
          handleError(error)
        }
      },
      handleCopy() {
        toast.clear()
        try {
          navigator.clipboard.writeText(it.store.User.currentUser.apikey)
          toast.success('Copiado')
        } catch (error) {
          handleError(error)
          toast.error('Problema ao copiar a chave')
        }
      },
    }

    watch(
      () => it.store.User.currentUser,
      () => {
        if (!it.store.Global.isLoading && !it.store.User.currentUser.apikey) {
          handleError(true)
        }
      },
    )

    return it
  },
}
</script>

<template>
  <header-main
    title="Credenciais"
    description="Guia de instalação e geração de suas credenciais"
  />

  <div class="flex justify-center w-full h-full">
    <div class="flex flex-col  w-4/5 max-w-6xl py-10">
      <h1 class="text-3xl font-black text-brand-darkgrey">
        Instalação e configuração
      </h1>
      <p class="mt-10 text-lg text-gray-800 font-regular">
        Esta aqui é usa chave de api
      </p>

      <content-loading
        v-if="store.Global.isLoading || isLoading"
        class="rounded"
        width="600px"
        height="50px"
      />

      <div
        v-else
        class="flex py-3 pl-5 mt-2 rounded justify-between bg-brand-gray w-full lg:w-1/2"
      >
        <span v-if="hasError">Erro ao carregar a apikey</span>
        <span v-else>{{ store.User.currentUser.apikey }}</span>
        <div v-if="!hasError" class="flex ml-20 mr-5">
          <copy-icon
            class="cursor-pointer hover:opacity-75"
            :color="brandColors.graydark"
            size="24"
            @click="handleCopy"
          />
          <loading-icon
            @click="handleGenerateApikey"
            class="cursor-pointer ml-3"
            :color="brandColors.graydark"
            size="24"
          />
        </div>
      </div>

      <p class="mt-10 text-lg  text-gray-800 font-regular">
        Coloque o script no seu site para começar a receber feedbacks
      </p>

      <content-loading
        v-if="store.Global.isLoading || isLoading"
        class="rounded"
        width="600px"
        height="50px"
      />

      <div
        v-else
        class="flex py-3 pl-5 pr-20 mt-2 rounded bg-brand-gray w-full lg:w-2/3 overflow-x-scroll"
      >
        <span v-if="hasError">Erro ao carregar o script</span>
        <pre v-else>
          {{code}}
        </pre>
      </div>
    </div>
  </div>
</template>
