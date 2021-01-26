import bus from '@/utils/bus'

const EVENT_NAME = 'toast:toggle'

export default function useModal() {
  const open = (payload = {}) => {
    bus.emit(EVENT_NAME, { status: true, ...payload })
    setTimeout(() => {
      it.close()
    }, 5000)
  }

  const it = {
    info(message) {
      open({ background: 'bg-brand-info', message, isLoading: true })
    },
    error(message) {
      open({ background: 'bg-brand-danger', message, isLoading: true })
    },
    warning(message) {
      open({ background: 'bg-brand-warning', message, isLoading: true })
    },
    close(payload = {}) {
      bus.emit(EVENT_NAME, { status: false, ...payload, isLoading: false })
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
