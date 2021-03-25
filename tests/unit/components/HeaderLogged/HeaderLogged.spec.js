import { createRouter, createWebHistory } from 'vue-router';
import { shallowMount } from '@vue/test-utils';
import HeaderLogged from '../../../../src/components/HeaderLogged/index.vue';
import { routes } from '../../../../src/router';

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

const mockStore = {
  currentUser: {},
};
jest.mock('../../../../src/hooks/useStore', () => () => mockStore);

describe('<HeaderLogged />', () => {
  it('should render header logged correctly', async () => {
    router.push('/');
    await router.isReady();
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render 3 dots when there is not user logged', async () => {
    router.push('/');
    await router.isReady();
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router],
      },
    });

    const buttonLogout = wrapper.find('#logout-button');
    expect(buttonLogout.text()).toBe('...');
  });

  it('should render user name when there is user logged', async () => {
    mockStore.currentUser.name = 'Vinicius';
    router.push('/');
    await router.isReady();
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router],
      },
    });

    const buttonLogout = wrapper.find('#logout-button');
    expect(buttonLogout.text()).toBe('Vinicius (sair)');
  });
});
