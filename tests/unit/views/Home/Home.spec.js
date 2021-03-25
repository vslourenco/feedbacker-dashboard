import { createRouter, createWebHistory } from 'vue-router';
import { shallowMount } from '@vue/test-utils';
import Home from '../../../../src/views/Home/index.vue';
import { routes } from '../../../../src/router';

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

describe('<Home />', () => {
  it('should render home correctly', async () => {
    router.push('/');
    await router.isReady();
    const wrapper = shallowMount(Home, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
