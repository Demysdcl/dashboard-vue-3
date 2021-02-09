import { routes } from '@/router'
import { shallowMount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import HeaderLogged from './HeaderLogged'

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

const mockStore = { currentUser: {} }
jest.mock('@/hooks/useStore', () => {
  return () => {
    return mockStore
  }
})

describe('<HeaderLogged />', () => {
  const wrapper = shallowMount(HeaderLogged, {
    global: { plugins: [router] },
  })

  beforeEach(async () => {
    router.push('/')
    await router.isReady()
  })

  it('should render HeaderLogged', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render 3 dots when there isn´t user logged', () => {
    const logoutButton = wrapper.find('#logout-button')
    expect(logoutButton.text()).toBe('...')
  })

  it('should render user name when there`s user logged', () => {
    mockStore.currentUser.name = 'Demys'
    const wrapper = shallowMount(HeaderLogged, {
      global: { plugins: [router] },
    })
    const logoutButton = wrapper.find('#logout-button')
    expect(logoutButton.text()).toBe('Demys (sair)')
  })
})
