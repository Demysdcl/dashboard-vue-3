<script lang="ts">
import { defineComponent } from 'vue'
import ArrowRight from './ArrowRight.vue'
import Atention from './Atention.vue'
import Chat from './Chat.vue'
import Check from './Check.vue'
import ChevronDown from './ChevronDown.vue'
import Close from './Close.vue'
import Copy from './Copy.vue'
import Loading from './Loading.vue'

const names = [
  'Loading',
  'ArrowRight',
  'Atention',
  'Chat',
  'Check',
  'ChevronDown',
  'Close',
  'Copy',
]

export default defineComponent({
  components: {
    Loading,
    ArrowRight,
    Atention,
    Chat,
    Check,
    ChevronDown,
    Close,
    Copy,
  },
  props: {
    name: {
      type: String,
      default: '',
      validate: (name: string) => names.includes(name),
    },
  },
})
</script>

<template>
  <component :is="name" v-bind="$props" />
</template>
