<script>
export default {
  props: {
    id: String,
    title: String,
    type: String,
    value: String,
    errorMessage: String,
    placeholder: {
      type: String,
      default: '',
    },
    position: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <label for="" class="block" :class="position">
    <span class="text-lg font-medium text-gray-800"> {{ title }} </span>
    <input
      :id="id + '-input'"
      @input="(e) => $emit('update:value', e.target.value)"
      :value="value"
      :type="type"
      class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
      :placeholder="placeholder"
    />
    <span
      :id="id + '-error'"
      v-if="!!errorMessage"
      class="block font-medium text-brand-danger"
      :class="{ 'border-brand-danger': !!errorMessage }"
    >
      {{ errorMessage }}
    </span>
  </label>
</template>

<style scoped></style>
