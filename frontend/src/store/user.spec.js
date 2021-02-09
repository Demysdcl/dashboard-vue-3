const { default: useStore } = require('@/hooks/useStore')
const { setCurrentUser, cleanCurrentUser, setApiKey } = require('./user')

describe('User store', () => {
  const store = useStore('User')
  afterEach(() => {
    cleanCurrentUser()
  })

  it('should set current user ', () => {
    setCurrentUser({ name: 'Demys' })
    expect(store.currentUser.name).toBe('Demys')
  })

  it('should set apikey on current user', () => {
    setApiKey('123')
    expect(store.currentUser.apiKey).toBe('123')
  })

  it('should clean the current user', () => {
    setCurrentUser({ name: 'Demys' })
    expect(store.currentUser.name).toBe('Demys')
    cleanCurrentUser()
    expect(store.currentUser.name).toBeFalsy()
  })
})
