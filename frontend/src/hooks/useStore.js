import Store from '@/store'

export default function useStore(module) {
  return Store[module] || Store
}
