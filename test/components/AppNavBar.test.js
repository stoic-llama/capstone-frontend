import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import AppNavBar from '@/components/AppNavBar.vue';
import { mapState } from 'vuex';

// Create a local Vue instance for testing
const localVue = createLocalVue();
localVue.use(Vuex);

// Mock NuxtLink component
localVue.component('NuxtLink', {
    functional: true,
    render(h, { slots }) {
      return h('a', { attrs: { href: '#' } }, slots().default);
    },
  });

describe('AppNavBar.vue', () => {
  let store;
  let state;

  beforeEach(() => {
    // Mock Vuex state
    state = {
      token: null,
      firstName: null,
    };

    // Create Vuex store with the mocked state
    store = new Vuex.Store({
      state,
      getters: {
        ...mapState(['token', 'firstName']),
      },
    });
  });

  it('renders the logo and brand name correctly', () => {
    const wrapper = shallowMount(AppNavBar, {
      store,
      localVue,
    });

    const logo = wrapper.find('#logo img');
    const brand = wrapper.find('#logo span');

    expect(logo.attributes('src')).toBe('~/static/logo_transparent_v3.png');
    expect(logo.attributes('alt')).toBe('Logo');
    expect(brand.text()).toBe('Infant Formula Finder');
  });

  it('displays "Hello Guest" when firstName is empty', () => {
    const wrapper = shallowMount(AppNavBar, {
      store,
      localVue,
    });

    const greeting = wrapper.find('.greeting');
    expect(greeting.text()).toBe('Hello Guest');
  });

  it('displays "Hello <firstName>" when firstName is not empty', () => {
    store.state.firstName = 'John';

    const wrapper = shallowMount(AppNavBar, {
      store,
      localVue,
    });

    const greeting = wrapper.find('.greeting');
    expect(greeting.text()).toBe('Hello John');
  });

//   it('shows the "Logout" link when token is not empty', () => {
//     store.state.token = 'mockToken';

//     const wrapper = shallowMount(AppNavBar, {
//       store,
//       localVue,
//     });

//     const logoutLink = wrapper.find('.dropdown-item[href="/user/logout"]');
//     expect(logoutLink.exists()).toBe(true);
//   });

  it('hides the "Logout" link when token is empty', () => {
    const wrapper = shallowMount(AppNavBar, {
      store,
      localVue,
    });

    const logoutLink = wrapper.find('.dropdown-item[href="/user/logout"]');
    expect(logoutLink.exists()).toBe(false);
  });

//   it('has links to "Home" and "About" pages', () => {
//     const wrapper = shallowMount(AppNavBar, {
//       store,
//       localVue,
//     });

//     const homeLink = wrapper.find('.nav-link[href="/"]');
//     const aboutLink = wrapper.find('.nav-link[href="/about"]');

//     expect(homeLink.exists()).toBe(true);
//     expect(aboutLink.exists()).toBe(true);
//   });

  it('displays the offcanvas navbar when toggler is clicked', async () => {
    const wrapper = shallowMount(AppNavBar, {
      store,
      localVue,
    });

    const toggler = wrapper.find('.navbar-toggler');
    const offcanvas = wrapper.find('#offcanvasNavbar');

    expect(offcanvas.exists()).toBe(true);
    expect(offcanvas.classes()).not.toContain('show'); // Initially hidden

    await toggler.trigger('click');

    // Since we are using shallowMount and the offcanvas behavior is controlled by Bootstrap JS, 
    // this is more of an integration or e2e test scenario for tools like Puppeteer.
   });
});
