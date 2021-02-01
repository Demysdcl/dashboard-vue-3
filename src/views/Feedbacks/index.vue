<script>
import HeaderMain from '@/containers/HeaderMain.vue'
import Filters from './Filters.vue'
export default {
  components: { HeaderMain, Filters },
  setup() {
    const it = {}
    return it
  },
}
</script>

<template>
  <header-main
    title="Feedbacks"
    description="Detalhe de todos os feedbacks recebidos"
  />
  <div class="flex flex-col w-full pb-20">
    <div class="grid grid-cols-4 gap-2 w-4/5 max-w-6xl py-10">
      <div>
        <h1 class="text-3xl font-black text-brand-darkgray">
          Listagem
        </h1>
        <suspense>
          <template #default>
            <filters />
          </template>
          <template #faulback>
            Loading...
          </template>
        </suspense>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
