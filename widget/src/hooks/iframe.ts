import { setValueToField } from '@/store'

export default function useIframeControl() {
  const notify = (isOpen: boolean) =>
    window.parent.postMessage(
      {
        isWidget: true,
        isOpen,
      },
      '*',
    )

  return {
    updateCoreValuesOnStore() {
      if (process.env.NODE_ENV === 'production') {
        const query = new URLSearchParams(window.location.search)
        const apiKey = query.get('api_key') ?? ''
        const page = query.get('page') ?? ''
        const fingerprint = query.get('fingerprint') ?? ''

        setValueToField('currentPage', page)
        setValueToField('apikey', apiKey)
        setValueToField('fingerprint', fingerprint)

        return
      }
      setValueToField('currentPage', 'https://playground-url.com')
      setValueToField('apikey', 'api_key_de_teste')
      setValueToField('fingerprint', '123123123123123')
    },

    notifyClose() {
      notify(true)
    },
    notifyOpen() {
      notify(false)
    },
  }
}
