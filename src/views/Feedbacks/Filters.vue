<script>
import { reactive, toRefs } from 'vue'
import services from '@/service'
import useStore from '@/hooks/useStore'

const LABELS = {
  all: { title: 'Todos', color: 'brand-info' },
  issue: { title: 'Problemas', color: 'brand-danger' },
  idea: { title: 'Ideias', color: 'brand-warning' },
  other: { title: 'Outros', color: 'brand-graydark' },
}

const applyFilterStructure = (summary) => {
  return Object.keys(summary).map((item) => {
    const currentFilter = {
      label: LABELS[item].title,
      color: LABELS[item].color,
      amount: summary[item],
    }
    if (item === 'all') {
      currentFilter.active = true
    }
    currentFilter.type = item

    return currentFilter
  })
}

export default {
  async setup(_, { emit }) {
    const store = useStore('Global')

    const state = reactive({
      hasError: false,
      filters: [],
    })

    const it = {
      ...toRefs(state),
      async handleSelect(type) {
        if (store.isLoading) {
          return
        }
        state.filters = state.filters.map((filter) => ({
          ...filter,
          active: filter.type === type,
        }))

        emit('select', type)
      },
    }

    try {
      const { data } = await services.feedbacks.getSummary()
      state.filters = applyFilterStructure(data)
    } catch (error) {
      state.hasError = !!error
      state.filters = applyFilterStructure({
        all: 0,
        idea: 0,
        issue: 0,
        other: 0,
      })
    }

    return it
  },
}
</script>

<template>
  <div class="flex flex-col">
    <h1 class="text-2xl font-regular text-brand-darkgray">
      Filtros
    </h1>
    <ul class="flex flex-col mt-3 list-none">
      <li
        v-for="filter in filters"
        :key="filter.label"
        :class="{ 'bg-gray-200 bg-opacity-50': filter.active }"
        @click="() => handleSelect(filter.type)"
        class="flex items-center justify-between px-4 py-1 rounded cursor-pointer"
      >
        <div class="flex items-center">
          <span
            :class="`bg-${filter.color}`"
            class="inline-block w-2 h-2 mr-2 rounded-full"
          />
          {{ filter.label }}
        </div>
        <span
          :class="
            filter.active ? `text-${filter.color}` : 'text-brand-darkgray'
          "
          class="font-bold"
        >
          {{ filter.amount }}
        </span>
      </li>
    </ul>
  </div>
</template>
