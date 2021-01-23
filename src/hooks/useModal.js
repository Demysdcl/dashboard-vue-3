import bus from '@/utils/bus'

const EVENT_NAME = 'modal:toggle'

export default function useModal() {
  const it = {
    open(payload = {}) {
      bus.emit(EVENT_NAME, { status: true, ...payload })
    },
    close(payload = {}) {
      bus.emit(EVENT_NAME, { status: false, ...payload })
    },

    listen(fn) {
      bus.on(EVENT_NAME, fn)
    },

    off(fn) {
      bus.off(EVENT_NAME, fn)
    },
  }
  return it
}
